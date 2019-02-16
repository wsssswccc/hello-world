var question = document.getElementById('question');
var A = document.getElementById('A');
var B = document.getElementById('B');
var C = document.getElementById('C');
var D = document.getElementById('D');
var again = document.getElementById('again');
var i = 1;
var score;
var Again = function()  
{  
   window.location.reload();  
}  
var Next = function(x){
			var request = new XMLHttpRequest();
			request.onreadystatechange = function(){
				if(request.status === 200 && request.readyState === 4) {
					console.log("success");
					var text = request.response;
					question.innerHTML = JSON.parse(text).data.question + '<br/>';
					A.innerHTML = JSON.parse(text).data.answer.A + '<br/>';
					B.innerHTML = JSON.parse(text).data.answer.B + '<br/>';
					C.innerHTML = JSON.parse(text).data.answer.C + '<br/>';
					D.innerHTML = JSON.parse(text).data.answer.D + '<br/>';
				}
				else{
					console.log("something wrong");
				}
			}
			if(i == 1){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/first-question",true);
				request.send();	
				// setTimeout("Next()",10000);
				score = 0;
			}
			
			else if(i == 2){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/second-question",true);
				request.send();
				// setTimeout("Next()",10000);
				if (x === A) {
						score = 10 + score;
				}
			}
			else if(i == 3){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/third-question",true);
				request.send();
				// setTimeout("Next()",10000);
				if (x === C) {
						score = 10 + score;
				}
			}
			else if(i == 4){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/forth-question",true);
				request.send();
				// setTimeout("Next()",10000);
				if (x === D) {
						score = 10 + score;
					}
			}
			else if(i == 5){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/fifth-question",true);
				request.send();
				// setTimeout("Next()",10000);
				if (x === D) {
						score = 10 + score;
					}
			}
			else if(i == 6){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/sixth-question",true);
				request.send();
				// setTimeout("Next()",10000);
				if (x === B) {
						score = 10 + score;
					}
			}
			else if(i == 7){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/seventh-question",true);
				request.send();
				// setTimeout("Next()",10000);
				if (x === A) {
						score = 10 + score;
					}

			}
			else if(i == 8){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/eighth-question",true);
				request.send();
				// setTimeout("Next()",10000);
				if (x === C) {
						score = 10 + score;
					}
			}
			else if(i == 9){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/ninth-question",true);
				request.send();
				// setTimeout("Next()",10000);
					if (x === B) {
						score = 10 + score;
					}
			}
			else if(i == 10){
				request.open("GET","https://easy-mock.com/mock/5c17b21e40c07229aa2e6061/example/tenth-question",true);
				request.send();	
				// setTimeout("Next()",10000);
				if (x === D) {
						score = 10 + score;
					}	
			}
			else if(i == 11){
				score = 10 + score;
				alert("你此次得分为" + score + " !! ");
			}		
														
		i ++;				
		return i;
		}
