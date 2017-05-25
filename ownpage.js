function xianshi1() {
        document.getElementById("share").style.display = "block";
}

function xiaoshi1() {
        document.getElementById("share").style.display = "none";
}

function xianshi2() {
        document.getElementById("anli").style.display = "block";
}

function xiaoshi2() {
        document.getElementById("anli").style.display = "none";
}

function cannot() {
        alert("该功能正在开发中，敬请期待！")
}
$(document).ready(function () {
        $("a.lianjie1").click(function () {
                $("html, body").animate({
                        scrollTop: $($(this).attr("href")).offset().top + "px"
                }, {
                        duration: 500,
                        easing: "swing"
                });
                return false;
        });
});