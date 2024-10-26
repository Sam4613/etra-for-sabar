const crypto = require('crypto');

// Generate a random 256-bit key
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(`Generated JWT Secret Key: ${secretKey}`);
