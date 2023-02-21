
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
            title: '分类统计',
            subtitle: '实时',
            count: 7993,
            allcount: 10222,
            text: '当前分类总记录数',
            color: 'rgb(27, 201, 142)',
            key: '类'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '附件统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前上传的附件数',
            color: 'rgb(230, 71, 88)',
            key: '附'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '文章统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(178, 159, 255)',
            key: '评'
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
@import '@smallwei/avue/lib/index.css';

</style>