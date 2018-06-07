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


    app.get('/fisk:id', (req, res) => {
        fisk_service.hent_alle()
            .then(result => {
                res.render('pages/detalje', {
                    "title": "en fisk",
                    "data": result
                });
            })
    });

    app.get('/adimin', (req, res) => {
        adimin_service.hent_alle()
            .then(result => {
                res.render('pages/adimin', {
                    "title": "Mine Fisk",
                    "data": result,
                    "fisk": {
                        "fisk_navn": "",
                        "fisk_farve": "",
                        "fisk_koen": "",
                    }
                });
            })
    });


}