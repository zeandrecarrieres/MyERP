const crypto = require('crypto');
module.exports = class Tools {

    static async encrypPWD(password) {
        var salt = crypto.randomBytes(16).toString('hex');
        var hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
        hash.update(password);
        var hash = hash.digest('hex');
        return {
            salt,
            hash,
        };

    };

    static async validatePWD(password, salt, hash) {
        var senhaESalt = sha512(password, salt)
        return hash === senhaESalt.hash;
    }
}