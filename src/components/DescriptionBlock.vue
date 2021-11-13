<template>
  <div class="description-block">
    <div class="bg-gray"></div>
    <div class="description-info">
      <p class="text">{{ text }}</p>
      <a :href="link" class="main-btn">{{ btnText }}</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    link: String,
    btnText: String,
  },
};
</script>
<style lang="css" scoped>
.description-block {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.bg-gray {
  height: 260px;
  width: 620px;
  background: #f5f5f5;
}

.description-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  position: absolute;
  max-width: 100%;
  left: 50%;
  transform: translate(-50%, 25%);
  font-size: 20px;
}

.main-btn {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  background: #000;
}
.info-block .description-block {
  width: 800px;
  justify-content: flex-end;
}

.info-block .description-block .description-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  position: absolute;
  max-width: 80%;
  right: -120px;
  transform: none;
  font-size: 20px;
}
</style>
