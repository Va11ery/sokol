import { boot } from 'quasar/wrappers';
import naiveUI from 'naive-ui';
export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(naiveUI);
});
