//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listdata:[]
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
     url:'https://www.apiopen.top/novelInfoApi',
     data:{
      name:option.name
     },
     success:(res)=>{
       console.log(res)
      _that.setData({
        listdata:res.data.data
      })
     }
   })
   
  }
})
