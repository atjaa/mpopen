// pages/index/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist:[],
    init: true,
    sname:null
  },
  snameInput:function(e){
    this.setData({
      sname:e.detail.value
    })
  },
  sou:function(){
    var vm = this
    console.log(vm.data.sname)
    wx.request({
      url: 'https://www.xue37.cn/wx/callback.do',
      data:{
        mytype:'wxxcx-search-book',
        paramkey: vm.data.sname
      },
      success:function(res){
        vm.setData({
          booklist:res.data,
          init:false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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