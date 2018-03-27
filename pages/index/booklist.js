// pages/index/booklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:null,
    typeid:null,
    booklist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.title)
    console.log(options.typeid)
    this.setData({
      title: options.title,
      typeid: options.typeid
    })
    var vm = this
    wx.request({
      url: 'https://www.xue37.cn/wx/callback.do',
      data: {
        mytype: 'wxxcx-type-book',
        paramkey: vm.data.typeid
      },
      success: function (res) {
        vm.setData({
          booklist: res.data
        })
      }
    })
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