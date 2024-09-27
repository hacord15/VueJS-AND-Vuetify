
Vue.component('greeting',{
    template:'<p>Hey there i. reusable {{name}} component <button v-on:click="changeName">Chnage name</button</p>',
    data: function(){
        return{
            name:"naam"
        }
    },
    methods:{
        changeName:function(){
            this.name ="abhineet";
        }
    }
    
});



var one = new Vue({
    el:'#vue-app-one',
    data:{
        title:"This is from One"
    },
    methods:{
     
    },
    computed:{
        greet:function(){
            return "Hello one";
         }
    }
});
var two = new Vue({
    el:'#vue-app-two',
    data:{
        title:"This is from two"
    },
    methods:{
        btn:function(){
            one.title="change ho gya be ";
        }
    },
    computed:{
        greet:function(){
            return "Hello two";
         }
    }
    
});

two.title ="bahar se change krr diya be "


