<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-block">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="" />
        </div>
        <div class="name">Hermes Moscow</div>
        <div class="icons">
          <div class="icon">
            <a href="#">
              <img src="../assets/img/footer/inst.svg" alt="" />
            </a>
          </div>
          <div class="icon">
            <a href="#">
              <img src="../assets/img/footer/fb.svg" alt="" />
            </a>
          </div>
          <div class="icon">
            <a href="#">
              <img src="../assets/img/footer/tg.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-block">
        <ul>
          <h3>ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
          <li><a href="#"> Посуда</a></li>
          <li><a href="#">Apple Watch</a></li>
          <li><a href="#">Одежда и оубвь</a></li>
          <li><a href="#">Аксессуары</a></li>
        </ul>
        <ul>
          <h3>СУМКИ</h3>
          <li><a href="#">Birkin</a></li>
          <li><a href="#">Kelly</a></li>
          <li><a href="#">Constance</a></li>
          <li><a href="#">Other</a></li>
        </ul>
        <ul>
          <h3>ИНФОРМАЦИЯ</h3>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Экспертиза</a></li>
          <li><a href="#">Стать байером</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
      <div class="footer-block">
        <div class="block-item">
          <h2 class="item-heading">По вопросам сотрудничества:</h2>
          <div class="email-item">
            <img src="../assets/img/footer/email.svg" alt="" />
            <span class="email">mood@hermescake.ru</span>
          </div>
        </div>
        <div class="block-item">
          <h2 class="item-heading">Мы принимаем к оплате:</h2>
          <div class="payment-item">
            <img src="../assets/img/footer/cash.svg" alt="" />
            <span class="payment-method">Наличные</span>
          </div>
          <div class="payment-item">
            <img src="../assets/img/footer/bank.svg" alt="" />
            <span class="payment-method">Банковский перевод</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
footer a {
    font-size: 14px;
    font-weight: 600;
    color: #000;
}
.icons {
    width: 100%;
    display: flex;
    justify-content:    center;
}
.icon {
    margin: 0 10px;
}
.icon img {
    max-width: 30px;
}
.name {
    margin: 20px 0;
}
ul {
    margin: 0;
}
ul h3 {
    font-size: 16px;
    padding-bottom: 20px;
}
li {
    margin: 10px 0;
}
    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .footer-block:nth-child(1) {
        display: flex;
        flex-direction: column;
        flex-basis: 20%;
        align-items: center;
    }
    .footer-block:nth-child(2) {
        display: flex;
        justify-content: space-around;
        flex-basis: 60%;
    }
    .footer-block:nth-child(3) {
        display: flex;
        flex-direction: column;
        flex-basis: 20%;
        align-items: flex-start;
    }
    .icons {
        display: flex;
    }
    .item-heading {
        font-size: 16px;
        white-space: nowrap;
    }
    .payment-item,
    .email-item {
        display: flex;
        align-items: center;
        margin: 20px 0;
    }
    .payment-item span,
    .email-item span {
        margin-left: 10px;
        font-size: 14px;
    }
</style>