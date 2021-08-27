import Vue from 'vue';
import Vuetify from 'vuetify';

import { options } from '@/plugins/vuetify';

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/storybookOverrides.scss'

Vue.use(Vuetify);
const vuetify = new Vuetify(options);

export const decorators = [
  (story, context) => {
    const wrapped = story(context);

    return Vue.extend({
      vuetify,
      components: { wrapped },
      template:
        '<v-app><wrapped /></v-app>',
    });
  },
];
