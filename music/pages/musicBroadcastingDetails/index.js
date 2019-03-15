//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    songlist:[]
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
     url:'https://api.apiopen.top/musicBroadcastingDetails',
     data:{
      // channelname:option.channelname
      channelname:'public_tuijian_spring'
     },
     success:(res)=>{
      console.log(res.data.result)
      _that.setData({
        songlist:res.data.result.songlist
      })
     }
   })
  }
})
