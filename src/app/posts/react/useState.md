---
title: "useState"
slug: "useState"
date: "2025-04-29"
---

## useState란?

`useState`는 React에서  
**컴포넌트의 상태(state)를 관리**할 수 있게 해주는 가장 기본적인 Hook입니다.

함수형 컴포넌트에서도 state를 사용할 수 있게 만들어 주었고,  
React에서 가장 많이 쓰이는 Hook 중 하나입니다.

---

## 기본 사용법

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>
    </div>
  );
}
```

- `useState(초기값)`을 호출하면 `[현재 상태, 상태를 변경하는 함수]` 쌍을 반환합니다.
- 버튼을 클릭하면 `setCount`를 호출해 `count` 값을 변경할 수 있습니다.

---

## useState의 특징

| 특징            | 설명                                        |
| :-------------- | :------------------------------------------ |
| 초기값 설정     | `useState(0)`처럼 첫 상태를 지정            |
| 비동기 업데이트 | `setState` 호출 이후 바로 업데이트되지 않음 |
| 함수형 업데이트 | 이전 값을 기반으로 새로운 값을 만들 때 사용 |

---

## 함수형 업데이트 예시

```tsx
setCount((prevCount) => prevCount + 1);
```

- 이전 상태값(`prevCount`)을 안전하게 가져와서 업데이트할 수 있습니다.
- 여러 번 빠르게 클릭하는 상황에서도 안정적으로 작동합니다.

---

## 다양한 타입의 상태 관리

useState는 숫자뿐 아니라  
문자열, 배열, 객체 등 다양한 타입의 데이터를 관리할 수 있습니다.

```tsx
const [name, setName] = useState("홍길동");
const [todos, setTodos] = useState<string[]>([]);
const [profile, setProfile] = useState<{ name: string; age: number }>({
  name: "홍길동",
  age: 20,
});
```

---

# 마무리

`useState`는 React 상태 관리의 **출발점**입니다.  
이후 더 복잡한 상태를 다루고 싶을 때는  
**[[useReducer]]** 같은 다른 Hooks도 함께 사용할 수 있습니다.

---
