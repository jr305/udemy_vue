new Vue({
  el: '#exercise',
  data: {
    effect: '',
    btnPressed: false,
    currentItem: 0,
    enteredClass: null
  },
  computed: {
    makeAnImpact: function() {
      if(this.btnPressed){
        return `hide-org msg-item-${this.currentItem}`;
      }else{
        return 'instruct';
      }
    }
  },
  methods: {
    startEffect: function() {
      this.btnPressed = true;
      var that = this;
      setInterval(() => {
        if(that.currentItem < 3) { that.currentItem++; }
        that.effect = that.effect == 'shrink' ? 'highlight' : 'shrink';
      }, 1000);
    }
  }
});
