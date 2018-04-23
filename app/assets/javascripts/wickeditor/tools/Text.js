(function () {

    var rect, isDown, origX, origY;

    window.TextTool = new PaperToolbox.Tool({
        name: 'Text',
        icon: 'text.svg',
        onMouseDown : function (e) {
            isDown = true;
            var pointer = e.fabric.getPointer(e.e);
            origX = pointer.x;
            origY = pointer.y;
            var pointer = e.fabric.getPointer(e.e);

            rect = new fabric.Rect({
                left: origX,
                top: origY,
                originX: 'left',
                originY: 'top',
                width: pointer.x-origX,
                height: pointer.y-origY,
                angle: 0,
                fill: 'rgba(0,0,0,0.1)',
                stroke: 'rgba(0,0,0,1.0)',
                transparentCorners: false
            });
            e.fabric.add(rect);
        },
        onDoubleClick : function (e) {

        },
        onMouseMove : function (e) {
            if (!isDown) return;
            var pointer = e.fabric.getPointer(e.e);

            if(origX>pointer.x){
                rect.set({ left: Math.abs(pointer.x) });
            }
            if(origY>pointer.y){
                rect.set({ top: Math.abs(pointer.y) });
            }

            rect.set({ width: Math.abs(origX - pointer.x) });
            rect.set({ height: Math.abs(origY - pointer.y) });

            e.fabric.renderAll();
        },
        onMouseDrag : function (e) {
            
        },
        onMouseUp : function (e) {
            isDown = false;

            e.fabric.add(new fabric.Textbox('I ADDED THIS TEXT', {
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height,
                fontSize: 20,
                fill: '#000'
            }));

            if(rect) e.fabric.remove(rect)
        },
        onSelected : function (e) {

        },
        onDeselected : function (e) {

        },
    });

})();