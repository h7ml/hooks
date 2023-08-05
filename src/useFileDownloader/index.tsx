import { useCallback } from 'react';
import { message } from 'antd';

const useFileDownloader = () => {
  const downloadFile = useCallback(async (fileUrl: RequestInfo | URL, filename: string) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error('下载文件时出错');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Create a temporary anchor element
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = filename || 'downloaded_file';
      anchor.target = '_blank';
      document.body.appendChild(anchor);

      // Trigger the download
      anchor.click();

      // Clean up after the download is complete
      URL.revokeObjectURL(url);
      document.body.removeChild(anchor);

      message.success('文件下载成功');
    } catch (error) {
      console.error('下载文件时出现错误：', error);
      message.error('文件下载失败');
    }
  }, []);

  return { downloadFile };
};

export default useFileDownloader;
