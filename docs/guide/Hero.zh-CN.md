---
order: 1
title: Hero 头图
atomId: Hero
description: 风格化头图
group:
  title: 风格化组件
  order: 2
---

## Demo

<code src="./demos/Hero"></code>

:::info
只有包裹在 `DumiSiteProvider` 里面才能正常使用。
:::

## API

| 属性名      | 描述                                 | 类型                               | 默认值      |
| ----------- | ------------------------------------ | ---------------------------------- | ----------- |
| title       | 标题                                 | `string`                           | `undefined` |
| description | 描述                                 | `string`                           | `undefined` |
| actions     | 行动点，第一个 action 默认为 primary | `{ text: string; link: string }[]` | `undefined` |
