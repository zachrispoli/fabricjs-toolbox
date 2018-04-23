App = function () {
    var self = this;

    var fabricCanvas = new fabric.Canvas('paper-canvas');

    fabricCanvas.add(new fabric.Rect({ width: 50, height: 50, fill: 'red', top: 100, left: 100 }));
    fabricCanvas.add(new fabric.Rect({ width: 30, height: 30, fill: 'green', top: 50, left: 150 }));
    fabricCanvas.add(new fabric.Circle({ radius: 20, fill: 'blue', top: 160, left: 140 }));
    fabricCanvas.add(new fabric.Textbox('text text text', {
        left: 300,
        top: 100,
        fontSize: 20,
        fill: '#000'
    }));

    var toolboxContainer = document.createElement('div');
    document.body.appendChild(toolboxContainer);

    var paperToolbox = new PaperToolbox(fabricCanvas);
    paperToolbox.createView(toolboxContainer);
    paperToolbox.addTool(CursorTool)
    paperToolbox.addTool(PencilTool)
    paperToolbox.addTool(TextTool)
    paperToolbox.addTool(ShapesTool)
    paperToolbox.addTool(PanTool)
    paperToolbox.addTool(ZoomTool)
    paperToolbox.addTool(CommentTool)

    window.addEventListener('resize', function () {
        fabricCanvas.lowerCanvasEl.style.width  = window.innerWidth+'px';
        fabricCanvas.lowerCanvasEl.style.height = window.innerHeight+'px';
        fabricCanvas.setDimensions({
            width:window.innerWidth, 
            height:window.innerHeight
        });
    });
    window.dispatchEvent(new Event('resize'));

    /*
     * Example usage:
     *
     */
    function saveCanvas () {
        var json = JSON.stringify(fabricCanvas);
        return json;
    }

    /*
     * Example usage:
     *
     */
    function loadCanvas (json) {
        fabricCanvas.loadFromJSON(json, function() {
            fabricCanvas.renderAll();
        });
    }

    self.saveCanvas = saveCanvas;
    self.loadCanvas = loadCanvas;
    self.toolbox = paperToolbox;
}