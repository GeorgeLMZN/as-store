<template>
  <Navbar />
  <MainScreen/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MainScreen from "./components/MainScreen.vue";
export default {
  components: {
    Navbar,
    MainScreen,
  },
};
</script>

<style src="./assets/normalize.css"></style>
<style src="./assets/style.css"></style>
