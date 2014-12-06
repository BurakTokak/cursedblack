function randomIntFromInterval(min,max){    
	return Math.floor(Math.random()*(max-min+1)+min);
}


	nextColorCount=randomIntFromInterval(1,4);
	function nextColorC(){
		nextColorCount=randomIntFromInterval(1,4);
		var nextColor = document.getElementById("nextColor");
		nextColor.className = "nextC c" + nextColorCount;
	}
	
	//create array here.
	var theScore = 0;
	createGameColor=randomIntFromInterval(1,4);
	var theGame=new Array(5);
	for (i=0; i <5; i++){
	theGame[i]=new Array(5);
	} 
	
function theScoreUpdate(x){
	theScore = theScore + x;
	document.getElementById("theScoreDiv").innerHTML = theScore;
}

	
function checkGame(score){
	var i=1;
	while(i<5){
	if((theGame[i][1]==theGame[i][2]) && (theGame[i][1]==theGame[i][3]) && (theGame[i][1]==theGame[i][4])){
		changeUnitColor(i, 1, randomIntFromInterval(1,4));
		changeUnitColor(i, 2, randomIntFromInterval(1,4));
		changeUnitColor(i, 3, randomIntFromInterval(1,4));
		if(score==1){ theScoreUpdate(10); }
	}
	i++;
	}
	var i=1;
	while(i<5){
	if((theGame[1][i]==theGame[2][i]) && (theGame[1][i]==theGame[3][i]) && (theGame[1][i]==theGame[4][i])){
		changeUnitColor(1, i, randomIntFromInterval(1,4));
		changeUnitColor(2, i, randomIntFromInterval(1,4));
		changeUnitColor(3, i, randomIntFromInterval(1,4));
		changeUnitColor(4, i, randomIntFromInterval(1,4));
		if(score==1){ theScoreUpdate(10); }
	}
	i++;
	}
}
		
		
function createNewGame(){
	for(i=1;i<5;i++){
		for(j=1;j<5;j++){
		changeUnitColor(i, j, createGameColor);
		createGameColor=randomIntFromInterval(1,4);
		}
	}

}
	
function changeUnitColor(x, y, c){
	theGame[x][y] = c;
	var unitIDC = "u" +x+ "-" +y;
	var unitCC = document.getElementById(unitIDC);
	unitCC.className = "unit c" + c;
}

	//document ready..
 document.onreadystatechange = function () {
     if (document.readyState == "complete") {
	 
	 createNewGame(); // GG
	 checkGame(); //noscore
	nextColorC();
	
   }
 }

function randChangeUnit(){ 
	xRand = randomIntFromInterval(1,4);
	yRand = randomIntFromInterval(1,4);
	
	var unitIDR = "u" +xRand+ "-" +yRand;
	var unitCR = document.getElementById(unitIDR);
	unitCR.className = "unit c0";
}

function clickUnit(x, y){
 if((theGame[x][y]!=nextColorCount) && (theGame[x][y]!=0)){
	changeUnitColor(x, y, nextColorCount);
	nextColorC();
	checkGame(1);
	//randChangeUnit();
	}
}
