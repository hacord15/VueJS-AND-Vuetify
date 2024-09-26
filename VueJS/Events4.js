new Vue({
    el: '#app',
    data: {
        age: 90
    },
    methods: { 
        add: function(inc){
            this.age +=inc;
            console.log("add")
        },
        subtract:function(dec){
            console.log("sub")
            this.age -=dec;
        }
    }
});

/* <div id="app">
<h1>Events</h1>
<!-- single click event  -->
<button v-on:click="add(1)">Add a year</button>
<button v-on:click="subtract(1)">Subtract a year </button>
<!-- double click event  -->
<button v-on:dblclick="add(10)">Add a 10 year</button>
<button v-on:dblclick="subtract(10)">Subtract 10 year </button>
<p>My age is {{age}}</p>
<!-- mouse move event  -->
</div> */
