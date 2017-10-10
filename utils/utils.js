/**
 * Created by Administrator on 2017/10/9.
 */
let mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '518645',
    database: 'book',
    port: 3306
});

const query = function (sql, option, callback) {
    pool.getConnection(function (err, conn) {
        conn.query(sql, option, function (error, res, fields) {
            conn.release();

            if(error) throw error;

            callback(err, res, fields);
        })
    })
};

module.exports  = query;