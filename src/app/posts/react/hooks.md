---
title: "hooks"
slug: "hooks"
date: "2025-04-29"
---

## Hooks란?

Hooks는 **함수형 컴포넌트**에서도  
state 관리나 라이프사이클 메서드 같은 기능을 사용할 수 있게 해주는  
**React의 특별한 함수**입니다.

Hooks가 등장하기 전에는 이러한 기능을 클래스 컴포넌트에서만 사용할 수 있었지만,  
지금은 대부분 함수형 컴포넌트 + Hooks로 개발합니다.

---

## 기본적인 Hooks 종류

| Hook                     | 설명                   |
| :----------------------- | :--------------------- |
| `useState`               | 컴포넌트에 state 추가  |
| `useEffect`              | 라이프사이클 동작 추가 |
| `useContext`             | 전역 상태 관리         |
| `useRef`                 | DOM 요소나 값을 기억   |
| `useMemo`, `useCallback` | 성능 최적화 용도       |

---

## useState 예제

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

- `useState(0)`을 호출해서 `count`라는 state를 만들고,
- `setCount` 함수를 이용해 값을 변경합니다.

---

## useEffect 예제

```tsx
import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다!");

    return () => {
      console.log("컴포넌트가 언마운트될 때 정리합니다!");
    };
  }, []);

  return <div>타이머 컴포넌트</div>;
}
```

- 마운트 시점과 언마운트 시점에 특정 동작을 실행할 수 있습니다.

---

## Custom Hook 만들기

나만의 Hook(Custom Hook)을 만들어서  
**공통 로직을 재사용**할 수도 있습니다.

```tsx
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// 사용 예시
export default function Example() {
  const width = useWindowWidth();

  return <div>현재 화면 너비: {width}px</div>;
}
```

---

# 마무리

Hooks를 통해 React 개발은  
**더 짧고, 읽기 쉽고, 재사용 가능한 코드**를 작성할 수 있게 되었습니다.

다음에는 **[[useState]]**에 대해 더 깊이 알아봅시다!
