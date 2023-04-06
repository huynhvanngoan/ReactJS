import React from "react";
import { useState } from "react";

export default function App() {
  // Biến count, hàm cập nhật giá trị của count là setCount
  // 0 là giá trị khởi tạo cho biến count. => biến count có giá trị ban đầu là 0
  const [count, setcount] = useState(0);
  console.log
  return (
    <>
      {/* {result} */}
      <div>{count}</div>
      <button onClick={setcount(count + 5)}>Đếm</button>
    </>
  );
}
