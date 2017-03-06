<template>
  <div class="info">
    <div class="info-bg">
      <h1 class="title">个人信息</h1>
      <ul class="basic">
        <li>应聘岗位：Web前端工程师（实习）</li>
        <li>地址：江苏省南京市新模范马路66号</li>
        <li>联系电话：18805159302</li>
        <li>邮箱：christinaaaa@foxmail.com</li>
      </ul>
      <ul class="education">
        <li>教育经历：2015.09-至今 南京邮电大学</li>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2011.09-2015.06 南昌航空大学</p>
      </ul>
      <div class="desc">
        我性格外向、态度端正、做事认真，具有很强的沟通和交流能力。在校期间每年都获得奖学金，有较强的适应能力和学习能力。<br/>
        我喜欢接触新事物，具有强烈的挑战精神和探索能力，热爱前端，喜欢写代码。<br/>
        我特别希望能加入一个技术氛围浓厚、团队协作能力很强的公司。
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .info
    position: relative
    background: url(./background.jpg)
    background-position: center
    background-size: cover
    color: #fff
    line-height: 20px
    font-family: 'Avenir', Helvetica, Arial, sans-serif, "Microsoft Yahei"
    .info-bg
      box-sizing: border-box
      padding-top: 50px
      padding-left: 70px
      overflow hidden
      height: 100vh
      background: rgba(0, 0, 0, 0.6)
      text-overflow: ellipsis
      .title
        color: #D1B6E1
        margin-bottom: 30px
      .basic
        margin-bottom: 40px
        li
          margin-bottom: 10px 
      .education
        position: absolute
        right: 280px
        top: 100px
        p
         margin-top: 10px
      .desc
        margin-top: 350px
        letter-spacing: 2px
        @media only screen and (max-width: 1280px)
          line-height: 25px
</style>