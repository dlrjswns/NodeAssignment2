// const express = require('express');

// const dotenv = require('dotenv');
// const path = require('path');
// const fs = require('fs');


// dotenv.config();


// const DIR = 'data/'
// const albums = {};

// try {
//     fs.readdirSync(DIR);
// } catch (error) {
//     fs.mkdirSync(DIR);
// }

// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, done) {
//             done(null, DIR);
//         },
//         filename(req, file, done) {
//             const ext = path.extname(file.originalname);
//             done(null, `${req.body.id}${ext}`);
//         }
//     })
// });


// const router = express.Router();


// // 사용자 정보 추가
// router.post('/cid', upload.single('image'), (req, res) => {
//     const { id, name, birth, gender } = req.body;

//     if(Object.keys(albums).includes(id)){
//         res.send(`${id}은 이미 존재하는 ID 입니다!`);
//     }else{
//         albums[id] = { name, birth, gender, 'img': req.file?.path ?? '' };
//         res.redirect(301, '/index.html');
//     };
// });

// // 사용자 정보 조회
// router.get('/rid', (req, res) => {
//     const id = req?.query?.id;
//     res.send(id in albums ? JSON.stringify(albums[id]) : `존재하지 않은 ID: ${id}`); // JSON.stringify는 해당 인자로 받은 값을 JSON형식으로 표현해주는 함수
//     //즉 users안에 request로 보낸 id가 존재한다면 users[id]로 접근하여 보여주고 존재하지않는다면 `존재하지 않은 ID: ${id}`를 출력
// });

// // 사용자 정보 수정
// router.post('/uid', upload.single('image'), (req, res) => {
//     const { id, name, birth, gender } = req.body;
//     // const img = req.file?.path
//     if(Object.keys(albums).includes(id)) {
//         if(!isEmpty(name)) {
//             albums[id].name = name;
//         }
//         if(!isEmpty(birth)) {
//             albums[id].birth = birth;
//         }
//         if(!isEmpty(gender)) {
//             albums[id].gender = gender;
//         }
//         if(!isEmpty(req.file?.path)) {
//             if(albums[id].img) {
//                 fs.unlinkSync(albums[id].img);
//             }
//             albums[id].img = req.file?.path;
//         } 
//         res.redirect(301, '/index.html');
        
//     } else {
//         res.send(`존재하지 않은 ID: ${id}`);
//     }
// });

// // 사용자 정보 삭제
// router.get('/did', (req, res) => {
//     const id = req?.query?.id;
//     if (id in users) {
//         if (fs.existsSync(users[id].img)) {
//             // 파일이 존재한다면 true 그렇지 않은 경우 false 반환
//             try {
//               fs.unlinkSync(users[id].img);
//               console.log("image delete");
//             } catch (error) {
//               console.log(error);
//             }
//           }
//         delete users[id];
//         res.redirect(301, '/index.html');
//     }
//     else {
//         res.send(`존재하지 않은 ID: ${id}`);
//     }
// });