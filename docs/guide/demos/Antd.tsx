/**
 * title: 默认的 antd 主题
 * description: 默认情况下， Demo 与文档站的主题互相隔离，Demo 使用 antd 默认的主题
 * compact: true
 */
import { Alert, Button, Input, theme } from 'antd';
import { Flexbox } from 'react-layout-kit';

export default () => {
  const { token } = theme.useToken();
  return (
    <Flexbox gap={8} padding={24} style={{ background: token.colorBgLayout }}>
      <Flexbox horizontal gap={8}>
        <Button type={'primary'}>按钮</Button>
        <Button>按钮</Button>
      </Flexbox>
      <Input placeholder={'请输入'} />

      <Alert showIcon banner type={'success'} message={'成功的通知'}></Alert>
      <Alert showIcon banner type={'error'} message={'失败信息'}></Alert>
    </Flexbox>
  );
};
