<template>
  <v-app>
    <default-bar />
    <v-main style="min-height: calc(100vh)">
      <router-view />
    </v-main>

    <the-footer />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue';
import TheFooter from './TheFooter.vue';
</script>
