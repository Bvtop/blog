var odiv = $('.wrapper div');
var index = 0;
var timer = null;
var flag = true;

function init() {
	odiv.css({
		'left': '800px',
		'z-index': '1',
		'top': '50%',
		'height': '0',
		'margin-top': '0px'
	});
	odiv.eq(0).css({
		'top': '50%',
		'margin-top': '-90px',
		'width': '250px',
		'height': '180px',
		'left': '0px',
		'opacity': '0.4',
		'z-index': '1'
	});
	odiv.eq(1).css({
		'top': '0%',
		'margin-top': '0px',
		'width': '400px',
		'height': '300px',
		'left': '200px',
		'opacity': '1',
		'z-index': '100'
	});
	odiv.eq(2).css({
		'top': '50%',
		'margin-top': '-90px',
		'width': '250px',
		'height': '180px',
		'left': '550px',
		'opacity': '0.4',
		'z-index': '1'
	});

}

function leftMove() {
	if (flag) {
		flag = false;
		odiv.css({
			'z-index': '1'
		});
		odiv.eq((index) % 6).animate({
			'left': '-250px',
			'width': '250px',
			'height': '1',
			'top': '50%',
			'margin-top': '0px',
			'opacoty': '0'
		});
		odiv.eq((index + 1) % 6).animate({
			'left': '0px',
			'width': '250px',
			'height': '180px',
			'top': '50%',
			'margin-top': '-90px',
			'opacity': '0.4'
		});
		odiv.eq((index + 2) % 6).animate({
			'left': '200px',
			'width': '400px',
			'height': '300px',
			'top': '0',
			'margin-top': '0',
			'opacity': '1',
			'z-index': '100'
		});
		// odiv.eq(3).animate({'left':'800px'});
		odiv.eq((index + 3) % 6).animate({
			'left': '550px',
			'width': '250px',
			'height': '180px',
			'top': '50%',
			'margin-top': '-90px',
			'opacity': '0.4',
			'z.index': '1'
		}, function () {
			index++;
			flag = true;
		});
	}
}

function rightMove() {
	if (flag) {
		flag = false;
		odiv.eq((index - 1) % 6).css({
			'z-index': '1'
		})
		odiv.eq((index - 1) % 6).css({
			'left': '-250px'
		});
		odiv.eq((index - 1) % 6).animate({
			'left': '0',
			'width': '250px',
			'height': '180px',
			'top': '50%',
			'margin-top': '-90px',
			'opacity': '0.4'
		});
		odiv.eq((index) % 6).animate({
			'left': '200px',
			'width': '400px',
			'height': '300px',
			'top': '0',
			'margin-top': '0',
			'opacity': '1',
			'z-index': '100'
		});
		odiv.eq((index + 1) % 6).animate({
			'left': '550px',
			'width': '250px',
			'height': '180px',
			'top': '50%',
			'margin-top': '-90px',
			'opacity': '0.4',
			'z.index': '1'
		});
		odiv.eq((index + 2) % 6).animate({
			'left': '800px',
			'width': '250px',
			'height': '0',
			'top': '50%',
			'margin-top': '0',
			'opacity': '0.4'
		}, function () {
			index--;
			flag = true;
		});
	}
}
$('.btn-right').on('click', function () {
	rightMove();
});
$('.btn-left').on('click', function () {
	leftMove();
});
init();
timer = setInterval(rightMove, 1000);

$('.wrapper').on('mousemove', function () {
	clearInterval(timer);
})
$('btn-right').on('click', function () {
	timer = setInterval(rightMove, 1000);
})
$('.wrapper').on('mouseout', function () {
	timer = setInterval(rightMove, 1000);
})