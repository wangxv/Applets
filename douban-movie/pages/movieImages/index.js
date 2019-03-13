//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgAll:[]
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
      url:'https://api-m.mtime.cn/Movie/ImageAll.api',
      data:{
        movieId:option.movieId
      },
      methods:'GET',
      header:{
        'content-type': 'application/json' 
      },
      success(res){
        _that.setData({
          imgAll:res.data.images
        })
      }
    })
  },
  handChange(e){
    this.setData({
      current:e.detail.current
    })
  }

})
