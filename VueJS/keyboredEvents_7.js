new Vue({
    el:'#app',
    data:{

    },
    methods:{
        logName:function(){
            console.log("You entered you name");
        },
        
        logAge:function(){
            console.log("You entered you Age");
        }
    }
});


// <div id="app">
//         <h1>Keyboard Events</h1>
//         <label>Name</label>
//         <input type="text" v-on:keyup.enter="logName"/>
//         <label>Age</label>
//         <input type="text" v-on:keyup.enter.alt="logAge"/>
//     </div>