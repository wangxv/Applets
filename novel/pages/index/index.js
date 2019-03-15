//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    article:{}
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
     url:'https://interface.meiriyiwen.com/article/today?dev=1',
     data:{
      
     },
     success:(res)=>{
       console.log(res)
      _that.setData({
        article:res.data.data
      })
     }
   })
   
  }
})
