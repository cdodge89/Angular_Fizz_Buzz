(function(){
	var app = angular.module('fizzbuzzDisplay', []);

	app.controller('DisplayController', function(){
		
		this.items = fizzbuzz;
		
	});
	var fizzbuzz = [];
	for (var i=1; i <=100; i++){
		var obj ={}
				if(i % 3 === 0 && i % 5 === 0){
					obj.val = 'fizzbuzz';
					fizzbuzz.push(obj);
				} else if (i % 3 === 0){
					obj.val = 'fizz';
					fizzbuzz.push(obj);
				} else if (i % 5 === 0){
					obj.val = 'buzz';
					fizzbuzz.push(obj);
				} else {
					obj.val = i;
					fizzbuzz.push(obj);
				}
			}
})();