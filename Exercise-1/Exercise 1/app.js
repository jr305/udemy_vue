new Vue({
    el: '#exercise',
    data: {
       name: 'Juan Reigosa',
       age: '29',
       imgSrc: 'https://ih1.redbubble.net/image.193933620.9928/raf,750x1000,075,t,9ec0d5:0d26d5c715.u1.jpg'
    },
    methods: {
        getAgeTimes3: function(event){
            return this.age * 3;
        },
        getRandomFloat: function(){
            return Math.random().toString();
        }
    }
});