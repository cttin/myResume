<template>
  <div class="work clearfix">
    <div class="company">
      <ul>
        <li><h1>实习经历</h1></li>
        <li>
          2016.09-2017.01
        </li>
        <li>
          <h3 class="gap-bigger">南京友谱信息科技有限公司</h3>
          <p class="gap">前端开发工程师</p>
          <p>作为公司的前端开发工程师，负责公司项目中前端部分的工作，使用的主要技术为：React 和 Vue。</p>
        </li>
      </ul>
    </div>
    <div>
      <ul class="items">
        <li><h1>项目经验</h1></li>
        <li class="project-internet gap">
          物联网监管服务平台&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目前端开发
        </li>
        <li class="project-internet-introduction gap">
          <p>•&nbsp;&nbsp;为银行开发的用户借贷款服务系统<br/>•&nbsp;&nbsp;技术栈：react+redux+webpack+es6<br/>•&nbsp;&nbsp;基本能使用react进行开发
        <li class="project-sanbao gap">
          三宝海关系统&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目前端开发
        </li>
        <li class="project-sanbao-introduction gap">
          <p>•&nbsp;&nbsp;为三宝公司提供审批流程系统<br/>•&nbsp;&nbsp;技术栈：vue+webpack+es6<br/>•&nbsp;&nbsp;对框架的认识、运用以及调试能力有了很大的提高</p>
        </li>
        <li class="face-recognition gap">
          基于人脸识别的智能门禁系统&nbsp;&nbsp;&nbsp;全国三等奖
        </li>
        <li class="project-sanbao-introduction">
          <p>•&nbsp;&nbsp;第二届全国大学生物联网技术与应用“三创大赛”<br/>•&nbsp;&nbsp;技术栈：java+c<br/>•&nbsp;&nbsp;对模块的传输协议以及运用java开发有了更深的认识</p>
        </li>
      </ul>
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
  ul
    list-style: none
  .work
    height: 100vh
    background-image: url(./bg-work.jpg)
    background-size: cover
    background-position: center
    color: #fff
    font-size: 16px
    line-height: 25px
    font-family: 'Avenir', Helvetica, Arial, sans-serif, "Microsoft Yahei"
    h1
      margin-bottom: 30px
      color: #D1B6E1
    .gap
      margin-bottom: 10px
    .company
      float: left
      width: 25vw
      padding-top: 40px
      padding-left: 40px
    .items
      float: right
      width: 25vw
      padding-top: 40px
      padding-right: 40px
      .project-internet
        font-weight: 600
      .project-sanbao
        font-weight: 600
      .face-recognition
        font-weight: 600
</style>

