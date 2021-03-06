import PhoneInput, {
	parsePhoneNumber,
	formatPhoneNumber,
	formatPhoneNumberIntl,
	isValidPhoneNumber,
	isPossiblePhoneNumber,
	getCountryCallingCode,
	getCountries,
	isSupportedCountry
} from '../input-core/index.js'

import Library from '../input-core/index.cjs'

import metadata from 'libphonenumber-js/min/metadata'

describe('exports/input-core', () => {
	it('should export ES6', () => {
		PhoneInput.render.should.be.a('function')
		parsePhoneNumber('+78005553535', metadata).country.should.equal('RU')
		formatPhoneNumber('+12133734253', metadata).should.equal('(213) 373-4253')
		formatPhoneNumberIntl('+12133734253', metadata).should.equal('+1 213 373 4253')
		isValidPhoneNumber('+12133734253', metadata).should.equal(true)
		isPossiblePhoneNumber('+19999999999', metadata).should.equal(true)
		getCountryCallingCode('US', metadata).should.equal('1')
		getCountries(metadata)[0].length.should.equal(2)
		isSupportedCountry('XX', metadata).should.equal(false)
	})

	it('should export CommonJS', () => {
		Library.render.should.be.a('function')
		Library.default.render.should.be.a('function')
		Library.parsePhoneNumber('+78005553535', metadata).country.should.equal('RU')
		Library.formatPhoneNumber('+12133734253', metadata).should.equal('(213) 373-4253')
		Library.formatPhoneNumberIntl('+12133734253', metadata).should.equal('+1 213 373 4253')
		Library.isValidPhoneNumber('+12133734253', metadata).should.equal(true)
		Library.isPossiblePhoneNumber('+19999999999', metadata).should.equal(true)
		Library.getCountryCallingCode('US', metadata).should.equal('1')
		Library.getCountries(metadata)[0].length.should.equal(2)
		Library.isSupportedCountry('XX', metadata).should.equal(false)
	})
})