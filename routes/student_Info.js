const express = require('express');
const router = express.Router();

// router.get('/:id', (req, res) => {
//     res.locals.title = 'Info-ID';
//     res.locals.message = req.params.id;
//     res.render("info");
// });

// let users = new Array();
const users = {};

router.get('/read/all', (_, res) => { // 전체조회
    console.log(JSON.stringify(users));
    // res.send(users);
})

router.get('/read/id', (req, res) => {
    const id = req?.query?.id;
    console.log(id in users ? JSON.stringify(users[id]) : `존재하지 않은 ID: ${id}`); 
});

// 
router.post("/register", (req, res) => {
    const { id, name, gender } = req.body;
    // const student = req.body;
    // users.push(student);
<<<<<<< HEAD
    users[id] = { name, gender }; // array of object
    console.log( users[id].name + "학생이 저장되었습니다.");
=======
    if(Object.keys(users).includes(id)){
        console.log("${id}은 이미 존재하는 ID 입니다!");
    }
    else {
        users[id] = { name, gender };
        console.log( users[id].name + "학생이 저장되었습니다.");
    }
>>>>>>> eaa73371f843b0c6d0d1f4bf9446e904ad9fa448
    // res.send(student);
});

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

router.get("/delete/all", (req, res) => {
    delete users;
    console.log("유저에 대한 정보를 전부 삭제하였습니다.");
});

module.exports = router;
