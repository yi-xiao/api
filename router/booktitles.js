/**
 * Created by Administrator on 2017/10/9.
 */
const query = require('../utils/utils');

const router = (req,res) => {
    const id = req.query.id;
    let sql = `select *  from titles where id=${id};`;

    query(sql, (err, results, fields) => {
        if(err) throw err;
        res.send(results[0])
    })
};

module.exports = router;