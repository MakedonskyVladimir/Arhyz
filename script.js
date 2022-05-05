$(function() {
    function changeFontColor()
    {
        $('#oldstyle').toggleClass('newStyle');
    }
    setInterval(changeFontColor, 1500);
});