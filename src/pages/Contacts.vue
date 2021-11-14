<template>
 <section class="section">
    <div class="container contacts-container">
        <h1 class="contacts-heading">Контакты</h1>
        <div class="contacts-info">
        <p class="info-item">
        Наш офис и шоу-рум находится в центре 
        по адресу:
        </p>
        <p class="info-item">
        <span>г. Москва, ул. Б. Якиманка, 24</span>
        </p>
        <p class="info-item">
             Есть парковка!
        </p>
        <p class="info-item">
       <span>Внимание!</span> Посещение шоу-рума  происходит 
        по предварительной договоренности 
        по телефону или в WhatsApp.
        </p>
        <p class="info-item">
        Телефон: <br><br>
        <span><a href="tel:7(777) 777 77 77">+7(916) 280-40-40</a></span>
        </p>
         <p class="info-item">
        Email: <br><br>
        <span><a href="mailto:mood@info.ru">mood@info.ru</a></span>
        </p>
        </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <InstagramComponent />
    </div>
  </section>
</template>

<script>
import InstagramComponent from "../components/Instagram.vue";
export default {
    components: {
        InstagramComponent,
    }    
}
</script>
<style lang="css" scoped>
    .contacts-container {
        padding-left: 200px;
    }

    .contacts-info {
        max-width: 300px;
    }
    .info-item {
        margin: 20px 0;
        font-size: 15px;
    }
    span {
        font-weight: 600;
    }
    a {
        color: #000;
        margin: 10px 0;
    }
</style>