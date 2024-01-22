/* eslint-disable */
const USER_CONFIG = {

  USE_PASSAGE: 'wechat-test',
  
  APP_ID: '',
  APP_SECRET: '',

  USERS: [
    {
      name: '主人',
      id: 'ouTx26gxwDLnUE7ZxAttBmlArzaU',
      useTemplateId: 'wwX3rrthN0IHXkST8ObXDXLjop6Bv7GyaHALTzP71bM',
      province: '四川',
      city: '南充',
      horoscopeDate: '09-24',
      horoscopeDateType: '今日',
      openUrl: 'https://github.com/yuan-power-plus',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],

      
  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 使用微信测试号：【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // 使用其他通道时，请填写 config/template-config.cjs 中【推送完成提醒】模板的id
  CALLBACK_TEMPLATE_ID: 'oES-nuJV2J7ml28haCZLXKBOodpXjZ74E8ESlONsykg',

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'ouTx26nZ9MGO02dPwbalbpiglvV4',
    }
  ],


 


module.exports = USER_CONFIG

