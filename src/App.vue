<template>
  <section class="catalog">
    <productList :products="products"/>

    <base-pagination :page="page" :count="countProducts" :per-page="productsPerPage"></base-pagination>
  </section>
</template>



<script>
import products from './data/products.js'
import productList from "@/components/ProductList";
import BasePagination from "@/components/BasePagination";
export default {
  name: 'App',
  components: {BasePagination, productList},
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    }
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage

      return products.slice(offset, offset + this.productsPerPage)
    },
    countProducts() {
      return products.length
    },
  },
}
</script>

