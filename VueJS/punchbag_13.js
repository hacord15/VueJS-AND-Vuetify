new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function(){
            this.health -= 10;
            if ( this.health <= 0 ){
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {

    }
});



// <div id="vue-app">
//         <!-- bag image -->
//         <div id="bag" v-bind:class="{ burst: ended }"></div>

//         <!-- bag health bar -->
//         <div id="bag-health">
//             <div v-bind:style="{ width: health + '%' }"></div>
//         </div>

//         <!-- game control buttons -->
//         <div id="controls">
//             <button v-on:click="punch" v-show="!ended">Punch</button>
//             <button v-on:click="restart">Restart</button>
//         </div>
//     </div>