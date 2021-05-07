/*
 * @Autor: zhanglp
 * @Description:
 * @Date: 2021-04-26 11:03:46
 * @LastEditTime: 2021-04-26 11:19:12
 */
module.exports = {
  // presets: ['@vue/app'],
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' } //style:css->识别css文件，style:true->识别less文件
    ]
  ]
}
