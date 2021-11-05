---
title: Lustarioへようこそ
description: Next.js向けブログテンプレートの紹介
slug: about
date: 2021-12-31
author: Mon
image: sample12.jpg
category: Other
tags: []
---

# Lustario とは

Lustario は Next.js 向けに作成されたブログテンプレートです。Next.js の特色である高速化機能をそのままに、TypeScript を使用、Markdown による記事管理を特徴とした無料のテンプレートです。

以下に Markdown で記載した表現がどのような外観となるかを列挙します。

# ヘッダー

```md
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

# h1

## h2

### h3

#### h4

##### h5

###### h6

# 文字の装飾

```md
**強調**された文字列
*イタリック調*の文字列
~取り消し~された文字列
```

**強調**された文字列
*イタリック調*の文字列
~取り消し~された文字列

# テーブル

```md
| th          | th          |          th |     th      |
| ----------- | :---------- | ----------: | :---------: |
| sample text | sample text | sample text | sample text |
| a           | b           |           c |      d      |
| a           | b           |           c |      d      |
```

| th          | th          |          th |     th      |
| ----------- | :---------- | ----------: | :---------: |
| sample text | sample text | sample text | sample text |
| a           | b           |           c |      d      |
| a           | b           |           c |      d      |

# リスト

```md
- item
  - item
  - item
  1. item

1. item
   - item
```

- item
  - item
  - item
  1. item

1. item
   - item

# リンクした文字列

```md
[リンクテキスト](https://example.com/)
[この書き方もできます][1]
[1]: https://example.com/
```

[リンクテキスト](https://example.com/)

[この書き方もできます][1]

[1]: https://example.com/

# 画像

```md
![alt](/sample1.jpg)
![alt](/sample2.jpg "caption")
```

![alt](/sample1.jpg)
![alt](/sample2.jpg "caption")

# 引用

```md
> 引用テキスト
> 引用テキスト
```

> 引用テキスト
> 引用テキスト

# コード

````md
文章中の`コード`です。

```js
let x = "sample text";
```
````

文章中の`コード`です。

```js
let x = "sample text";
```

# 直接埋め込まれた HTML

```md
<ul>
  <li>item</li>
  <li>item</li>
</ul>
```

<ul>
  <li>item</li>
  <li>item</li>
</ul>

自身の記述した Markdown のみを読み込むことを前提としているため、Markdown を HTML に変換する際のサニタイズ処理を行っていません。必要に応じてサニタイズ処理を追加してください。

# 区切り線

```md
---
```

---

以上です。
