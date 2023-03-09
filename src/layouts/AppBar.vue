<template>
  <v-app-bar :elevation="0" color="#3C435C" class="text-white">
    <q-btn
      class="flex"
      style="cursor: pointer"
      @click.prevent="$router.push({ name: 'home' })"
    >
      <v-avatar size="65px">
        <v-img alt="Avatar" src=""></v-img>
      </v-avatar>
      <v-app-bar-title class="app-bar-title d-flex align-center">
        <div>ОО Сокол</div>
      </v-app-bar-title>
    </q-btn>

    <template v-slot:append>
      <!-- <q-list bordered padding class="flex">
        <q-item
          v-for="item in items"
          :key="item.link"
          :to="{ name: item.link }"
          exact
        >
          <q-item-section>{{ item.text }}</q-item-section>
        </q-item>
      </q-list> -->
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
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
