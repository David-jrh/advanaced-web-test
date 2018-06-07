const fisk_service = require('../services/fisk.js');

module.exports = (app) => {
    app.get('/fisk', (req, res) => {
        fisk_service.hent_alle()
            .then(result => {
                res.render('pages/fisk', {
                    "title": "Mine Fisk",
                    "data": result
                });
            })
    });
}