// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @title DaoFactory Contract
 * @author Quo-Roma Team
 */

contract DaoFactory is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    // =========================== Structs ==============================

    /**
     * @dev Struct representing a dao with its properties.
     * @param id The unique identifier of the dao.
     * @param name The name of the dao.
     * @param owner The address of the owner of the dao.
     * @param accessFee The fee required to access the dao.
     * @param dataUri The URI of the data associated with the dao.
     */
    struct Dao {
        uint256 id;
        string name;
        address owner;
        uint256 accessFee;
        string dataUri;
    }

    // =========================== Mapping and variables ==============================

    /**
     * @dev A mapping of Dao's IDs to their corresponding Dao struct.
     */
    mapping(uint256 => Dao) public daos;

    /**
     * @dev A mapping of whitelisted addresses for each Dao.
     * @dev uint256 The ID of the dao.
     * @dev address The address to check if it's whitelisted.
     * @return bool Whether the address is whitelisted for the given Dao ID.
     */
    mapping(uint256 => mapping(address => bool)) public whitelists;

    /**
     * @dev Mapping of addresses to their pending withdrawal amounts.
     */
    mapping(address => uint256) public pendingWithdrawals;

    /**
     * @notice Dao Id counter
     */
    CountersUpgradeable.Counter private daoId;

    // =========================== Initializers ==============================

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        daoId.increment(); // Start IDs from 1
        __UUPSUpgradeable_init();
        __Ownable_init();
    }

    // =========================== Modifiers ==============================

    // =========================== View functions ==============================

    /**
     * @dev Returns the owner of a Dao with the given ID.
     * @param _id The ID of the Dao to get the owner of.
     * @return The address of the owner of the Dao.
     * @notice Throws an error if the Dao does not exist.
     */
    function getDaoOwner(uint256 _id) public view returns (address) {
        require(daos[_id].owner != address(0), "Dao does not exist");
        return daos[_id].owner;
    }

    /**
     * @dev Returns the total number of daos created.
     * @return uint256 representing the total number of daos.
     */
    function totalDao() public view returns (uint256) {
        return daoId.current();
    }

    /**
     * @dev Checks if a user is whitelisted for a specific ID.
     * @param _id The ID to check.
     * @param _user The user address to check.
     * @return A boolean indicating whether the user is whitelisted or not.
     */
    function isWhitelisted(uint256 _id, address _user) public view returns (bool) {
        return whitelists[_id][_user];
    }

    // Function to check the pending withdrawal amount for a specific address
    /**
     * @dev Returns the pending withdrawal amount for a given user address.
     * @param userAddress The address of the user.
     * @return The pending withdrawal amount.
     */
    function getPendingWithdrawal(address userAddress) public view returns (uint256) {
        return pendingWithdrawals[userAddress];
    }

    // =========================== User functions ==============================

    /**
     * @dev Creates a new Dao with the given name, access fee and data URI.
     * @param _name The name of the new Dao.
     * @param _accessFee The access fee for the new Dao.
     * @param _dataUri The IPFS URI for the new Dao.
     */
    function createDao(string memory _name, uint256 _accessFee, string memory _dataUri) public {
        daoId.increment();
        uint256 newDaoId = totalDao();

        Dao storage newDao = daos[newDaoId];
        newDao.id = newDaoId;
        newDao.name = _name;
        newDao.owner = msg.sender;
        newDao.accessFee = _accessFee;
        newDao.dataUri = _dataUri; // Set the IPFS URI

        emit DaoCreated(newDaoId, _name, msg.sender, _accessFee, _dataUri); //
    }

    /**
     * @dev Updates the access fee of a Dao.
     * @param _id The ID of the Dao to update.
     * @param _newAccessFee The new access fee to set for the Dao.
     * Requirements:
     * - Only the owner of the Dao can update the access fee.
     */
    function updateDaoAccessFee(uint256 _id, uint256 _newAccessFee) public {
        require(daos[_id].owner == msg.sender, "Only the owner can update the dao");
        daos[_id].accessFee = _newAccessFee;
    }

    /**
     * @dev Transfers ownership of a Dao to a new owner.
     * @param _id The ID of the Dao to transfer ownership of.
     * @param _newOwner The address of the new owner.
     * Requirements:
     * - Only the current owner of the Dao can transfer ownership.
     */
    function transferDaoOwnership(uint256 _id, address _newOwner) public {
        require(daos[_id].owner == msg.sender, "Only the owner can transfer the Dao");
        daos[_id].owner = _newOwner;
    }

    /**
     * @dev Allows a user to pay the access fee to a Dao and get whitelisted to access it.
     * @param _id The ID of the Dao to access.
     */

    function payToAccess(uint256 _id) public payable {
        require(daos[_id].owner != address(0), "Dao does not exist");
        require(msg.value >= daos[_id].accessFee, "Insufficient fee");

        whitelists[_id][msg.sender] = true; // Whitelist the user for this Dao

        // Record the pending withdrawal amount instead of transferring immediately
        pendingWithdrawals[daos[_id].owner] += daos[_id].accessFee;

        emit UserWhitelisted(_id, msg.sender);
    }

    /**
     * @dev Allows a user to withdraw their pending funds from the contract.
     * @notice The function will transfer the amount of pending funds to the user's address.
     * @notice The function prevents re-entrancy attacks by zeroing the pending withdrawal before sending the funds.
     * @notice The function will revert if the user has no funds to withdraw.
     */
    function withdraw() public {
        uint256 amount = pendingWithdrawals[msg.sender];
        require(amount > 0, "No funds to withdraw");

        // Zero the pending withdrawal before sending the funds to prevent re-entrancy attacks
        pendingWithdrawals[msg.sender] = 0;

        payable(msg.sender).transfer(amount);
    }

    // =========================== Internal functions ==============================

    /**
     * @notice Function that revert when `_msgSender()` is not authorized to upgrade the contract. Called by
     * {upgradeTo} and {upgradeToAndCall}.
     * @param newImplementation address of the new contract implementation
     */
    function _authorizeUpgrade(address newImplementation) internal override(UUPSUpgradeable) onlyOwner {}

    // =========================== Event ==============================

    // Event emitted when a new Dao is created
    event DaoCreated(uint256 id, string name, address indexed owner, uint256 accessFee, string dataUri);

    // Event emitted when a user is added to a Dao's whitelist
    event UserWhitelisted(uint256 id, address indexed user);
}
