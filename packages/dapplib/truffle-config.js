require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain smile grace fork swift side'; 
let testAccounts = [
"0x1c93748b385d79753e3371e2a5804570495d818904cb70906076158f9b86586f",
"0xc86c7aedec55250c29e8b08e66dffde37ba62789f35b9ba2aedc9d682c72f2a6",
"0x24fb42c9b8b85bde57b6e458ba69003590565d7355cd647e7a96379e4a58a8ef",
"0xbe6291b47b80125404d63af305f8965e556b0a796708414bb77b57cf6c20ee0c",
"0xe9f0aa90f75f003dca0bba36ca1d97ad7b9d3b9b43160be90e1e13ed6a0f3c5c",
"0x16dbb39fdee630c4c706854e6a5d90098a68681ae0f9de67c9bd6720cdb2eb50",
"0x66874388964e5c5e0b10361c2a5c0de3ff348b67bd076ccf954b21d98bba4df0",
"0xba177815d6c653330c3a0fa3227c165ca96a1403443c9785ac4f04c1d917135c",
"0x9855079ac4e9841aabd8edfd0d68ea2657e6b3bf5f2f74fc20858538f6dd0d56",
"0x89a85801b61c5e30d3bdbbd8572e9c3fb6f7322dd723024f9b6d9238d763f85c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

