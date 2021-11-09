<template>
  <swiper
    :slides-per-view="4"
    :centeredSlides="true"
    :loop="true"
    :navigation="{ nextEl: '.next', prevEl: '.prev' }"
    :spaceBetween="100"
  >
    <swiper-slide v-for="image in images" :key="image.id">
      <div class="img-container">
        <div class="mask"></div>
        <img class="slide-img" :src="image.url" alt="" />
      </div>
      <div class="slide-description">
        <h4 class="slide-heading">Mosaique au 24</h4>
        <p class="description">
          Ещё один безумно красивый сервиз от Hermes — Mosaique au 24, выполнен
          в роскошных золотых и платиновых оттенках. Такой сервиз не стыдно
          подать на стол на любое торжество, им останется довольна даже самая
          притязательная аудитория. Этот изысканный фарфор украсит любой стол, а
          великолепные тарелки, также можно использовать в качестве украшения
          интерьера.
        </p>
        <a href="#" class="cat-link link">Перейти в каталог</a>
      </div>
    </swiper-slide>
    <div class="arrows">
      <div class="next">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5"
            transform="rotate(-90 25 25)"
            stroke="black"
          />
          <path
            d="M34.7071 24.2929C35.0976 24.6834 35.0976 25.3166 34.7071 25.7071L28.3431 32.0711C27.9526 32.4616 27.3195 32.4616 26.9289 32.0711C26.5384 31.6805 26.5384 31.0474 26.9289 30.6569L32.5858 25L26.9289 19.3431C26.5384 18.9526 26.5384 18.3195 26.9289 17.9289C27.3195 17.5384 27.9526 17.5384 28.3431 17.9289L34.7071 24.2929ZM15 24L34 24V26L15 26V24Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="prev">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="24.5"
            transform="matrix(0 -1 -1 0 25 25)"
            fill="#fff"
            stroke="black"
          />
          <path
            d="M15.2929 24.2929C14.9024 24.6834 14.9024 25.3166 15.2929 25.7071L21.6569 32.0711C22.0474 32.4616 22.6805 32.4616 23.0711 32.0711C23.4616 31.6805 23.4616 31.0474 23.0711 30.6569L17.4142 25L23.0711 19.3431C23.4616 18.9526 23.4616 18.3195 23.0711 17.9289C22.6805 17.5384 22.0474 17.5384 21.6569 17.9289L15.2929 24.2929ZM35 24L16 24V26L35 26V24Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  </swiper>
</template>
<script>
import SwiperCore, { Navigation, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Parallax]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      parallaxObjectWidth: 0,
      images: [
        { id: 1, url: require("../assets/img/swiper/slide.jpg") },
        { id: 2, url: require("../assets/img/swiper/slide.jpg") },
        { id: 3, url: require("../assets/img/swiper/slide.jpg") },
        { id: 4, url: require("../assets/img/swiper/slide.jpg") },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.cat-link {
  text-decoration: underline;
  color: #c7c7c7;
}
.arrows {
  width: 100%;
  display: flex;
  align-items: center;
}
.prev {
  cursor: pointer;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
}
.next {
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.arrows svg:hover circle {
  fill: #000;
  transition: all 0.5s;
}
.arrows svg:hover path {
  fill: #fff;
  transition: all 0.5s;
}
</style>
