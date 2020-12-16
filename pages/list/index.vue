<template>
  <el-container class="container">
    <div>{{ $route.query.pageType }}</div>

    <el-row v-for="dataItem in dataList" :key="dataItem.communityId">
      {{ dataItem.campusName }} -- {{ dataItem.communityName }}
    </el-row>

    <el-row>
      <el-pagination
        layout="prev, pager, next"
        :current-page="page"
        :page-size="pageSize"
        :paper-count="4"
        :total="totalCount"
        @current-change="changePage">
      </el-pagination>
    </el-row>
  </el-container>
</template>

<script>
import { apiListDormitoryCommunity } from '@/api/api-demo'
export default {
  head: {
    title: '列表界面',
    meta: [
      { charset: 'utf-8'},
      { hid: 'description', name: 'description', content: '这是网页描述内容' },
      { hid: 'keywords', name: 'keywords', content: '淘宝,领券,秒杀' }, // 搜索引擎能够识别抓取的关键字
    ]
  },
  name: 'List',
  data() {
    return {
      page: 1,
      pageSize: 1,
      totalCount: 0,
      dataList: []
    }
  },
  async asyncData({ $axios, $cookies }) {
    const res = await apiListDormitoryCommunity($axios, {page:1})
    $cookies.set('token', 'aaaa')
    return {
      page: 1,
      totalCount: res.count,
      dataList: res.data
    }
    /*const ip = await $axios.$get('http://icanhazip.com')
    return { ip }*/

    /*const datas = await $axios.post('/dormitory/community/list', {
      page:1
    })
    debugger
    console.log(datas)*/
  },
  /*mounted() {
    this.test()
  },*/
  methods: {
    changePage() {
      apiListDormitoryCommunity(this.$axios, {page:this.page}).then(res => {
        const token = this.$cookies.get('token')
        console.log('token', token)
        console.log('changePage', res)
        this.dataList = res.data
        this.totalCount = res.count
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>
