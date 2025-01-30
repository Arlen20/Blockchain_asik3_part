# AITUSE2315 & AITUSE2315_2 Smart Contracts

Done by SE-2315: Baibossyn Arlen, Tlegenova Kamilya, Nuray Kabylkhanova.

## Overview
This repository contains two Solidity smart contracts: **AITUSE2315** and **AITUSE2315_2**. Both contracts implement ERC-20 token functionality using OpenZeppelin's standard implementation. Additionally, comprehensive unit tests have been written using Hardhat to ensure their correctness.

## Features
### AITUSE2315 (With Initial Supply)
- Inherits from OpenZeppelin's `ERC20` contract.
- Allows users to transfer tokens with transaction details logging.
- Provides utility functions to get transaction timestamps and sender/receiver addresses.
- Converts uint256 to string for better readability.
- Requires an initial supply to be minted upon deployment.

### AITUSE2315_2 (Without Initial Supply)
- Inherits from OpenZeppelin's `ERC20` contract.
- Implements similar functionalities to AITUSE2315 but does not require an initial supply.
- Logs transaction details via events.

## Smart Contracts
### AITUSE2315.sol
This contract extends the ERC-20 standard and introduces additional features:
- `transferWithDetails(address to, uint256 amount)`: Transfers tokens and emits an event with transaction details.
- `getLastTransactionTimestamp()`: Returns the last transaction timestamp in a human-readable format.
- `getTransactionSender()`: Returns the sender's address.
- `getTransactionReceiver(address receiver)`: Returns the receiver's address.
- `uint2str(uint256 _i)`: Converts an unsigned integer to a string.

### AITUSE2315_2.sol
A simplified version of AITUSE2315 without an initial supply requirement. It includes the same set of functions and features.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [OpenZeppelin Contracts](https://www.npmjs.com/package/@openzeppelin/contracts)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile the contracts:
   ```sh
   npx hardhat compile
   ```
4. Run tests:
   ```sh
   npx hardhat test
   ```

## Testing
Hardhat is used for testing. The test suite includes cases to verify:
- Contract deployment.
- Token transfers and event emissions.
- Address retrieval for sender and receiver.
- Proper timestamp formatting.
- uint256 to string conversion.

Run the test suite with:
```sh
npx hardhat test
```

## Deployment
Deploy the contracts to a local or live blockchain using Hardhat:
```sh
npx hardhat run scripts/deploy.js --network your-network
```
Replace `your-network` with `localhost`, `rinkeby`, `goerli`, etc.

## License
This project is licensed under the **MIT License**.

---
