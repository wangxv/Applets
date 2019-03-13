//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movieLists:[{}]
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
      url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api', 
      data: {
        locationId:290
      },
      methods:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _that.setData({
          movieLists:res.data.movies
        })
      }
    })
  }

})
