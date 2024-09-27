new Vue({
   el:'#vue-app',
   data:{
    
      characters:['golu','neet','krish','adi'],
      ninjas:[
        {name:'ryu',age:25},
        {name:'Yoshi',age:35},
        {name:'Ken',age:55}
      ]
   },
   methods:{

   },
   computed:{

   }
});





// <div id="vue-app">
// <h1>Looping through Lists</h1>
// <ul>
//     <li v-for="x in characters">{{x}}</li>
// </ul>
// <ul>
//     <li v-for="(ninja,index) in ninjas">{{index}}.{{ninja.name }} - {{ninja.age}}</li>
// </ul>

// <!-- looping over the div -->
// <div v-for="(ninja, index) in ninjas"   >
//     <h3>{{ index }} - {{ ninja.name }}</h3>
//     <p>{{ ninja.age }}</p>
// </div>
// <!-- lopping over the key value  -->
//  <template v-for="ninja in ninjas">
//     <div v-for="(val,key) in ninja">
//         <p>{{key}} -{{val}}</p>
//     </div>

//  </template>
// </div>