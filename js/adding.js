function Adding() {
	console.log("Creating Adding Object...");
	this.seed = 0;
	this.seedsPlayed = new Array();
	this.operations = new Array();
	this.results1 = new Array();
	this.results2 = new Array();
	this.results3 = new Array();
	
	var i = 0;
	while (i < 30)
	{
		var num1 = Math.floor((Math.random()*50)+0);
		var num2 = Math.floor((Math.random()*50)+0);
		var result1 = num1 + num2;
		var result2 = result1 + 1;
		var result3 = result1 - 1;
		this.addOperation(num1+" + "+num2, result1, result2, result3);
		
		i++;
	}
}

Adding.prototype.nextValue = function() {
	//console.log("Seed:" + this.seedsPlayed.length);
	if (this.seedsPlayed.length === 10)
		return false;
	
	var max = this.operations.length - 1;
	this.seed = Math.floor((Math.random()*max)+0);
	
	this.seedsPlayed.push(this.seed);
	return true;
};

Adding.prototype.addOperation = function(operation, result1, result2, result3){
	this.operations.push(operation);
	this.results1.push(result1);
	this.results2.push(result2);
	this.results3.push(result3);
}

Adding.prototype.currentOperation = function() {
	var result = new Array();
	result.push(this.operations[this.seed]);
	
	var rand = Math.floor((Math.random()*10)+0);
	
	if ( rand < 4 ) {
		result.push(this.results1[this.seed]);
		result.push(this.results2[this.seed]);
		result.push(this.results3[this.seed]);
	} else if ( rand < 7) {
		result.push(this.results2[this.seed]);
		result.push(this.results1[this.seed]);
		result.push(this.results3[this.seed]);
	} else if ( rand < 11) {
		result.push(this.results2[this.seed]);
		result.push(this.results3[this.seed]);
		result.push(this.results1[this.seed]);
	}
	
	return result;
}
/** Section Getters **/
Adding.prototype.getResults1 = function() {
	return this.results1[this.seed];
}

Adding.prototype.getResults2 = function() {
	return this.results2[this.seed];
}

Adding.prototype.getResults3 = function() {
	return this.results3[this.seed];
}

Adding.prototype.getOperation = function() {
	return this.operations[this.seed];
}

/** Section Testers **/
Adding.prototype.test = function() {
	console.log("Testing...");
	for (i=0;i<this.operations.length;i++)
		console.log(this.operations[i] + "//");
};

Adding.prototype.testScenario = function() {
	var res = this.currentOperation();
	//console.log(this.operations[this.seed] + " | " + this.results1[this.seed] + " | " + this.results2[this.seed] + " | " + this.results3[this.seed]);
	console.log(res[0] + " | " + res[1] + " | " + res[2] + " | " + res[3]);
}