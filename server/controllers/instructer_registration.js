const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
exports.register_instructor = async (req, res) => {
    const { id, name, branch, salary } = req.body;
    console.log(name);
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
            `insert into instructor values(${id},'${name}','${branch}',${salary})`
        );
        // console.log(data.rows);
        const commit = await con.execute(
            `commit`
        );

    } catch (err) {
        console.log(err);
    }
    res.status(200).json({
        messege: "success"
    })
}