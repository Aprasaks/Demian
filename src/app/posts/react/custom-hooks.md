---
title: "custom-hooks"
slug: "custom-hooks"
date: "2025-04-29"
---

## Custom Hooks란?

Custom Hook은  
**공통적으로 사용되는 로직을 재사용하기 위해**  
개발자가 직접 만드는 Hook입니다.

React에서는  
**"use"로 시작하는 함수를 만들고, 그 안에서 다른 Hook을 사용**하면  
Custom Hook이 됩니다.

---

## 왜 Custom Hook을 사용할까?

| 이유          | 설명                                         |
| :------------ | :------------------------------------------- |
| 코드 재사용성 | 여러 컴포넌트에서 같은 로직을 공유할 수 있다 |
| 가독성 향상   | 복잡한 로직을 분리해서 코드가 깔끔해진다     |
| 관심사 분리   | 하나의 Hook이 하나의 역할만 담당하게 만든다  |

---

## Custom Hook 만들기 예제

### 입력 관리용 useInput 만들기

```tsx
import { useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
}
```

사용 예시:

```tsx
import { useInput } from "./useInput";

export default function Form() {
  const name = useInput("");
  const email = useInput("");

  return (
    <div>
      <input placeholder="이름" {...name} />
      <input placeholder="이메일" {...email} />
    </div>
  );
}
```

- `useInput`은 텍스트 입력을 관리하는 공통 로직을 캡슐화합니다.
- `{ value, onChange }`를 반환해서 input에 바로 spread할 수 있습니다.

---

### 창 크기 감지용 useWindowWidth 만들기

```tsx
import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```

사용 예시:

```tsx
import { useWindowWidth } from "./useWindowWidth";

export default function Example() {
  const width = useWindowWidth();

  return <div>현재 창 너비: {width}px</div>;
}
```

- `useWindowWidth`는 창 크기가 바뀔 때마다 width 값을 업데이트합니다.

---

# 마무리

Custom Hook을 활용하면  
**중복을 줄이고**, **관심사를 분리하고**, **코드를 더 읽기 쉽게** 만들 수 있습니다.

나만의 Hook을 잘 만들어두면  
프로젝트 전체 퀄리티가 크게 올라갑니다.

다음에는 **[[why-react]]**에 대해 알아봅시다!
