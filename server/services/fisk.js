const mysql = require('../config/mysql.js')


module.exports = {


    hent_alle: () => {
        return new Promise((resolve, reject) => {
            let db = mysql.connect();
            db.execute(`
        SELECT 
            fisk_id
            , fisk_navn
            , fisk_farve
            , fisk_koen
        FROM fisk ORDER BY fisk_navn ASC`, [], (err, rows) => {
                    if (err) {
                        console.log(err.message);
                        reject(err.message);
                    } else {
                        resolve(rows);
                    }
                });
            db.end();

        });
    },

    hent_en: (id) => {
        return new Promise((resolve, reject) => {
            let db = mysql.connect();
            db.execute(`
        SELECT 
            fisk_id
            , fisk_navn
            , fisk_farve
            , fisk_koen
        FROM fisk Where id = ?`, [], (err, rows) => {
                    if (err) {
                        console.log(err.message);
                        reject(err.message);
                    } else {
                        resolve(rows[0]);
                    }
                });
            db.end();

        });
    },

    opret_en: (navn, farve, koen) => {
        return new Promise((resolve, reject) => {
            let db = mysql.connect();
            db.execute(`
            INSERT INTO fisk
              SET fisk_navn = ?
                , fisk_farve = ?
                , fisk_koen = ?`, [navn, farve, koen], (err, rows) => {
                    if (err) {
                        console.log(err.message);
                        reject(err.message);
                    } else {
                        resolve(rows);
                    }
                });
            db.end();

        });
    },
}