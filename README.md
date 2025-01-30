# AITUSE2315 & AITUSE2315_2 Smart Contracts

This repository contains two Solidity smart contracts, `AITUSE2315` and `AITUSE2315_2`, implementing ERC-20 tokens with additional functionalities. The repository also includes Hardhat test scripts to validate the contracts.

## Features
- ERC-20 token implementation
- Custom token transfer function with event logging
- Utility functions for retrieving transaction details
- Unit tests using Hardhat and Chai

## Contracts
### AITUSE2315
- Inherits from OpenZeppelin's ERC-20 contract.
- Constructor allows minting an initial supply.
- Implements `transferWithDetails()` to log transaction details.
- Provides utility functions for retrieving timestamps and addresses.

### AITUSE2315_2
- Inherits from OpenZeppelin's ERC-20 contract.
- Has an empty constructor (no initial minting).
- Implements `transferWithDetails()` with event logging.
- Provides utility functions for timestamps and address retrieval.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Testing
The contracts are tested using Hardhat.

### Run Tests
```sh
npx hardhat test
```

### Test Coverage
- Contract deployment
- Token transfer with event logging
- Address and timestamp retrieval
- Utility function for uint-to-string conversion

## Deployment
To deploy the contract on a blockchain:
1. Configure the `hardhat.config.js` file with your network settings.
2. Deploy using Hardhat:
   ```sh
   npx hardhat run scripts/deploy.js --network yournetwork
   ```

## License
This project is licensed under the MIT License.

