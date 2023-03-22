<template>
  <div>
    <div class="fill-height container">
      <div class="title-3vw ptb-100 text-white">О компании</div>

      <div class="text-white about-text">
        Мы осуществляем охранную деятельность с 2022 года. Наша команда состоит
        из опытных сотрудников, которая обеспечит надежную охрану вашей жизни, а
        также возьмет на себя ответственность за сохранение собственности,
        грузов, объектов, офисов, мероприятий и др. Команда «Сокол» применяет
        индивидуальный подход к каждому клиенту и действует на основании
        законодательства РФ.
      </div>

      <div class="title-3vw ptb-100 text-white">Лицензии</div>

      <div class="q-pb-xl">
        <n-image-group>
          <n-space>
            <n-image width="500" :src="Lic_1" />
            <n-image width="500" :src="Lic_2" />
          </n-space>
        </n-image-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NImageGroup, NSpace, NImage } from 'naive-ui';
import Lic_1 from 'assets/lic_1.png';
import Lic_2 from 'assets/lic_2.png';
</script>

<style lang="scss" scoped>
.about-text {
  font-size: 28px;
  line-height: 40px;
}
</style>
