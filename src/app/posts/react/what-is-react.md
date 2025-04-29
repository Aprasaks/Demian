---
title: "what-is-react"
date: "2025-04-29"
slug: "what-is-react"
---

React는 UI(사용자 인터페이스)를 구축하기 위한 자바스크립트 라이브러리로,  
**컴포넌트**를 기반으로 설계되어 효율적이며 재사용 가능한 코드를 작성할 수 있습니다.

---

## 기본 구조

React는 일반적으로 `index.html` 파일을 통해 렌더링되며,  
그 안에서 여러 컴포넌트들이 **계층적으로 구성**되어 UI를 만들어냅니다.

---

## import란?

React를 사용할 때 가장 중요한 것 중 하나는 **import** 입니다.  
각각의 컴포넌트를 가져와서 사용할 수 있게 하는 기능입니다.

```jsx
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));
```

기본적으로 이렇게 작성하며,  
`App` 컴포넌트를 `root`라는 id를 가진 HTML 요소에 렌더링합니다.

---

## export란?

하나의 컴포넌트를 외부에서도 사용할 수 있게 하려면,  
**export**를 사용하여 컴포넌트를 내보내야 합니다.

```jsx
import React from "react";

function MyComponent() {
  return <div>Hello, React!</div>;
}

export default MyComponent;
```

이렇게 작성하면 `MyComponent`를 다른 파일에서 import하여 사용할 수 있습니다.

---

## JSX란?

JSX는 "JavaScript XML"의 약자로,  
**자바스크립트 안에서 HTML과 유사한 구문을 사용할 수 있게 해주는 문법 확장**입니다.

- HTML과 비슷하지만 실제로는 자바스크립트 객체로 변환됩니다.
- 자바스크립트 표현식은 `{}` 중괄호 안에 작성합니다.
- 태그는 반드시 **하나의 부모 태그로 감싸야 합니다.**

```jsx
const element = (
  <div>
    <h1>Hello, React!</h1>
    <p>{`2 + 2 = ${2 + 2}`}</p>
  </div>
);
```

---

## 컴포넌트란?

[[component]]

컴포넌트는 **재사용 가능한 UI 단위**입니다.  
React에서는 대부분 **함수형 컴포넌트**를 사용합니다.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 또는 화살표 함수로 작성
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
```

컴포넌트를 얼마나 잘 나누고, 코드를 간결하고 가독성 있게 작성하는지에 따라  
React 개발 속도가 크게 달라진다고 생각합니다.

---

# 마무리

React는 특별히 어려운 개념은 없지만,  
**컴포넌트를 효과적으로 관리하고**,  
**자바스크립트 문법을 유용하게 활용**하는게
궁극전인 목표이며
꼭 알고넘어가야할 개념들은 이렇다고 볼 수 있다.
