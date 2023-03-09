<template>
  <div class="fill-height container">
    <div class="title-3vw ptb-100">Контакты</div>

    <v-list lines="one">
      <v-list-item
        v-for="item in items"
        :value="item"
        :key="item.title"
        class="list-item"
        @click="openLink(item.link)"
      >
        <v-list-item-title class="list-title">
          {{ item.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="list-subtitle">
          {{ item.text }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "Почта",
    text: "test@mail.ru",
  },
  {
    title: "Телефон",
    text: "+711111111",
  },
  {
    title: "Адрес",
    text: "Сызранская улица, 16",
    link: "https://yandex.ru/maps/2/saint-petersburg/?from=api-maps&ll=30.335739%2C59.877543&mode=routes&origin=jsapi_2_1_79&rtext=~59.877543%2C30.335739&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQ0MjQ2MRJQ0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KHRi9C30YDQsNC90YHQutCw0Y8g0YPQu9C40YbQsCwgMTYiCg2Wr%2FJBFZuCb0I%3D&z=18",
  },
];
const openLink = (link: any) => {
  if (link) {
    window.open(link);
  }
};
</script>

<style lang="scss" scoped>
.list-title {
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  padding-bottom: 10px;
  font-family: "Monserat", sans-serif !important;
}
.list-item {
  margin-bottom: 60px;
}
.list-subtitle {
  font-size: 24px;
  line-height: 24px;
}
</style>
