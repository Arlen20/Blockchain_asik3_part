const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('AITUSE2315_2 Contract', function () {
	let Token, token, owner, addr1, addr2

	beforeEach(async function () {
		;[owner, addr1, addr2] = await ethers.getSigners()
		Token = await ethers.getContractFactory('AITUSE2315_2')
		token = await Token.deploy()
	})

	it('Should deploy contract successfully', async function () {
		expect(await token.name()).to.equal('AITUSE2315_2')
		expect(await token.symbol()).to.equal('UGT')
	})

	it('Should return the sender address', async function () {
		expect(await token.getTransactionSender()).to.equal(owner.address)
	})

	it('Should return the correct receiver address', async function () {
		expect(await token.getTransactionReceiver(addr1.address)).to.equal(
			addr1.address
		)
	})

	it('Should correctly convert uint256 to string', async function () {
		const number = 123456
		const result = await token.uint2str(number)
		expect(result).to.equal('123456')
	})
})
