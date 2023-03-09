<template>
  <div class="fill-height container">
    <div class="title-3vw ptb-100">Услуги</div>
  </div>
</template>

<script lang="ts" setup>
const items = [
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
<style scoped lang="scss">
.list-title {
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  padding-bottom: 10px;
}
.list-subtitle {
  font-size: 24px;
  line-height: 24px;
}
</style>
