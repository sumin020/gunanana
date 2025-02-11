const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// 모든 사용자 가져오기
//router.get("/", userController.getAllUsers);

// 사용자 추가
//router.post("/", userController.createUser);

// 회원가입 API
router.post("/user/signup", userController.signup);
router.post("/user/login", userController.login);
router.post("/user/logout", userController.logout);

// 오늘의 기록자 수 API
router.get("/user/today-records", userController.getTodaysRecordCount);

module.exports = router;
