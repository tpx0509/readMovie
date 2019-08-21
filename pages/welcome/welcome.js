// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo : null,
      hasGetUserInfo : false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       this.getSetting()
  },
  getSetting() { // 获取用户已授权的信息
      wx.getSetting({
         success:(res) => {
            console.log('用户已授权的信息:',res.authSetting)
            if(res.authSetting['scope.userInfo']) { // 已经授权过
                this.setData({
                  hasGetUserInfo : true
                })
                this.getUserInfo()
            }
         },
         fail(err) {
            console.error(err)
         }
      })
  },  
  getUserInfo() { // 获取用户信息
    wx.getUserInfo({
      success:(res) => {
        this.setData({
           userInfo : res.userInfo
        })
      },
      fail(err) {
        console.error(err)
      }
    })  
  },
  bindGetUserInfo(res) {
    if(res.detail.userInfo) {
      this.setData({
        hasGetUserInfo: true,
        userInfo: res.detail.userInfo
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})