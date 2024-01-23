/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '四川',
  CITY: '南充',

  USERS: [
    {
      // 想要发送的人的名字
      name: '主人',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouTx26gxwDLnUE7ZxAttBmlArzaU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'tGkgO5sGyrfsw7JslHpU9CSy90Qau5-qFSKQHGDBktM',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '主人', year: '2005', date: '08-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识的日子
        { keyword: 'meet_day', date: '2023-09-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oES-nuJV2J7ml28haCZLXKBOodpXjZ74E8ESlONsykg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouTx26nZ9MGO02dPwbalbpiglvV4',
    }
  ],

}

module.exports = USER_CONFIG
