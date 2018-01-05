<style src="./frame.css" scoped></style>

<template>
  <div class="frame">
      <div class="frame-title clearfix">
        <div class="left">{{title}}</div>
        <div v-if="!!btns" class="clearfix">
          <div class="right" :key="bIndex" v-for="(btn, bIndex) in btns">
            <el-button type="text" size="small" @click="clickBtn(bIndex)" style="margin-right: 10px">{{btn}}</el-button>
          </div>
        </div>
      </div>
      <div class="frame-content">
        <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  name: 'commonFrame',
  props: ['title', 'btns', 'item'],
  methods: {
    clickBtn(bIndex) {
      this.$emit('clickBtn', bIndex, this.item);
    }
  }
}
</script>
