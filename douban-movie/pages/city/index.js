//index.js
//获取应用实例

import getCitys from '../../utils/city'

const app = getApp()

Page({
  data: {
    cityLists:getCitys(),
    city:'',
    value:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  bindChange(e){
  console.log(e)
  console.log( this.data.value)
 
  },
  bindinput(e){
    this.setData({
      value:e.detail.value
    })
  },
  clickSearch(){
    
  }
})
