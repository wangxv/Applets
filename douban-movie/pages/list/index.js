//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    locationId:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    this.setData({
      locationId:option.locationId
    })
  }
})
