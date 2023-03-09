<template>
  <q-layout view="lHh Lpr lFf">
    <v-app>
      <router-view />
    </v-app>
  </q-layout>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue';
import TheFooter from './TheFooter.vue';
</script>
