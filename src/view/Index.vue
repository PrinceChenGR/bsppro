
<template>
<div class='app'>
    <avue-data-tabs :option="option"></avue-data-tabs>
</div>
</template>

<script>
export default {
data() {
    return {
      option: {
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '结算次数',
            subtitle: '实时',
            count: 5,
            allcount: 10222,
            text: '今日前台结算的次数',
            color: 'rgb(27, 201, 142)',
            key: '结算'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '接车次数',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '今日接车的次数',
            color: 'rgb(230, 71, 88)',
            key: '接车'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '维修台次',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '今日维修的台次',
            color: 'rgb(178, 159, 255)',
            key: '维修'
          }
        ]
      }
    }
//这里存放数据
return {

};
},
//计算属性
computed: {},
//方法集合
methods: {

},
//挂载完成（可以访问DOM元素）
mounted() {

},
//监控data中的数据变化
watch: {

}
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/


</style>