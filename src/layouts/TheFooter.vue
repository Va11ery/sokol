<template>
  <v-footer class="text-center d-flex flex-column justify-space-between">
    <div class="d-flex">
      <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
    </div>

    <div></div>
    <div class="text-h6">Охранная организация Cокол</div>
  </v-footer>
</template>

<script lang="ts" setup>
//
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];
const links = ['Услуги', 'Контакты'];
</script>
