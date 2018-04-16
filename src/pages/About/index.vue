<template>
  <div>好的111啦啦发送方式</div>
</template>
<script>
export default {
  asyncData ({ store, route }) {
    // console.log(11);
    return Promise.resolve();
    // 触发 action 后，会返回 Promise
    // return store.dispatch('fetchItem', route.params.id)
  },
  name: 'about',
}
</script>

