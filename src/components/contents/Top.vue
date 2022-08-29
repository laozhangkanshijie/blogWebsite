<template>
  <div class="fly-panel" style="margin-bottom: 0">
    <div class="fly-panel-title fly-filter">
      <a >置顶</a>
      <a href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" id="LAY_goSignin" style="color: #ff5722">去签到</a>

    </div>
    <list-item :lists="lists"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  name:'top',
  components: { ListItem },
  data() {
    return {
      status: '',
      tag: '',
      sort: 'created',
      page:0,
      limit: 20,
      catalog: '',
      lists: [
        {
          uid:{
            name: 'zhang',
            isVip: true
          },
          title: 'ic',
          content: '内容',
          created:'2019-10-21 01:00:00',
          catalog:'ask',
          fav: 40,
          isEnd: false,
          reads:10,
          answer: 0,
          status: 0,
          isTop: 0,
          tags: [{
            name: '精华',
            class: 'layui-bg-red'
          }]
        }
      ]
    }
  },
}
</script>

<style>

</style>
