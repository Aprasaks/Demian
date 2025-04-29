---
title: "event-handling"
slug: "event-handling"
date: "2025-04-29"
---

## 이벤트 핸들링이란?

이벤트 핸들링(Event Handling)은  
**사용자의 행동(클릭, 입력, 제출 등)** 에 따라  
컴포넌트가 반응하도록 만드는 것을 말합니다.

React에서는 HTML에서처럼 직접 이벤트를 연결하는 대신,  
**CamelCase** 형태로 이벤트 핸들러를 작성합니다.

---

## 기본적인 이벤트 핸들링 예시

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={handleClick}>+1 증가</button>
    </div>
  );
}
```

- `onClick` 속성에 이벤트 핸들러 함수(`handleClick`)를 연결합니다.
- 버튼을 클릭하면 `count` 값이 1 증가합니다.

---

## 다양한 이벤트 종류

React에서는 다양한 이벤트를 핸들링할 수 있습니다.

| 이벤트 종류   | 설명                      |
| :------------ | :------------------------ |
| `onClick`     | 클릭 이벤트               |
| `onChange`    | 입력값 변경 이벤트        |
| `onSubmit`    | 폼 제출 이벤트            |
| `onMouseOver` | 마우스 오버(hover) 이벤트 |
| `onKeyDown`   | 키보드 키 누름 이벤트     |

---

## 이벤트 객체(Event Object)

이벤트 핸들러 함수는 기본적으로  
**이벤트 객체(event)** 를 첫 번째 매개변수로 받을 수 있습니다.

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // 기본 폼 제출 동작 막기
  console.log("폼이 제출되었습니다!");
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">제출</button>
  </form>
);
```

- `e.preventDefault()`를 호출하면 페이지 새로고침 같은 기본 동작을 막을 수 있습니다.

---

# 마무리

이벤트 핸들링은 **사용자와 앱 간의 상호작용**을 만드는 데 필수적입니다.  
state와 event-handling을 조합하면  
더 풍부한 사용자 경험(UX)을 만들 수 있습니다.

다음에는 **[[lifecycle]]** 에 대해 알아봅시다!
