new Vue ({

    el: '#app',

    data: {

        active: false,

    },

    methods: {

        mouseOver: function() {
            this.active = true
        },

        mouseLeave: function() {
            this.active = false;
        }

    }
})

Vue.config.devtools = true;