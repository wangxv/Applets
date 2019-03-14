//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    broadcastLists:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let _that = this
   wx.request({
     url:'https://api.apiopen.top/musicBroadcasting',
     data:{

     },
     success:(res)=>{
      console.log(res.data.result)
      _that.setData({
        broadcastLists:res.data.result
      })
     }
   })
  }
})
