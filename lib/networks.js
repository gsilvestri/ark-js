/** @module networks */

module.exports = {
  /** @type {Network} */
  kapu: {
    messagePrefix: '\x18Kapu Signed Message:\n',
    bip32: {
      public: 0x2bf4968, // base58 will have a prefix 'apub'
      private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
    },
    name: 'mainnet',
    nethash: '6cd80a9255a7e8ff4bb9388b6f252941f533f8a595502446c46a6f9351e6dcb0',
    token: 'KAPU',
    symbol: 'ʞ',
    pubKeyHash: 0x2D, // Addresses will begin with 'K'
    explorer: 'http://explorer.kapu.one',
    wif: 0xaa, // Network prefix for wif generation
    activePeer: {
      ip: 'walletapi.kapu.one',
      port: 80
    },
    peers: [
      { ip: "51.15.136.166", port: 9700 },
      { ip: "51.15.84.139", port: 9700 },
      { ip: "51.15.84.139", port: 9700 }
    ],
  },
  /** @type {Network} */
  testnet: {
    messagePrefix: '\x18Kapu Testnet Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    name: 'devnet',
    nethash: 'f1ef11be7a879671b3019a785c9a2c9dbd9d800b05644d26ad132275ffe2dd48',
    token: 'DKAPU',
    symbol: 'Dʞ',
    pubKeyHash: 0x50, // Addresses will begin with 'Z'
    explorer: 'http://dev.explorer.kapunode.net',
    wif: 0xba, // Network prefix for wif generation
    activePeer: {
      ip: 'api.devnet.kapunode.net',
      port: 80
    },
    peers: [
      { ip: "51.15.67.153", port: 4100 },
      { ip: "51.15.87.150", port: 4100 },
      { ip: "199.247.24.132", port: 4100 },
      { ip: "209.250.228.83", port: 4100 },
      { ip: "45.77.91.126", port: 4100 },
      { ip: "45.77.228.108", port: 4100 },
      { ip: "45.63.97.119", port: 4100 }
    ],
  },
  /** @type {Network} */
  devnet: {
    messagePrefix: '\x18Kapu Devnet Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x50, // Addresses will begin with 'Z'
    wif: 0xba // Network prefix for wif generation
  },
  /** @type {Network} */
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    wif: 0x80
  }
}
