const query = require('../utils/utils');

const router = (req,res) => {
    // const id = req.query.id;
    const chrapatar = req.query.chrapatar ? req.query.chrapatar : 1;
    const book_id = req.query.book_id ? req.query.book_id : 1;
    // let sql = `select book_name,book_id,chrapatar_id,content  from contents where id=${chrapatar};`;
    let sql = ` select m.title as book_name,r.content as title,l.content as content from contents as l 
				inner join lists as m on (l.book_id = ${book_id} and m.id = ${book_id}) 
				inner join titles as r on (l.pid = ${chrapatar} and r.charactor_id = ${chrapatar} ) 
				where l.book_id = ${book_id} and r.bookid =${book_id};`
    
    query(sql, (err, results, fields) => {
        if(err) throw err;
        res.send(results[0]);
    })
};

module.exports = router;