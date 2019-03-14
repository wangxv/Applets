//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ranklist:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    let _that = this
   wx.request({
     url:'https://api.apiopen.top/musicRankings',
     data:{
     },
     success:(res)=>{
      console.log(res.data.result)
      _that.setData({
        ranklist:res.data.result
      })
     }
   })
  }
})
