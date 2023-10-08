// SPDX-License-Identifier: MIT
// SPDX license identifier specifies which open-source license is being used for the contract
pragma solidity 0.8.9;

// Importing external contracts for dependencies
import { AxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IAxelarGasService } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol';
import { IERC20 } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol';

contract VoteResult is AxelarExecutable {

    string public value;
    string public sourceChain;
    string public sourceAddress;

    IAxelarGasService public immutable gasService;

    constructor(address gateway_, address gasReceiver_) AxelarExecutable(gateway_) {
        // Sets the immutable state variable to the address of gasReceiver_
        gasService = IAxelarGasService(gasReceiver_);
    }

    function voting_result() public view returns(string memory) {
        return value;
    }

    function _execute(
        string calldata sourceChain_,
        string calldata sourceAddress_,
        bytes calldata payload_
    ) internal override {
        (value) = abi.decode(payload_, (string));
        
        sourceChain = sourceChain_;
        sourceAddress = sourceAddress_;
    }
}