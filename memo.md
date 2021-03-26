# memo

## バインディング式

- Mustache 式

### JavaScript 式

- データバインディング内で JavaScript 式を利用できる。

### フィルタ(ローカルフィルタ)

- js

```
const app = new Vue({
  el: '#app',
  data: {
    price: 29800,
  },
  filters: {
    numberFormat: function(value) {
      return value.toLocalString();
    }
  }
})
```

- HTML

```
{{ price | numberFormat }}

v-bind:value="price | numberFormat"
```

### フィルタ（グローバルフィルタ）

- js

```
Vue.filter('numberFormat', function(value) {
  return value.toLocalString();
})
```

### フィルタの連結

- プロパティ | フィルター１ | フィルター 2

### フィルタの引数

- HTML

```
    {{ text | readMore(20, '...') }}

```

- js

```
Vue.filter('readMore', function(text, length, suffix){
	return text.substring(0, length) + suffix
})

let app = new Vue({
	el: '#app',
  data: {
  	text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.',
  }
})
```

### v-bind 省略記法

```
<!-- 完全な構文 -->
<a v-bind:href="url"> ... </a>

<!-- 省略記法 -->
<a :href="url"> ... </a>
```

### v-model
- textareaでは　{{}}構文は無効となる。v-modelを持たせることで双方向バインディングさせることができる。
- チェックボックス 単体：boolean、　複数：配列
- .lazyで遅延したタイミングでバインディングさせることができる
- .trim 前後の空白を削除してバインディングさせる
- .numberは文字列を数値へ変換する
