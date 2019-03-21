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
    nethash: '313ea34c8eb705f79e7bc298b788417ff3f7116c9596f5c9875e769ee2f4ede1',
    token: 'KAPU',
    symbol: 'ʞ',
    pubKeyHash: 0x2D, // Addresses will begin with 'K'
    explorer: 'http://explorer.kapu.one',
    wif: 0xaa, // Network prefix for wif generation
    activePeer: {
      ip: 'api.kapu.one',
      port: 80
    },
    peers: [
      { ip: "145.239.90.228", port: 4600 },
      { ip: "45.32.251.222", port: 4600 },
      { ip: "51.15.241.175", port: 4600 },
      { ip: "163.172.147.82", port: 4600 },
      { ip: "51.15.253.86", port: 4600 },
      { ip: "80.241.218.21", port: 4600 },
      { ip: "51.15.201.243", port: 4600 },
      { ip: "144.217.242.167", port: 4600 }
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
