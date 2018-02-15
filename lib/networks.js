/** @module networks */

module.exports = {
  /** @type {Network} */
  kapu: {
    messagePrefix: '\x18Kapu Signed Message:\n',
    bip32: {
      public: 0x2bf4968, // base58 will have a prefix 'apub'
      private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
    },
    pubKeyHash: 0x2D, // Addresses will begin with 'K'
    wif: 0xaa // Network prefix for wif generation
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
