<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <zh-top />
        <zh-list />
      </div>
      <div class="layui-col-md4">
        <tips />
        <sign />
        <hotlist />
        <ads />
        <links />
      </div>
    </div>
  </div>
</template>

<script>
import list from '@/components/contents/List.vue'
import top from '@/components/contents/Top.vue'
import tips from '@/components/sidebar/Tips.vue'
import hotlist from '@/components/sidebar/HotList.vue'
import links from '@/components/sidebar/Links.vue'
import sign from '@/components/sidebar/Sign.vue'
import ads from '@/components/sidebar/Ads.vue'
export default {
  name: 'index',
  components: {
    'zh-list': list,
    'zh-top': top,
    tips,
    hotlist,
    links,
    ads,
    sign
  }
}
</script>

<style></style>
