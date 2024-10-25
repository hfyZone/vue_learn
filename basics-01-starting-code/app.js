const app = Vue.createApp({
    data() {
        return {
            courseGoal: "<h1>完成本节课程的目标</h1>",
            vueLink: "https://cn.vuejs.org",
            dataInData: "这是data里的值，将尝试在方法中获取。"
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        },
        getData(){
            // this为app
            console.log(this);
            return this.dataInData;
        }
        
    }
});
app.mount("#user-goal");