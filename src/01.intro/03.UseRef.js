import React, { useState, useRef } from "react";

//03.useRef
//--DOM 을 직접 선택해야 하는 경우  사용.
//--리렌더링 없이 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리.

function UseRef() {
  const nameInput = useRef();
  const nextId = useRef(4);

  const onReset = () => {
    //특정돔으로 포커스이동 및 value값 변경
    nameInput.current.focus();
    console.log(nameInput.current.value);
    nameInput.current.value = "";
    //변수 값 수정
    nextId.current += 1;
    console.log(nextId.current);
  };

  return (
    <div>
      <input name="name" placeholder="이름" ref={nameInput} />
      <button onClick={onReset}>초기화</button>
    </div>
  );
}

export default UseRef;
