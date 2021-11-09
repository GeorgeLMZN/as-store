<template>
    <main class="main-screen">
    <div class="main-bg"></div>
    <div class="main-info">
      <h1 class="main-heading">ПЕРСОНАЛЬНЫЙ  <br> КОНСЬЕРЖ <br> СЕРВИС HERMÈS <br> В РОССИИ</h1>
      <p class="main-par">
        Доставка из европейских бутиков <br> Без дополнительных комиссий
      </p>
      <p class="main-par">от байеров Hermes <br> since 2016</p>
    </div>
    <div class="main-img">
      <img class="img-first" src="../assets/img/image1.png" alt="">
      <img class="img-second" src="../assets/img/image2.png" alt="">
    </div>
  </main>
  <section class="section">
      <h2 class="sub-heading">
          Посуда HERMÈS
      </h2>
      <MainSwiper/>
  </section>
</template>
<script>
import MainSwiper from './MainSwiper.vue'
export default {
    components: {
        MainSwiper,
    }
}
</script>

<style scoped>
  .main-heading {
    font-family: 'Raleway';
    font-size: 55px;
  }
  .main-par {
    font-family: 'Montserrat';
    font-size: 26px;
  }
  .main-screen {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #F7F7F7;
    position: relative;
    z-index: 1;
    margin-top: -10px;
  }
  .main-bg {
    flex-basis: 10%;
    height: 750px;

    background-image: url('../assets/img/video.jpg');
  }
  .main-info {
    padding: 20px 50px 20px 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
  }
  .main-img {
    position: relative;
    flex-basis: 50%;
  }
  .img-first {
    max-width: 400px;
    margin-top: 100px;
  }
  .img-second {
    position: absolute;
    right: 0;
    top: -50px;
    z-index: -2;
    max-width: 850px;
  }
</style>
