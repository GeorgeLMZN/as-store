/* eslint-disable */
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
    <MainSwiper ContainerClass="big-middle" :imageData="images" />
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
        <productCart
          v-for="product of products"
          :key="product.id"
          :img="product.url"
        />
      </ul>
    </div>
  </section>
  <div class="section">
    <div class="container">
      <div class="bags-block">
        <div class="bags-image">
          <img src="../assets/img/bagWoman.png" alt="" />
        </div>
        <div class="bags-description">
          <h2 class="sub-heading big-heading">
            Сумки HERMÈS <br />
            Birkin, Kelly, Constance
          </h2>
          <p class="sub-p">
            Узнаваемый и неповторимый стиль Эрмес, строгий, классический дизайн
            сумки говорят о наличии вкуса у её обладательницы. Наверное, это
            один из многих факторов, делающий сумки Kelly, Birkin и Constace
            такими желанными для прекрасного пола.
          </p>
          <p class="sub-p">
            Качество кожи и всех сопутствующих материалов оправдывает их высокую
            цену. Каждая подлинная сумка Hermes - это искусная ручная работа.
            Сумки предлагают бутиках далеко не всем, что ещё сильнее влияет на
            желание многих женщин стать обладательницой хотя бы одной из них!
            Наши байеры являются ВИП клиентами Модного Дома с многолетней
            историей покупок в бутиках на сотни тысяч евро, поэтому купить
            сумочку для них не составляет труда.
          </p>
          <p class="sub-p">
            Каждую неделю мы посещаем бутики Hermès в Европе, чтобы купить и
            привезти в Москву новые сумочки Hermes для Вас. У нас Вы можете
            выбрать сумочку из наличия, которая нравится именно Вам, без
            необходимости преодолевать все трудности, пытаясь купить ее
            самостоятельно!
          </p>
        </div>
      </div>
    </div>
  </div>
  <section class="section">
    <div class="container">
      <h2 class="sub-heading">Новинки недели</h2>
      <ul class="product-list">
        <productCart v-for="bag of bags" :key="bag.id" :img="bag.url" />
      </ul>
    </div>
  </section>
  <div class="section">
    <div class="container">
      <Description
        text="Актуальный сток сумочек уточняйте в Whatsapp или Instagram или в соответствуюшем разделе на сайте!"
        link="#"
        btnText="Перейти в раздел"
      />
    </div>
  </div>
  <section class="section">
    <div class="container">
      <div class="watch-block">
        <div class="watch-description">
          <h2 class="sub-heading big-heading">
            HERMÈS <br />
            Apple Watch 6 Series
          </h2>
          <p class="sub-p">
            Apple Watch Hermès не продаются в бутиках России и являются
            эксклюзивом даже в Европе. Отличаются от обычных Apple Watch
            фирменной гравировкой «Hermès», в часах Дома также предустановлены
            фирменные циферблаты Hermès. В отличие от обычных Apple Watch,
            продающихся в России, в этой версии корпус выполнен из нержавеющей
            стали, а стекло — сапфировое. Каждый кожаный ремешок прошит вручную
            и представляет собой, безусловно, очень стильное и красивое
            дизайнерское решение. Часы Hermès Apple Watch 5 Series можно
            укомплектовать любым фирменным ремешком Hermès из каталога.
          </p>
          <p class="sub-p">
            Ремешки Hermès на Apple Watch Series 6 делятся на мужские и женские
            в зависимости от ширины корпуса: <br />
            44 мм — на диаметр запястья 165–195 мм; мужские. <br />
            40 мм — на диаметр запястья 140–160 мм; женские. <br />
            В комплекте ко всем Apple Watch Hermès идет фирменный спортивный
            ремешок, выполненный в цвете Дома, оранжевом.
          </p>
        </div>
        <div class="watch-image">
          <img src="../assets/img/watch.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <productSwiper class="same-middle" />
  </section>
  <section class="section">
    <div class="container">
      <Description
        text="Посмотреть все модели Apple Watch Series 6  от Hermès"
        link="#"
        btnText="Перейти в раздел"
      />
    </div>
  </section>
  <section class="section">
    <div class="container">
      <h2 class="sub-heading big-heading">
        Одежда, обувь и аксессуары <br />
        HERMÈS
      </h2>
    </div>
    <MainSwiper ContainerClass="big-middle" :imageData="images2" />
  </section>
  <section class="section">
    <div class="container">
      <h2 class="sub-heading">Популярные товары</h2>
      <ul class="product-list">
        <productCart
          v-for="product of popularProducts"
          :key="product.id"
          :img="product.url"
          :isPopular="true"
        />
      </ul>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="bg-gray w-80 h-300 feedback-bg">
        <h2 class="sub-heading feedback-heading">
          Под заказ мы привезем любую одежду, обувь или аксессуар бренда Hermes.
          Выбрать конкретную позицию можно на официальном сайте Hermes в США:
        </h2>
        <form action="" class="cat-form" @submit.prevent="">
          <input type="text" name="" id="" class="main-input" />
          <button type="submit" class="main-btn">Отправить</button>
        </form>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
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
    </div>
  </section>
  <FooterComponent/>
</template>
<script>
import MainSwiper from "./MainSwiper.vue";
import productCart from "./productCart.vue";
import Description from "./DescriptionBlock.vue";
import productSwiper from "./productSwiper.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  components: {
    productSwiper,
    MainSwiper,
    productCart,
    Description,
    FooterComponent,
  },
  data() {
    return {
      popularProducts: [
        {
          id: 1,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag1.png"),
        },
        {
          id: 2,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag2.png"),
        },
        {
          id: 3,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag3.png"),
        },
        {
          id: 4,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag4.png"),
        },
        {
          id: 5,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product1.png"),
        },
        {
          id: 6,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product2.png"),
        },
        {
          id: 7,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product3.png"),
        },
        {
          id: 8,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/product4.png"),
        },
      ],
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
      bags: [
        {
          id: 1,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag1.png"),
        },
        {
          id: 2,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag2.png"),
        },
        {
          id: 3,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag3.png"),
        },
        {
          id: 4,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/products/bags/bag4.png"),
        },
      ],
      images: [
        {
          id: 1,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide.jpg"),
        },
        {
          id: 2,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide.jpg"),
        },
        {
          id: 3,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide.jpg"),
        },
        {
          id: 4,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide.jpg"),
        },
      ],
      images2: [
        {
          id: 1,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide2.png"),
        },
        {
          id: 2,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide2.png"),
        },
        {
          id: 3,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide2.png"),
        },
        {
          id: 4,
          name: "Чайный набор для завтрака Passifolia",
          description: "2 чашки 370 мл + 2 блюдца",
          price: "230$",
          is: true,
          url: require("../assets/img/swiper/slide2.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
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

.h-300 {
  height: 300px;
}
.w-80 {
  max-width: 80%;
}
.big-heading {
  font-size: 35px;
  font-weight: 600;
}
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

.bags-block {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.bags-image {
  position: absolute;
  left: 0;
}

.bags-image img {
  max-width: 600px;
}

.bags-description {
  max-width: 700px;
}

.watch-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.watch-image {
  position: absolute;
  right: 0;
}

.watch-image img {
  max-width: 600px;
}

.watch-description {
  max-width: 700px;
}
</style>
