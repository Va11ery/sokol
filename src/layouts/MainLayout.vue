<template>
  <q-layout view="lHh Lpr lFf">
    <q-btn @click.prevent="$router.push({ name: 'about' })">about</q-btn>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup></script>
