import { Block, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './logs.scss'
//logs.js
const util = require('../../utils/util.js')

@withWeapp('Page')
class _C extends Taro.Component {
  state = {
    logs: []
  }

  componentWillMount() {
    this.setData({
      logs: (Taro.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }

  config = {
    navigationBarTitleText: '查看启动日志'
  }

  render() {
    const { logs: logs } = this.state
    return (
      <Block>
        {/* logs.wxml */}
        <View className="container log-list">
          {logs.map((log, index) => {
            return (
              <Block>
                <Text className="log-item">{index + 1 + '. ' + log}</Text>
              </Block>
            )
          })}
        </View>
      </Block>
    )
  }
}

export default _C
