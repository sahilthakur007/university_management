const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

exports.connect = async ()=>{
    let con;
    try{
        con = await oracledb.getConnection(
            {
                user:"p_2020BTECS00038",
                password:"2020BTECS00038",
                connectionString:"10.7.3.142/XEPDB1"
            }
        );
        const data = await con.execute(
            // `select * from estudent`,
            `insert into estudent values(3,'Neha Gaddam','Computer Science',19)`
        );
        // console.log(data.rows);
        const commit = await con.execute(
            `commit`
        );
    } catch (err) {
        console.log(err);
    }
}
