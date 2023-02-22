const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

exports.sendReport = async (req, res) => {
    const {id} = req.body;
    console.log(req.body);
    let con;
    let courses =[];
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.40.12.135/XEPDB1"
            }
        );
        const data1 = await con.execute(
            `select course_id from takes where s_id = ${id}`,
        );
        console.log(data1.rows.length);
        for(var i =0 ;i<data1.rows.length;i++)
        {  // console.log(data1.rows[i])
            const data2 = await con.execute(
                `select title from course where course_id = '${data1.rows[i].COURSE_ID}'`,
            )
            // console.log(data2);
            courses.push(data2.rows[0].TITLE); 
        }
        console.log(courses[0]);
        
        const data3 = await con.execute(
            `select * from estudent where id = ${id}`,
        );
        console.log(data3);
        const commit = await con.execute(
            `commit`
        );
        const data ={
            name:data3.rows[0].NAME,
            department:data3.rows[0].DEPT_NAME,
            credit:data3.rows[0].TOT_CRED,
            courses:courses
            
        }
        res.status(200).json({
            messege:"success",
            data
        })
    } catch (err) {
        console.log(err);
        res.status(200).json({
            messege:"error"
        })
    }
    
    
}