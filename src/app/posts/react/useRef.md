---
title: "useRef"
slug: "useRef"
date: "2025-04-29"
---

## useRef란?

`useRef`는  
**값을 저장하거나 DOM 요소에 직접 접근**할 때 사용하는 Hook입니다.

특징은:

- 상태 변경 없이 값을 저장할 수 있다.
- 렌더링을 다시 일으키지 않는다.
- DOM 요소를 직접 제어할 수 있다.

---

## 값 기억하기 (일반 변수처럼 사용)

```tsx
import { useRef } from "react";

export default function Timer() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("현재 카운트:", countRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>카운트 증가</button>
    </div>
  );
}
```

- `useRef(초기값)`을 호출하면 `{ current: 값 }` 형태의 객체를 반환합니다.
- `.current` 값을 직접 변경해도 **렌더링이 다시 발생하지 않습니다.**

---

## DOM 요소에 접근하기

```tsx
import { useRef, useEffect } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="자동 포커스!" />;
}
```

- `ref` 속성에 `useRef`로 만든 객체를 연결하면
- 해당 DOM 요소를 직접 다룰 수 있습니다.
- 여기서는 컴포넌트가 마운트될 때 input에 자동으로 포커스를 맞춥니다.

---

## useRef와 useState 차이점

| 항목                | useState         | useRef           |
| :------------------ | :--------------- | :--------------- |
| 값 저장             | ✅               | ✅               |
| 값 변경 시 리렌더링 | ✅ (렌더링 발생) | ❌ (렌더링 없음) |
| DOM 접근            | ❌               | ✅               |

---

# 마무리

`useRef`는 값 저장과 DOM 제어 모두에 활용할 수 있는 **유연한 Hook**입니다.  
렌더링 없이 값을 기억해야 할 때,  
또는 특정 요소에 직접 접근하고 싶을 때 유용하게 사용할 수 있습니다.

다음에는 **[[useMemo]]**에 대해 알아봅시다!
