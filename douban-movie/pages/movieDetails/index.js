//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movieInfo:{},
    current:0,
    movieId:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    let _that = this
    _that.setData({
      movieId:option.movieId
    })
    wx.request({
      url: 'https://ticket-api-m.mtime.cn/movie/detail.api', 
      data: {
        locationId:option.locationId,
        movieId:option.movieId
      },
      methods:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _that.setData({
          movieInfo:res.data.data
        })
      }
    })

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
