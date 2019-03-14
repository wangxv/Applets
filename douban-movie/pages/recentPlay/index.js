//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movieLists:[],
    locationId:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    let _that = this
    this.setData({
      locationId:option.locationId
    })
    wx.request({
      url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api', 
      data: {
        locationId:option.locationId
      },
      methods:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _that.setData({
          movieLists:res.data.moviecomings
        })
      }
    })
  },
  movieDetail(e){
    wx.navigateTo({
      url: '/pages/movieDetails/index?movieId='+e.target.id+'&locationId='+this.data.locationId
    })
  }

})
