const express = require('express');
const router = express.Router();

let noticeList = new Array();

router.route("/notice")
    .get((_, res) => {
        res.send(noticeList);
    })
    .post((req, res) => {
        const notice = req.body;
        noticeList.push(notice);
        res.send(notice);
    });

module.exports = router;
