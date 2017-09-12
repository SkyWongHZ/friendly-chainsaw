<template>
  <div>
    <div class="loading-wrapper" v-show="isloading">
      <div class="loading"></div>
      <div class="loading-txt">正在加载中</div>
    </div>
    <div class="container" v-show="!isloading">
      <div id="slider">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide ><img src="/static/banner1.jpg" class="banner-item"  alt=""></swiper-slide>
          <swiper-slide ><img src="/static/banner2.jpg" class="banner-item"  alt=""></swiper-slide>
          <swiper-slide ><img src="/static/banner3.jpg" class="banner-item"  alt=""></swiper-slide>
          <swiper-slide ><img src="/static/banner4.jpg" class="banner-item"  alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
      </div>
      <div class="wrapper">
        <div class="g-title song-list">推荐歌单 <router-link to="singList">更多></router-link></div>
        <mu-flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">
          <mu-flexbox-item basis="28%" class="item" v-for="item in playLists">
            <router-link to="">
              <div class="bar">{{item.playCount}}</div>
              <img class="item-img img-response" :src="item.coverImgUrl + '?param=230y230'" lazy="loading">
              <div class="item-name">{{item.name}}</div>
            </router-link>
          </mu-flexbox-item>
        </mu-flexbox>

        <!--<div class="g-title song-list">推荐歌单 <router-link :to="{path: '/index/songList'}">更多></router-link></div>-->
        <!--<mu-flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">-->
          <!--<mu-flexbox-item basis="28%" class="item" :key="item.id" v-for="item in playLists">-->
            <!--<router-link :to="{name: 'playListDetail',params: { id: item.id, name: item.name, coverImg: item.coverImgUrl, creator: item.creator, count: item.playCount, desc: item.description }}">-->
              <!--<div class="bar">{{item.playCount | formatCount}}</div>-->
              <!--<img class="item-img img-response" :src="item.coverImgUrl + '?param=230y230'" lazy="loading">-->
              <!--<div class="item-name">{{item.name}}</div>-->
            <!--</router-link>-->
          <!--</mu-flexbox-item>-->
        <!--</mu-flexbox>-->

        <div class="g-title mv">推荐MV  <router-link to="">更多></router-link></div>
        <mu-flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">
          <mu-flexbox-item basis="40%" class="mv-item">
            <img class="img-response" src="http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170">
            <div class="mv-name">Skin to sking</div>
            <div class="mv-author">鹿晗</div>
          </mu-flexbox-item>
          <mu-flexbox-item basis="40%" class="mv-item">
            <img class="img-response"  src="http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170">
            <div class="mv-name">Skin to sking</div>
            <div class="mv-author">鹿晗</div>
          </mu-flexbox-item>
          <mu-flexbox-item basis="40%" class="mv-item">
            <img class="img-response" src="http://p3.music.126.net/DNlE0AUQdXci4XaQaxsHPQ==/18643319162278619.jpg?param=300y170">
            <div class="mv-name">Skin to skingSkin to</div>
            <div class="mv-author">鹿晗</div>
          </mu-flexbox-item>
          <mu-flexbox-item basis="40%" class="mv-item">
            <img class="img-response"  src="http://p3.music.126.net/DNlE0AUQdXci4XaQaxsHPQ==/18643319162278619.jpg?param=300y170">
            <div class="mv-name">Skin to sking</div>
            <div class="mv-author">鹿晗</div>
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .img-response {
    max-width: 100%;
    height: auto;
  }
  .wrapper {
    padding: 0 5px;
  }
  // 通用的标题样式
  .g-title {
    padding-left: 25px;
    color: #333;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    a {
      float: right;
      font-size: 12px;
      color: #666;
    }
  }
  // banner样式
  .banner-item {
    width: 100%;
    height: 7.4rem;
    background: url('../../static/banner-item-load.png') no-repeat;
    background-size: cover;
  }

  // 推荐歌单
  .song-list {
    background: url("../../static/aei.png") no-repeat left center;
    background-size: 20px 20px;
  }
  .item {
    position: relative;
    margin: 0 5px 5px 10px;
    height: 100%;
    a {
      color: rgba(0, 0, 0, 0.87);
    }
    .bar {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      width: 100%;
      text-align: right;
      padding: 2px 5px;
      background-color: rgba(0,0,0,.2);
    }

    &-img {
      min-width:5rem;
      min-height: 5rem;
    }

    &-img[lazy=loading] {
      background: url('../../static/default_cover.png') no-repeat;
      background-size: cover;
    }

    &-name {
      overflow : hidden;
      font-size: 12px;
      height:2.2rem;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .mv {
    background: url("../../static/aee.png") no-repeat left center;
    background-size: 20px 20px;
    &-name {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    &-item {
      position: relative;
      margin: 0 5px 5px 10px;
    }
    &-author {
      font-size: 12px;
      color: #666;
    }
  }
  .loading {
    position: absolute;
    top: 0;
    left: 50%;
    background: #fff;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 70%;
    margin-left: -1.25rem;
    background: url('../../static/rage_loading.png') no-repeat;
    background-size: cover;
    -webkit-animation: rotating 5s  linear infinite;
    animation: rotating 5s linear infinite;
  }
  .loading-txt {
    position: absolute;
    top:0;
    color: #4a4a4a;
    margin-top: 87%;
    width: 100%;
    text-align:center;
  }

  @keyframes rotating {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import api from '../api'
  export  default{
      name: 'carrousel',
      data(){
          return{
            swiperOption: {
              // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              notNextTick: true,
              // swiper configs 所有的配置同swiper官方api配置
              autoplay: 3000,
              // direction : 'vertical',
              effect:"coverflow",
              grabCursor : true,
              setWrapperSize :true,
              // autoHeight: true,
              // paginationType:"bullets",
              pagination : '.swiper-pagination',
              paginationClickable :true,
              prevButton:'.swiper-button-prev',
              nextButton:'.swiper-button-next',
              // scrollbar:'.swiper-scrollbar',
              mousewheelControl : true,
              observeParents:true,
            },
            isloading:false,
            playLists:[]
          }
      },
      components: {
        swiper,
        swiperSlide
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },



      created() {
        this.get();
      },
      mounted() {
        // you can use current swiper instance object to do something(swiper methods)
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(1, 1000, false)
      },



      methods:{
        get(){
            this.$http.get(api.getPlayListByWhere('全部', 'hot', 0, true, 6)).then(response => {
              // success callback
              this.playLists=response.data.playlists
              console.log('success')
              console.log(response.data.playlists)
            }, response => {
              // error callback
              console.log('error')
            })
        }
      }
  }
</script>
