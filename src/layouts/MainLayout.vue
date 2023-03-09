<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue';
import TheFooter from './TheFooter.vue';
</script>
