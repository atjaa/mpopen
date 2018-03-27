// pages/index/booktype.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      {
        "name": "小说",
        "url": '/pages/images/finn_by_radiusss.png',
        "typeid":"1-1"
      },
      {
        "name": "文学",
        "url": '/pages/images/geonosis_by_radiusss.png',
        "typeid": "1-2"
      },
      {
        "name": "动漫",
        "url": '/pages/images/gloves_by_radiusss.png',
        "typeid": "1-3"
      },
      {
        "name": "传记",
        "url": '/pages/images/k_2so_by_radiusss.png',
        "typeid": "1-4"
      },
      {
        "name": "历史",
        "url": '/pages/images/kylo_ren_by_radiusss.png',
        "typeid": "2-1"
      },
      {
        "name": "哲学",
        "url": '/pages/images/lightsaber_by_radius.png',
        "typeid": "2-2"
      },
      {
        "name": "法律",
        "url": '/pages/images/master_yoda_by_radiu.png',
        "typeid": "2-3"
      },
      {
        "name": "心理学",
        "url": '/pages/images/millenium_falcon_by_.png',
        "typeid": "2-4"
      },
      {
        "name": "投资理财",
        "url": '/pages/images/miscellaneous_by_rad.png',
        "typeid": "3-1"
      },
      {
        "name": "管理",
        "url": '/pages/images/r2d2_by_radiusss.png',
        "typeid": "3-2"
      },
      {
        "name": "经济与金融",
        "url": '/pages/images/rz_1_a_wing_by_radiu.png',
        "typeid": "3-3"
      },
      {
        "name": "市场营销",
        "url": '/pages/images/scout_trooper_by_rad.png',
        "typeid": "3-4"
      },
      {
        "name": "科普",
        "url": '/pages/images/speeder_by_radiusss.png',
        "typeid": "4-1"
      },
      {
        "name": "计算机与网络",
        "url": '/pages/images/storm_trooper_by_rad.png',
        "typeid": "4-2"
      },
      {
        "name": "医学",
        "url": '/pages/images/t_65_x_wing_by_radiu.png',
        "typeid": "4-3"
      },
      {
        "name": "建筑",
        "url": '/pages/images/tie_fighter_by_radiu.png',
        "typeid": "4-4"
      },
      {
        "name": "心灵读物",
        "url": '/pages/images/darth_vader_by_radiu.png',
        "typeid": "5-1"
      },
      {
        "name": "人际交往",
        "url": '/pages/images/bb_8_by_radiusss.png',
        "typeid": "5-2"
      },
      {
        "name": "职场",
        "url": '/pages/images/bb_8_top_by_radiusss.png',
        "typeid": "5-3"
      },
      {
        "name": "成功学",
        "url": '/pages/images/blaster_by_radiusss.png',
        "typeid": "5-4"
      },
      {
        "name": "孕产育儿",
        "url": '/pages/images/boba_fett_by_radiuss.png',
        "typeid": "6-1"
      },
      {
        "name": "烹饪美食",
        "url": '/pages/images/btl_y_wing_by_radius.png',
        "typeid": "6-2"
      },
      {
        "name": "健康养生",
        "url": '/pages/images/c3po_by_radiusss.png',
        "typeid": "6-3"
      },
      {
        "name": "旅游",
        "url": '/pages/images/darth_vader_by_radiu.png',
        "typeid": "6-4"
      },
    ]
  },
  goBooklist:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/index/booklist',
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