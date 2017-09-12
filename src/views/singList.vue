<template>
  <div class="wrapper playList">
    <div class="content">
      <div class="title">全部歌单 </div>
      <mu-flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">
        <mu-flexbox-item basis="40%" class="list-item" v-for="item in playlists">
          <router-link to="">
            <div class="list-bar">{{item.playCount}}</div>
            <img class="list-img img-response" :src="item.coverImgUrl + '?param=300y300'">
            <div class="list-name">{{item.name}}</div>
          </router-link>
        </mu-flexbox-item>
      </mu-flexbox>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../assets/theme.less";
  .img-response {
    max-width: 100%;
    height: auto;
  }
  .wrapper {
    width: 100%;
    padding:0 10px;
    height: 28rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .title {
    margin: .2rem 0 .3rem 0;
    padding-left: .2rem;
    border-left: .15rem solid @primaryColor;
  }
  .list {
    &-bar {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      width: 100%;
      text-align: right;
      padding: 2px 5px;
      background-color: rgba(0,0,0,.2);
    }
    &-item {
      position: relative;
      margin: 0 5px 5px 10px;
      a {
        color:rgba(0,0,0,.87);
      }
    }
    &-img {
      width: 8rem;
      height: 8rem;
    }
    &-img[lazy=loading] {
      background: url('../../static/default_cover.png') no-repeat;
      background-size: cover;
    }

    &-name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
</style>
<script>
  import api from "../api"
  export default{
      data(){
        return {
          list:[],
          offset:0,
          loading: false,
          scroller: null
        }

      },
      created(){
            this.get()
      },
      mounted () {
        this.scroller = this.$el
      },
      methods: {
        loadMore () {
          this.loading = true
          setTimeout(() => {
            for (let i = 0; i < this.list; i++) {
              this.list.push('item' + (i + 1))
            }
            this.num += 10
            this.loading = false
          }, 2000)


            this.$http.get(api.getPlayListByWhere('全部', 'hot', this.offset, true, 6)).then(response => {
              // success callback
              total=response.data.total;
              this.list=response.data.playlists
              console.log('sss')
            }, response => {
              // error callback
              console.log('error')
            })

        },
      }
  }
</script>
