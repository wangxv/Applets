//index.js
//获取应用实例

import getCitys from '../../utils/city'

const app = getApp()

Page({
  data: {
    cityLists:getCitys(),
    city:'',
    value:'',
    colorLists:[['#BF7CE5','#5A0D86'],
    ['#8B89F2','#1208F7'],
    ['#93E8EA','#08F0FA'],
    ['#93F2AD','#00FC46'],
    ['#F5C1D1','#F7034D'],
    ['#F59393','#F70303']
  ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  clickSearch(e){
      wx.navigateTo({
        url: '/pages/list/index?locationId='+e.target.id
      })
  }
})
