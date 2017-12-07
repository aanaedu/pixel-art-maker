$(function () {

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

    $('#sizePicker').on('submit', function (e) {
        e.preventDefault();
        const height = $('#input_height').val();
        const width = $('#input_width').val();
        $('#pixel_canvas').html(makeGrid(height, width));
    });

    $('#pixel_canvas').on('click', 'td', function(e) {
        const color = $('#colorPicker').val();
        $(this).css("background-color", color);
    });

    $('#btn_clear').on('click', function(e){
        e.preventDefault();
        $('#pixel_canvas').html('');
    });
});
