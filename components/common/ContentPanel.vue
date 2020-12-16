<template>
  <el-col :span="span">
    <el-card class="content-card">
      <el-row slot="header" class="header">
        <el-col :span="10">
          <img :src="titleLogoUrl" class="">
        </el-col>
        <el-col :span="10">
          <span class="content-title">{{title}}</span>
          <span class="content-sub-title">CAMPUS NEWS</span>
        </el-col>
        <el-col :span="4">
          <NuxtLink :to="`/list?pageType=${enTitle}`">更多 &gt;&gt;</NuxtLink>
        </el-col>
        <hr class="bg-theme">
      </el-row>

      <el-row slot="default">
        <el-col :span="12">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in list" :key="item.id">
              <NuxtLink :to="`/detail?id=${item.id}`">
                <img :src="item.url">
                <div class="news-caption substr"><p>{{item.title}}</p></div>
              </NuxtLink>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <el-row v-for="item in list" :key="item.id">
            <el-col :span="18">
              <NuxtLink :to="`/detail?id=${item.id}`">
                <span class="news-item-doc">·</span>
                {{item.summary}}
              </NuxtLink>
            </el-col>
            <el-col :span="6">
              <div class="news-item-date text-gray">{{item.date}}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
  export default {
    name: "ContentPanel",
    props: {
      span: {
        type: Number,
        default: 12
      },
      titleLogoUrl: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      enTitle: {
        type: String,
        default: ''
      },
      list: {
        type: Array,
        default: () => []
      },
      hasCarousel: {
        type: Boolean,
        default: false
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .header {
    text-align: left;
  }
  .content-card {
    margin: 10px 10px;
  }
</style>
