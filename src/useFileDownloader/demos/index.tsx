import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useFileDownloader } from '@dext7r/hooks';

const FileDownloader = () => {
  const { downloadFile } = useFileDownloader();

  const handleDownload = (values: { fileUrl: any; filename: any; }) => {
    const { fileUrl, filename } = values;
    downloadFile(fileUrl, filename || 'downloaded_file').catch((error) => {
      console.error('下载文件时出现错误：', error);
      message.error('文件下载失败');
    });
  };

  return (
    <div>
      <Form onFinish={handleDownload} initialValues={{
        fileUrl: '/logo.png',
        filename: 'logo.png'
      }}>
        <Form.Item
          name="fileUrl"
          label="文件URL"
          rules={[
            {
              required: true,
              message: '请输入文件的URL',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="filename" label="文件名">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            下载文件
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FileDownloader;
