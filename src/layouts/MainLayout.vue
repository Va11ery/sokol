<template>
  <q-layout view="lHh lpr lFf">
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
          <q-item class="q-mb-sm" clickable v-ripple to="/contacts" exact>
            <q-item-section>Контакты</q-item-section>
          </q-item>
          <q-btn flat label="Услуги">
            <q-menu transition-show="jump-down" transition-hide="jump-up">
              <q-list>
                <q-item clickable v-ripple :to="{ name: 'objects' }" exact>
                  <q-item-section class="item-label"
                    >Охрана объектов</q-item-section
                  >
                </q-item>
                <q-item clickable to="/services/cargo" exact>
                  <q-item-section class="item-label"
                    >Сопровождение грузов</q-item-section
                  >
                </q-item>
                <q-item clickable to="/services/personal" exact>
                  <q-item-section class="item-label"
                    >Личная охрана</q-item-section
                  >
                </q-item>
                <q-item clickable to="/services/events" exact>
                  <q-item-section class="item-label"
                    >Охрана мероприятий</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-list>
      </n-drawer-content>
    </n-drawer>

    <q-page-container style="padding-bottom: 0; background: #3c435c">
      <q-page>
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
const layoutScrollbarProps = {
  containerClass: 'document-scroll-container',
};
const tab = ref('');
</script>
