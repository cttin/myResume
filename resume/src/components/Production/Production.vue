<template>
  <div class="production">
    <h1 class="name">主要作品</h1>
    <div class="project-wrapper clearfix">
      <a href="http://cttin.coding.me/Demo/%E6%9F%90%E5%95%86%E5%9F%8E%E9%A6%96%E9%A1%B5/JD.html" target="_blank" class="item1">
        <img src="./JD.png" alt="">
        <div class="desc">
          <h2 class="title">某商城首页</h2>
          <p>
            主要运用HTML、CSS、JavaScript、jQuery等还原页面设计。
          </p>
        </div>
      </a>
      <a href="http://cttin.coding.me/Resume/dist/" target="_blank" class="item2">
        <img src="./resume.png" alt="">
        <div class="desc">
          <h2 class="title">简历模板</h2>
          <p>基于vue.js框架搭建的个人简历模板，使用vue-cli、vue.js、vue-router、stylus、webpack、CSS3动画开发的单页项目。</p>
        </div>
      </a>
      <a href="http://cttin.coding.me/Demo/Music%20Player/music.html" target="_blank" class="item3">
        <img src="./music.png" alt="">
        <div class="desc">
          <h2 class="title">Music Player</h2>
          <p>网页版FM音乐播放器，使用HTML5、CSS3、JavaScript、Ajax、jQuery开发。支持切换频道，上一曲、下一曲，暂停、播放、循环播放、随机播放、歌词随时间显示功能。</p>
        </div>
      </a>
      <a href="http://cttin.coding.me/Demo/%E7%80%91%E5%B8%83%E6%B5%81%E6%96%B0%E9%97%BB%E7%BD%91%E7%AB%99/infiniteWaterfall.html" target="_blank" class="item4">
        <img src="./news.png" alt="">
        <div class="desc">
          <h2 class="title">瀑布流新闻网站</h2>
          <p>使用HTML、CSS、JavaScript、Ajax、jQuery、懒加载、瀑布流布局构建的无限加载新闻网站。</p>
        </div>
      </a>
      <a href="http://cttin.coding.me/Demo/%E6%9C%A8%E6%A1%B6%E5%B8%83%E5%B1%80%E5%9B%BE%E7%89%87%E5%A2%99/vat.html" target="_blank" class="item5">
        <img src="./picture.png" alt="">
        <div class="desc">
          <h2 class="title">木桶布局图片墙</h2>
          <p>使用HTML、CSS、JavaScript、Ajax、jQuery、懒加载、木桶布局构建的随机获取图片的无限加载图片墙。</p>
        </div>
      </a>
      <a href="http://cttin.coding.me/Demo/%E8%BD%AE%E6%92%AD/index.html" target="_blank" class="item6">
        <img src="./rotation.png" alt="">
        <div class="desc">
          <h2 class="title">轮播</h2>
          <p>使用HTML、CSS、JavaScript、jQuery实现的两种轮播，一种是滑入滑出左右滚动轮播、一种是淡入淡出自动轮播，都支持无线滚动。</p>
        </div>
      </a>
      <a href="http://cttin.coding.me/Demo/%E9%9D%99%E6%80%81%E9%A1%B5%E9%9D%A2/html/twins.html" target="_blank" class="item7">
        <img src="./twins.png" alt="">
        <div class="desc">
          <h2 class="title">静态页面</h2>
          <p>使用HTML、CSS，自己设计的页面。</p>
        </div>
      </a>
      <a href="http://cttin.coding.me/Demo/%E6%9F%90%E7%BD%91%E7%AB%99%E9%9D%99%E6%80%81%E9%A1%B5%E9%9D%A2/html/website.html" target="_blank" class="item8">
        <img src="./website.png" alt="">
        <div class="desc">
          <h2 class="title">某网站页面</h2>
          <p>使用HTML、CSS，精确还原页面。</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .clearfix:after
    content: ''
    clear: both
    display: block
  .production
    width: 100%
    background: #dae9f4
    .name
      padding: 30px
      font-size: 32px
      color: #D1B6E1
    .project-wrapper
      margin: 0 auto
      width: 90%
      &:last-child
        padding-bottom: 40px
      a
        position: relative
        display: block
        float: left
        overflow hidden
        outline 1px solid #fff
        width: 50%
        transition all 0.3s
        font-size: 0
        &.item1:hover
          background-color: #7200da  
        &.item2:hover
          background-color: #4ec141
        &.item3:hover
          background-color: #237dca
        &.item4:hover
          background-color: #d46b2b
        &.item5:hover
          background-color: #bf0404
        &.item6:hover
          background-color: #bfb31b
        &.item7:hover
          background-color: #4f953b
        &.item8:hover
          background-color: #bf209f
        &:hover
          background-color: #67d2bf
          img
            opacity: 0.2
            transform: scale3d(1.05, 1.05, 1)
          .desc
            background-color: transparent
            h2
              transform: translateY(-50px)
            p
              transform: translateY(1px)
              transition-delay 0.3s
              opacity: 1
        img
          width: 100%
          height: 340px
          transition all 0.3s
        .desc
          position: absolute
          top: 0
          left: 0
          bottom: 0
          right: 0
          background-color: rgba(0, 0, 0, 0.25)
          color: #fff
          transition all 0.3s
          h2
            position: absolute
            margin: 0 auto
            transform: translateY(-50%)
            text-align: center
            top: 50%
            width: 100%
            font-size: 28px
            text-shadow: 2px 2px 16px #000000
            transition all 0.3s
          p
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
            transition all 0.3s
            opacity: 0
            text-align: center
            font-size: 15px
            line-height: 25px
</style>
