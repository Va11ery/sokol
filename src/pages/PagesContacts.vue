<template>
  <div class="fill-height container">
    <div class="title-3vw ptb-100 text-white">Контакты</div>

    <q-list padding class="rounded-borders">
      <div v-for="i in items" :key="i.title" class="q-mb-xl">
        <q-item class="" clickable :href="i.link">
          <q-item-section>
            <q-item-label class="item-label q-pb-sm text-white">{{
              i.title
            }}</q-item-label>
            <q-item-label class="item-caption text-orange" caption>
              {{ i.text }}
            </q-item-label></q-item-section
          >
        </q-item>
      </div>
    </q-list>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: 'Санкт-Петербург',
    text: '+7 812 224 25 77',
    link: 'tel:+78122242577',
  },
  {
    title: 'Адрес',
    text: ' Адрес: 195248, город Санкт-Петербург, вн.тер. г. Муниципальный Округ Большая Охта, ул Большая Пороховская, дом 61, литера А, помещение 1-Н Ч.ПОМЕЩ. 2',
  },
  {
    title: 'Почта',
    text: 'op.sokol@bk.ru',
    link: 'mailto:op.sokol@bk.ru',
  },
];
</script>

<style lang="scss" scoped>
.list-title {
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  padding-bottom: 10px;
  font-family: 'Monserat', sans-serif !important;
}
.list-item {
  margin-bottom: 60px;
}
.list-subtitle {
  font-size: 24px;
  line-height: 24px;
}

.item-label {
  font-weight: bold;
  font-size: 30px;
}
.item-caption {
  font-size: 26px;
  font-weight: 600;
}
@media (max-width: 1200px) {
  .adaptive-title {
    font-size: 45px !important;
    line-height: 45px !important;
  }
}
</style>
