
/**
 * @type {import('vitepress').UserConfig}
 */

const config = {
  title: '梦华录',
  description: '《梦华录》（英语：A Dream of Splendor）,为据关汉卿原著《赵盼儿风月救风尘》改编的2022年中国大陆古装剧, 讲述了赵盼儿、宋引章、孙三娘经历各种困境，携手勇闯东京，并在皇城司指挥使顾千帆的帮助下，最终姐妹齐心，通过自己的努力将小茶坊变成东京最大酒楼的故事。由杨阳执导，张巍编剧，刘亦菲、陈晓、柳岩、林允、徐海乔、代旭 领衔主演。2021年2月开拍，同年于7月杀青。2022年6月2日在腾讯视频播出，海外地区则由WeTV、Netflix播出。香港于2022年6月9日起由MyTV Super首播，其后于9月5日起在翡翠台播映粤语配音版。',
  base: '/vitepress-starter/',
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '出圈', link: '/discuss/' },
      { text: '盼儿', link: '/cc/' }
    ],
    sidebar: {
      '/discuss/': [
        {
          text: '出圈',
          items: [
            { text: '权威媒体', link: '/discuss/authority' }
          ]
        }
      ],
      '/cc/': [
        {
          text: '刘亦菲',
          items: [
            { text: '采访报道', link: '/cc/reports' }
          ]
        }
      ]
    },
    lastUpdatedText: '上次更新日期',
    footer: {
      message: 'Made By 录人&刘亦菲的影迷朋友们 ❤️ | Copyright ©2022 | <a href="https://www.douban.com/group/topic/276689884/?_i=5716003Rn8heGv">Feedback</a>',
    }
  }
}
export default config
