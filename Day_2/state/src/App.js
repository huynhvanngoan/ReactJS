import React from "react";
import { useState } from "react";

export default function App() {
  // Biến count, hàm cập nhật giá trị của count là setCount
  // 0 là giá trị khởi tạo cho biến count. => biến count có giá trị ban đầu là 0
  const [count, setCount] = useState(0);
  const handlClick = (x) => {
    setCount(x + 5);
    if(x === 100) {
      setCount(0);
    }
  };
  return (
    <>
      {/* {result} */}
      <div>{count}</div>
      <button onClick={() => handlClick(count)}>Đếm</button>
    </>
  );
}
