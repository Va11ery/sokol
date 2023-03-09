<template>
  <div style="background: #3c435c">
    <div class="fill-height container">
      <div class="title-3vw ptb-100 text-white">О компании</div>

      <div class="title-3vw ptb-100 text-white">Лицензии</div>

      <n-image-group>
        <n-space>
          <n-image width="500" :src="Lic_1" />
          <n-image width="500" :src="Lic_2" />
        </n-space>
      </n-image-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NImageGroup, NSpace, NImage } from 'naive-ui';
import Lic_1 from 'assets/lic_1.png';
import Lic_2 from 'assets/lic_2.png';
</script>
