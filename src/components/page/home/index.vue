<template>
  <div class='mainContent'>
    <div class='M-title'>
      <h2>首页</h2>
    </div>
    <div class='M-content'>
      <div class="tinBox">
        <el-row style="width: 100%; margin: 30px 0;" :gutter="20" type="flex" justify="center">
          <el-col :span="5" v-for="item in 4" :key="item">
            <el-card shadow="hover" :body-style="{ padding: '10px' }">
              <el-row :gutter="5">
                <el-col :span="6" style="margin-top: 10px; text-align: center;">
                  <svg class="icon" aria-hidden="true" :style="{fontSize: Cursize}">
                    <use xlink:href="#icon-jiankang-"></use>
                  </svg>
                </el-col>
                <el-col :span="16">
                  <h2>娱乐</h2>
                  <p>娱乐</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class='ChartBox'>
        <div class='lineBox' ref='lineBox'></div>
        <div class='pieBox' ref='pieBox'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title1: `${this.$t('message.title1')}`,
      oldsize: 20
    }
  },
  mounted () {
    this.drawLine()
    this.drawPie()
    this.pengpeng()
  },
  computed: {
    title () {
      return this.$t('message.title1')
    },
    Cursize () {
      return this.oldsize + 'px'
    }
  },
  watch: {
    title () {
      this.drawLine()
    }
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.lineBox)
      let option = {
        title: {
          text: this.title,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['老年人', '中年人', '小屁孩儿'],
          y: 'bottom'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: (function () {
            let times = []
            for (let n = 0; n <= 12; n++) {
              times.push(`${n}:00`)
            }
            return times
          })()
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '老年人',
            type: 'line',
            step: 'middle',
            data: (function () {
              let num = []
              for (let n = 0; n <= 12; n++) {
                let rand = parseInt(Math.random() * 10 + 10)
                num.push(rand)
              }
              return num
            })()
          },
          {
            name: '中年人',
            type: 'line',
            step: 'start',
            data: (function () {
              let num = []
              for (let n = 0; n <= 12; n++) {
                let rand = parseInt(Math.random() * 10 + 20)
                num.push(rand)
              }
              return num
            })()
          },
          {
            name: '小屁孩儿',
            type: 'line',
            step: 'start',
            data: (function () {
              let num = []
              for (let n = 0; n <= 12; n++) {
                let rand = parseInt(Math.random() * 10 + 30)
                num.push(rand)
              }
              return num
            })()
          }
        ]
      }
      myChart.setOption(option)
    },
    drawPie () {
      let myChart = this.$echarts.init(this.$refs.pieBox)
      let option = {
        title: {
          text: '各模块浏览量占比',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br> {b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['fgo', '阴阳师', '马化腾欢乐麻将', '马云吃鸡', '丁磊求生']
        },
        series: {
          name: '半径模式',
          type: 'pie',
          radius: [10, 110],
          roseType: 'radius',
          data: [
            { value: 100, name: 'fgo' },
            { value: 30, name: '阴阳师' },
            { value: 45, name: '马化腾欢乐麻将' },
            { value: 60, name: '马云吃鸡' },
            { value: 10, name: '丁磊求生' }
          ]
        }
      }
      myChart.setOption(option)
    },
    pengpeng () {
      var step = 1
      var timer = setInterval(() => {
        if (this.oldsize === 36) {
          step = -1
        } else if (this.oldsize === 20) {
          step = 1
        }
        this.oldsize += step
      }, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
.tinBox{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
}
.ChartBox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .lineBox, .pieBox {
  width: 45%;
  height: 400px;
}
}
</style>
