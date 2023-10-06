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
     * @param groupId The group id of the dao.
     * @param dataUri The URI of the data associated with the dao.
     */

    struct Dao {
        uint256 id;
        string name;
        uint256 groupId;
        string dataUri;
    }

    // =========================== Mapping and variables ==============================

    /**
     * @dev A mapping of Dao's IDs to their corresponding Dao struct.
     */
    mapping(uint256 => Dao) public daos;

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

    function getDaoId(uint256 _id) public view returns (uint256) {
        require(daos[_id].groupId > 2, "Dao ID does not exist");
        return daos[_id].groupId;
    }

    /**
     * @dev Returns the total number of daos created.
     * @return uint256 representing the total number of daos.
     */
    function totalDao() public view returns (uint256) {
        return daoId.current();
    }

    // =========================== User functions ==============================

    /**
     * @dev Creates a new Dao with the given name, access fee and data URI.
     * @param _name The name of the new Dao.
     * @param _groupId The group id of the new Dao.
     * @param _dataUri The IPFS URI for the new Dao.
     */
    function createDao(string memory _name, uint256 _groupId, string memory _dataUri) public {
        daoId.increment();
        uint256 newDaoId = totalDao();

        Dao storage newDao = daos[newDaoId];
        newDao.id = newDaoId;
        newDao.name = _name;
        newDao.groupId = _groupId;
        newDao.dataUri = _dataUri; // Set the IPFS URI

        emit DaoCreated(newDaoId, _name, _groupId, _dataUri); //
    }

    // update Dao struct
    function updateDao(uint256 _id, string memory _name, uint256 _groupId, string memory _dataUri) public {
        require(daos[_id].groupId > 2, "Dao ID does not exist");
        Dao storage updateDao = daos[_id];
        updateDao.name = _name;
        updateDao.groupId = _groupId;
        updateDao.dataUri = _dataUri; // Set the IPFS URI
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
    event DaoCreated(uint256 id, string name, uint256 _groupId, string dataUri);

    // Event emitted when a Dao is updated
    event DaoUpdated(uint256 id, string name, uint256 _groupId, string dataUri);
}
