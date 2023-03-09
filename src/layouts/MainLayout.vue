<template>
  <v-app>
    <default-bar />

    <router-view />

    <the-footer />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue';
import TheFooter from './TheFooter.vue';
</script>
