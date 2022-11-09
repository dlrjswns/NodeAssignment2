const express = require('express');
const router = express.Router();

const noticeList = {};

router.get("/read/all", (req, res) => {
    console.log(noticeList ? JSON.stringify(noticeList) : "아무런 공지도 존재하지않습니다.");
});

router.get("/read", (req, res) => {
    const id = req.query.id;
    console.log(id in noticeList ? JSON.stringify(noticeList[id]) : `아이디 ${id}에 해당하는 공지가 존재하지않습니다.`);
});

router.post("/write", (req, res) => {
    const { id, name, notice } = req.body;
    noticeList[id] = { name, notice };
    console.log(`${name}님이 공지를 작성하였습니다.`);
    // const student = req.body;
    // users.push(student);
    // res.send(student);
})

module.exports = router;
