//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotLists:[]
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
     url:'https://www.apiopen.top/novelApi',
     data:{

     },
     success:(res)=>{
       console.log(res)
      _that.setData({
        hotLists:res.data.data
      })
     }
   })
   
  }
})
