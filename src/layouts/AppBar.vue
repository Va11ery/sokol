<template>
  <v-app-bar :elevation="0" color="#3C435C" class="text-white">
    <q-btn
      class="flex"
      style="cursor: pointer"
      @click.prevent="$router.push({ name: 'home' })"
    >
      <v-avatar size="65px">
        <v-img alt="Avatar" :src="logo"></v-img>
      </v-avatar>
      <v-app-bar-title class="app-bar-title d-flex align-center">
        <div>ОО Сокол</div>
      </v-app-bar-title>
    </q-btn>

    <template v-slot:append>
      <v-list density="compact" bg-color="#3C435C" class="d-flex text-white">
        <v-list-item
          class="ms-1"
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          link
          rounded
          :to="{ name: item.link }"
        >
          <!--        <template v-slot:prepend>-->
          <!--          <v-icon :icon="item.icon"></v-icon>-->
          <!--        </template>-->

          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    </template>
  </v-app-bar>
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

<style lang="scss">
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
</style>
