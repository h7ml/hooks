#!/bin/bash

# 检查参数数量
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <target_directory>"
  exit 1
fi

target_directory="src/$1"

# 创建目标目录
mkdir -p "$target_directory"

# 复制源目录中的所有文件到src/目标目录
cp -R src/useLocal/* "$target_directory"

echo "Directory copied successfully!"
