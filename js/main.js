var flipbox = null;

var GPAdd = new Adding();
var GPSub = new Substracting();

var totalCorrect = 0;
var totalWrong = 0;

var selectedOperation;

audioToLoop = document.getElementById('fxBackground');
audioToLoop.loop = true;


$('DOMComponentsLoaded').ready(function(){
    // Main Load
    flipbox = document.getElementById('flipbox');
    //alert('init jquery');
	$( "#ACOptions" ).load( "views/options.html" );
	//$( "#ACGamePlay" ).load( "views/gameplay.html" );
});

$('#btnOptions').click(function(){
    flipbox.showFront();
});

$('#btnRun').click(function(){
    $('x-toggle[name=operation]').each(function() {
	if (this.checked)
	    selectedOperation = this.value;
    });
    flipbox.showBack();
    reload();	
});

/*** GamePlay ***/
function reload() {
	
	$( "#ACGamePlay" ).load( "views/gameplay.html", function() {
		if ( selectedOperation === "Add") {
		    GPAdd.nextValue();
		    loadValues(GPAdd.currentOperation());
		} else if ( selectedOperation === "Sub") {
		    GPSub.nextValue();
		    loadValues(GPSub.currentOperation());
		}
	});
	
	GPAdd = new Adding();
	GPSub = new Substracting();
	
	totalCorrect = 0;
	totalWrong = 0;
}

function loadValues(data) {
	
	$('#HUD').html("<center><h1>:) -> " + totalCorrect + " | " + ":( -> " + totalWrong + "</h1><center/>");
	
	$('#GPCurrentOperation').html(data[0] + " ?");
	
	$('#GPResults1').html(data[1]);
	$('#GPResults2').html(data[2]);
	$('#GPResults3').html(data[3]);
}

function checkWin(checked) {
	//console.log("Selected: " + checked);
	//console.log("Result 1: " + GPAdd.getResults1());
	
	var result1;
	if ( selectedOperation === "Add") {
	    result1 = GPAdd.getResults1();
	} else if (selectedOperation === "Sub") {
	    result1 = GPSub.getResults1()
	}
	
	if ( checked ==  result1 ) {
	    totalCorrect++;
	    //console.log("Correct! :)");
	}
	else {
	    totalWrong++;
	    //console.log("Incorrect! :(");
	}
}