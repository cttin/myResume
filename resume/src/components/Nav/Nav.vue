<template>
  <div id="nav">
    <div class="header">
      <div class="name">
        <router-link to="/home">曹婷婷</router-link>
      </div>
    </div>
    <ul class="nav-container">
      <li>
        <router-link to="/home/work">实习经历</router-link>
      </li>
      <li>
        <router-link to="/home/production">作品</router-link>
      </li>
      <li>
        <router-link to="/home/skill">技能</router-link>
      </li>
      <li>
        <router-link to="/home/contact">联系</router-link>
      </li>
    </ul>
    <div id="footer">
      <p class="dream">
      <span class="name">Christina</span>
      <span>is a Hardworking Girl and Want to be a Outstanding Front-End Developer.</span>
      </p>
      <div class="logo">
        <a href="http://www.jianshu.com/u/60aa6140c8ef" class="blog iconfont" target="_blank">&#xe625;</a>
        <a href="https://github.com/cttin" class="github iconfont" target="_blank">&#xe691;</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  a
    text-decoration: none
  #nav
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    z-index: 100
    width: 250px
    background: linear-gradient(135deg, #2c2e2c 0, #202021 100%)
    .header
      margin: 30px auto 30px auto
      width: 50%
      text-align: center
      .name
        margin-top: 40px
        font-size: 40px
        a
          &.active
            color: rgb(174,58,59)
          &:hover
            color: #30A9DE
    .nav-container
      margin-top: 80px
      li
        margin-bottom: 50px
        text-align: center
        a
          color: #fff
          font-size: 20px
          transition: all 0.3s
          &.active
            color: #EFDC05
          &:hover
            color: #2bb0d4
    #footer
      position: absolute
      bottom: 30px
      text-align: center
      .dream
        color: #a3a1a1
        margin: 10px 5px
        font-size: 13px
        .name
          font-weight: 700
      .logo
        font-size: 14px
        a
          display: inline-block
          margin: 5px
          line-height: 40px
          text-align: center
          width: 40px
          height: 40px
          color: #fff
          font-size: 24px
          border-radius: 50%
        a:hover
          opacity: .5
        .blog
          background-color: rgb(88,70,19)
        .github
          background-color: rgb(0, 171,108)
</style>