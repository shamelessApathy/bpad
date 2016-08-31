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
			$('.currentAction').attr('data-attribute','left');
		}
		this.leftCancel = function(){
			$('.currentAction').attr('data-attribute', ' ');
		}
		this.upAction = function(){
			$('.currentAction').attr('data-attribute','up');
		}
		this.upCancel = function(){
			$('.currentAction').attr('data-attribute', ' ');
		}
		this.rightAction = function(){
			$('.currentAction').attr('data-attribute','right');
		}
		this.rightCancel = function(){
			$('.currentAction').attr('data-attribute',' ');
		}
		this.downAction = function(){
			$('.currentAction').attr('data-attribute','down');
		}
		this.downCancel = function(){
			$('.currentAction').attr('data-attribute', ' ');
		}
		this.initializeListeners = function(){
			$(this.left).on('mousedown', this.leftAction);
			$(this.left).on('touchstart', this.leftAction);
			$(this.left).on('mouseup', this.leftCancel);
			$(this.left).on('touchend', this.leftCancel);
			$(this.up).on('mousedown', this.upAction);
			$(this.up).on('touchstart', this.upAction);
			$(this.up).on('mouseup', this.upCancel);
			$(this.up).on('touchend', this.upCancel);

			$(this.right).on('mousedown', this.rightAction);
			$(this.right).on('touchstart', this.rightAction);
			$(this.right).on('mouseup', this.rightCancel);
			$(this.right).on('touchend', this.rightCancel);
			$(this.down).on('mousedown', this.downAction);
			$(this.down).on('touchstart', this.downAction);
			$(this.down).on('mouseup', this.downCancel);
			(this.down).on('touchend', this.downCancel);
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
