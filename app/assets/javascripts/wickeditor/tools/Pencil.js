(function () {

    window.PencilTool = new PaperToolbox.Tool({
        name: 'Pencil',
        icon: 'pencil.svg',
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
            e.fabric.isDrawingMode = true;
            e.fabric.freeDrawingBrush.width = e.options.strokeWidth;
            e.fabric.freeDrawingBrush.color = e.options.strokeColor;
            
        },
        onDeselected : function (e) {

        },
    });

})();