const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    Height:0,
    latitude: '31.216540',
    longitude: '121.522170',
    markers: [
      {
      id: 1,
      latitude: 31.216150,
      longitude: 121.522200,
      iconPath: '/image/location.png' 
    },

     {
        id: 2,
       latitude: 31.216045,
       longitude: 121.521025,
        iconPath: '/image/location.png'
      },

       {
         id: 3,
         latitude: 31.217747,
         longitude: 121.522533,
         iconPath: '/image/location.png'
      }
    ],
    
  },

  bindmarkertap:function(res){
    console.log(res)
    wx.showToast({
      title: '点击了'+res.markerId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          Height: res.windowHeight
        })
       console.log(that.data.Height)
      },
    })

  //  wx.getLocation({
  //    type: 'wgs84', //返回可以用于wx.openLocation的经纬度
  //    success: function(res) {
  //      console.log(res)
  //      that.setData({
  //        latitude:res.latitude,
  //        longitude:res.longitude
  //      })
  //    },
  //  })

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
