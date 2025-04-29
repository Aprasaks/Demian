---
title: "useEffect"
slug: "useEffect"
date: "2025-04-29"
---

## useEffect란?

`useEffect`는  
**컴포넌트가 렌더링된 이후에 실행되는 부수 효과(side effect)**를 처리하는 Hook입니다.

예를 들어,

- 서버 데이터 요청(fetch)
- 수동으로 DOM 조작
- 타이머 설정(setTimeout, setInterval)
  이런 작업들을 `useEffect` 안에서 처리합니다.

---

## 기본 사용법

```tsx
import { useEffect } from "react";

export default function Example() {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타났습니다!");
  });

  return <div>Hello, useEffect!</div>;
}
```

- `useEffect` 안의 코드는 **컴포넌트가 렌더링된 후 실행**됩니다.
- 매번 렌더링될 때마다 실행됩니다. (의존성 배열을 지정하지 않으면!)

---

## 의존성 배열(dependency array)

`useEffect`의 두 번째 인자로  
**의존성 배열**을 넘겨서 실행 시점을 조절할 수 있습니다.

| 의존성 배열  | 동작                        |
| :----------- | :-------------------------- |
| 없음         | 매 렌더링마다 실행          |
| `[]` 빈 배열 | 처음 마운트될 때만 실행     |
| `[state]`    | 특정 state가 바뀔 때만 실행 |

### 예시

```tsx
useEffect(() => {
  console.log("처음 마운트될 때 한 번만 실행");
}, []);

useEffect(() => {
  console.log("count가 변경될 때 실행");
}, [count]);
```

---

## 클린업 함수 (cleanup)

`useEffect` 안에서  
**컴포넌트가 언마운트될 때 정리(clean-up)** 하는 작업도 할 수 있습니다.

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("1초마다 실행");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("타이머 정리");
  };
}, []);
```

- return 안에 작성한 함수는 **컴포넌트가 사라질 때 호출**됩니다.

---

## useEffect 자주 하는 실수

| 실수                    | 설명                                                         |
| :---------------------- | :----------------------------------------------------------- |
| 의존성 배열 빠뜨림      | 특정 값이 변경될 때만 실행하려고 했는데 매 렌더링마다 실행됨 |
| 잘못된 의존성 배열 작성 | 필요한 값을 빼먹으면, 최신 값이 반영되지 않음                |
| 클린업 함수 누락        | 이벤트 리스너, 타이머 등을 정리하지 않아서 메모리 누수 발생  |

---

# 마무리

`useEffect`는 처음엔 어렵게 느껴질 수 있지만,  
**렌더링 이후 작업을 제어하는 유일한 방법**입니다.  
의존성 배열만 정확히 관리하면, 대부분의 상황을 해결할 수 있습니다.

다음에는 **[[useRef]]**에 대해 알아봅시다!
