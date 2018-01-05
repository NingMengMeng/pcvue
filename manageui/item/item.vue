<template>
  <div class="clearfix">
    <div :style="Object.assign({float: 'left', width: '120px', padding: '10px'}, this.titleStyle)">{{title}}</div>
    <div :style="Object.assign({float: 'left', width: 'calc(100% - 120px)', padding: '10px'}, this.contentStyle)">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manageItem',
  props: ['title', 'titleStyle', 'contentStyle'],
}
</script>
<style>
  div{box-sizing: border-box;}
</style>
