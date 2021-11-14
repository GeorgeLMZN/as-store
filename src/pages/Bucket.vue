<template>
  <section class="section">
    <div class="container">
      <div class="bucket-block">
        <div class="row">
          <h1 class="bucket-heading">Корзина</h1>
          <button v-if="!isEmpty" class="clear-btn" @click="clearData">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9.96046 10.4186"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M1 10.1899L10.4186 1.22948"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>

            Очистить корзину
          </button>
        </div>
        <div class="row">
          <div v-if="isEmpty" class="bucket-content">
            <h2>Ваша корзина пуста</h2>
            <img src="../assets/img/empty.png" alt="" />
            <router-link to="/" class="main-btn">На главную</router-link>
          </div>
          <div v-if="!isEmpty" class="bucket-content">
            <div class="column">
              <div class="row-content">
                <span class="column-name item">Товар</span>
                <span class="column-name price">Цена за шт.</span>
                <span class="column-name count">Количество</span>
                <span class="column-name result">Итого</span>
              </div>
              <div class="underline"></div>
              <div
                v-for="(product, idx) of products"
                :key="product.id"
                class="product-item"
              >
                <div class="product">
                  <div class="img-wrapper">
                    <img :src="product.productImg" alt="" class="product-img" />
                  </div>
                  <div class="product-description">
                    <div class="description-item">{{ product.name }}</div>
                    <div class="description-item">
                      {{ product.description }}
                    </div>
                  </div>
                </div>
                <div class="product-price">
                  <span class="price-item">{{
                    product.price + product.currency
                  }}</span>
                </div>
                <div class="product-count">
                  <button
                    class="count-control"
                    @click="product.count = product.count - 1"
                  >
                    -
                  </button>
                  <span class="count-item">
                    {{ product.count }}
                  </span>
                  <button
                    class="count-control"
                    @click="product.count = product.count + 1"
                  >
                    +
                  </button>
                </div>
                <div class="product-result">
                  <span class="result-item">{{
                    product.result + product.currency
                  }}</span>
                </div>
                <button
                  v-if="!isEmpty"
                  class="clear-btn del-btn"
                  @click="productRemove(idx)"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3382 2.87829H13.177V2.19984C13.177 0.986842 12.1902 0 10.9772 0H7.02159C5.80859 0 4.82175 0.986842 4.82175 2.19984V2.87829H0.660568C0.352179 2.87829 0.105469 3.125 0.105469 3.43339C0.105469 3.74178 0.352179 3.98849 0.660568 3.98849H1.66386V17.0313C1.66386 18.6678 2.99609 20 4.63261 20H13.3662C15.0027 20 16.3349 18.6678 16.3349 17.0313V3.98849H17.3382C17.6466 3.98849 17.8933 3.74178 17.8933 3.43339C17.8933 3.125 17.6466 2.87829 17.3382 2.87829ZM5.93195 2.19984C5.93195 1.59951 6.42126 1.1102 7.02159 1.1102H10.9772C11.5775 1.1102 12.0668 1.59951 12.0668 2.19984V2.87829H5.93195V2.19984ZM15.2247 17.0313C15.2247 18.0551 14.39 18.8898 13.3662 18.8898H4.63261C3.60876 18.8898 2.77405 18.0551 2.77405 17.0313V3.98849H15.2288V17.0313H15.2247Z"
                      fill="black"
                    />
                    <path
                      d="M9.00042 16.8996C9.30881 16.8996 9.55552 16.6529 9.55552 16.3445V6.53361C9.55552 6.22523 9.30881 5.97852 9.00042 5.97852C8.69203 5.97852 8.44531 6.22523 8.44531 6.53361V16.3404C8.44531 16.6487 8.69203 16.8996 9.00042 16.8996Z"
                      fill="black"
                    />
                    <path
                      d="M5.37541 16.2867C5.6838 16.2867 5.93051 16.04 5.93051 15.7316V7.14201C5.93051 6.83362 5.6838 6.58691 5.37541 6.58691C5.06702 6.58691 4.82031 6.83362 4.82031 7.14201V15.7316C4.82031 16.04 5.07114 16.2867 5.37541 16.2867Z"
                      fill="black"
                    />
                    <path
                      d="M12.6215 16.2867C12.9299 16.2867 13.1766 16.04 13.1766 15.7316V7.14201C13.1766 6.83362 12.9299 6.58691 12.6215 6.58691C12.3131 6.58691 12.0664 6.83362 12.0664 7.14201V15.7316C12.0664 16.04 12.3131 16.2867 12.6215 16.2867Z"
                      fill="black"
                    />
                  </svg>

                  <span> Удалить</span>
                </button>
              </div>
              <div class="underline"></div>
              <div class="row">
                <button class="main-btn black">Оформить заказ</button>
                <div class="product-total">
                  <span class="total-item">Стоимость товаров:</span>
                  <span class="total-item">{{ productTotal + currency }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      productsData: [
        {
          id: 1,
          productImg: require("../assets/img/products/watch/watch1.png"),
          price: 230,
          currency: "EUR",
          count: 123,
          name: "Apple Watch",
          description: "Lorem ipsum dolor sit amet.",
          result: null,
        },
        {
          id: 2,
          productImg: require("../assets/img/products/watch/watch2.png"),
          price: 230,
          currency: "EUR",
          count: 2,
          name: "Apple Watch2",
          description: "Lorem ipsum dolor sit amet.",
          result: null,
        },
        {
          id: 3,
          productImg: require("../assets/img/products/watch/watch3.png"),
          price: 230,
          currency: "EUR",
          count: 5,
          name: "Apple Watch3",
          description: "Lorem ipsum dolor sit amet.",
          result: null,
        },
        {
          id: 4,
          productImg: require("../assets/img/products/watch/watch1.png"),
          price: 230,
          currency: "EUR",
          count: 3,
          name: "Apple Watch4",
          description: "Lorem ipsum dolor sit amet.",
          result: null,
        },
      ],
    };
  },
  methods: {
    clearData() {
      this.productsData = [];
      this.isEmpty = true;
    },
    productRemove(idx) {
      this.productsData.splice(idx, 1);
    },
  },
  computed: {
    isEmpty() {
        let bool = null
        if(this.productsData.length === 0) {
            return bool = true;
        }
        if(this.productsData.length > 0) {
            return bool = false;
        }
        return bool
    },
    currency() {
      if(this.productsData.length === 0) {
          return '';
      }
      return this.productsData[0].currency;
    },
    products() {
      this.productsData.forEach((element) => {
        element.result = element.count * element.price;
      });
      return this.productsData;
    },
    productTotal() {
      let prices = [];

      this.productsData.forEach((e) => {
        prices.push(e.result);
      });
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;
      if (prices.length === 0) {
        return 0;
      }
      const result = prices.reduce(reducer);

      return result;
    },
  },
};
</script>
<style lang="css" scoped>
.del-btn {
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.del-btn span {
  font-size: 14px;
}
.clear-btn.del-btn svg {
  max-width: 12px;
  margin-right: 5px;
}
.total-item {
  font-weight: 600;
  font-size: 20px;
}
.total-item:first-child {
  margin-right: 20px;
}
.count-control {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
}
.product {
  display: flex;
  align-items: center;
  flex-basis: 40%;
}
.product-description {
  margin-left: 20px;
}
.description-item:first-child {
  font-weight: 600;
  margin-bottom: 10px;
}
.product-price,
.product-result,
.product-count {
  flex-basis: 20%;
}
.price-item {
  font-weight: 600;
}
.product-item {
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.img-wrapper {
  max-width: 120px;
  padding: 10px;
  border: 1px solid #c7c7c7;
  flex-basis: 40%;
}
.product-img {
  max-width: 100%;
}
.item {
  flex-basis: 40%;
}
.product-count {
  display: flex;
  align-items: center;
}
.count-item {
  min-width: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
}
.price {
  flex-basis: 20%;
}
.count {
  flex-basis: 20%;
}
.result {
  flex-basis: 20%;
}
.row-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.column {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.underline {
  margin-top: 20px;
  width: 100%;
  height: 2px;
  background: #c7c7c7;
}
.bucket-content {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 50px 50px 50px;
  box-sizing: border-box;
  margin-top: 50px;
}
.section {
  background: #c7c7c7;
  padding: 50px;
}
.clear-btn {
  border: none;
  background: transparent;
}
.clear-btn svg {
  margin-right: 10px;
  font-size: 15px;
}
.row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
