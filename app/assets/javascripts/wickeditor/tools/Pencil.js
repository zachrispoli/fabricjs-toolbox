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
        },
        onDeselected : function (e) {

        },
    });

})();