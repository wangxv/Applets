// 云函数入口函数
const cloud = require('wx-server-sdk')
exports.main = (event, context) => {
    const {
        userInfo,
        a,
        b
    } = event
    const {
        OPENID,
        APPID
    } = cloud.getWXContext()

    const sum = a + b
    return {
        OPENID,
        APPID,
        userInfo,
        sum
    }
}