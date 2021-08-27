import components from './components';
import audio from './utils/audio';

const ComponentLibrary = {
  install(Vue, options) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });

    // Add some commonly used sounds throughout the company's products
    // and make them available via 'this.$sounds'
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$sounds = audio;

    if (options) {
      // This is needed and supported by the Vue object.
      // If we used typescript it would allow this.
      // eslint-disable-next-line no-param-reassign
      Vue.prototype.$vd = options;
    }
  },
};

// If this is ever loaded from a CDN, then it will work.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}

export default ComponentLibrary;
