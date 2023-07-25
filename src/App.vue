<template>
  <component :is="currentPageComponent" :page-params="currentPageParams" @goToPage="(pageName,pageParams) => goToPage(pageName, pageParams)"/>
</template>



<script>
import mainPage from "@/pages/MainPage";
import productPage from "@/pages/ProductPage";
import NotFoundPage from "@/pages/NotFoundPage";
import eventBus from "@/eventBus";
const routes = {
  main: "mainPage",
  product: "productPage",

}

export default {
  name: 'App',
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {

      }
    }
  },
  components: {mainPage, productPage, NotFoundPage},
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || "NotFoundPage";
    }
  },
  methods: {
    goToPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    }
  },
  created() {
    eventBus.$on('goToPage', (pageName, pageParams) => this.goToPage(pageName,pageParams))
  }
}
</script>

