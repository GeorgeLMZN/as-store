<template>
  <header class="header">
    <TopBar />
    <div class="header-bottom">
      <div class="header-logo">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="header-menu">
        <a href="#" class="menu-link" @click="isOpen = !isOpen">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="22"
              y1="1"
              x2="-8.74228e-08"
              y2="0.999998"
              stroke="black"
              stroke-width="2"
            />
            <line
              x1="22"
              y1="15"
              x2="-8.74228e-08"
              y2="15"
              stroke="black"
              stroke-width="2"
            />
            <line
              x1="22"
              y1="8"
              x2="-8.74228e-08"
              y2="8"
              stroke="black"
              stroke-width="2"
            />
          </svg>

          Меню
        </a>
        <Sidebar :isOpen="isOpen"/>
      </div>
      <nav class="header-nav">
        <ul class="nav-list">
          <li class="list-item">О нас</li>
          <li class="list-item">Контакты</li>
          <li class="list-item">Экспертиза</li>
        </ul>
      </nav>
      <div class="header-bucket">
        <div class="bucket-currency">
          <a href="" class="rub">RUB</a>
          /
          <a href="" class="eur">EUR</a>
        </div>
        <div class="bucket-icon">
          <a href="#" class="icon-link">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9962 17.2883L13.9231 4.39264C13.9001 4.10634 13.674 3.88957 13.4096 3.88957H11.2021C11.1714 1.73824 9.5235 0 7.5 0C5.47649 0 3.82856 1.73824 3.7979 3.88957H1.59044C1.32218 3.88957 1.0999 4.10634 1.0769 4.39264L0.00383248 17.2883C0.00383248 17.3047 0 17.3211 0 17.3374C0 18.8057 1.26086 20 2.81298 20H12.187C13.7391 20 15 18.8057 15 17.3374C15 17.3211 15 17.3047 14.9962 17.2883ZM7.5 1.10429C8.95248 1.10429 10.1367 2.34765 10.1673 3.88957H4.83265C4.86331 2.34765 6.04752 1.10429 7.5 1.10429ZM12.187 18.8957H2.81298C1.83955 18.8957 1.05008 18.2086 1.03475 17.362L2.06183 4.99795H3.79407V6.67485C3.79407 6.9816 4.02402 7.22699 4.31145 7.22699C4.59888 7.22699 4.82882 6.9816 4.82882 6.67485V4.99795H10.1673V6.67485C10.1673 6.9816 10.3973 7.22699 10.6847 7.22699C10.9722 7.22699 11.2021 6.9816 11.2021 6.67485V4.99795H12.9343L13.9653 17.362C13.9499 18.2086 13.1566 18.8957 12.187 18.8957Z"
                fill="black"
              />
            </svg>
            <sup> (0) </sup>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TopBar from "./TopBar.vue";
import Sidebar from './Sidebar.vue';
export default {
  components: {
    TopBar,
    Sidebar,
  },
  data() {
    return {
      isOpen: false,
    }
  }
};
</script>
<style scoped>
.header {
  top: 0;
  position: sticky;
  z-index: 2;
  box-shadow: 4px 17px 8px 0px rgba(34, 60, 80, 0.2);
}
.header-bottom {
  padding: 0 40px;
  box-sizing: border-box;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.header-logo {
  position: absolute;
  left: 20%;
  bottom: -10px;
  z-index: 1;
}
.menu-link {
  display: flex;
  align-items: center;
  color: #000;
  font-family: "Montserrat";
  font-weight: 600;
  text-decoration: none;
  position: relative;
  z-index: 4;
}
.menu-link svg {
  margin-right: 10px;
}
.header-nav {
  flex-basis: 50%;
}
.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.list-item {
  margin: 0 10px;
}
.header-menu {
  flex-basis: 25%;
  position: relative;
}
.header-bucket {
  display: flex;
  flex-basis: 25%;
  align-items: center;
  justify-content: flex-end;
}
.bucket-icon {
  margin-left: 10px;
}
</style>
