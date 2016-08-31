$(function(){
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
			alert('left got pressed');
		}
		this.upAction = function(){
			alert('up got pressed');
		}
		this.rightAction = function(){
			var depressed = 1;
			this.right.on('mouseup', function(){
				console.log('mouseup triggered');
				depressed = 0;
			}).bind(this);
			while (depressed)
			{
				console.log('running while loop');
				this.mover.css('margin-left','+1');
			}
		}.bind(this);
		this.downAction = function(){
			alert('down got pressed');
		}
		this.initializeListeners = function(){
			$(this.left).on('press', this.leftAction);
			$(this.up).on('press', this.upAction);
			$(this.right).on('press', this.rightAction);
			$(this.down).on('press', this.downAction);
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