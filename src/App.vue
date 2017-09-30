<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header';
  import goods from './components/goods/goods';

  const ERR_OK=0;
  export default{
    data: function(){
      return{
        seller:{ }
      }
    },
    created:function(){
       this.$http.get('/api/seller').then(function(res){
        res=res.body;
        if(res.errno==ERR_OK){
           this.seller=res.data;
        }
       })
    },
    components:{
      vHeader:header,
      goods
    }
  }
</script>

<style lang="stylus">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50; 
// }
@import "./common/stylus/mixin.styl";

*{
  margin: 0;
  padding: 0;
}
#app{
  .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    border-1px(rgba(7,17,27,0.1));
    .tab-item{
      flex:1;
      text-align center;
      &>a{
        display:block;
        font-size:14px;
        &.active{
          color:rgb(240,20,20);
        }
      }
    }
  }
}

</style>
