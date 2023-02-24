const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
exports.sendSubjects = async(req,res)=>{
    
    const id = req.params.id; 
    let con;
    let courses=[];
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.40.12.135/XEPDB1"
            }
        );
        const data = await con.execute(
            `select course_id from teaches where instructor_id=${id}`,
        );
        console.log(data.rows);
        for(let i=0;i<data.rows.length;i++)
        {
            const data1 = await con.execute(
                `select title from course where course_id='${data.rows[i].COURSE_ID}'`,
            );
            console.log(data1.rows);
            courses.push(data1.rows[0].TITLE)
        }
        console.log(courses)
        const commit = await con.execute(
            `commit`
        );

    } catch (err) {
        console.log(err);
    }
    res.status(200).json({
        messege: "success",
        courses
    })
}

exports.storeQuestion = async(req,res)=>{
    
    const {title,op1,op2,op3,op4,ans,sub} = req.body; 
    let con;
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.40.12.135/XEPDB1"
            }
        );
        const data = await con.execute(
            `insert into questions values('${title}','${op1}','${op2}','${op3}','${op4}','${ans}','${sub}')`
        );
        console.log(data)
        const commit = await con.execute(
            `commit`
        );

    } catch (err) {
        console.log(err);
    }
    res.status(200).json({
        messege: "success",
    })
}


exports.sendQuestion = async(req,res)=>{
    
    const subject = req.params.subject; 
    let con;
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.40.12.135/XEPDB1"
            }
        );
        const data = await con.execute(
            `select * from questions where subject='${subject}'`,
        );
        
        const question  = data.rows;
        
        const commit = await con.execute(
            `commit`
        );
        res.status(200).json({
            messege: "success",
            question
            
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            messege: "error",
            
        })
    }
   
}

exports.storeQuestionPaper = async(req,res)=>{
    
    const {name,duration,subject,question}= req.body; 
    // console.log(name)
    let con;
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.40.12.135/XEPDB1"
            }
        );
        console.log(question.length)
        for(var i =0 ;i<question.length;i++)
        {   
            console.log(i)
            console.log(question[i].OPTION3)
            const data = await con.execute(
                `insert into questionPaper values('${name}','${question[i].QUESTION}','${question[i].OPTION1}','${question[i].OPTION2}','${question[i].OPTION3}','${question[i].OPTION4}','${question[i].ANSWER}','${subject}',1,${duration})`
                );
            console.log(name)
        }
        // const question  = data.rows;
        
        const commit = await con.execute(
            `commit`
        );
        res.status(200).json({
            messege: "success",
            
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            messege: "error",
            
        })
    }
   
}

exports.sendQuestionPaperList = async(req,res)=>{
    
    // const {name,duration,subject,question}= req.body; 
    // console.log(name)
    let con;
    let activetest = []
    try {
        con = await oracledb.getConnection(
            {
                user: "p_2020BTECS00038",
                password: "2020BTECS00038",
                connectionString: "10.40.12.135/XEPDB1"
            }
        );
      
        // const question  = data.rows;
        const data = await con.execute(
            `select * from questionpaper`,
        );
        // console.log(data)
        // for(var i =0 ;i<data.rows.length;i++){
        //     console.log(data.rows[0])
        //     activetest.push(data.rows[i].PAPER_TITLE)
        // }
        activetest = data.rows;
        console.log(activetest)
        const commit = await con.execute(
            `commit`
        );
        res.status(200).json({
            messege: "success",
            activetest
            
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            messege: "error",
            
        })
    }
   
}