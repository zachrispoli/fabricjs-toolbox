(function () {

    var zoomLevel = 0;
    var zoomAmount = 0.25;

    window.ZoomTool = new PaperToolbox.Tool({
        global: true,
        onMouseDown : function (e) {
            
        },
        onDoubleClick : function (e) {

        },
        onMouseMove : function (e) {
            
        },
        onMouseDrag : function (e) {
            
        },
        onMouseUp : function (e) {
            
        },
        onSelected : function (e) {
            
        },
        onDeselected : function (e) {

        },
        onScroll : function (e) {
            
        },
        onKeyPress : function (e) {
            if(e.key === '=') {
                zoomLevel += zoomAmount;
            } else if(e.key === '-') {
                zoomLevel -= zoomAmount;
            }

            e.fabric.zoomToPoint(new fabric.Point(0,0), Math.pow(2, zoomLevel));
        }
    });

})();