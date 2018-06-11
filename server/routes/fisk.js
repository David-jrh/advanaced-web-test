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

    // admin forside (viser lister)
    app.get('/admin/fisk', (req, res) => {
        fisk_service.hent_alle()
            .then(result => {
                res.render('pages/fiske_admin', {
                    "title": "Mine Fisk",
                    "data": result,
                    "formtype": "Opret",
                    "fisk": {
                        "fisk_navn": "",
                        "fisk_farve": "",
                        "fisk_koen": "",
                    }
                });
            })
    });

    // modtager data indsæt ny fisk
    app.post('/admin/fisk', (req, res) => {
        fisk_service.opret_en(req.body.fisk_navn, req.body.fisk_farve, req.body.fisk_koen, )
            .then(result => {
                res.redirect('admin/fisk');
            })
            .catch(err => {
                red.redirect('admin/fisk');
            })
    });

    // app.post('/admin/fisk/ret/:fisk_id', (req, res) => {
    //     admin_service.hent_alle()
    //         .then(result => {
    //             res.render('pages/fisk_admin', {
    //                 "title": "Mine Fisk",
    //                 "data": result,
    //                 "fisk": {
    //                     "fisk_navn": "",
    //                     "fisk_farve": "",
    //                     "fisk_koen": "",
    //                 }
    //             });
    //         })
    // });

    // app.get('/admin/fisk/ret/:fisk_id', (req, res) => {
    //     admin_service.hent_alle()
    //         .then(result => {
    //             res.render('pages/admin', {
    //                 "title": "Mine Fisk",
    //                 "data": result,
    //                 "fisk": {
    //                     "fisk_navn": "",
    //                     "fisk_farve": "",
    //                     "fisk_koen": "",
    //                 }
    //             });
    //         })
    // });

    // app.get('/admin/fisk/slet/:fisk_id', (req, res) => {
    //     admin_service.hent_alle()
    //         .then(result => {
    //             res.render('pages/admin', {
    //                 "title": "Mine Fisk",
    //                 "data": result,
    //                 "fisk": {
    //                     "fisk_navn": "",
    //                     "fisk_farve": "",
    //                     "fisk_koen": "",
    //                 }
    //             });
    //         })
    // });

}