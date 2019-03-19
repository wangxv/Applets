import { Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './app.scss'

class App extends Taro.Component {
  componentWillMount() {
    this.$app.globalData = this.globalData

    // 展示本地存储能力
    var logs = Taro.getStorageSync('logs') || []
    logs.unshift(Date.now())
    Taro.setStorageSync('logs', logs)

    // 登录
    Taro.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    Taro.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          Taro.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }

  globalData = {
    userInfo: null
  }
  config = {
    pages: [
      'pages/index/index',
      'pages/search/index',
      'pages/novelTop/index',
      'pages/onedayArticle/index',
      'pages/logs/logs'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '每日一文'
        },
        {
          pagePath: 'pages/search/index',
          text: '小说'
        },
        {
          pagePath: 'pages/novelTop/index',
          text: '小说排行'
        }
      ]
    }
  }

  render() {
    return null
  }
} //app.js

export default App
Taro.render(<App />, document.getElementById('app'))
