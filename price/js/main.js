// computedであれば、getterとsetterが定義できる。
// computedはキャッシュされるのでランダムな数値を表示させてもキャッシュが残るので同じ値になる

let app = new Vue({
  el: '#app',
  data: {
    basePrice: 100,
  },
  computed: {
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.1)
      },
      set: function() {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.1)
      }
    }
  }
})
