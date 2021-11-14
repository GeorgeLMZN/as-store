<template>
  <section class="section about-section">
    <div class="container">
      <div class="info-block">
        <h1 class="main-heading">О нас</h1>
        <p class="sub-p">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти предложений
          в абзаце, что позволяет сделать текст более привлекательным и живым
          для визуально-слухового восприятия.
        </p>
        <p class="sub-p">
          По своей сути рыбатекст является альтернативой традиционному lorem
          ipsum, который вызывает у некторых людей недоумение при попытках
          прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
          языке наполнит любой макет непонятным смыслом и придаст неповторимый
          колорит советских времен.
        </p>
        <h2 class="proposal-heading">Мы предлагаем:</h2>
        <ul class="proposal-list">
          <li class="proposal-item">
            <img src="../assets/img/about/proposal.svg" alt="" />
            Только подлинную продукцию Hermes по европейским ценам.
          </li>
          <li class="proposal-item">
            <img src="../assets/img/about/proposal.svg" alt="" />
            Заказы до 1000 € — без предоплаты
          </li>
          <li class="proposal-item">
            <img src="../assets/img/about/proposal.svg" alt="" />
            Исполнение заказов в кратчайшие сроки и достаку в любую точку Мира!
          </li>
          <li class="proposal-item">
            <img src="../assets/img/about/proposal.svg" alt="" />
            Большой выбор эксклюзивных сумочек в наличии
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section feedback-section">
     <feedBackSlider ContainerClass="feedback-swiper" :imageData="images"/>
  </section>
  <section class="section">
    <div class="container">
        <InstagramComponent/>
    </div>
  </section>
</template>
<script>
import InstagramComponent from "../components/Instagram.vue";
import feedBackSlider from "../components/feedbackSwiper.vue"
export default {
  components: {InstagramComponent, feedBackSlider},
  data() {
    return {
       images: [
        {
          id: 1,
          imageUrl:require("../assets/img/feedBackSlider/slide.jpg"),
          profileUrl:require("../assets/img/feedBackSlider/profile.png") ,
          name: "Darya Kamalove",
          profileName: "@thecablook",
        },
        {
          id: 2,
          imageUrl:require("../assets/img/feedBackSlider/slide.jpg"),
          profileUrl:require("../assets/img/feedBackSlider/profile.png") ,
          name: "Darya Kamalove",
          profileName: "@thecablook",
        },
        {
          id: 3,
          imageUrl:require("../assets/img/feedBackSlider/slide.jpg"),
          profileUrl:require("../assets/img/feedBackSlider/profile.png") ,
          name: "Darya Kamalove",
          profileName: "@thecablook",
        },
        {
          id: 4,
          imageUrl:require("../assets/img/feedBackSlider/slide.jpg"),
          profileUrl:require("../assets/img/feedBackSlider/profile.png") ,
          name: "Darya Kamalove",
          profileName: "@thecablook",
        },
      ],
    }
  }
};
</script>
<style lang="css" scoped>
.sub-p {
  margin: 20px 0;
  font-size: 14px;
}
.proposal-heading {
  margin-top: 50px;
}
.about-section {
  background: url("../assets/img/aboutBg.png");
  background-size: 85%;
  background-position: top right;
  background-repeat: no-repeat;
  padding-bottom: 0px;
  padding-top: 50px;
}
.info-block {
  padding: 0px 200px 300px 200px;
}
.proposal-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;
}
.proposal-item img {
  margin-right: 20px;
  max-width: 25px;
}

.feedback-section {
  padding-top: 0;
  margin-top: -200px;
}
</style>
