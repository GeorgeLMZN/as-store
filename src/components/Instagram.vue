<template>
  <h2 class="sub-heading big-heading">Instagram</h2>
  <div class="content-box">
    <div class="img-block">
      <div class="img-item">
        <img src="../assets/img/instagram/photo1.jpg" />
      </div>
      <div class="img-item">
        <img src="../assets/img/instagram/photo2.jpg" />
      </div>
      <div class="img-item">
        <img src="../assets/img/instagram/photo3.jpg" />
      </div>
      <div class="img-item">
        <img src="../assets/img/instagram/photo4.jpg" />
      </div>
      <div class="img-item">
        <img src="../assets/img/instagram/photo5.jpg" />
      </div>
      <div class="img-item">
        <img src="../assets/img/instagram/photo5.jpg" />
      </div>
    </div>
    <div class="info-block">
      <Description
        text="Подпишитесь на наш Instagram Alex & Sandra Hermes Buyers и получайте бонусы и скидки до 15%"
        btnText="Подписаться"
      />
    </div>
  </div>
</template>
<script>
import Description from "./DescriptionBlock.vue";
export default {
  components: {Description,},
};
</script>
<style lang="css" scoped>
.info-block {
  position: absolute;
  top: -20px;
  right: 0;
}
.content-box {
  width: 100%;
  margin: 100px 0;
  position: relative;
}
.img-item {
  margin: 5px;
}
.img-block {
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  position: relative;
  z-index: 1;
}
.content-box {
  display: flex;
  justify-content: space-between;
}
.feedback-bg {
  position: relative;
}
.feedback-bg .cat-form {
  right: -100px;
}
.feedback-heading {
  font-size: 20px;
  left: 25%;
  top: 25%;
  right: -200px;
  margin-top: 70px;
  transform: translateY(-25%);
  position: absolute;
}
.bg-gray {
  background: #f7f7f7;
}
</style>
