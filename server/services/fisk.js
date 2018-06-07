const mysql = require('../config/mysql.js')


module.exports = {

    // henter alle
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
    }
}