const express = require("express");
const router = express.Router();

/* get All talents */
router.get("/read/all", (req, res) => {
    let arr_talent = new Array();
    for(let id in users)
    {
        arr_talent.push(users[id].talent);
    }

    console.log(JSON.stringify(arr_talent));
    // res.send(users);
});

/* get unique ID's talent */
router.get("/read/id", (req, res) => {
    const id = req.query.id;
   
    if(id in users) {
        console.log(JSON.stringify(users[id].talent))
    }
    // res.send(users);
});

/* set talent */
router.post("/set", (req, res) => {
    const { id, talent } = req.body;

    if(id in users) {
        if(talent) users[id].talent = talent;
    }
    else {
        console.log(`${id}아이디를 가진 유저가 존재하지 않습니다.`);
    }

    // res.send(student);
});

/* init talent to zero*/
router.post("/bzero", (req, res) => {
    const { id } = req.body;

    if(id in users) {
        users[id].talent = 0;
    }
    // res.send(student);
}); 

/* get average of talent */
router.get("/average", (req, res) => {
    let sum;
    const count = Object.keys(users).length;
    for(let id in users)
    {
        sum += parseInt(users[id].talent);
    }

    let avg = sum/count;
    console.log(avg);
    // res.send(users);
});
module.exports = router;
