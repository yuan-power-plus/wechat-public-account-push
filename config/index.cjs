/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc837e854e8f77125',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9b21d2742077cbaaede163e682119758',

  PROVINCE: '四川',
  CITY: '南充',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小土豆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouTx26gxwDLnUE7ZxAttBmlArzaU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'LF3ASiGvsLVGdvIrd8jOLlxMtS5WUZXESd0EOauz0Nk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-22',
      horoscopeDateType: '今日',
      openUrl:'https://github.com/yuan-power-plus',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小土豆', year: '2024', date: '01-22',
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


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'hkk6UNxqAQNxgdwiSxSjGRs3P-CKuZIq4c9S1qG2MMI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouTx26nZ9MGO02dPwbalbpiglvV4',
    }
  ],

}

module.exports = USER_CONFIG

