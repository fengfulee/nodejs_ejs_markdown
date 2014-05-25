### 列表
无序列表使用星号、加号和减号来做为列表的项目标记，这些符号是都可以使用的，使用星号：

* Candy.
* Gum.
* Booze.
加号：

+ Candy.
+ Gum.
+ Booze.
和减号

- Candy.
- Gum.
- Booze.
都会输出 HTML 为：

<ul>
<li>Candy.</li>
<li>Gum.</li>
<li>Booze.</li>
</ul>
有序的列表则是使用一般的数字接着一个英文句点作为项目标记：

1. Red
2. Green
3. Blue
输出 HTML 为：

<ol>
<li>Red</li>
<li>Green</li>
<li>Blue</li>
</ol>
如果你在项目之间插入空行，那项目的内容会用 <p> 包起来，你也可以在一个项目内放上多个段落，只要在它前面缩排 4 个空白或 1 个 tab 。

* A list item.
With multiple paragraphs.

* Another item in the list.
输出 HTML 为：

<ul>
<li><p>A list item.</p>
<p>With multiple paragraphs.</p></li>
<li><p>Another item in the list.</p></li>
</ul>
