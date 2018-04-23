(function () {

    window.CommentTool = new PaperToolbox.Tool({
        name: 'Comment',
        icon: 'comment.svg',
        onMouseDown : function (e) {
            var pointer = e.fabric.getPointer(e.e);

            ellipse = new fabric.Ellipse({
                left: pointer.x,
                top: pointer.y,
                originX: 'left',
                originY: 'top',
                angle: 0,
                fill: e.options.fillColor,
                transparentCorners: false
            });
            e.fabric.add(ellipse);

            ellipse.set({ rx: 10, ry: 10});
            ellipse._isComment = true;
            ellipse.setCoords();
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
    });

})();