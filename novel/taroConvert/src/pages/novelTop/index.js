import { Block, View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
//index.js
//获取应用实例
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    hotLists: []
  }
  bindViewTap = () => {
    Taro.navigateTo({
      url: '../logs/logs'
    })
  }

  componentWillMount() {
    let _that = this
    Taro.request({
      url: 'https://www.apiopen.top/novelApi',
      data: {},
      success: res => {
        console.log(res)
        _that.setData({
          hotLists: res.data.data
        })
      }
    })
  }

  config = {}

  render() {
    const { hotLists: hotLists } = this.state
    return (
      <Block>
        {/* index.wxml */}
        <View className="container">
          {hotLists.map((item, index) => {
            return (
              <View key="bid" className="book-item">
                <View>
                  <Image className="book-img" src={item.book_cover} />
                </View>
                <View className="book-info">
                  <View className="title">{item.bookname}</View>
                  <View className="title">{item.author_name}</View>
                  <View className="desc">{item.book_info}</View>
                </View>
              </View>
            )
          })}
        </View>
      </Block>
    )
  }
}

export default _C
