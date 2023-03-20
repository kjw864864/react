import React, { useState } from "react";

//리액트 훅
//리액트 v16.8 에 새로 도입된 기능.
//함수형태의 컴포넌트에서 사용되는 몇가지 기술을 Hook이라고 부름.
//상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능 등을 제공한다.

//02.useState
//컴포넌트에서 동적인 값을 상태(state)라고 부릅니다.
//함수형태의 컴포넌트에서 상태를 관리 할 수 있음.

function UseState() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default UseState;
