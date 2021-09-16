StoreStock = require('../json/store.json')
exports.get = (req, res, next) => {
    res.status(200).send(StoreStock);
};