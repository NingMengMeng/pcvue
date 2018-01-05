<style src="./dashback.css" scoped></style>
<template>
  <div class="dashback">
      <div>
        <i class="el-icon-arrow-left head-trangle-left" @click="goBack" v-if="hasBack"></i>
        {{dashTitle}}
    </div>
    <div class="pos-absolute-right" style="top: -10px">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'head-back',
    props: ['dashTitle', 'hasBack'],
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

