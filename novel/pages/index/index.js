//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    article:{},
    time:''
  },
  //事件处理函数
  bindTimeChange(e) {
    this.setData({
      time:e.detail.value
    })

    let _that = this
    wx.request({
      url:'https://interface.meiriyiwen.com/article/day',
      data:{
        dev:1,
        date:e.detail.value.replace(/-/g,'')
      },
      success:(res)=>{
        console.log(res)
       _that.setData({
        article:res.data.data
       })
      }
    })
  },

})
