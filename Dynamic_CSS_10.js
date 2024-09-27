new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});



// <h1>Dynamic Css</h1>
// <h2>Example 1</h2>
// <!-- <h2>Example 1</h2>
//         <div v-on:click="available = !available" v-bind:class="{available: available}">
//             <span>Ryu</span> -->
// <h2>Example 2</h2>
// <button v-on:click="nearby = !nearby">Toggle nearby</button>
//         <button v-on:click="available = !available">Toggle available</button>
//         <div v-bind:class="compClasses">
//             <span>Ryu</span>