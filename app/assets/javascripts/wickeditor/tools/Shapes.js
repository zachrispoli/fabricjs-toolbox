// https://stackoverflow.com/questions/34100866/how-to-free-draw-ellipse-using-fabricjs
// https://stackoverflow.com/questions/9417603/fabric-js-free-draw-a-rectangle

(function () {

    var rect, isDown, origX, origY;

    window.ShapesTool = new PaperToolbox.Tool({
        name: 'Shapes',
        icon: 'shapes.svg',
        onMouseDown : function (e) {
            isDown = true;
            var pointer = e.fabric.getPointer(e.e);
            origX = pointer.x;
            origY = pointer.y;

            if(e.options.shapeMode === 'rect') {
                rect = new fabric.Rect({
                    left: origX,
                    top: origY,
                    originX: 'left',
                    originY: 'top',
                    width: pointer.x-origX,
                    height: pointer.y-origY,
                    angle: 0,
                    fill: e.options.fillColor,
                    transparentCorners: false
                });
                e.fabric.add(rect);
            } else if (e.options.shapeMode === 'ellipse') {
                ellipse = new fabric.Ellipse({
                    left: origX,
                    top: origY,
                    originX: 'left',
                    originY: 'top',
                    width: pointer.x-origX,
                    height: pointer.y-origY,
                    angle: 0,
                    fill: e.options.fillColor,
                    transparentCorners: false
                });
                e.fabric.add(ellipse);
            }
            
        },
        onDoubleClick : function (e) {

        },
        onMouseMove : function (e) {
            if (!isDown) return;
            var pointer = e.fabric.getPointer(e.e);

            if(e.options.shapeMode === 'rect') {
                if(origX>pointer.x){
                    rect.set({ left: Math.abs(pointer.x) });
                }
                if(origY>pointer.y){
                    rect.set({ top: Math.abs(pointer.y) });
                }

                rect.set({ width: Math.abs(origX - pointer.x) });
                rect.set({ height: Math.abs(origY - pointer.y) });
            } else if (e.options.shapeMode === 'ellipse') {
                var rx = Math.abs(origX - pointer.x)/2;
                var ry = Math.abs(origY - pointer.y)/2;
                if (rx > ellipse.strokeWidth) {
                  rx -= ellipse.strokeWidth/2
                }
                 if (ry > ellipse.strokeWidth) {
                  ry -= ellipse.strokeWidth/2
                }
                ellipse.set({ rx: rx, ry: ry});
            }

            e.fabric.renderAll();
        },
        onMouseDrag : function (e) {
            
        },
        onMouseUp : function (e) {
            isDown = false;
        },
        onSelected : function (e) {

        },
        onDeselected : function (e) {

        },
    });

})();