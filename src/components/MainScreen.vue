<template>
  <main class="main-screen">
    <div class="main-bg"></div>
    <div class="main-info">
      <h1 class="main-heading">
        ПЕРСОНАЛЬНЫЙ <br />
        КОНСЬЕРЖ <br />
        СЕРВИС HERMÈS <br />
        В РОССИИ
      </h1>
      <p class="main-par">
        Доставка из европейских бутиков <br />
        Без дополнительных комиссий
      </p>
      <p class="main-par">
        от байеров Hermes <br />
        since 2016
      </p>
    </div>
    <div class="main-img">
      <img class="img-first" src="../assets/img/image1.png" alt="" />
      <img class="img-second" src="../assets/img/image2.png" alt="" />
    </div>
  </main>
  <section class="section">
    <div class="container">
      <h2 class="sub-heading">Посуда HERMÈS</h2>
    </div>
    <MainSwiper />
  </section>
  <section class="section form-section">
    <div class="container">
      <div class="form-wrapper">
        <div class="form-info">
          <h2 class="reg-heading">
            У нас Вы можете заказать сервиз на любое количество персон в любой
            комплектации
          </h2>
          <p class="sub-p bold">
            Запросите полный каталог в WhatsApp, а мы поможем Вам составить
            спецификацию для Вашего сервиза и предложим стандартные
            комплектации.
          </p>
          <p class="sub-p">
            Мы пришлем Вам каталог в течении 15 минут в WhatsApp NO SPAM
          </p>
        </div>
        <form action="" class="cat-form" @submit.prevent="">
          <input type="text" name="" id="" class="main-input" />
          <button type="submit" class="main-btn">Запросить каталог</button>
        </form>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <h2 class="sub-heading">Чайные наборы</h2>
      <ul class="product-list">
        <productCart v-for="product of products" :key="product.id" />
      </ul>
    </div>
  </section>
</template>
<script>
import MainSwiper from "./MainSwiper.vue";
import productCart from "./productCart.vue";
export default {
  components: {
    MainSwiper,
    productCart,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product1.png"),
        },
        {
          id: 2,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product2.png"),
        },
        {
          id: 3,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product3.png"),
        },
        {
          id: 4,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product4.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 0;
}
.main-heading {
  font-family: "Raleway";
  font-size: 55px;
}
.main-par {
  font-family: "Montserrat";
  font-size: 26px;
}
.main-screen {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #f7f7f7;
  position: relative;
  z-index: 1;
  margin-top: -10px;
}
.main-bg {
  flex-basis: 10%;
  height: 750px;

  background-image: url("../assets/img/video.jpg");
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
