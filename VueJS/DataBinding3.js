new Vue({
    el: '#app',
    data: {
        name: 'shaym',
        website: 'http://thenetninja.co.uk',
        websiteTag :' <a href="http://Google.com">Google</a>'
    }
});


// <div id="app">
//         <a v-bind:href="website">The net ninja</a>
//         <input type="text" v-model="name"> <!-- Changed this line -->
//         <p v-html="websiteTag"></p>
//     </div>