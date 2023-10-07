// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VoteManagement is ERC20 {

    address yes_vote;
    address no_vote;

    constructor(
        uint256 initialSupply, 
        string memory _name, 
        address _yes_vote, 
        address _no_vote
    ) ERC20(_name, "VOT") {
        _mint(msg.sender, initialSupply);
        yes_vote = _yes_vote;
        no_vote = _no_vote;
    }

}

