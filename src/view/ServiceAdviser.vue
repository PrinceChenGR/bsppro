<template>
<div class='app'>
    <avue-crud :data="data" :option="option" @row-save="rowSave" @row-del="rowDel"></avue-crud>
</div>
</template>

<script>
export default {
data() {
//这里存放数据
return {
    data:[
        {
            id:1,
            name:'张三',
            sex:'男'
          }, {
            id:2,
            name:'李四',
            sex:'女'
          }
    ],
    option:{
        
        column:[
             {
              label:'车牌号',
              prop:'cph'
            }, {
              label:'进厂日期',
              prop:'jcrq'
            },{
                label:'完工日期',
                prop:'wgrq'
            },{
                label:'维修金额',
                prop:'wxje'
            }
        ]
    }

};
},
//计算属性
computed: {},
//方法集合
methods: {
    rowSave(form,done,loading){
        this.$message.success('模拟网络请求')
        setTimeout(()=>{
          this.$message.success('关闭按钮等待');
          loading();
        },1000)
        setTimeout(()=>{
          this.$message.success('新增数据'+ JSON.stringify(form));
          done(form);
        },2000)
      },
      rowDel(form,index,done){
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          done(form)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => { });
      }
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