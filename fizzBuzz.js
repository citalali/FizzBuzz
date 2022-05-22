function getInputValue(){
	
	var inputVal =
		document.getElementById("myInput").value;
	
	for (var i = 1; i <= inputVal; i++){
		if ( i % 3 === 0 && i % 5 === 0){
			console.log("Buzz");
		}
		else if ( i % 3 === 0) {
			console.log("Fizz");
		}
		else{
		console.log(i);
		}
	}
	alert("look at log");
}
