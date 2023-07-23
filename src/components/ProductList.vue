<template>
  <ul class="catalog__list">
    <product-item v-for="(product) in products" :key="product.title" :product="product"></product-item>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: ['products'],
}
</script>

<style scoped>

</style>
