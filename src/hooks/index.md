---
title: Hooks
atomId: Hooks
description: Hooks
group:
  title: Hooks
---

# Foo

This is an Hooks component.

```jsx
import { useCopy } from '@aileen/hooks';
import { useState } from "react";
import { Button, Input, message } from "antd";

export default () => {
  const [value, setValue] = useState<string>();

  const [copyText, copy] = useCopy();
  return (
    <>
      <div>h7ml useCopy !</div>
      <Input
        style={{ display: "inline-block", width: 240, marginRight: 8 }}
        value={value}
        onChange={(v) => setValue(v.target.value)}
      />
      <Button type="primary" onClick={() => copy(value || "")}>
        复制
      </Button>
      <div>{copyText ? `复制结果: ${copyText}` : ""}</div>
    </>
  );
};
```
