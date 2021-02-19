new Vue ({

    el: '#app',

    data: {

        // active: false,

        blogPosts: [
            {
                background: 'img/h-2-blog-img-1.jpg',
                title: 'This way, loves: a detailed guide through new design',
                author: 'By Emily Fields',
                day: '07',
                year: 'MAY \'19 '
            },

            {
                background: 'img/h-2-blog-img-2.jpg',
                title: 'I try to give people a different way of looking at art',
                author: 'By Emily Fields',
                day: '07',
                year: 'MAY \'19 '
            },

            {
                background: 'img/h-2-blog-img-3.jpg',
                title: 'Introduce Richard Laperrière of those amazing features',
                author: 'By Emily Fields',
                day: '07',
                year: 'MAY \'19 '
            },
        ],

        ideasDrawings: [
            {
                icon: '<i class="fas fa-lightbulb""></i>',
                title:'First there is an idea',
                paragraph:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself'
            },

            {
                icon: '<i class="far fa-comment" style="color: #f8d12d;"></i>',
                title:'Then we talk about',
                paragraph:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself'
            },

            {
                icon: '<i class="fas fa-cloud" style="color: #80465f;"></i>',
                title:'And we think about',
                paragraph:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself'
            },
            
            {
                icon: '<i class="fas fa-pencil-alt" style="color: #eb6950;"></i>',
                title:'So we draw along',
                paragraph:'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself'
            },
        ]

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