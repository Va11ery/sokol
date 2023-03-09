<template>
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
      <div class="pb-8">
        <div class="container-main">
          <v-card-actions class="pl-4">
            <v-btn
              style="font-size: 36px; font-weight: 600"
              size="x-large"
              variant="outlined"
              color="white"
              >Оставить заявку
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </div>

    <div style="background: #3c435c; padding-bottom: 100px">
      <div class="fill-height container">
        <div class="why-me ptb-100 text-center" style="color: #ffff">
          Наши услуги
        </div>
        <v-row no-gutters>
          <v-col v-for="(i, index) in cards" :key="index" cols="6" sm="4">
            <v-card class="ma-5" max-width="400">
              <v-card-title class="text-wrap">{{ i.title }}</v-card-title>
              <v-card-text>
                {{ i.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
          говорят сами за себя. Мы не подводим своих клиентов, всегда прибываем
          по первому звонку и в кратчайшее время. Наша команда превосходно
          оснащена, мы располагаем отличным автопарком, позволяющим оперативно
          реагировать на сигналы, современной технической базой, в том числе мы
          оказываем услуги по установке охранных сигнализаций и «Тревожных
          кнопок».
        </div>
        <div style="padding-bottom: 100px">
          <v-card variant="tonal">
            <v-row no-gutters justify="space-around">
              <v-card max-width="400" class="d-flex flex-column align-center">
                <v-icon
                  style="font-size: 200px"
                  icon="mdi-shield-account"
                ></v-icon>
                <v-card-text class="why-me__text"> 100 </v-card-text>
                <v-card-actions>
                  <v-btn>ШТАТ КВАЛИФИЦИРОВАННЫХ СОТРУДНИКОВ</v-btn>
                </v-card-actions>
              </v-card>

              <v-card max-width="400" class="d-flex flex-column align-center">
                <v-icon style="font-size: 200px" icon="mdi-domain"></v-icon>
                <v-card-text class="why-me__text"> 20 </v-card-text>
                <v-card-actions>
                  <v-btn>Компаний на обслуживании</v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-card>
        </div>
      </div>
    </div>

    <div style="background: #f5f5f5" class="ptb-100">
      <div class="fill-height container">
        <v-row no-gutters>
          <v-col>
            <div class="company__title pl-1">Партнеры</div>
            <div class="pl-2 mt-4">С какими компаниями мы работаем</div>
            <v-btn color="error" size="x-large" class="mt-6"
              >Оставить заявку</v-btn
            >
          </v-col>
          <!-- <v-col>
            <v-carousel hide-delimiters>
              <v-carousel-item>
                <div class="list-column">
                  <div class="list-column__field">
                    <v-card
                      max-width="400"
                      class="d-flex flex-column align-center"
                    >
                      <v-img :src="delko" width="300"> </v-img>
                    </v-card>
                  </div>
                  <div class="list-column__field">
                    <v-card
                      max-width="400"
                      class="d-flex flex-column align-center"
                    >
                      <v-img :src="delko" width="300"> </v-img>
                    </v-card>
                  </div>
                  <div class="list-column__field">
                    <v-card
                      max-width="400"
                      class="d-flex flex-column align-center"
                    >
                      <v-img :src="delko" width="300"> </v-img>
                    </v-card>
                  </div>
                  <div class="list-column__field">
                    <v-card
                      max-width="400"
                      class="d-flex flex-column align-center"
                    >
                      <v-img :src="delko" width="300"> </v-img>
                    </v-card>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col> -->
        </v-row>
        <!-- <div class="company__title ptb-100 pl-1 text-center">Лицензии</div>
        <n-image-group>
          <n-space justify="center">
            <n-image width="500" :src="Lic_1" />
            <n-image width="500" :src="Lic_2" />
          </n-space>
        </n-image-group> -->
      </div>
    </div>

    <div style="background: #f5f5f5">
      <YandexMap :coordinates="coordinates" :controls="controls" :zoom="18">
        <YandexMarker :coordinates="coordinates" :marker-id="123" />
      </YandexMap>
    </div>
  </div>
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
