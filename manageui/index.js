import Button from './button/index.js';
import HeaderInfo from './headerInfo/index.js';
import Frame from './frame/frame.vue';
import Form from './form/src/form.vue';
import FormItem from './form/src/form-item.vue';
import Input from './input/src/input.vue';
import DashBack from './dash/dashback.vue';
import Item from './item/item.vue';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Button,
  HeaderInfo,
  Frame,
  Form,
  FormItem,
  Input,
  DashBack,
  Item,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

// module.exports = {
//   CollapseTransition,
//   Button
// };
export {
    Button,
    HeaderInfo,
    Frame,
    Form,
    FormItem,
    Input,
    DashBack,
    Item
};
