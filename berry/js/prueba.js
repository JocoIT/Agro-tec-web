var app=angular.module('miApp',[ ]);
const client = new stitch.StitchClient('itagricultura-jvrcr');
const db = client.service('mongodb', 'mongodb-atlas').db('IT');


          client.login().then(()=>
            db.collection('Users').find()
          ).then(docs => {
			  
 			  
		var arr=docs[0];
			  
			  var valores={
				alias:arr.alias,
				  pass:arr.password
			  };
			  
			  $('#prueba').append('<span>'+ valores.alias +'</span>');
			app.controller('miCtrl', function(){
				this.datos =valores;
			});

			  console.log("Found docs", arr.password)
            console.log("[MongoDB Stitch] Connected to Stitch")
          
		  }).catch(err => {
            console.error(err)

		 });

   
