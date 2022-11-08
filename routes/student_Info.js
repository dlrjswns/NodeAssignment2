const express = require('express');
const router = express.Router();

// router.get('/:id', (req, res) => {
//     res.locals.title = 'Info-ID';
//     res.locals.message = req.params.id;
//     res.render("info");
// });

let users = new Array();

router.get('/read', (_, res) => {
    console.log("주일학교 학생 정보: " ,users);
    res.send(users);
})

// 
router.post("/register", (req, res) => {
    const student = req.body;
    users.push(student);
    console.log(student.name, "학생이 저장되었습니다.")
    res.send(student);
})

router.delete("/delete/name", (req, res) => {
    const deleteUser = req.query;


    users.delete()
    console.log(users)
})

module.exports = router;
