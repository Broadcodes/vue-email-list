const app = new Vue({
    el: '#root',
    data: {
        randomEmail: [],
        maxLengthEmail: 10
    },
    mounted() {
        for (let index = 0; index < this.maxLengthEmail; index++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.randomEmail.push(response.data.response);
                })
        }
    }
})