// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// AITUSE2315_2 Token Contract inheriting from ERC20
contract AITUSE2315_2 is ERC20 {
    // Event to log transaction details
    event TransactionDetails(address indexed sender, address indexed receiver, uint256 amount, uint256 timestamp);

    // Constructor initializing the ERC20 token with name and symbol
    constructor() ERC20("AITUSE2315_2", "UGT") {}

    // Function to transfer tokens and log the transaction details
    function transferWithDetails(address to, uint256 amount) public returns (bool) {
        bool success = transfer(to, amount);
        emit TransactionDetails(msg.sender, to, amount, block.timestamp);
        return success;
    }

    // Function to get the latest transaction timestamp in a readable format
    function getLastTransactionTimestamp() public view returns (string memory) {
        return _convertTimestampToReadable(block.timestamp);
    }

    // Internal function to convert a timestamp to a human-readable string
    function _convertTimestampToReadable(uint256 timestamp) internal pure returns (string memory) {
        return string(abi.encodePacked("Timestamp: ", uint2str(timestamp)));
    }

    // Function to return the address of the sender
    function getTransactionSender() public view returns (address) {
        return msg.sender;
    }

    // Function to return the address of the receiver (provided as an argument)
    function getTransactionReceiver(address receiver) public pure returns (address) {
        return receiver;
    }

    // Utility function to convert uint256 to string
    function uint2str(uint256 _i) public pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}