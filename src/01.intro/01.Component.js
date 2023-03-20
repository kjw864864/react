import React from "react";
import PropTypes from "prop-types";

//리액트
//--싱글 페이지 애플리케이션 UI를 만드는 자바스크립트 라이브러리
//--컴포넌트로 구성

//01.컴포넌트 (리액트에서 앱을 이루는 가장 작은 조각)
//--함수형 컴포넌트 , 클래스형 컴포넌트
//--컴포넌트 첫글자는 대문자

//02.프로퍼티(props)
//--상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용(단방향 데이터 흐름 갖는다.)
//--프로퍼티는 수정할 수 없음
function Hello(props) {
  return <div>{props.name}</div>;
}

// 프로퍼티 타입 지정
Hello.propTypes = {
  name: PropTypes.string
  //name: PropTypes.string.isRequired
};

// 프로퍼티 기본값 지정
Hello.defaultProps = {
  name: "디폴트"
};

//03.Jsx 문법
function Jsx() {
  //--태그는 꼭 닫혀있어야 합니다.
  //--두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 합니다.
  //--JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는
  //{} 으로 감싸서 보여줍니다.
  const name = "테스트";

  //-- 인라인 스타일은 객체 형태로 작성을 해야 하며,
  //background-color 처럼 - 로 구분되어 있는
  //이름들은 backgroundColor 처럼
  //camelCase 형태로 네이밍 해주어야 합니다.
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem" // 다른 단위 사용 시 문자열로 설정
  };
  //--클래스를 설정할때는 className으로 설정
  //--주석
  //JSX 내부의 주석은 {/* 이런 형태로 */} 작성합니다.
  return (
    <div>
      {/* 주석은 화면에 보이지 않습니다 */}
      <Hello
        name="리액트"
        // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
      />
      <Hello name="리액트" />
      <Hello />
      <div style={style} className="gray-box">
        {name}
      </div>
    </div>
  );
}

export default Jsx;
