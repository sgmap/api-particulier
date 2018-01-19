const crypto = require('crypto')

const hash = crypto.createHash('sha512')
hash.update('test-token')
const encryptedToken = hash.digest('hex')

module.exports = {
  data: [
    {
      _id: encryptedToken,
      name: 'Jeu de test',
      mail: 'someone@somewhere.com'
    }
  ]
}
