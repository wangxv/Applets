//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    musicList: [],
    name: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {

  },
  bindinput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  searchMusic(e) {
    let _that = this
    wx.request({
      url: 'https://api.apiopen.top/searchMusic',
      data: {
        name: _that.data.name
      },
      success: (res) => {
       let result = res.data.result
        result.map(x=>{
          x.title = x.title.length>10 ? (x.title.slice(0,10)+'...') : x.title
        })
        _that.setData({
          musicList: result
        })
      }
    })
  }
})