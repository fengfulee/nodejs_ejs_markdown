### 链接
Markdown 支援两种形式的链接语法： 行内 和 参考 两种形式，两种都是使用角括号来把文字转成连结。

行内形式是直接在后面用括号直接接上链接：

This is an [example link](http://example.com/).
输出 HTML 为：

<p>This is an <a href="http://example.com/">
example link</a>.</p>
你也可以选择性的加上 title 属性：

This is an [example link](http://example.com/ "With a Title").
输出 HTML 为：

<p>This is an <a href="http://example.com/" title="With a Title">
example link</a>.</p>
