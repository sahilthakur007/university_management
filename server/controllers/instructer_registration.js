exports.register_instructor = async (req, res) => {
    const { id, name, branch, credit } = req.body;
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
            `insert into estudent values(${id},${name},${branch},${credit})`
        );
        // console.log(data.rows);
        const commit = await con.execute(
            `commit`
        );

        res.status(200).json({
            messege: "success"
        })
    } catch (err) {
        console.log(err);
    }
}