
phina.namespace(function() {

  /**
   * @class phina.display.Shape
   * 
   */
  phina.define('phina.display.Shape', {
    superClass: 'phina.display.CanvasElement',

    init: function() {
      this.superInit();
    },

    draw: function(canvas) {
      // setup
      var context = canvas.context;
      if (this.fillStyle)   context.fillStyle   = this.fillStyle;
      if (this.strokeStyle) context.strokeStyle = this.strokeStyle;
      canvas.fillRect(0, 0, 64, 64);
    },
  });

});
