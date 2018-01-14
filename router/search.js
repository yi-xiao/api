const query = require('../utils/utils');

const router = (req,res) => {
    const keyWord = req.query.keyWord;
    let sql = keyWord ? `select title,id from lists where title like '%${keyWord}%'` : `select id,title from lists limit 20`
    
    query(sql, (err, results, fields) => {
        console.log(sql)
        if(err) throw err;
        console.log(results)
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