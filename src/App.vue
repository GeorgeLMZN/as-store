<template>
  <Navbar />
  <router-view></router-view>
  <FooterComponent />
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>

<style src="./assets/normalize.css"></style>
<style src="./assets/style.css"></style>
