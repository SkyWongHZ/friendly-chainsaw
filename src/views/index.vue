<template>
    <div>
        <div class="fixed-bar">
            <mu-appbar>
                <div class="logo" slot="left"></div>
                <mu-icon-button icon='search'  slot="right"/>
            </mu-appbar>
            <mu-tabs  class="view-tabs"  @change="changeHandle" :value="activeTab">
                <mu-tab value="popular" title="时下流行" />
                <mu-tab value="singList" title="歌单"/>
                <mu-tab value="rankingList" title="排行榜"/>
                <mu-tab value="hotSinger" title="热门歌手"/>
            </mu-tabs>
        </div>
        <!--<button @click="testClick" style="margin-top: 10rem">-->
          <!--测试-->
        <!--</button>-->

        <div class="default-view">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

    </div>

</template>

<style lang="less">
    @import "../assets/theme.less";
    .logo {
        width: 150px;
        height: 48px;
        background: url("../../static/logo.png") no-repeat left center;
        background-size: cover;
    }
    .view-tabs {
        background-color: #fff;
        color: rgba(0,0,0,.87);
        >.mu-tab-link {
          color: rgba(102,102,102,1);
        }
        >.mu-tab-active{
          color: @primaryColor;
        }
    }
    .fixed-bar {
        position: fixed;
        width: 100%;
        top:0;
        left: 0;
        z-index: 15;
    }
    .default-view {
        margin-top: 104px;
    }
    .view {
        margin-bottom: 2.3rem;
    }
</style>

<script>
  export default {
    data(){
      return{
        activeTab:'popular'
      }
    },
    methods:{
      changeHandle(val){
          this.activeTab=val
          console.log(val)
          this.$router.push({path:val});
      },
    }

  }
</script>
