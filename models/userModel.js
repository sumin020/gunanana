const db = require("../config/db");

// 이메일로 사용자 찾기
const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM Users WHERE email = ?';
  try {
    const results = await db.query(query, [email]);  // 결과 확인용으로 수정
    //console.log("Query results:", results);  // 쿼리 결과 확인용 로그
    return results[0] || null; // 결과가 있으면 첫 번째 항목 반환, 없으면 null 반환
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Error fetching user by email");
  }
};

// 새 사용자 추가
async function createUser(name, email, password, age) {
    const query = "INSERT INTO Users (name, email, password, age) VALUES (?, ?, ?, ?)";
    const values = [name, email, password, age];
  
    const result = await db.query(query, values);
    //console.log("DB Query Result:", result);
  
    // 배열인지 확인 후 insertId 반환
    if (Array.isArray(result)) {
      return result[0].insertId;
    } else {
      return result.insertId;
    }
  }
  
  
  

module.exports = { createUser, getUserByEmail };
