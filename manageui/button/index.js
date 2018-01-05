import Button from './src/button';

/*button*/
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
