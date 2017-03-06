<template>
  <div id="hello">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
    <div class="skip"><router-link to="/home">跳过</router-link></div>
  </div>
</template>

<script>
  import StyleEditor from './StyleEditor'
  import ResumeEditor from './ResumeEditor'
  import '../assets/reset.css'

  export default {
    name: 'hello',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 50,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `
  html {
    color: #274c5e; 
  }
  .styleEditor {
    padding: .5em;
    border: 1px solid;
    overflow: auto;
    width: 40vw; height: 90vh;
  }
  .styleEditor {
    position: fixed; left: 0; top: 0;
  }
  .resumeEditor{
    position: fixed; right: 0; top: 0;
    padding: .5em;  margin: .5em;
    width: 40vw; height: 90vh; 
    border: 1px solid;
    background: white;
    overflow: auto;
  }
  `,
  `
  .resumeEditor{
    white-space: pre-line;
    padding: 2em;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
  .resumeEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
  }
  .resumeEditor ul,.resumeEditor ol{
    list-style: none;
  }
  .resumeEditor ul> li::before{
    content: '•';
    margin-right: .5em;
  }
  .resumeEditor ol li::before {
    counter-increment: section;            
    content: counters(section, ".") " ";  
    margin-right: .5em;
  }
  .resumeEditor blockquote {
    color: #E71D36;
  }
  /* 好嗨森！你看到了这里，你一定很爱我/害羞。
  * 继续了解我，我相信你会更喜欢我哒！*/
  `
  ],
        currentMarkdown: '',
        fullMarkdown: `
关于我
----

    您好，我是
来自南京邮电大学的
本是网络工程后面误打误撞进入通信的
好奇心突破天际的
活泼开朗、喜欢大笑的
曹婷婷

为什么要做前端
----

可能就像这一句情话说的
"You are the css to my html"
所以我的理想并不是很大
能喝上一杯咖啡
写点代码就很满足

我的优势与不足
----

* 我的不足
太过认真，哈哈哈
* 我的优势
喜欢研究、喜欢学习新东西
我相信我会时不时给你惊喜哒

> 那就选我选我选我！！！
`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.showHtml()
        await this.progressivelyShowStyle(1)
        await this.goHomePage()
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length;
          let interval = this.interval;
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1);
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1];
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2];
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom());
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      },
      goHomePage() {
        return new Promise((resolve, reject) => {
          setTimeout(function() {
            this.$router.push('home');
          }.bind(this), 3000); 
          // this.$router.push('home');
          console.log("把努力变成一种习惯");
          resolve()
        })
        
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    -webkit-transition: all .3s;
    transition: all .3s;
  html
    min-height: 100vh;
    #hello
      font-family: 'Avenir', Helvetica, Arial, sans-serif, "Microsoft Yahei"
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale
      .skip
        background: #534847
        border-radius: 5px
        color: #fff
        display: inline-block
        padding: 10px
        position: fixed
        right: 20px
        bottom: 15px
        z-index: 1
        &:hover
          opacity: .5
        a
          color: #fff
          text-decoration: none
</style>
