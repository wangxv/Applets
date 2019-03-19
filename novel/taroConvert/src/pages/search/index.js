import { Block, View, Input, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
//index.js
//获取应用实例
const app = Taro.getApp()

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    resultLists: [],
    name: ''
  }
  bindViewTap = () => {
    Taro.navigateTo({
      url: '../logs/logs'
    })
  }

  componentWillMount() {}

  bindinput = e => {
    this.setData({
      name: e.detail.value
    })
  }
  bindtap = () => {
    let _that = this
    Taro.request({
      url: 'https://www.apiopen.top/novelSearchApi',
      data: {
        name: _that.data.name
      },
      success: res => {
        _that.setData({
          resultLists: res.data.data
        })
      }
    })
  }
  seeDetail = e => {
    console.log(e)

    Taro.navigateTo({
      url: '/pages/detail/index?name=' + e.currentTarget.id
    })
  }
  config = {}

  render() {
    const { resultLists: resultLists } = this.state
    return (
      <Block>
        {/* index.wxml */}
        <View className="container">
          <View className="search">
            <Input type="text" className="input" onInput={this.bindinput} />
            <Button
              className="search-button"
              type="primary"
              onClick={this.bindtap}
            >
              搜索
            </Button>
          </View>
          <View className="result-list">
            {resultLists.map((item, index) => {
              return (
                <Button
                  key="index"
                  onClick={this.seeDetail}
                  id={item}
                  className="list-item"
                >
                  {item}
                </Button>
              )
            })}
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
