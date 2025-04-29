---
title: "useReducer"
slug: "useReducer"
date: "2025-04-29"
---

## useReducer란?

`useReducer`는 **복잡한 상태 관리**를 할 때 사용하는 React의 Hook입니다.

`useState`는 간단한 값 하나를 관리할 때 좋지만,  
여러 상태를 함께 관리하거나, 상태 업데이트 로직이 복잡해지면  
`useReducer`를 사용하는 것이 더 깔끔하고 유지보수하기 좋습니다.

---

## 기본 사용법

```tsx
import { useReducer } from "react";

function reducer(state: number, action: { type: "increment" | "decrement" }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
```

- `reducer` 함수는 현재 상태(state)와 액션(action)을 받아서 새로운 상태를 반환합니다.
- `dispatch`를 호출해서 액션을 발생시킵니다.

---

## useReducer가 필요한 경우

| 상황                                    | 설명                                               |
| :-------------------------------------- | :------------------------------------------------- |
| 복잡한 상태 관리                        | 여러 값이나 중첩된 객체 상태를 다룰 때             |
| 상태 업데이트 로직이 복잡할 때          | if문, switch문 등 복잡한 업데이트 로직을 처리할 때 |
| 여러 컴포넌트가 하나의 상태를 공유할 때 | context와 함께 사용                                |

---

## useState와 useReducer 비교

| 항목           | useState               | useReducer                   |
| :------------- | :--------------------- | :--------------------------- |
| 사용 용도      | 간단한 값 관리         | 복잡한 로직, 여러 상태 관리  |
| 상태 변경 방법 | 직접 값 변경(setState) | dispatch로 액션 발생         |
| 코드 구조      | 단순                   | 명확한 패턴화 (reducer 함수) |

---

# 마무리

`useReducer`는 복잡한 상태를 명확하게 관리할 수 있게 해줍니다.  
특히 규모가 커지는 프로젝트나, 상태가 많아지는 상황에서  
더 깔끔하고 예측 가능한 코드를 작성할 수 있습니다.

다음에는 **[[useEffect]]**에 대해 알아봅시다!
