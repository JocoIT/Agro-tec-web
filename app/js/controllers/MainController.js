/**
 * Created by Ing Ruben on 22/07/2017.
 */
app.controller('MainController', ['$scope', function($scope){
    $scope.autor = "Ing Ruben Macias";
    $scope.promo = 'The most popular books this month.';

	const client = new stitch.StitchClient('itagricultura-jvrcr');
	const db = client.service('mongodb', 'mongodb-atlas').db('IT');

	$scope.result = client.login().then(()=>
        db.collection('Users').find()
	).then(docs => {
		console.log("Found docs", docs)
		console.log("[MongoDB Stitch] Connected to Stitch")
		$(docs).each(function(){
            $('#all').append('<span>Alias: ' + docs[0].alias + '</span><br/>');
            $('#all').append('<span>Employee ID: ' + docs[0].employee_id + '</span><br/>');
            $('#all').append('<span>Password: ' + docs[0].password + '</span><br/>');
		});
	}).catch(err => {
			console.error(err)
	});
	
}]);
