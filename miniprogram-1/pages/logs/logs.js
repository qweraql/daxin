// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:'真帅',
      count : 0 
    
  },
  //定义时间按钮的事件处理函数
 
  //+1的事件处理函数
  btn(){
    this.setData({
      count:this.data.count +1
    })
  },
 btn1(e){
   console.log(e);
   this.setData({
     count:this.data.count +e.target.dataset.info
   })
 },
  // input的处理函数
  inp(e){
    console.log(e.detail.value);
  },
// 文本内容改变事件
inp1(e){
  this.setData({
    msg:e.detail.value
  })
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