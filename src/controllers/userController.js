//const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");
const recordModel = require("../models/recordModel");

const signup = async (req, res) => {
    try {
      const { name, email, password, age } = req.body;
  
      // 이메일 중복 확인
      const existingUser = await userModel.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      // 비밀번호 해싱
      //const hashedPassword = await bcrypt.hash(password, 10);
  
      // 사용자 생성
      const userId = await userModel.createUser(name, email, password, age);
  
      res.status(201).json({
        message: "User registered successfully",
        userId: userId
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error registering user" });
    }
  };
  
  const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 이메일로 사용자 조회
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // 비밀번호 검증 (해싱 없이 저장된 비밀번호를 직접 비교)
        if (password !== user.password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // JWT 토큰 생성
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h', // 1시간 동안 유효
        });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
};

const getTodaysRecordCount = async (req, res) => {
    try {
      const count = await recordModel.getTodayRecordsCount(); // 정확한 함수 이름 사용
      if (count === 0) {
        return res.status(200).json({ message: "0" });
      }
      return res.status(200).json({ message: `${count}` });
    } catch (error) {
      console.error("Error fetching today's record count:", error);
      res.status(500).json({ message: "Error fetching today's record count", error: error.message });
    }
  };

  const logout = (req, res) => {
    // 클라이언트 측에서 토큰 삭제하도록 안내하는 메시지 반환
    res.status(200).json({ message: "로그아웃되었습니다. 클라이언트에서 토큰을 삭제하세요." });
};
  

  module.exports = { signup, login, getTodaysRecordCount, logout };
  