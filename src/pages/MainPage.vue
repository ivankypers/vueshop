<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <product-filter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :category-id.sync="filterCategoryId"></product-filter>

      <section class="catalog">
        <productList :products="products"/>
        <base-pagination v-model="page" :count="countProducts" :per-page="productsPerPage"></base-pagination>
      </section>

    </div>
  </main>
</template>

<script>
import products from '@/data/products.js'
import productList from "@/components/ProductList";
import BasePagination from "@/components/BasePagination";
import productFilter from "@/components/ProductFilter";

export default {
  components: {BasePagination, productList, productFilter},
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,

      page: 1,
      productsPerPage: 3,
    }
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > this.filterPriceFrom)
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(product => product.price < this.filterPriceTo)
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(product => product.categoryId === this.filterCategoryId)
      }

      return filteredProducts
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage

      return this.filteredProducts.slice(offset, offset + this.productsPerPage)
    },
    countProducts() {
      return this.filteredProducts.length
    },
  },
}
</script>

<style scoped>

</style>
