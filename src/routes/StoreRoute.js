const StoreFiles = require('../Controller/StoreFiles');
module.exports = (app) => {
    app.get('/storefiles', StoreFiles.get);
}