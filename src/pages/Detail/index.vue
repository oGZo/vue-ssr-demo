<template>
  <div>
    {{item.name}}111
    <p @click="$router.push({ path: $route.path, query: { id: Date.now()}})" >咔咔咔看么么么</p>
    <!-- <a v-for=" i in d" :key="i">{{i}}</a> -->
      <p>{{title}}</p>
    </div>
</template>
<script>
import { getDetail } from '@/fetchs/index';

export default {
  asyncData ({ store, route }) {
    const item = store.state.items[route.query.id];
    if(item && item.name){
      return Promise.resolve();
    }
    return store.dispatch('fetchItem', route.query.id);
  },
  name: 'detail',
  data() {
    if(typeof window !== 'undefined'){
      window.VueInstance = this;
    }
    return { 
      title: '',
    };
  },
  computed: {
      item() {
        return this.$store.state.items[this.$route.query.id] || {}
      },
  },
  methods: {
    async getPageData() {
      await this.dataPromise;
      const data = await getDetail(12);
      this.title = data.name;
      console.log('test', data);
    }
  },
  watch: {
    $route(to,from){
      console.log(to);
      if(to.query.id  !== from.query.id){
        console.log('change route');
        this.getPageData();
      }
    }
  },
  async mounted (){
    this.getPageData();
  }
}
</script>

