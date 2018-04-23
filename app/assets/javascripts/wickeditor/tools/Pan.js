(function () {

    var panning = false;

    window.PanTool = new PaperToolbox.Tool({
        name: 'Pan',
        icon: 'pan.svg',
        cursor: 'move',
        onMouseDown : function (e) {
            panning = true;
        },
        onDoubleClick : function (e) {
            
        },
        onMouseMove : function (e) {
            if (panning) {
                var units = 10;
                var delta = new fabric.Point(e.e.movementX, e.e.movementY);
                e.fabric.relativePan(delta);
            }
        },
        onMouseDrag : function (e) {
            
        },
        onMouseUp : function (e) {
            panning = false;
        },
        onScroll : function (e) {
            
        },
        onSelected : function (e) {
            
        },
        onDeselected : function (e) {
            
        },
    });

})();