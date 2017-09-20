<template>
  <div class="foot">
    <div class="player-mini">
      <div class="mini-content" >
        <audio id="myAudio"></audio>
        <div class="cover" @click="popup()">
          <mu-circular-progress  :size="30" v-if="!isloading"/>
          <img class="xmplogo" :src="item.al.picUrl" v-show="isloading">
        </div>
        <div class="info">
          <div class="name xmpname">{{item.name}}</div>
          <div class="artist xmpartist">{{item.ar[0].name}}</div>
        </div>
        <div class="control">
          <mu-icon-button class="mini-btn player-list" />
          <mu-icon-button class="mini-btn player" @click="playSings"/>
          <mu-icon-button class="mini-btn next"/>
        </div>
        <div class="pro">
          <div class="pro-load proload" ></div>
          <div class="pro-play proplay" ></div> </div>
      </div>
    </div>
    <!--<BottomSheet ref="bottomSheet"></BottomSheet>-->
  </div>
</template>

<style lang="less" scopoed>
  @import "../assets/theme.less";
  .foot {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 998;
  }
  .player-mini {
    width: 100%;
    height: 2.3rem;
    position: relative;
    background-color: rgba(255,255,255,.9);
    color: #333333;
  }
  .player-mini .mini-content .cover {
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    float: left;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    background: ur('../../static/player-bar.png') no-repeat;
    background-size: cover;
  }
  .player-mini .mini-content .cover img {
    width: 100%;
    height: 100%;
  }
  .player-mini .mini-content .info {
    overflow: hidden;
    position: relative;
    width: 7rem;
    float: left;
    padding-top: 0.2rem;
    padding-left: .3rem;
  }
  .player-mini .mini-content .info .name {
    font-size: .7rem;
    line-height: 1rem;
  }
  .player-mini .mini-content .info .name, .player-mini .mini-content .info .artist {
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .player-mini .mini-content .info .artist {
    color: #8a8a8a;
    font-size: .6rem;
  }
  .player-mini .mini-content .info .name, .player-mini .mini-content .info .artist {
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .player-mini .mini-content .info .xmpartist {

  }
  /*按钮*/
  .control {
    float: right;
  }
  .control .mini-btn {
    width: 2rem;
    height: 2rem;
  }
  .player-mini .mini-content .info .control {
    position: absolute;
    height: 100%;
    top: 50%;
    margin-top: -1rem;
    right: 0;
  }

  /*列表按钮*/
  .player-list {
    background: url("../../static/playbar_btn_playlist.png") no-repeat!important;
    background-size: cover!important;
  }
  .player {
    background: url("../../static/playbar_btn_play.png") no-repeat!important;
    background-size: cover!important;
  }
  .pause {
    background: url("../../static/playbar_btn_pause.png") no-repeat!important;
    background-size: cover!important;
  }
  .next {
    background: url("../../static/playbar_btn_next.png") no-repeat!important;
    background-size: cover!important;
  }


  /*进度条*/
  .player-mini .mini-content .pro {
    width: 100%;
    height: .1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.5);
  }
  .player-mini .mini-content .pro-load, .player-mini .mini-content .pro-play {
    width: 100%;
    height: .1rem;
    position: absolute;
    left: -100%;
  }
  .player-mini .mini-content .pro-load {
    background-color: rgba(220, 217, 217, 0.4);
  }
  .player-mini .mini-content .pro-play {
    background-color:  @primaryColor;
  }
  .songlist {
    height: 260px;
    overflow: auto;
  }
  .songlist-title {
    position: fixed;
    background: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(0,0,0,.12);
    text-align: center;
  }
</style>

<script>
  export default{
    props: [
      'item',
    ],
    data(){
        return{
          isloading:true,
          playbarItem:'',
        }

    },
    created(){
//        console.log(this.list);
//        console.log('name='+this.list[0].name)

        console.log(this.item)
    },
    methods:{
      playSings(){
        var myAudio=document.getElementById('myAudio');
        myAudio.src = '../static/红豆.mp3';
        myAudio.play();
        myAudio.loop = true;
        myAudio.preload = true;
        myAudio.currentTime;
        alert('播放成功')
      },
      popup(){
         this.$router.push({name:'playerDetail',params:{item:this.item}});
      }
    }

  }
</script>
