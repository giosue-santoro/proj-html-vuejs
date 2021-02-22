new Vue ({

    el: '#app',

    data: {

        slides: 2,
        active: 1,

        navBar : [
            {
              home : 'HOME',
              pages : 'PAGES',
              portfolio : 'PORTFOLIO',
              blog : 'BLOG',
              shop : 'SHOP',
              elements : 'ELEMENTS',
              hamburger: 'img/svg-1.svg',
            }      
        ],

        slider: [
            {
                title: 'Devotion that never',
                specialFont: 'ends',
                paragraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.',
                button: 'READ MORE',
                firstPerson: 'img/h-2-slider-img-11.png',
                secondPerson: '',
                firstLeaf: 'img/short-slider-rev-1-img-2.png',
                secondLeaf: 'img/short-slider-rev-1-img-6.png',
                thirdLeaf: 'img/h-2-slider-img-14.png',
                fourthLeaf: 'img/h-2-slider-img-17.png',
                fifthLeaf: 'img/h-2-slider-img-12.png',
                sixthLeaf: 'img/h-2-slider-img-13.png',
            },

            {
                title: 'Projects made with',
                specialFont: 'love',
                paragraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.',
                button: 'READ MORE',
                firstPerson: 'img/h-2-slider-img-11.png',
                secondPerson: '',
                firstLeaf: 'img/short-slider-rev-1-img-2.png',
                secondLeaf: 'img/short-slider-rev-1-img-6.png',
                thirdLeaf: 'img/h-2-slider-img-14.png',
                fourthLeaf: 'img/h-2-slider-img-17.png',
                fifthLeaf: 'img/h-2-slider-img-12.png',
                sixthLeaf: 'img/h-2-slider-img-13.png',
            },
            
            {
                title: 'Our new folio full of',
                specialFont: 'joy',
                paragraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.',
                button: 'READ MORE',
                firstPerson: 'img/short-slider-rev-1-img-3.png',
                secondPerson: '',
                firstLeaf: 'img/h-2-slider-img-12.png',
                secondLeaf: 'img/short-slider-rev-1-img-6.png',
                thirdLeaf: 'img/h-2-slider-img-14.png',
                fourthLeaf: 'img/short-slider-rev-1-img-9.png',
                fifthLeaf: 'img/short-slider-rev-1-img-1.png',
                sixthLeaf: 'img/h-2-slider-img-13.png',
            }
        ],

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
                icon: '<i class="fas fa-lightbulb"></i>',
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
        },

        move(amount) {
            let newActive;
            const newIndex = this.active + amount;

            if (newIndex > this.slides) newActive = 1;
            if (newIndex === 0) newActive = this.slides;
            this.active = newActive || newIndex;
        },

        jump(index) {
            this.active = index
        },

    }   
})

Vue.config.devtools = true;