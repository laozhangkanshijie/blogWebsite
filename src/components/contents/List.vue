<template>
  <div class="fly-panel" style="margin-bottom: 0">
    <div class="fly-panel-title fly-filter">
      <a :class="{ 'layui-this': status === '' && tag === '' }" @click.prevent="search()">综合</a>
      <span class="fly-mid"></span>
      <a href="" :class="{ 'layui-this': status === '0' }" @click.prevent="search(0)">未结</a>
      <span class="fly-mid"></span>
      <a href="" :class="{ 'layui-this': status === '1' }" @click.prevent="search(1)">已结</a>
      <span class="fly-mid"></span>
      <a
        href=""
        :class="{ 'layui-this': status === '' && tag === '精华' }"
        @click.prevent="search(2)"
        >精华</a
      >
      <span class="fly-mid"></span>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{ 'layui-this': sort === 'created' }" @click.prevent="search(3)">按最新</a>
        <span class="fly-mid"></span>
        <a href="" :class="{ 'layui-this': sort === 'answer' }" @click.prevent="search(4)"
          >按热议</a
        >
      </span>
    </div>
    <list-item :lists="lists" @nextPage="nextPage()" :isEnd="isEnd"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import { getList } from '@/api/content'
export default {
  name: 'list',
  components: { ListItem },
  data() {
    return {
      status: '',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
      lists: [
        {
          uid: {
            name: 'zhang',
            isVip: true
          },
          title: 'ic',
          content: '内容',
          created: '2019-10-21 01:00:00',
          catalog: 'ask',
          fav: 40,
          isEnd: false,
          reads: 10,
          answer: 0,
          status: 0,
          isTop: 0,
          tags: [
            {
              name: '精华',
              class: 'layui-bg-red'
            }
          ]
        }
      ],
      isEnd: false,
      current: ''
    }
  },
  watch: {
    current(newVal, oldVal) {
      this.init()
    },
    $route(newVal, oldVal) {
      const catalog = this.$router.params.catalog
      if (typeof catalog !== 'undefined' && catalog !== '') {
        this.catalog = catalog
      }
      this.init()
    }
  },
  mounted() {
    const catalog = this.$route?.params?.catalog
    if (typeof catalog !== 'undefined' && catalog !== '') {
      this.catalog = catalog
    }
    this._getList()
  },
  methods: {
    init() {
      this.page = 0
      this.isEnd = false
      this._getList()
    },
    _getList() {
      if (this.isEnd) return
      const options = {
        catalog: this.catalog,
        isTop: 0,
        limit: this.limit,
        page: this.page,
        sort: this.sort,
        tag: this.tag,
        status: this.status
      }
      getList(options)
        .then((res) => {
          this.lists = []
          if (res.code === 200) {
            if (res.data.length < this.limit) {
              this.isEnd = true
            }
            this.lists.concat(res.data)
          }
          console.log('🚀 ~ file: List.vue ~ line 57 ~ getList ~ res', res)
        })
        .catch((err) => {
          if (err) {
            this.$alert(err.message)
          }
        })
    },
    search(val) {
      if (this.current === '' && typeof val === 'undefined') return
      this.current = val
      switch (val) {
        case 0:
          this.status = '0'
          this.tag = ''
          break
        case 1:
          this.status = '1'
          this.tag = ''
          break
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        case 3:
          this.sort = 'created'
          break
        case 4:
          this.sort = 'answer'
          break
        default:
          this.status = ''
          this.tag = ''
          this.current = ''
          break
      }
    },
    nextPage() {
      this.page++
      this._getList()
    }
  }
}
</script>

<style></style>
