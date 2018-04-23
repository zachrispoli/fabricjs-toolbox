(function () {

    var POPUP_CLASSNAME = 'papertoolbox_popup';
    var el;

    window.CursorTool = new PaperToolbox.Tool({
        name: 'Cursor',
        icon: 'cursor.svg',
        onMouseDown : function (e) {
            if(el) el.remove()
            if(e.target && e.target._isComment) {
                el = document.createElement('div');
                el.className = POPUP_CLASSNAME;
                el.style.left = e.e.pageX+'px';
                el.style.top = e.e.pageY+'px';
                el.innerText = 'Some HTML.';
                document.body.appendChild(el);
            }
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
            e.fabric.selection = true;
            e.fabric.forEachObject(function(o) {
                o.selectable = true;
            });
        },
        onDeselected : function (e) {
            if(el) el.remove()
        },
    });

})();