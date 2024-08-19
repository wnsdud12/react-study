import { useState } from "react";
import "./App.css";

const getData = () => {
  console.log("begin getData");

  // api 호출 등 오래 걸리는 작업
  setTimeout(() => {
    console.log("오래 걸리는 중");
  }, 3000);

  return Math.random();
};
function App() {
  // 1 - 함수가 직접 실행되므로, 렌더링 될 때마다 getData가 호출됨
  // const [data, setData] = useState<number>(getData());

  // 2 - getData 함수를 useState에 전달해서 초기화, 최초 한번만 실행됨
  // const [data, setData] = useState<number>(getData);

  // 3 - 지연 초기화를 위한 초기화 함수로 전달됨, 처음 렌더링될 때 한번만 호출됨
  // const [data, setData] = useState<number>(() => {
  //   return getData();
  // });

  const handleClick = () => {
    console.log("begin handleClick");

    setData((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>업데이트</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
