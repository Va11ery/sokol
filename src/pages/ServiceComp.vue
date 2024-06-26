<template>
  <div class="container">
    <div class="ptb-100">
      <div
        class="card-oswald text-dark text-center adaptive-title text-white"
        style="
          font-size: 3vw;
          line-height: 3vw;
          font-weight: 700;
          text-transform: uppercase;
        "
      >
        {{ getInfo.title }}
      </div>
    </div>
    <q-card class="my-card" flat style="background-color: #3c435c">
      <q-card-section class="row q-col-gutter-xl q-pt-xl">
        <q-card-section class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <q-img class="rounded-borders" :src="getInfo.img" />
        </q-card-section>
        <q-card-section class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div class="item-caption text-white" v-html="getInfo.text"></div>
          <q-list v-if="getInfo.list">
            <q-item v-for="i in getInfo.list" :key="i" style="padding-left: 0">
              <q-item-section>
                <q-item-label class="item-caption text-white">{{
                  i.label
                }}</q-item-label>
                <q-item-label class="text text-white" caption>{{
                  i.text
                }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card-section>

      <q-card-actions class="q-pa-md">
        <q-btn outline color="secondary"  href="mailto:op.sokol@bk.ru" style="width: 300px" size="lg">
          Оставить заявку
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import sec from '../assets/sec.jpg';
import objects from '../assets/objects.jpg';
import oxrana_gruza from '../assets/oxrana_gruza.png';
import { useRoute } from 'vue-router';
const route = useRoute();
const data = [
  {
    path: 'objects',
    title: 'Охрана объектов',
    img: objects,

    text: 'Наша охранная организация предоставляет полный спектр услуг охраны объектов, чтобы обеспечить безопасность и защиту наших клиентов и их имущества. Наша команда профессионалов имеет многолетний опыт в области охраны, что позволяет нам предлагать индивидуальный подход к каждому клиенту и предоставлять наиболее эффективные решения. <br /><br /> Мы предлагаем следующие виды услуг охраны объектов: <br/> ',
    list: [
      {
        label: 'Физическая охрана объектов',
        text: 'Наши опытные охранники обеспечивают круглосуточный контроль доступа и мониторинг безопасности на территории объекта. Они проходят строгий отбор и обучение, чтобы гарантировать высокое качество предоставляемых услуг.',
      },
      {
        label: 'Техническая охрана',
        text: 'Мы предлагаем установку и настройку современных систем видеонаблюдения, систем контроля доступа и сигнализации, чтобы обеспечить максимальную безопасность на объекте. Наша команда специалистов готова проектировать, устанавливать и настраивать технические системы на любом объекте.',
      },
      {
        label: 'Комплексные услуги охраны',
        text: 'Мы можем предоставлять как физическую, так и техническую охрану объектов одновременно. Это позволяет нам обеспечивать комплексный подход к охране объекта и максимальную безопасность клиентов.',
      },
      {
        label: 'Дополнительные услуги',
        text: 'Наша охранная организация также предоставляет дополнительные услуги, такие как патрулирование территории, контроль посетителей и консультации по вопросам безопасности. Мы также можем предоставить охрану на мероприятиях и организовать экстренную помощь и эвакуацию в случае чрезвычайной ситуации.',
      },
      {
        text: 'Наша охранная организация гарантирует высокий уровень безопасности на всех объектах, с которыми мы работаем. Мы предоставляем индивидуальный подход к каждому клиенту, чтобы гарантировать наивысшее качество наших услуг. Свяжитесь с нами, чтобы узнать больше о том, как мы можем обеспечить безопасность вашего объекта.',
      },
    ],
  },
  {
    path: 'cargo',
    title: 'Сопровождение груза',
    img: oxrana_gruza,
    list: [
      {
        label: 'Консультации по безопасности груза',
        text: 'Мы проводим подробный анализ груза и его маршрута, чтобы определить потенциальные угрозы и риски. Наши специалисты помогут вам разработать оптимальный план доставки и сделают все необходимое, чтобы обеспечить безопасность груза.',
      },
      {
        label: 'Организация безопасности на маршруте',
        text: 'Наша команда организует максимальную безопасность на всем маршруте доставки. Мы проводим предварительную разведку маршрута, устанавливаем блок-посты, используем специальные транспортные средства и обеспечиваем постоянный мониторинг безопасности груза.',
      },
      {
        label: 'Охрана груза на складах',
        text: 'Мы организуем безопасное хранение и охрану вашего груза на складах, что позволяет избежать его утраты или повреждения.',
      },
      {
        label: 'Организация сопровождения в конфликтных зонах',
        text: 'Если груз должен быть доставлен в опасные или конфликтные зоны, мы обеспечим максимальную безопасность доставки, предоставляя охрану и сопровождение специальными транспортными средствами.',
      },
      {
        text: 'Мы гарантируем максимальную безопасность и надежность доставки груза. Наша команда профессионалов предоставляет индивидуальный подход к каждому клиенту, что позволяет нам предоставлять наиболее эффективные решения. Свяжитесь с нами, чтобы узнать больше о том, как мы можем обеспечить безопасную доставку вашего груза.',
      },
    ],
    text: 'Мы предоставляем профессиональное сопровождение груза, чтобы обеспечить его безопасную доставку в любую точку. Наша команда специалистов имеет многолетний опыт в области сопровождения грузов и обеспечивает высокий уровень безопасности и надежности доставки. <br /> <br/> Мы предлагаем следующие виды услуг сопровождения груза: <br />',
  },
  {
    path: 'personal',
    title: 'Личная охрана',
    img: sec,
    list: [
      {
        label: 'Охрана персонала',
        text: 'Мы предоставляем услуги охраны для персонала, которые позволяют обеспечить безопасность работников и предотвратить возможные угрозы со стороны посторонних',
      },
      {
        label: 'Охрана объектов',
        text: 'Наша команда охранников обеспечивает надежную защиту объектов, включая здания, склады и другие объекты.',
      },
      {
        label: 'Охрана мероприятий',
        text: 'Мы предоставляем услуги охраны для мероприятий, которые позволяют обеспечить максимальную безопасность гостей и участников мероприятий.',
      },
      {
        label: 'Личная охрана',
        text: 'Наша команда охранников предоставляет услуги личной охраны для физических лиц, включая защиту во время путешествий или при проведении деловых встреч.',
      },
      {
        text: 'Мы гарантируем максимальную безопасность и надежность при оказании услуг личной охраны. Наша команда профессионалов предоставляет индивидуальный подход к каждому клиенту, что позволяет нам предоставлять наиболее эффективные решения. Свяжитесь с нами, чтобы узнать больше о том, как мы можем обеспечить безопасность для вас и ваших близких.',
      },
    ],
    text: 'Мы предоставляем профессиональные услуги личной охраны, чтобы обеспечить максимальную безопасность наших клиентов. Наша команда опытных охранников обеспечивает высокий уровень безопасности и надежности для наших клиентов. <br /> <br /> Мы предлагаем следующие виды услуг личной охраны: <br />',
  },
  {
    path: 'events',
    title: 'Охрана мероприятий',
    img: objects,
    list: [
      {
        label: 'Физическая охрана',
        text: 'Наша команда охранников обеспечивает надежную защиту на мероприятиях любого масштаба, включая конференции, выставки, спортивные мероприятия и другие мероприятия.',
      },
      {
        label: 'Контроль доступа',
        text: 'Мы предоставляем услуги контроля доступа, которые позволяют убедиться в том, что только авторизованные лица имеют доступ на мероприятие.',
      },
      {
        label: 'Проверка на наличие запрещенных предметов',
        text: 'Наша команда проводит проверки на наличие запрещенных предметов, чтобы обеспечить максимальную безопасность на мероприятии.',
      },
      {
        label: 'Работа с массовыми скоплениями',
        text: ' Мы проводим контроль над массовыми скоплениями, чтобы предотвратить возможные происшествия и обеспечить безопасность гостей и участников.',
      },
      {
        text: 'Наша охранная организация гарантирует высокий уровень безопасности на всех объектах, с которыми мы работаем. Мы предоставляем индивидуальный подход к каждому клиенту, чтобы гарантировать наивысшее качество наших услуг. Свяжитесь с нами, чтобы узнать больше о том, как мы можем обеспечить безопасность вашего объекта.',
      },
    ],
    text: 'Мы предлагаем профессиональные услуги охраны мероприятий, чтобы обеспечить максимальную безопасность гостей и участников. Наша команда опытных охранников обеспечивает высокий уровень безопасности и надежности для наших клиентов. <br /> <br /> Мы предоставляем следующие виды услуг охраны мероприятий:',
  },
];
const getInfo = computed(
  () => data.filter((i) => i.path === route.name)[0] ?? ''
);
</script>

<style lang="scss" scoped>
.item-caption {
  font-size: 18px;
  font-weight: 500;
}
.text {
  font-size: 14px;
  font-weight: 500;
}
@media (max-width: 925px) {
  .adaptive-title {
    font-size: 45px !important;
    line-height: 45px !important;
  }
}
</style>
