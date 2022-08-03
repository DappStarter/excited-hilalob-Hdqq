require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth payment collect gesture gloom sudden genre'; 
let testAccounts = [
"0x0201daae81a7c0cb8941a92a883e3f421a242318ae92d24bcece7051ab8ed55a",
"0xd2c3f39630f7e60d7f943206b40c8b4c4b365eec2afb87de02531b502dc59903",
"0x9c5d053f8c0bb4d8f6fa8ef5d7915a2d6816884c8e4606165982e4a527bb11fc",
"0xaaf1df95d7833cab829b4a95bfcca7ff6c546492552dac4d394db44a26315ac6",
"0x328ef7d55fb58fa434b39a17c1b87b15b4234b2f28b13faf99fc60ab8f29e1ad",
"0xd8feeb119236fb7384135f7941f867db57e8ac0e9a8e39a95f1a1b752b79dcef",
"0x404bfe6ba19e1fc6a05d9e334b70541a678402b968e610539b5d867fb8ecf756",
"0x9f20cd544a92e1ff2a72b91727653b0eeb4bdf4ffd7e625b6b2c1632e82a5cb5",
"0x7b801ae21b22623d1ff87c09a6717ab8c6a06565c63658fa5a9169ac52bd772b",
"0xecd967f316c1a68554de574cb95f90706f1b1ae641666198de5050d71be2b5b8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


