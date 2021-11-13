<template>
  <li class="product-item" :class="{ mb: isPopular }">
    <div class="row like">
      <div class="favourites-btn">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect
            width="25"
            height="25"
            fill="url(#pattern0)"
            fill-opacity="0.5"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_698_2301"
                transform="scale(0.00416667)"
              />
            </pattern>
            <image
              id="image0_698_2301"
              width="240"
              height="240"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
    </div>
    <div class="row image">
      <img class="product-image" :src="img" alt="" />
    </div>
    <div class="row" :class="{ hidden: isSlider }">
      <h4 class="product-name">
        {{ name }}
      </h4>
      <p class="product-description">
        {{ description }}
      </p>
    </div>
    <div class="row price" :class="{ hidden: isSlider }">
      <p class="old-price">360 €</p>
      <p class="new-price">260 €</p>
    </div>
    <div class="row order" :class="{ hidden: isSlider }">
      <button class="main-btn">Заказать</button>
      <span class="availibility">Под заказ</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    description: String,
    isSlider: Boolean,
    isPopular: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  max-width: 250px;
}
.product-name {
  font-size: 18px;
}
.like {
  position: absolute;
  top: 0px;
  left: 0px;
}

.image {
  align-self: center;
}
.product-image {
  align-self: center;
}

.price {
  font-weight: 600;
  margin: 5px 0;
}
.old-price {
  color: #c7c7c7;
  position: relative;
  font-size: 14px;
  margin: 5px 0;
}

.new-price {
  background: #fff;
  padding-right: 3px;
}

.product-description {
  margin: 10px 0;
}
.new-price::before {
  content: "";
  width: 100%;
  height: 1px;
  background: #c7c7c7;
  position: absolute;
  margin-top: 10px;
  right: 0;
  transform: translateY(-50%);
  z-index: -1;
}
.old-price::before {
  content: "";
  width: 110%;
  height: 1px;
  background: #c7c7c7;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.order {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .main-btn {
    margin-top: 0;
  }
}
.availibility {
  font-size: 11px;
  font-weight: 600;
}
.hidden {
  visibility: hidden;
}
.favourites-btn svg {
  cursor: pointer;
}
.mb {
  margin-bottom: 100px;
}
</style>
