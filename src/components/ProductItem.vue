<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" alt="Название товара">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price }}
    </span>

    <ul class="colors colors--black">
      <color-item v-for="(color, colorIndex) in product.colors" :key="colorIndex" :color="color"></color-item>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style scoped>

</style>
