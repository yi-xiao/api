/**
 * Created by Administrator on 2017/10/9.
 */
const query = require('../utils/utils');

const router = (req,res) => {
    const id = req.query.id || 0;
    let sql = id ? `select * from lists where id=${id};` : `select * from lists;`;
    query(sql, (err,results,fields) => {
        if(err) throw err;
        id ? res.send(results[0]) : res.send(results)
    })
};

module.exports = router