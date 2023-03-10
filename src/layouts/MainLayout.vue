<template>
  <q-layout view="lHh Lpr lFf">
    <AppBar />
    <n-drawer v-model:show="store.drawer" style="background-color: #3c435c">
      <n-drawer-content
        header-style="color: white"
        class="text-white"
        closable
        title="Сокол"
        style="padding: 0px"
      >
        <q-list class="text-white">
          <q-item class="q-mb-sm" clickable v-ripple to="/about" exact>
            <q-item-section>О компании</q-item-section>
          </q-item>

          <q-item class="q-mb-sm" clickable v-ripple to="/service" exact>
            <q-item-section>Услуги</q-item-section>
          </q-item>
          <q-item class="q-mb-sm" clickable v-ripple to="/clients" exact>
            <q-item-section>Клиенты</q-item-section>
          </q-item>
          <q-item class="q-mb-sm" clickable v-ripple to="/teams" exact>
            <q-item-section>Команда</q-item-section>
          </q-item>
          <q-item class="q-mb-sm" clickable v-ripple to="/contacts" exact>
            <q-item-section>Контакты</q-item-section>
          </q-item>
        </q-list>
      </n-drawer-content>
    </n-drawer>
    <q-page-container>
      <q-page style="min-height: 100vh">
        <router-view />
      </q-page>
    </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppBar from './AppBar.vue';
import TheFooter from './TheFooter.vue';
import { useLayoutStore } from 'stores/example-store';
import { NDrawer, NDrawerContent } from 'naive-ui';
const store = useLayoutStore();

const drawerLeft = ref(false);
</script>
