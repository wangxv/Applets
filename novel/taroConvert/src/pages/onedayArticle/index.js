import { Block, View, Picker, Button, RichText } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
//index.js
//获取应用实例
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    article: {},
    time: ''
  }
  bindTimeChange = e => {
    this.setData({
      time: e.detail.value
    })

    let _that = this
    Taro.request({
      url: 'https://interface.meiriyiwen.com/article/day',
      data: {
        dev: 1,
        date: e.detail.value.replace(/-/g, '')
      },
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
    const { time: time, article: article } = this.state
    return (
      <Block>
        {/* index.wxml */}
        <View className="container">
          <Picker
            mode="date"
            value={time}
            start="09:01"
            end="21:01"
            className="selectTime"
            onChange={this.bindTimeChange}
          >
            <Button className="picker">选择某一天的文章</Button>
            <View style="test-align:center;">{time}</View>
          </Picker>
          <View className="title">{article.title}</View>
          <View className="author">{article.author}</View>
          <View className="digest">
            {article.digest ? article.digest + '...' : ''}
          </View>
          <View>
            <RichText className="content" nodes={article.content} />
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
