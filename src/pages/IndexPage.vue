<template>
  <q-page>
    <div style="background: #f5f5f5">
      <YandexMap :coordinates="coordinates" :controls="controls" :zoom="18">
        <YandexMarker :coordinates="coordinates" :marker-id="123" />
      </YandexMap>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
// import Lic_1 from 'assets/lic_1.png';
// import Lic_2 from 'assets/lic_2.png';

// import CardImg from 'assets/cards_img_3.svg';
// import Camera2 from 'assets/camera_2.jpg';
// import fon from 'assets/fon.jpg';
// import delko from 'assets/delko.png';
import { YandexMap, YandexMarker } from 'vue-yandex-maps';
const coordinates = [59.877543, 30.335739];
const controls = ['fullscreenControl'];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cards = [
  {
    title: 'Охрана объектов',
    text: 'Охрана недвижимости, строительных объектов, промышленных объектов',
  },
  {
    title: 'Сопровождение грузов',
    text: 'Ж/д способом, автомобилем, самолетом, сопровождение фур',
  },
  {
    title: 'Личная охрана',
    text: 'Явная личная охрана, скрытая личная охрана, телохранители',
  },
  {
    title: 'Охрана мероприятий',
    text: 'Внешняя охрана, внутренняя охрана, комплексная охрана',
  },
  {
    title: 'Почасовая охрана',
    text: 'Охрана объекта на сутки, охрана объекта на день: на ночь',
  },
  {
    title: 'Перевозка лекарственных и психотропных веществ',
    text: 'Охранная организация имеет лицензию на перевозку лекарственных средств и психотропных веществ',
  },
];
</script>

<style lang="scss" scoped>
.yandex-container {
  height: 400px;
}
.container-main {
  max-width: 1800px;
  margin: 0 auto;
}
.list-column {
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);
  height: 100%;

  &__field {
    display: grid;
    gap: 16px;
    grid-template-columns: 100%;
  }
}

.col_item {
  gap: 16px;
}
.why-me__text {
  font-size: 40px;
  font-weight: 600;
  font-family: 'Monserat', sans-serif;
}
.company__title {
  font-size: 4vw;
  line-height: 4vw;
  font-weight: 700;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
}
.why-me__title {
  font-size: 17px;
  font-family: 'Monserat', sans-serif;
}
.sub-title {
  font-weight: 500;
  font-size: 28px;
}
.main-security {
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
.why-me {
  font-size: 6vw;
  line-height: 6vw;
  font-weight: 700;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
}
</style>
