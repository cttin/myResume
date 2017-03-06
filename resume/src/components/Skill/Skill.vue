<template>
  <div class="skill">
    <h1>我的技能</h1>
    <div id="echart"></div>
    <div class="desc clearfix">
      <ul class="title">
        <li>HTML / CSS</li>
        <li>熟悉HTML5、CSS3、浮动定位、CSS3动画、可准确还原设计稿</li>
        <li>熟悉W3C规范、开发调试、浏览器兼容、常用布局、响应式</li>
        <li>熟悉stylus，能够使用bootstrap, less等CSS框架</li>
      </ul>
      <ul class="title">
        <li>框架、工具</li>
        <li>熟悉npm，能够使用webpack等前端自动化工具</li>
        <li>熟悉React、Redux，基本能够独立开发</li>
        <li>了解Vue，知道基本知识</li>
        <li>熟悉Sublime、WebStorm、git</li>
      </ul>
      <ul class="title">
        <li>JavaScript</li>
        <li>熟悉原生Javascript、事件模型、DOM操作、计时器、闭包、jQuery</li>
        <li>熟悉ajax、jsonp、跨域、原型链、面向对象、封装</li>
        <li>熟悉模块化、面向对象的方式编程</li>
      </ul>
      <ul class="title">
        <li>后端</li>
        <li>熟悉webserver、http、能使用php做简单接口调试</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from "echarts"
  export default{
    data() {
      return {
        option: ['兴趣','掌握技能'],
        index: [
          { text: 'HTML', max: 100 },
          { text: 'CSS', max: 100 },
          { text: 'JavaScript', max: 100 },
          { text: 'jQuery', max: 100 },
          { text: 'React', max: 100 },
          { text: 'Vue', max: 100 }
        ],
        data: [
            {
                value : [100, 100, 100, 100, 100, 100],
                name : '兴趣'
            },
             {
                value : [90, 90, 85, 80, 80, 50],
                name : '掌握技能'
            }
        ]
      }
    },
    methods: {
      //- resizeWorldMapContainer() {
      //-   let worldMapContainer = document.getElementById(id);
      //-   worldMapContainer.style.width = window.innerWidth+'px';
      //-   worldMapContainer.style.height = window.innerHeight+'px';
      //- },
      drawMap(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          title: {
            text: '',
          },
          tooltip: {},
          legend: {
            data: this.option,
            textStyle: {
              fontSize: 20,
              fontFamily: 'Helvetica',
              fontWeight: 400
            },
          },
          radar: [
            {
              indicator: this.index,
            }
          ],
          series: [
            {
              name: 'skills',
              type: 'radar',
              data: this.data,
            }
          ]
        });
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.drawMap('echart');
        console.log(window.innerHeight);
      })
    }
  }
  
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .clearfix:after
    content: ''
    clear: both
    display: block
  .skill
    background: #eee
    h1
      padding: 30px
      text-align: center
      font-size: 40px
      font-weight: 900
    #echart
      padding-top: 20px
      background: #fff !important
      text-align: center
      width: 100%
      height: 443px
    .desc
      margin-left: 90px
      margin-top: 30px
      padding-bottom  30px
      background: #eee
      font-size: 12px
      .title
        width: 50%
        float: left
        li
          margin-top: 15px
          list-style-type: circle !important
          color: #585858
          &:first-child
            margin-left: -20px
            list-style: none !important
</style>
