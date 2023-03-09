<template>
  <q-page>
    <div class="main-security">
      <div
        class="main-security__img"
        style="
          min-height: calc(100vh - 180px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        "
      >
        <div class="q-pb-xl">
          <div class="container-main">
            <q-btn
              class="text-white"
              style="font-size: 36px; font-weight: 600"
              outline
              >Оставить заявку
            </q-btn>
          </div>
        </div>
      </div>

      <div style="background: #3c435c; padding-bottom: 100px">
        <div class="fill-height container">
          <div class="why-me ptb-100 text-center" style="color: #ffff">
            Наши услуги
          </div>
          <div class="row q-col-gutter-xl">
            <div class="col-4" v-for="(i, index) in cards" :key="index">
              <q-card class="ma-5" max-width="400">
                <q-card-section class="text-wrap text-h6">{{
                  i.title
                }}</q-card-section>
                <q-card-section class="">
                  {{ i.text }}
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>

      <div style="background: #f5f5f5">
        <div class="fill-height container">
          <div class="why-me ptb-100 text-center">О нас</div>
          <div style="padding-bottom: 100px" class="why-me__title">
            Мы оказываем высококлассные охранные услуги вот уже более 10 лет и
            среди наших постоянных клиентов есть сетевые магазины, филиалы
            крупнейших в России банков, офисы компаний, складские помещения
            огромной площади. Наш опыт, количество наших клиентов, их отзывы
            говорят сами за себя. Мы не подводим своих клиентов, всегда
            прибываем по первому звонку и в кратчайшее время. Наша команда
            превосходно оснащена, мы располагаем отличным автопарком,
            позволяющим оперативно реагировать на сигналы, современной
            технической базой, в том числе мы оказываем услуги по установке
            охранных сигнализаций и «Тревожных кнопок».
          </div>
          <div style="padding-bottom: 100px">
            <q-card variant="tonal">
              <div class="row justify-around">
                <q-card max-width="400" class="flex column items-center">
                  <q-icon style="font-size: 200px" name="group"></q-icon>
                  <q-card-section class="why-me__text"> 100 </q-card-section>
                  <q-card-actions>
                    <q-btn>ШТАТ КВАЛИФИЦИРОВАННЫХ СОТРУДНИКОВ</q-btn>
                  </q-card-actions>
                </q-card>

                <q-card max-width="400" class="flex column items-center">
                  <q-icon style="font-size: 200px" name="domain"></q-icon>
                  <q-card-section class="why-me__text"> 20 </q-card-section>
                  <q-card-actions>
                    <q-btn>Компаний на обслуживании</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
            </q-card>
          </div>
        </div>
      </div>

      <div style="background: #f5f5f5" class="ptb-100">
        <div class="fill-height container">
          <div class="row">
            <div class="col-6">
              <div class="company__title">Партнеры</div>
              <div class="q-mt-md" style="padding-left: 5px">
                С какими компаниями мы работаем
              </div>
              <q-btn color="red" size="large" class="q-mt-md"
                >Оставить заявку</q-btn
              >
            </div>
            <div class="col-6">
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                padding
                control-color="primary"
                arrows
                height="300px"
                class="bg-grey-1 shadow-2 rounded-borders"
              >
                <q-carousel-slide :name="1" class="list-column">
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="list-column">
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                  <div class="list-column__field">
                    <q-img fit="contain" class="" :src="delko"> </q-img>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div>
          <div class="company__title ptb-100 pl-1 text-center">Лицензии</div>
          <n-image-group>
            <n-space justify="center">
              <n-image width="500" :src="Lic_1" />
              <n-image width="500" :src="Lic_2" />
            </n-space>
          </n-image-group>
        </div>
      </div>

      <div style="background: #f5f5f5">
        <YandexMap :coordinates="coordinates" :controls="controls" :zoom="18">
          <YandexMarker :coordinates="coordinates" :marker-id="123" />
        </YandexMap>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Lic_1 from 'assets/lic_1.png';
import Lic_2 from 'assets/lic_2.png';
import { NImageGroup, NSpace, NImage } from 'naive-ui';
import CardImg from 'assets/cards_img_3.svg';
import Camera2 from 'assets/camera_2.jpg';
import fon from 'assets/fon.jpg';
import delko from 'assets/delko.png';
import { YandexMap, YandexMarker } from 'vue-yandex-maps';
const coordinates = [59.877543, 30.335739];
const controls = ['fullscreenControl'];
const slide = ref(1);
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
  gap: 25px;
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
  background-image: url('assets/main_png.png');
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
