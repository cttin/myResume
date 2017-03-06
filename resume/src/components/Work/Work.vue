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
          <p>作为公司的前端开发工程师，负责公司项目中前端部分的工作，使用的主要技术为：React 和 Vue。<br/>在实习期间，参与了两个项目：物联网金融（react），从项目开始到基本完成都参与其中；三宝海关系统（vue），主要是对测试所提出的bug进行修改，调整优化代码。</p>
        </li>
      </ul>
    </div>
    <div>
      <ul class="items">
        <li><h1>项目经验</h1></li>
        <li class="project-internet gap">
          物联网金融&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目前端开发
        </li>
        <li class="project-internet-introduction gap">
          <p>•&nbsp;&nbsp;为银行开发的用户借贷款服务系统。<br/>•&nbsp;&nbsp;用户和银行两个身份登入，主要为银行实现给用户贷款的物资凭证以及货品出入库记录。前端的页面开发主要有：地图（在地图上显示银行下面的库区信息以及报警信息）、实时数据的采集（利用canvas画图显示到页面当中）、ERP出入库记录(ECharts画图显示)、客户、仓单、仓单详情、仓单认证、日志、报警等等。<br/>•&nbsp;&nbsp;使用的主要技术为：react + redux + webpack + es6。<br/>•&nbsp;&nbsp;参与整个项目，经过大概两个半月，功能基本实现。</p>
        <li class="project-sanbao gap">
          三宝海关系统&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目前端bug修复
        </li>
        <li class="project-sanbao-introduction">
          <p>•&nbsp;&nbsp;为三宝公司提供审批流程系统。<br/>•&nbsp;&nbsp;主要功能是实现三宝公司内部一系列合同以及报销的审批流程。<br/>•&nbsp;&nbsp;使用的主要技术为vue+webpack+es6。<br/>•&nbsp;&nbsp;负责一些bug的修复以及页面的部分修改。</p>
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
</style>
