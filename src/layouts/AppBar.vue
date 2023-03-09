<template>
  <q-toolbar class="text-white" style="background-color: #3c435c">
    <q-btn
      class="flex"
      style="cursor: pointer"
      @click.prevent="$router.push({ name: 'home' })"
    >
      <q-avatar size="65px">
        <q-img alt="Avatar" :src="logo"></q-img>
      </q-avatar>
      <q-toolbar-title class="app-bar-title flex items-center">
        <div>ОО Сокол</div>
      </q-toolbar-title>
    </q-btn>

    <q-space />

    <q-list class="flex">
      <q-item
        class="q-ma-sm"
        v-for="item in items"
        :key="item.link"
        :to="{ name: item.link }"
        active-class="my-menu-link"
        exact
      >
        <q-item-section>{{ item.text }}</q-item-section>
      </q-item>
    </q-list>
  </q-toolbar>
</template>
<script lang="ts" setup>
import logo from 'assets/logo.png';
const items = [
  { text: 'О компании', icon: 'mdi-clock', link: 'about' },
  { text: 'Услуги', icon: 'mdi-account', link: 'service' },
  { text: 'Клиенты', icon: 'mdi-flag', link: 'clients' },
  { text: 'Команда', icon: 'mdi-flag', link: 'teams' },
  { text: 'Контакты', icon: 'mdi-flag', link: 'contacts' },
];
</script>
<style lang="scss" scoped>
.app-bar-title {
  div {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    width: max-content;
    max-width: 100%;
    background: linear-gradient(
      121.57deg,
      #ffffff 18.77%,
      rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.my-menu-link {
}
</style>
