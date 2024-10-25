const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name,
        };
    },
    methods: {
        addCounter() {
            this.counter++;
        },
        reduceCounter(step) {
            this.counter -= step;
        },
        setName1(lastName) {
            //event被浏览器隐式提供
            // 打印event为inputEvent
            console.log(event);
            this.name = event.target.value + " " + lastName;
        },
        setName2(event, lastName) {
            //event被浏览器隐式提供
            // 打印event为inputEvent
            console.log(event);
            this.name = event.target.value + " " + lastName;
        },
        submitForm(){
            alert("prevented!");
        }
    }
});

app.mount('#events');
