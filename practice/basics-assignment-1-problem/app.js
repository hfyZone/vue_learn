const app = Vue.createApp({
    data() {
        return {
            name: "韩飞洋",
            age: 26
        }
    },
    methods: {
        getRandomNumber() {
            return Math.floor(Math.random() * 10);
        }
    }
});
app.mount("#assignment");