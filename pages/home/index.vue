<template>
  <el-container class="home-container">
    <el-row class="contents">
      <content-panel
        v-for="item in dataList"
        :key="item.id"
        :span="item.span"
        :title="item.title"
        :title-logo-url="item.titleLogoUrl"
        :en-title="item.enTitle"
        :hasCarousel="true"
        :list="item.list"
      />
    </el-row>
  </el-container>
</template>

<script>
  import { apiListFirstPageContents } from '@/api/api-demo'
export default {
  name: 'Home',
  components: {
    ContentPanel: () => import('@/components/common/ContentPanel')
  },
  data() {
    return {
      dataList:[{
        id: '22231',
        span: 12,
        title: '校园新闻',
        enTitle: 'CAMPUS NEWS',
        titleLogoUrl: '/cms/static/images/icon-news.png',
        list: [{
          id: '123213',
          title: '不忘立德树人初心',
          summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
          imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
          date: '2020-09-18'
        }, {
          id: '123214',
          title: '不忘立德树人初心',
          summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
          imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
          date: '2020-09-18'
        }, {
          id: '123215',
          title: '不忘立德树人初心',
          summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
          imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
          date: '2020-09-18'
        }, {
          id: '123216',
          title: '不忘立德树人初心',
          summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
          imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
          date: '2020-09-18'
        }, {
          id: '123217',
          title: '不忘立德树人初心',
          summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
          imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
          date: '2020-09-18'
        }]
      },
        {
          id: '22232',
          span: 12,
          title: '校园新闻',
          enTitle: 'CAMPUS NEWS',
          titleLogoUrl: '/cms/static/images/icon-news.png',
          list: [{
            id: '123213',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123214',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123215',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123216',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123217',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }]
        },
        {
          id: '22233',
          span: 12,
          title: '校园新闻',
          enTitle: 'CAMPUS NEWS',
          titleLogoUrl: '/cms/static/images/icon-news.png',
          list: [{
            id: '123213',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123214',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123215',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123216',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123217',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }]
        },
        {
          id: '22234',
          span: 12,
          title: '校园新闻',
          enTitle: 'CAMPUS NEWS',
          titleLogoUrl: '/cms/static/images/icon-news.png',
          list: [{
            id: '123213',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123214',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123215',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123216',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }, {
            id: '123217',
            title: '不忘立德树人初心',
            summary: '不忘立德树人初心，牢记为党育人、为国育才的使命——记广州中学党委开展纪律教育月专题报告会活动...',
            imgUrl: 'https://www.guangzhouzx.cn/group1/M00/00/00/rBAACF9ZvquAI2waAADI7SWQMJg693.jpg',
            date: '2020-09-18'
          }]
        }]
    }
  },
  async asyncData({$axios}) {
    const res = await apiListFirstPageContents($axios, {})
    debugger
    console.log(res)
  }
}
</script>

<style scoped>
  .home-container {
    /*width: 100%;*/
  }
  .contents {
    width: 80%;
    min-width: 1000px;
    margin: 40px auto;
  }
</style>
