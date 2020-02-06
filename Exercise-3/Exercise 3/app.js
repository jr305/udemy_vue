new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function(){
                return this.value < 37 ? "not there yet" : "done";
            }
        },
        watch: {
            value: function(){
                //could use arrow function '() =>' to preserve the 'this' context, 
                //if the 'this' context of the annymous function is not needed
                var that = this;
                setTimeout(function() {
                    that.value = 0;
                }, 5000);
            }
        }
    });