---
title: "props"
slug: "props"
date: "2025-04-29"
---

## props란?

props는 **"properties"**의 줄임말로,  
컴포넌트 간에 데이터를 전달하기 위해 사용됩니다.

React에서는 컴포넌트를 재사용하면서, 각 컴포넌트가 다른 데이터를 가질 수 있도록 props를 넘겨줍니다.

---

## props 기본 사용법

부모 컴포넌트가 자식 컴포넌트에게 props를 넘겨줄 수 있습니다.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 부모 컴포넌트
<Greeting name="John" />;
```

이렇게 작성하면, `Greeting` 컴포넌트는 `props.name`을 통해 "John"이라는 값을 받아 출력합니다.

---

## props를 구조 분해 할당으로 받기

구조 분해 할당(destructuring)을 사용하면 props를 더 간결하게 다룰 수 있습니다.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

이 방식은 props 객체를 직접 다루지 않고, 필요한 값만 꺼내서 사용할 수 있어 코드가 깔끔해집니다.

---

## 여러 props 전달하기

한 컴포넌트에 여러 props를 전달할 수도 있습니다.

```jsx
function Profile({ name, age }) {
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
}

// 부모 컴포넌트
<Profile name="Jane" age={30} />;
```

이렇게 하면 `name`과 `age`를 각각 받아서 사용할 수 있습니다.

---

# 마무리

props는 React에서 컴포넌트 간 데이터를 전달하는 **기본적인 통로**입니다.  
props를 이해하면 컴포넌트들을 더 효율적으로 연결할 수 있습니다.

다음 포스트에서는 **[[state]]**에 대해 알아봅시다!
