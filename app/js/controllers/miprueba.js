const client = new stitch.StitchClient('itagricultura-jvrcr');
const db = client.service('mongodb', 'mongodb-atlas').db('IT');


          client.login().then(()=>
            db.collection('Employees').find()
          ).then(docs => {

			  console.log("Found docs", docs)
            console.log("[MongoDB Stitch] Connected to Stitch")

		  }).catch(err => {
            console.error(err)

		 });
