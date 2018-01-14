/**
 * Created by Administrator on 2017/10/9.
 */
let mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'jack',
    password: '123456',
    database: 'book',
    port: 3306
});

const query = function (sql,callback) {
    pool.getConnection(function (err, conn) {
        conn.query(sql, function (error, res, fields) {
            conn.release();

            if(error) throw error;

            callback(err, res, fields);
        })
    })
};

module.exports  = query;