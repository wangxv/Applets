import { Block, View, RichText, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
//index.js
//获取应用实例
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    article: {}
  }
  bindViewTap = () => {
    Taro.navigateTo({
      url: '../logs/logs'
    })
  }

  componentWillMount(option) {
    let _that = this
    Taro.request({
      url: 'https://interface.meiriyiwen.com/article/today?dev=1',
      data: {},
      success: res => {
        console.log(res)
        _that.setData({
          article: res.data.data
        })
      }
    })
  }

  config = {}

  render() {
    const { article: article } = this.state
    return (
      <Block>
        {/* index.wxml */}
        <View className="container">
          <View className="title">{article.title}</View>
          <View className="author">{article.author}</View>
          <View className="digest">{article.digest + '...'}</View>
          <View>
            <RichText className="content" nodes={article.content} />
          </View>
          <Navigator
            url="/pages/onedayArticle/index"
            hoverClass="navigator-hover"
            className="navigator-button"
          >
            阅读某一天的文章
          </Navigator>
        </View>
      </Block>
    )
  }
}

export default _C
