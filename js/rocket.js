var timer = null;
var countDownNumber = 10;


var changeState = function(state){
	document.body.className = 'body-state'+state;
					clearInterval(timer);
					countDownNumber = 10;
					document.getElementById('countdown').innerHTML = countDownNumber; 



//countdown
	if (state == 2){
		timer = setInterval(function() 
		{
			countDownNumber = countDownNumber - 1;
			document.getElementById('countdown').innerHTML = countDownNumber; 
			

			if (countDownNumber > 4 && countDownNumber <= 7){
				document.getElementById('burp').className = 'burp show';
			} else{
				document.getElementById('burp').className = 'burp';
			}


			if (countDownNumber >1 && countDownNumber <= 4){

				document.getElementById('here').className = 'here show';

			} else {
				document.getElementById('here').className = 'here';
			}

			if (countDownNumber <= 0){
				changeState(3);
			};

		}, 500);
		
	} else if (state == 3) {
		var success = setTimeout(function(){

			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber:', randomNumber)

			if (randomNumber > 2){
				changeState(4)
			} else {
				changeState(5)
			}
		}, 2000);
	}
}