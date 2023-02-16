const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

exports.register_student = async (req, res) => {
    const { id, name, branch, credit } = req.body;
    console.log(name);
    console.log(id);
    console.log(branch);
    console.log(credit);
    let con;
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.7.3.142/XEPDB1"
            }
        );
        const data = await con.execute(
            // `select * from estudent`,
            `insert into estudent values(${id},'${name}','${branch}',${credit})`
            // `insert into estudent values(6,'Sakshi Patil','Computer Science',19)`
        );
        // console.log(data.rows);
        const commit = await con.execute(
            `commit`
        );
        
    } catch (err) {
        console.log(err);
        res.status(200).json({
            messege:"error"
        })
    }
    res.status(200).json({
        messege:"success"
    })
    
}