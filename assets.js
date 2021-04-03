class Assets {
    constructor() {
        
        this.ASSET_ADDRESSES = {
	        USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
	        MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
	        WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
	        WBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
	        DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
        }

        this.ASSET_DECIMALS = {
            USDC:6, 
            MKR: 18,
            WETH: 18,
            WBTC: 8,
            DAI: 18,
        };

        this.keys = Object.keys(this.ASSET_ADDRESSES);

        this.getSymbols = function() {
            return this.keys
        }

        this.getContractAddress = function(symbol) {
            return this.ASSET_ADDRESSES[symbol];
        }

        this.getDecimals = function(symbol) {
            return this.ASSET_DECIMALS[symbol];
        }
    }
}

module.exports = {Assets}