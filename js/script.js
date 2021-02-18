new Vue ({

    el: '#app',

    data: {

        active: false,

    },

    methods: {

        // mouseOver: function() {
        //     this.active = true
        // },

        // mouseLeave: function() {
        //     this.active = false;
        // },

        fadeIn: function() {
            const target = document.querySelector('.placeholder');
            target.classList.add('visible');
        },

        fadeOut: function() {
            const target = document.querySelector('.placeholder');
            target.classList.remove('visible');
        },

        scrollTop: function() {
            document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
        }

    }   
})

Vue.config.devtools = true;