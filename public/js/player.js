$(function () {

    createCircle("#progress", "#7cb5ec", 0.461);
    createCircle("#progress2", "#90ed7d", 0.808);
    createCircle("#progress3", "#f7a35c", 0.400);

});

function createCircle(div, color, value) {

    var circle = new ProgressBar.Circle(div, {
        color: color,
        strokeWidth: 15,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1000,
        text: {
            value: '0'
        },
        step: function(state, circle) {
            circle.setText((circle.value()).toFixed(3) + "%");
        }
    });

    circle.animate(value);  // Number from 0.0 to 1.0
}
