# Ch.1 極限
如果$$f(x)=x+1$$，$$x$$為實數($$x \in \Re$$)，當$$x$$接近1時($$x \to 1$$)，$$f(x)$$的變化為

|$$x$$   |0.9|0.99|0.999 |0.9999 |... |1  |... |1.0001 |1.001 |1.01 |1.1 |
|:----:|:-:|:--:|:----:|:-----:|:--:|:-:|:--:|:-----:|:----:|:---:|:--:|
|$$f(x)$$|1.9|1.99|1.999 |1.9999 |... |2  |... |2.0001 |2.001 |2.01 |2.1 |

當($$x \to 1$$)，$$f(x) \to 2$$，記作 $$\lim\limits_{x \to 1}f(x) = 2$$。

## 1-1 極限的定義
設$$f(x)$$定義在包含$$x=a$$2的某個區間內，且L為實數($$L \in \Re$$),當$$x$$趨近於$$a$$時，$$f(x)$$的極限為$$L$$，記作 $$\lim\limits_{x \to a}f(x) = L$$。

### 定理
若$$k$$與$$c$$均為常數，且$$\lim\limits_{x \to a}f(x) = L$$，$$\lim\limits_{x \to a}g(x) = M$$，則：
- $$\lim\limits_{x \to a}k = k$$
- $$\lim\limits_{x \to a}x = a$$
- $$\lim\limits_{x \to a}[c \times f(x)] = c \cdot L$$
- $$\lim\limits_{x \to a}[f(x) \pm g(x)] = L \pm M$$
- $$\lim\limits_{x \to a}[f(x) \cdot g(x)] = L \cdot M$$
- $$\displaystyle \lim\limits_{x \to a}\frac{g(x)}{f(x)} = \frac{M}{L} \qquad (L \neq 0)$$

!> 當$$\displaystyle \frac{g(a)}{f(a)} = \frac{0}{0}$$時，必須透過**因式分解**化簡後再求取極限值。

### 例題
1. $$\displaystyle \lim\limits_{x \to 2}(2x^4-3x^3+x^2+2x+5)$$

>計算
$$
\begin{gathered}
= (2 \cdot 16+ 3 \cdot 8 + 2^2 + 2 \cdot 2 + 5) \\
= 32-24+4+4+5 = 21  
\end{gathered}
$$

2. $$\displaystyle \lim\limits_{x \to 3}\frac{x^2-6}{x+3}$$

>計算
$$
\begin{gathered}
\lim\limits_{x \to 3}(x+3) = 6 \neq 0 \\
\lim\limits_{x \to 3}\frac{x^2-6}{x+3} = \frac{3^2-6}{3+3} = \frac{1}{2}
\end{gathered}
$$

3. $$\displaystyle \lim\limits_{x \to 3}\frac{x^3-27}{x-3}$$

>計算
$$
\begin{gathered}
\text{利用 } a^3-b^3 = (a-b)(a^2+ab+b^2) \\
\lim\limits_{x \to 3}\frac{x^3-27}{x-3} \\
= \lim\limits_{x \to 3}\frac{(x-3)(x^2+3x+9)}{x-3} \\
= \lim\limits_{x \to 3}x^2+3x+9 = 27
\end{gathered}
$$

4. $$\displaystyle \lim\limits_{x \to 9}\frac{x-9}{\sqrt{x}-3}$$

>計算
$$
\begin{gathered}
\text{利用 } a^2-b^2 = (a-b)(a+b) \\
\lim\limits_{x \to 9}\frac{x-9}{\sqrt{x}-3} \\
= \lim\limits_{x \to 9}\frac{(x-9)(\sqrt{x}+3)}{(\sqrt{x}-3)(\sqrt{x}+3)} \\
= \lim\limits_{x \to 9}\frac{(x-9)(\sqrt{x}+3)}{x-9} \\
= \lim\limits_{x \to 9}\sqrt{x}+3 = 6
\end{gathered}
$$

5. $$\displaystyle \lim\limits_{x \to 8}\frac{\sqrt[3]{x}-2}{x-8}$$

>計算
$$
\begin{gathered}
\text{利用 } a^3-b^3 = (a-b)(a^2+ab+b^2) \\
\lim\limits_{x \to 8}\frac{\sqrt[3]{x}-2}{x-8} \\
= \lim\limits_{x \to 8}\frac{\sqrt[3]{x}-2}{(\sqrt[3]{x}-2)(\sqrt[3]{x^2}+2\sqrt[3]{x}+2^2)} \\
= \lim\limits_{x \to 8}\frac{1}{\sqrt[3]{x^2}+2\sqrt[3]{x}+2^2} = \frac{1}{12}
\end{gathered}
$$

## 1-1 練習題
1. $$\displaystyle \lim\limits_{x \to -3}x^3+2x^2+6$$
2. $$\displaystyle \lim\limits_{x \to 2}[(x^2+1)(x^2+4x)]$$
3. $$\displaystyle \lim\limits_{x \to 2}\frac{x^2-9}{x+2}$$
4. $$\displaystyle \lim\limits_{x \to 1}\frac{1-x^3}{x-1}$$
5. $$\displaystyle \lim\limits_{x \to -2}\frac{2x^2+3x-2}{x^2+3x+2}$$
6. $$\displaystyle \lim\limits_{x \to 0}\frac{1}{x}(\frac{1}{3+x}-\frac{1}{3})$$
7. $$\displaystyle \lim\limits_{x \to 1}\frac{x-1}{\sqrt[3]{x}-1}$$
8. $$\displaystyle \lim\limits_{x \to 0}\frac{\sqrt{2x+1}-\sqrt{x-1}}{x}$$
