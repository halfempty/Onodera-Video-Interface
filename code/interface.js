$(document).ready(function(){

	var films = Array(
		Array('01','my buddy'),
		Array('02','bane of my existence'),
		Array('03','just another day'),
		Array('04','American Scrapbook'),
		Array('05','current local time'),
		Array('06','locker boys'),
		Array('07','LITTLE BOY &amp; FAT MAN'),
		Array('08','the days of the week'),
		Array('09','The Name of the Game'),
		Array('10','carbon'),
		Array('11','dream on'),
		Array('12','ides of march'),
		Array('13','this too shall pass'),
		Array('14','kitchen heat'),
		Array('15','a day in the life...'),
		Array('16','stop and go'),
		Array('17','I remember...'),
		Array('18','PROVERBS'),
		Array('19','Virginia Woolf, I know why'),
		Array('20','federal job retraining'),
		Array('21','cultural adaptation'),
		Array('22','snow drifts'),
		Array('23','fish tale'),
		Array('24','the joy of eating'),
		Array('25','Rome 00186'),
		Array('26','looking glass'),
		Array('27','shadows'),
		Array('28','good times'),
		Array('29','close to you'),
		Array('30','EERIE'),
		Array('31','Road Trip USA'),
		Array('32','packing up the car'),
		Array('33','coming of age'),
		Array('34','an apple a day'),
		Array('35','life after embezzlement'),
		Array('36','Kleptoparasitism'),
		Array('37','people are all the same'),
		Array('38','walk in the park'),
		Array('39','DRIFT LINE'),
		Array('40','tendersweet memories'),
		Array('41','Woodstock: 40 years later'),
		Array('42','sand: nature&rsquo;s tiny rocks'),
		Array('43','priceless'),
		Array('44','celebrate'),
		Array('45','Inter arma enim silent leges'),
		Array('46','Num3ers'),
		Array('47','THE CORRIDOR'),
		Array('48','heaven'),
		Array('49','HARD TO SWALLOW'),
		Array('50','good at my job'),
		Array('51','out to sea'),
		Array('52','Hazard Pay'),
		Array('53','talking to myself')
		);

		var currentVid;

		/*
		  * Add a shuffle function to Array object prototype
		  * Usage : 
		  *  var tmpArray = ["a", "b", "c", "d", "e"];
		  *  tmpArray.shuffle();
		  */
		 Array.prototype.shuffle = function (){
		     var i = this.length, j, temp;
		     if ( i == 0 ) return;
		     while ( --i ) {
		         j = Math.floor( Math.random() * ( i + 1 ) );
		         temp = this[i];
		         this[i] = this[j];
		         this[j] = temp;
		     }
		};


		jQuery.fn.initialLoad = function () {

			$('.shade').hide();
			$('.movie').hide();

			films.shuffle();

			var i = 0;

			while ( i < films.length - 1 ) {

				this.append('<div class="thumbnail" id="' + films[i][0] + '"><img src="images/' + films[i][0] + '.png" alt="' + films[i][1] + '" /></div>');

				i++;

			}

			$(document).shiftRows();



		}




		jQuery.fn.shiftRows = function () {
			$('.thumbnail').css('margin-left','0');
			$('.thumbnail:eq(0)').css('margin-left','95px');
			$('.thumbnail:eq(18)').css('margin-left','95px');
			$('.thumbnail:eq(36)').css('margin-left','95px');
		}

		jQuery.fn.center = function () {

		    	this.css("position","fixed");

				var $t = ( ( $(window).height() - this.outerHeight() ) / 2) + $(window).scrollTop();
				var $h = $('.header').outerHeight();

		       	if ( ( $(window).height() - $h ) >= this.outerHeight() ) {
					var $top = $t;
				} else {
					var $top = $h;
				}
				this.css({"top" : ($top + "px") });


				if ( $(window).width() >= this.outerWidth() ) {
		    		this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
				}

				this.show();

		    	return this;

		}

	jQuery.fn.fillWindow = function () {
		this.css({
			"position" : "fixed",
			"top" : "0px",
			"height" : ( $(window).height() + "px" ),
			"width" : ( $(window).width() + "px" )
			});
		this.show();		
	}

	jQuery.fn.displayMovie = function (movieNum, movieAlt) {
		$('.shade').fillWindow();
		$('.video').attr('src','movies/' + movieNum + '.m4v');
		$('.movie h3').html('&ldquo;' + movieAlt + '&rdquo;');
		$('.movie').center();

		document.getElementById('video').play();
	}

	jQuery.fn.hideMovie = function () {

		$('.movie').hide();
		$('.shade').hide();

		document.getElementById('video').pause();
		$('.video').removeAttr('src');

	}


// GO!

$('body').append('<div class="shade"><span>Close</span></div>');
$('body').append('<div class="movie"><video class="video" id="video" controls="" autoplay="" width="640" height="426"></video><h3></h3></div>');
$('body').append('<div class="container"></div>');

$('.container').initialLoad();

$('.thumbnail').click(function() {
	var movieNum = $(this).attr('id');
	var movieAlt = $(this).find('img').attr('alt');
	$(document).displayMovie(movieNum, movieAlt);
	$(this).appendTo('.container');
	$(document).shiftRows();
});

$('.shade').click(function() {
	$(document).hideMovie();
});


});