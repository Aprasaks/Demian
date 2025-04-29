---
title: "useCallback"
slug: "useCallback"
date: "2025-04-29"
---

## useCallback이란?

`useCallback`은  
**함수 자체를 메모이제이션(memoization)해서**  
불필요한 함수 생성과 렌더링을 막아주는 Hook입니다.

쉽게 말하면,  
**"필요할 때만 함수를 다시 만든다"** 입니다.

---

## 기본 사용법

```tsx
import { useState, useCallback } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>+1 증가</button>
    </div>
  );
}
```

- `useCallback(() => 함수, [의존성])`
- 의존성이 바뀔 때만 새로운 함수를 생성합니다.
- 의존성이 안 바뀌면 이전 함수를 재사용합니다.

---

## useMemo와 useCallback 차이

| 항목         | useMemo        | useCallback |
| :----------- | :------------- | :---------- |
| 무엇을 기억? | 계산 결과 (값) | 함수 자체   |
| 반환 결과    | 값             | 함수        |

---

## useCallback이 필요한 경우

| 상황                                     | 설명                    |
| :--------------------------------------- | :---------------------- |
| 자식 컴포넌트에 함수를 props로 넘길 때   | 불필요한 리렌더링 방지  |
| 복잡한 이벤트 핸들러를 메모이제이션할 때 | 매번 새로 생성하지 않게 |

---

## 최적화 예시

```tsx
import { useState, useCallback } from "react";

function Child({ onClick }: { onClick: () => void }) {
  console.log("Child 렌더링!");
  return <button onClick={onClick}>+1 증가</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}
```

- `useCallback` 없이 작성하면 매 렌더링마다 새로운 함수가 만들어져서 `Child` 컴포넌트가 매번 리렌더링될 수 있습니다.
- `useCallback`을 사용하면 `increment` 함수가 메모이제이션되어 `Child`가 불필요하게 렌더링되지 않습니다.

---

# 마무리

`useCallback`은 최적화가 필요할 때 유용한 Hook입니다.  
하지만 모든 함수에 `useCallback`을 남발하는 것은 오히려 성능에 안 좋을 수 있습니다.  
**"자식 컴포넌트에 함수를 props로 넘길 때"** 같은 특별한 경우에만 사용하는 것이 좋습니다.

다음에는 **[[custom-hooks]]**에 대해 알아봅시다!
