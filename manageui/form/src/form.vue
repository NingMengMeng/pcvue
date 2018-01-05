<template>
  <form class="el-form" :class="[
    labelPosition ? 'el-form--label-' + labelPosition : '',
    { 'el-form--inline': inline }
  ]">
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'ElForm',

    componentName: 'ElForm',

    props: {
      model: Object,
      rules: Object,
      labelPosition: String,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      },
      inline: Boolean,
      showMessage: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      rules() {
        this.validate();
      }
    },
    data() {
      return {
        fields: [],
        validResults: []
      };
    },
    created() {
      this.$on('el.form.addField', (field) => {
        if (field) {
          this.fields.push(field);
        }
      });
      /* istanbul ignore next */
      this.$on('el.form.removeField', (field) => {
        if (field.prop) {
          this.fields.splice(this.fields.indexOf(field), 1);
        }
      });
    },
    mounted() {
      this.$nextTick(()=> {
        this.validateAll();
      })
    },
    methods: {
      resetFields() {
        this.fields.forEach(field => {
          field.resetField();
        });
      },
      validateAll() {
        this.validResults = []; //添加一行，删掉一行，validResults重新更新
        this.fields.map((field, fieldIndex) => {
          field.validate('blur', () => {}, true);
        })
      },
      validate(callback) {
        let valid = true;
        let count = 0;
        // 如果需要验证的fields为空，调用验证时立刻返回callback
        if (this.fields.length === 0 && callback) {
          callback(true);
        }
        this.fields.forEach((field, index) => {
          field.validate('', errors => {
            this.validResults[index] = !errors;
            if (errors) {
              valid = false;
            }
            if (typeof callback === 'function' && ++count === this.fields.length) {
              callback(valid);
            }
          });
        });
      },
      validateField(prop, error) {
        //var field = this.fields.filter(field => field.prop === prop)[0];
        //if (!field) { throw new Error('must call validateField with valid prop string!'); }
        //field.validate('', cb);
        this.fields.map((field, index) => {
          if(field.prop === prop) {
            if(!field.fieldValue) {
              this.validResults[index] = false;
            }else {
              this.validResults[index] = !error;
            }
          }
        })
        var falseArr = this.validResults.filter((result) => {
          return result === false
        })

        if(falseArr.length > 0) { //有假的就设置
          this.$emit('goInvalid');
        }else{
          this.$emit('goValid');
        }
      }
    }
  };
</script>
