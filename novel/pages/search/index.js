//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    resultLists:[],
    name:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

   
  },
  bindinput(e){
   this.setData({
    name:e.detail.value
  })
  },
  bindtap(){
   let _that = this
    wx.request({
      url:'https://www.apiopen.top/novelSearchApi',
      data:{
        name:_that.data.name
      },
      success:(res)=>{
        _that.setData({
          resultLists:res.data.data
        })
      }
    })
  },
  seeDetail(e){
    console.log(e)

    wx.navigateTo({
      url:'/pages/detail/index?name='+e.currentTarget.id
    })
  }
})
