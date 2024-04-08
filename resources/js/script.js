
const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            numbersEmail: 10,
            isLoading: false
        }
    },
    methods: {
        async generateEmail() {
            this.emails = [];
            this.isLoading = true;
            while (this.emails.length < this.numbersEmail) {
                const res = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    this.emails.push(res.data.response);
                }).catch((err) => {
                    console.error(err);
                });
            }
            this.isLoading = false;
        }
    },
    computed: {
        textCheck() {
            if (this.isLoading === true && this.emails.length < this.numbersEmail) {
                return true;
            } else {
                return false;
            }
        },
        buttonInfo() {
            if (this.emails.length < this.numbersEmail) {
                return `Genera ${this.numbersEmail} mail`
            } else {
                return `Genera nuove altre ${this.numbersEmail} mail`
            }
        }
    },
    mounted() {

    },
    created() {
        // this.generateEmail();
    },
}).mount('#app');


createApp({
    data() {
        return {
            cards: [],
        }
    },
    methods: {
        generateCards() {

            axios.get('https://api.magicthegathering.io/v1/cards').then((res) => {
                console.log(res.data.cards);

                this.cards = res.data.cards.filter(element => {
                    return res.data.cards.indexOf(element) % 2 === 0
                });
            })
        }
    },
    computed: {

    },
    mounted() {
    },
    created() {
    },
}).mount('#app2');