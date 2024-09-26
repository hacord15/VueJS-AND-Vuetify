// making a instance
new Vue({
    el:'#app',
    data:{
        name:'ABhi',
        job:'Ninja'
    },
    methods:{
        greet: function(time){
            return 'Good '+ time + ' ' + this.name; //diretly access form the data
        }
    }

});