// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "src": "../../statistics/img/nut-cream-cafe.jpeg",
    "list": [{
      src: "../../statistics/img/nut-cream-cafe.jpeg"
    },{
      src: "../../statistics/img/nut-cream-cafe.jpeg"
    },{
      src: "../../statistics/img/nut-cream-cafe.jpeg"
    }]
  },
  switch:function(e) {
    console.log(e);
    const type = e.target.dataset.type;
    console.log(type);
      switch (type) {
        case "collection":
          console.log(111);
          this.setData({
            list: [{
              src: "../../statistics/img/nut-cream-cafe.jpeg"
            },{
              src: "../../statistics/img/nut-cream-cafe.jpeg"
            },{
              src: "../../statistics/img/nut-cream-cafe.jpeg"
            }]
          })
          break;
        case "single":
          this.setData({
            list: [{
              src: "../../statistics/img/collection.jpeg" 
            }]
          })
          break;
        default:
          break;
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})