/*
*
* BPAD v1.0  browser touch-pad designed for mobile
*
*/
$(function(){
	window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};
	console.log('ready to rock BPAD v1.0!');

	var Bpad = function(el){
		this.init = function(){
			this.container = el;
			this.left = $(container).find('#bpad-left');
			this.up = $(container).find('#bpad-up');
			this.right = $(container).find('#bpad-right');
			this.down = $(container).find('#bpad-down');
			this.mover = $('#mover');
			this.initializeListeners();
		}
		this.leftAction = function(){
			this.leftInterval = setInterval(function(){
			console.log('interval running');
			$(this.mover).css('margin-left','-=1');
			}, 50);
		}
		this.upAction = function(){
			this.upInterval = setInterval(function(){
				console.log('up interval running');
				$(this.mover).css('margin-top','-=1');
			},50);
		}
		this.rightAction = function(){
			this.rightInterval = setInterval(function(){
				console.log('right interval running');
				$(this.mover).css('margin-left','+=1');
			},50);
		}
		this.downAction = function(){
			this.downInterval = setInterval(function(){
				$(this.mover).css('margin-top','+=1');
			},50);
		}
		this.initializeListeners = function(){
			$(this.left).on('mousedown', this.leftAction);
			$(this.left).on('mouseup', function(){
				console.log('mouse up left');
				clearInterval(this.leftInterval);
			});
			$(this.up).on('mousedown', this.upAction);
			$(this.up).on('mouseup', function(){
				console.log('mouse up up');
				clearInterval(this.upInterval);
			});
			$(this.right).on('mousedown', this.rightAction);
			$(this.right).on('mouseup', function(){
				console.log('mouse up right');
				clearInterval(this.rightInterval);
			});
			$(this.down).on('mousedown', this.downAction);
			$(this.down).on('mouseup', function(){
				console.log('mouse up down');
				clearInterval(this.downInterval);
			});
			$(this.down).on('touchend', function(){
				console.log('touch leave event firing');
				clearInterval(this.downInterval);
			})
		}.bind(this);
		this.init();
	}
var bpadArray = $('.bpad-container');
if (bpadArray)
	{
		for (var i = 0; i < bpadArray.length; i++)
		{
			var container = (bpadArray[i]);
			var bpad = new Bpad(container);
		}
	}

})


/*
		this.initializeListeners = function(){
			$(this.left).on('mousedown', this.leftAction);
			$(this.left).on('mouseup', this.leftCancel);
			$(this.up).on('mousedown', this.upAction);
			$(this.up).on('mouseup', this.upCancel);
			$(this.right).on('mousedown', this.rightAction);
			$(this.right).on('mouseup', this.rightCancel);
			$(this.down).on('mousedown', this.downAction);
			$(this.down).on('mouseup', this.downCancel);
		}.bind(this);
*/