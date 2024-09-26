new Vue({
    el: '#app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('you clicked me');
        }
    }
});


// <div id="app">
// <h1>Events</h1>
//     <button v-on:click.once="add(1)">Add a Year</button>
//     <button v-on:click="subtract(1)">Subtract a Year</button>
//     <button v-on:dblclick="add(10)">Add 10 Years</button>
//     <button v-on:dblclick="subtract(10)">Subtract 10 Years</button>
//     <p>My age is {{age}}</p>
//     <div id="canvas" v-on:mousemove.capture="updateXY">{{ x }} , {{ y }}</div>
//     <p><a v-on:click.prevent="click" href="http://www.thenetninja.co.uk">The Net Ninja</a></p>
// </div>