export default {
    beforeRouteUpdate(to, from, next) {
        const { asyncData } = this.$options
        if (asyncData) {
            console.log('beforeRouteUpdate')
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route
            })
        }
        next()
    },
    beforeMount() {
        const { asyncData } = this.$options;
        if(asyncData){
            console.log('beforeMount')
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route
            });
        }
    }
}