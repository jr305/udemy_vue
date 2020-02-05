new Vue({
        el: '#exercise',
        data: {
            value: 'piece of cake'
        },
        methods: {
            showAlert: function(){
                alert('this is an alert');
            },
            saveVal: function(event){
                this.value = event.target.value;
            }
        }
    });