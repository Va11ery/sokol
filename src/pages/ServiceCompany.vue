<template>
  <div>
    <div class="fill-height container">
      <div class="title-3vw ptb-100 text-white">Услуги</div>

      <q-list bordered padding dark separator>
        <q-item v-for="(i, index) in items" :key="index">
          <q-item-section avatar>
            <q-avatar :icon="i.icon" size="100px" font-size="52px"> </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="list-title">{{ i.title }}</q-item-label>
            <q-item-label class="list-subtitle">{{ i.text }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import OxranaObject from '../assets/oxrand_obj.jpg';
const items = [
  {
    title: 'Охрана объектов',
    text: 'Охрана недвижимости, строительных объектов, промышленных объектов',
    icon: 'security',
  },
  {
    title: 'Сопровождение грузов',
    text: 'Ж/д способом, автомобилем, самолетом, сопровождение фур',
    icon: 'airport_shuttle',
  },
  {
    title: 'Личная охрана',
    text: 'Явная личная охрана, скрытая личная охрана, телохранители',
    icon: 'admin_panel_settings',
  },
  {
    title: 'Охрана мероприятий',
    text: 'Внешняя охрана, внутренняя охрана, комплексная охрана',
    icon: 'groups_2',
  },
  {
    title: 'Почасовая охрана',
    text: 'Охрана объекта на сутки, охрана объекта на день: на ночь',
    icon: 'watch_later',
  },
  {
    title: 'Перевозка лекарственных и психотропных веществ',
    text: 'Охранная организация имеет лицензию на перевозку лекарственных средств и психотропных веществ',
    icon: 'local_shipping',
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
  font-size: 20px;
  line-height: 24px;
}
</style>
