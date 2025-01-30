// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AITUSE2315_2 is ERC20 {
    event TransactionDetails(address indexed sender, address indexed receiver, uint256 amount, uint256 timestamp);

    constructor() ERC20("AITUSE2315_2", "UGT") {}

    function transferWithDetails(address to, uint256 amount) public returns (bool) {
        bool success = transfer(to, amount);
        emit TransactionDetails(msg.sender, to, amount, block.timestamp);
        return success;
    }

    function getLastTransactionTimestamp() public view returns (string memory) {
        return _convertTimestampToReadable(block.timestamp);
    }

    function _convertTimestampToReadable(uint256 timestamp) internal pure returns (string memory) {
        return string(abi.encodePacked("Timestamp: ", uint2str(timestamp)));
    }

    function getTransactionSender() public view returns (address) {
        return msg.sender;
    }

    function getTransactionReceiver(address receiver) public pure returns (address) {
        return receiver;
    }

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
