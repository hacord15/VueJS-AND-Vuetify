new Vue({
    el:'#vue-app',
    data:{
        error:false,
        success:false

    },
    methods:{
        
    },
    computed:{

    }
});



// For security purposes: Use v-if to avoid exposing sensitive data in the DOM.
// For UI performance: Use v-show if frequent toggling is required, but only for non-sensitive elements.

  

// html file

{/* <div id="vue-app">
<h1>conditional</h1>
<button v-on:click="error=!error">Toggle Error </button>
<button v-on:click="success=!success">Toggle sucess</button>
<!-- <p v-if="error">There has been an error</p>
<p v-else-if="success">hurrey, succes</p> -->
<p v-show="error">There has been an error </p>
<p v-show="success">wooo hooo</p>
</div> */}
