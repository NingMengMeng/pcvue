<template>
  <div class="handle-box">
    <el-select v-model="selectCate" placeholder="筛选省份" class="handle-select mr10" v-if="!!hasSelect" @change="changeSelect">
        <el-option :label="text" :value="text" :key="tIndex" v-for="(text, tIndex) in types"></el-option>
    </el-select>
    <el-input v-model="selectWord" :placeholder="placeHolder" class="handle-input mr10" v-if="!!hasSelect"></el-input>
    <el-date-picker
      v-model="selectDate"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      v-if="!!hasTime">
    </el-date-picker>
    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
  </div>
</template>
<script>
export default {
  name: 'headerinfo',
  props: ['hasTime', 'hasSelect', 'types'],
  data() {
    return {
      selectCate: this.types[0],
      selectWord: '',
      selectDate: '',
      placeHolder: '请输入' + this.types[0]
    }
  },
  methods: {
    search() {
      let param = {
        type: this.selectCate,
        text: this.selectWord,
        time: this.selectDate
      }
      if(this.hasTime && !this.hasSelect) {
        delete param.type;
        delete param.text;
      }else if(this.hasSelect && !this.hasTime) {
        delete param.time;
      }

      this.$emit('search', param)
    },
    changeSelect(val) {
      this.placeHolder = '请输入' + val;
    }
  }
}
</script>
<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>
