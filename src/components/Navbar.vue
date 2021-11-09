<template>
  <header class="header">
    <TopBar />
    <div class="header-bottom">
      <nav class="header-nav">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import TopBar from "./TopBar.vue";
export default {
  components: {
    TopBar,
  },
};
</script>
