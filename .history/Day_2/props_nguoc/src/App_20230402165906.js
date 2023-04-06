import React from 'react';
i
export default function App() {
  // Biến count, hàm cập nhật giá trị của count là setCount 
  // 0 là giá trị khởi tạo cho biến count. => biến count có giá trị ban đầu là 0
  const [count, setcount] = useState(0)
  return (
    <>
      {/* {result} */}
      <div></div>
      <button>Đếm</button>
    </>
  );
}
