(function () {
    var box = document.getElementById("box");
    var move = document.getElementById("move");
    var bigimg = document.getElementById("bigimg");
    var bigImg = document.getElementById("bigImg");

    box.onmouseover = function () {
        move.style.display = "block";
        bigimg.style.display = "block";
        move.style.cursor = "pointer";
        bigimg.style.cursor = "pointer";
    };
    box.onmouseout = function () {
        move.style.display = "none";
        bigimg.style.display = "none";
    };

    // 获取位置
    box.onmousemove = function (e) {
        // 鼠标当前位置相对于视口的距离
        var x = e.clientX || e.pageX;
        var y = e.clientY || e.pageY;
        // box盒子相对于视口的位置
        var l = box.offsetLeft;
        var t = box.offsetTop;
        // 计算移动块move的位置(当前鼠标位置是move块的中心)
        var _left = x - l - move.offsetWidth / 2;
        var _top = y - t - move.offsetHeight / 2;
        if (_top <= 0) {
            _top = 0;
        } else if (_top >= box.offsetHeight - move.offsetHeight) {
            _top = box.offsetHeight - move.offsetHeight;
        }
        if (_left <= 0) {
            _left = 0;
        } else if (_left >= box.offsetWidth - move.offsetWidth) {
            _left = box.offsetWidth - move.offsetWidth;
        }
        move.style.top = _top + "px";
        move.style.left = _left + "px";

        //计算移动比例
        var w = _left / (box.offsetWidth - move.offsetWidth);
        var h = _top / (box.offsetHeight - move.offsetHeight);

        // 根据比例计算并设置大图在对应位置的位置
        var bleft = (bigImg.offsetWidth - bigimg.offsetWidth) * w;
        var btop = (bigImg.offsetHeight - bigimg.offsetHeight) * h;
        bigImg.style.left = -bleft + "px";
        bigImg.style.top = -btop + "px";
    };
})();