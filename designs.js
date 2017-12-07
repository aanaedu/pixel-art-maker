/* global  $ */

$(function () {
    
    const $sizePicker = $('#sizePicker');
    const $inputHeight = $('#input_height');
    const $inputWidth = $('#input_width');
    const $pixelCanvas = $('#pixel_canvas');
    const $colorPicker = $('#colorPicker');
    const $btnClearCanvas = $('#btn_clear');
    const $btnPaintMode = $('#btn_paint_mode');
    let isDragMode = false;

    function makeGrid(row, col) {
        let output = '';
        for (let i = row; i > 0; i--) {
            output += '<tr>';
            for (let j = col; j > 0; j--) {
                output += '<td></td>';
            }
            output += '</tr>';
        }
        return output;
    }
    
    function paintBox(e) {
           const color = (e.button == 2) ? '#fff' : $colorPicker.val();
            $(e.target).css("background-color", color);
    }

    $sizePicker.on('submit', function (e) {
        e.preventDefault();
        const height = $inputHeight.val();
        const width = $inputWidth.val();
        $pixelCanvas.html(makeGrid(height, width));
    });
    
    $pixelCanvas.on('contextmenu', function(e) {
        e.preventDefault(); 
    });
    
    $pixelCanvas.on('mouseup', 'td', function(e) {
       paintBox(e);
    });
    
    $pixelCanvas.on('mouseover', 'td', function(e) {
        if(isDragMode){
          paintBox(e);
        }
    });

    $btnClearCanvas.on('click', function(e) {
        e.preventDefault();
        $pixelCanvas.html('');
    });
    
    $btnPaintMode.on('click', function(e) {
        const modeText = (isDragMode) ? 'Click to Paint' : 'Drag to Paint';
        $(e.target).text(modeText);
        isDragMode = !isDragMode;
    });
});
