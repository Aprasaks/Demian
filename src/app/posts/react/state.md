---
title: "state"
slug: "state"
date: "2025-04-29"
---

## state란?

state는 컴포넌트 내부에서 **변할 수 있는 데이터**를 의미합니다.  
React 컴포넌트는 state를 통해 화면에 표시되는 정보를 동적으로 관리할 수 있습니다.

---

## state 기본 사용법

state를 사용하려면 `useState`라는 Hook을 사용해야 합니다.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

- `useState(초기값)`을 호출하면, 현재 state 값과 이 값을 변경할 수 있는 함수를 반환합니다.
- 버튼을 클릭할 때마다 `setCount`를 호출하여 `count` 값을 변경합니다.

---

## state 변경 주의사항

- state는 **직접 수정하지 않고**, 반드시 `setState` 함수를 통해 변경해야 합니다.
- 기존 값을 기반으로 다음 값을 계산해야 할 경우, 함수형 업데이트를 사용할 수 있습니다.

```jsx
setCount((prevCount) => prevCount + 1);
```

---

## 여러 개의 state 사용하기

하나의 컴포넌트 안에 여러 개의 state를 사용할 수도 있습니다.

```jsx
function Profile() {
  const [name, setName] = useState("Jane");
  const [age, setAge] = useState(30);

  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
}
```

각각의 state는 독립적으로 관리됩니다.

---

# 마무리

state는 React 컴포넌트에 **동적인 힘**을 부여하는 중요한 개념입니다.  
state를 제대로 이해하고 다룰 수 있으면, 사용자와 **상호작용하는 앱**을 만들 수 있습니다.

다음에는 **[[event-handling]]** 에 대해 알아봅시다!
