const query = require('../utils/utils');

const router = (req,res) => {
    const id = req.query.id;
    let sql = `select * from titles where bookid = ${id}`
    
    query(sql, (err, results, fields) => {
        if(err) throw err;
        if(results.length == 1){
            res.send(results);
        }else if(results.length > 1){
            let arr = results.map(item => {
                return item
            })
            res.send(arr);
        }else{
            res.send({code: 404,message: '没有结果'});
        }
        
    })
};

module.exports = router;