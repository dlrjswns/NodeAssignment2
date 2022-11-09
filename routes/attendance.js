const express = require('express');
const router = express.Router();

const attendance = {};

/* enum */
const Attendance_type = {
    ATTENDANCE: "출석",
    ABSENCE: "결석",
    LATENESS: "지각"
};
Object.freeze(Attendance_type);

/* get All attendance */
router.get("/read", (req, res) => {
    console.log(JSON.stringify(attendance));
    // res.send(users);
});

router.post("/register", (req, res) => {
    const { id, date, attendanceInfo } = req.body;

    if(attendanceInfo in Attendance_type)
    attendance[id] = new Array();
    attendance[id].push({date, attendanceInfo});

    console.log(res.JSON(attendance[id]));
    // res.JSON(attendance[id]);
});

module.exports = router;