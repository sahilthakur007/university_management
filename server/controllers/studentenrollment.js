const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
exports.enrollstudent = async (req, res) => {
    const { id, course } = req.body;
    // console.log(name);
    console.log(course);
    // console.log(branch);
    // console.log(credit);
    let con,course_id;
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.40.12.135/XEPDB1"
            }
        );
        const data1 = await con.execute(
            `select course_id from course where title='${course}'`
            // `insert into estudent values(${id},'${name}','${branch}',${credit})`
            // `insert into estudent values(6,'Sakshi Patil','Computer Science',19)`
        );
        data1.rows.map((course)=>(
            course_id = course.COURSE_ID
        ))
        const data2  =  await con.execute(
            `select * from section where  course_id='${course_id}'` 
        )
        console.log(data2)
        // console.log(data2.rows[0].SEC_ID);
        // data2.rows.map((section)=>(
            // console.log(section.SEC_ID)
              
        // ))
        const data3  =  await con.execute(
            `insert into takes values(${id},'${course_id}','${data2.rows[0].SEC_ID}',${data2.rows[0].SEMESTER},${data2.rows[0].SECTION_YEAR},8)`

            )
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