import { useCopy } from '@aileen/hooks';
import { Button, Input, message } from 'antd';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState<string>();

  const onSuccess = (text: string) => {
    message.success(`成功复制: ${text}`);
  };

  const onError = (err: Error) => {
    message.error(`复制失败: ${err.message}`);
  };

  // Pass useCopyProps to the useCopy hook
  const [copyText, copy] = useCopy({ onSuccess, onError });

  return (
    <>
      <div>复制的再好。也复制不了曾经的记忆~</div>
      <Input
        style={{ display: 'inline-block', width: 240, marginRight: 8 }}
        value={value}
        onChange={(v) => setValue(v.target.value)}
      />
      <Button type="primary" onClick={() => copy(value || '')}>
        复制
      </Button>
      <div>{copyText ? `复制结果: ${copyText}` : ''}</div>
    </>
  );
};
