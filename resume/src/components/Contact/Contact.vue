<template>
  <div class="contact">
    <div class="pic-wrapper clearfix">
      <div class="pic">
        <img src="./wechat.jpg" alt="">
        <p>微信二维码</p>
      </div>
      <div class="pic">
        <img src="./qq.jpg" alt="">
        <p>QQ二维码</p>
      </div>
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
  .contact
      background: #D1B6E1
    .pic-wrapper
      padding-top: 120px
      width: 100%
      height: 100vh
      padding-bottom: 30px
      border-bottom 1px solid green
      .pic
        width: 50%
        float: left
        text-align: center
        img
          width: 50%
        p
          font-size: 30px
          margin-top: 30px
          font-weight: 600
</style>
