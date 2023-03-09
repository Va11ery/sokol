import { boot } from 'quasar/wrappers';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import 'vuetify/styles'
export default boot(({ app }) => {

  const vuetify = createVuetify({
    components,
  })

  // Set i18n instance on app
  app.use(vuetify);
});
