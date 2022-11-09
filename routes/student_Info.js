const express = require('express');
const router = express.Router();

// router.get('/:id', (req, res) => {
//     res.locals.title = 'Info-ID';
//     res.locals.message = req.params.id;
//     res.render("info");
// });

// let users = new Array();
const users = {};

router.get('/read/all', (_, res) => {
    console.log(JSON.stringify(users));
    // res.send(users);
})

router.get('/read/id')

// 
router.post("/register", (req, res) => {
    const { id, name, gender } = req.body;
    // const student = req.body;
    // users.push(student);
    users[id] = { name, gender };
    console.log( users[id].name + "학생이 저장되었습니다.");
    // res.send(student);
})

router.get("/delete", (req, res) => {
    const id = req.query.id;
    if(id in users) {
        console.log(users[id]);
        console.log(users[id].name, "이 삭제되었습니다.");
        delete users[id];
    } else {
        console.log("해당 유저가 존재하지않습니다.");
    }
});

module.exports = router;
