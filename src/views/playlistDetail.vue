<template>
    <div class="playList">
        <div class="fixed-title" :style="{'background': 'rgba(206, 61, 62,'+opacity+')'}">
            <mu-appbar>
                <mu-icon-button icon='arrow_back'  slot="left" @click="back" />
                <div class="play-title">
                    <div class="play-name"><span>{{fname}}</span></div>
                </div>
            </mu-appbar>
        </div>
        <div class="playlist-info">
            <div class="info-wrapper">
                <div class="info-gallery">
                    <span>{{playlist.playCount}}</span>
                    <img  :src="playlist.coverImgUrl+'?param=300y300'" alt="">
                </div>
                <div class="info-title">
                    <p class="titile">{{playlistName}}</p>
                    <p class="author">
                        <mu-avatar :src="playlist.creator.avatarUrl" slot="left"  :size="30" :iconSize="20"/>
                        <span>{{playlist.creator.nickname}}</span>
                    </p>
                </div>
            </div>
            <div class="bg-mask"></div>
            <div class="bg-player" id="backImg" :style="{'background-image':'url(' + playlist.coverImgUrl + '?param=300y300)'}" ></div>
        </div>
        <div class="playlist-holder">
            <div class="add-all">
                <mu-flat-button label="播放全部" class="demo-flat-button" icon="add_circle_outline" />
                <mu-divider/>
            </div>
            <div>
                <mu-circular-progress :size="40" class="center"  v-if="look"/>
                <mu-list  >
                    <div v-for="(item,index) in  list">
                        <mu-list-item :title="item.name" :describe="item.id" :describeText="item.ar[0].name">
                            <!--<p>{{item.name}}</p>-->
                            <span slot="left" class="indexStyle">{{index + 1}}</span>
                        </mu-list-item>
                        <mu-divider inset/>
                    </div>
                </mu-list>
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
    .fixed-title {
        position: fixed;
        top: 0;
        width: 100%;
        height: 56px;
        left: 0;
        z-index: 15;
    }

    // 修改默认的bar样式
    .mu-appbar {
        background-color: transparent;
    }
    .bar-line {
        display: block;
        bottom: 0 ;
        left: 0;
        display:block;
        width: 100%;
        height: 0.05rem;
        background: radial-gradient(#d3d3d3 -90%, transparent 100%);
    }
    .mu-paper-1 {
        box-shadow: none;
        > .mu-appbar-title {
            text-align: center;
            font-size: 14px;
        }
    }
    // 歌单信息
    .playlist-info {
        position: relative;
        padding: 60px .5rem 0 ;
        height: 10rem;
    }

    .info-wrapper {
        position: relative;
        z-index: 10;
        color: #fff;
        .info-gallery {
            position: relative;
            float: left;
            width: 6rem;
            overflow: hidden;
            span {
                position: absolute;
                display: block;
                padding-right: 5px;
                width: 100%;
                left: 0;
                top: 0;
                font-size: 12px;
                text-align: right;
                background: rgba(0,0,0,.35);
                z-index: 11;
            }
            img {
                max-width: 100%;
                height: auto;
            }
        }

        .info-title {
            float: left;
            width: 7.5rem;
            margin-left: 1rem;
            .title {
                font-size: 16px;
                word-wrap:normal;
            }
            .author {
                span {
                    overflow: hidden;
                    display: inline-block;
                    height: 30px;
                    text-overflow: ellipsis;
                    width: 5.4rem;
                    white-space: nowrap;
                    font-size: 14px;
                    vertical-align: top;
                    line-height: 30px;
                }
            }
        }
    }

    .playlist-holder {
        position: relative;
        background: #fff;
        z-index: 3;

        .add-all {
            padding-left: .4rem;
        }
    }

    // 列表样式
    .indexStyle {
        padding-left: 10px;
        font-size: 18px;
        font-weight: bolder;
    }
    .mu-item-title {
        white-space:nowrap;
        height: 1.7rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bg-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom right;
        filter: blur(40px);
         -webkit-filter: blur(40px);
        z-index: 1;
    }
    .bg-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #292a2b;
        background-color: rgba(0,0,0,.35);
        z-index: 2;
    }
    .center {
        display: block!important;
        margin: 10% auto 0;
    }
    .view {
        width:100%;
        margin-bottom:2.3rem;
    }
    .mu-item-title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 1.5;
    }
</style>
<script>
  import api from '../api'
  let storage=window.localStorage;
  let playlistName;
  export default{
    data(){
        return{
            fname:'歌单',
            playlist:[],
            list:[],
            playlistName:'',
            look:false,
            scrolled:false,
            opacity:0
        }
    },
    created(){
      this.get();
    },

    mounted(){
      console.log('playCount='+this.playlist.playCount);
      console.log(this.playlist)
      console.log(this.list)
      window.addEventListener('scroll',this.handleScroll);
    },
    updated(){
      playlistName= storage.getItem('playlistName')
      this.playlistName=playlistName
      console.log('playlistName='+playlistName)
    },
    destroyed(){
      console.log('组件销毁前')
      storage.removeItem('playlistName')
      this.playlistName=playlistName
    },
    methods:{
      back(){
          this.$router.go(-1);
      },
      get(){
        this.$http.get(api.getPlayListDetail(this.$route.params.id)).then((res) => {
            console.log('scboy')
            console.log(res)
            this.playlist=res.data.playlist
            this.list = res.data.playlist.tracks
            storage.setItem("playlistName",res.data.playlist.name);
            console.log(this.list)
        },err=>{
            console.log('err，断网喽')
        })
      },
      handleScroll(){
          if(window.scrollY>0){
            this.fname=this.playlistName;
            /*234-56,即positon:fixed跑过的长度*/
            this.opacity=window.scrollY/178;
            console.log('scrollY='+window.scrollY)
            console.log('opacity='+this.opacity)
          }else{
            this.fname='歌单'
            this.opacity=0;
          }
//        this.scrolled=window.scrollY>0;
////        alert('滚动时间触发了')
//          this.fname=this.playlistName;
      }
    }
  }
</script>
