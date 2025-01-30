const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('AITUSE2315 Contract', function () {
	let Token, token, owner, addr1, addr2

	beforeEach(async function () {
		;[owner, addr1, addr2] = await ethers.getSigners()
		Token = await ethers.getContractFactory('AITUSE2315')
	})

	it('Should deploy contract with user-defined initial supply', async function () {
		const initialSupply = ethers.parseUnits('5000', 18)
		token = await Token.deploy(initialSupply)

		expect(await token.totalSupply()).to.equal(initialSupply)
	})

	it('Should have correct name and symbol', async function () {
		token = await Token.deploy(ethers.parseUnits('2000', 18))

		expect(await token.name()).to.equal('AITUSE2315')
		expect(await token.symbol()).to.equal('UGT')
	})

	it('Should mint the correct initial supply to deployer', async function () {
		const initialSupply = ethers.parseUnits('3000', 18)
		token = await Token.deploy(initialSupply)

		const ownerBalance = await token.balanceOf(owner.address)
		expect(ownerBalance).to.equal(initialSupply)
	})

	it('Should transfer tokens and log event', async function () {
		const initialSupply = ethers.parseUnits('2000', 18)
		token = await Token.deploy(initialSupply)

		const amount = ethers.parseUnits('500', 18)
		const tx = await token.transferWithDetails(addr1.address, amount)
		const receipt = await tx.wait()

		const event = receipt.logs
			.map(log => {
				try {
					return token.interface.parseLog(log)
				} catch (e) {
					return null
				}
			})
			.find(parsedLog => parsedLog && parsedLog.name === 'TransactionDetails')

		expect(event).to.exist
		expect(event.args.sender).to.equal(owner.address)
		expect(event.args.receiver).to.equal(addr1.address)
		expect(event.args.amount).to.equal(amount)
	})

	it('Should return the latest block timestamp', async function () {
		token = await Token.deploy(ethers.parseUnits('1000', 18))

		const latestTimestamp = await ethers.provider
			.getBlock('latest')
			.then(block => block.timestamp)
		const contractTimestamp = await token.getLastTransactionTimestamp()

		expect(contractTimestamp).to.include(latestTimestamp.toString())
	})

	it('Should return the sender address', async function () {
		token = await Token.deploy(ethers.parseUnits('1000', 18))

		expect(await token.getTransactionSender()).to.equal(owner.address)
	})

	it('Should return the correct receiver address', async function () {
		token = await Token.deploy(ethers.parseUnits('1000', 18))

		expect(await token.getTransactionReceiver(addr1.address)).to.equal(
			addr1.address
		)
	})

	it('Should correctly convert uint256 to string', async function () {
		token = await Token.deploy(ethers.parseUnits('1000', 18))

		const number = 123456
		const result = await token.uint2str(number)

		expect(result).to.equal('123456')
	})
})
