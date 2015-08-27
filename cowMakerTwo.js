// var Cow = require('./models/cow');
// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/textMate');



// var data = {
//     cowData: [{
//             "name": "Some Cow",
//             "id": "12345",
//             "description": "Fat Cow"
//         }, {
//             "name": "Dumb Cow",
//             "id": "67890",
//             "description": "Skinny Cow"
//         }, {
//             "name": "Loud Cow",
//             "id": "13579",
//             "description": "Funny Cow"
//         }

//     ]


// }

// var mooCows = data.cowData;



//     findOrCreateCow = function(cow) {
//         console.log("what is name?" + cow.name);
//         var name = cow.name;
//         var id = cow.id;
//         var description = cow.description;
//         // find a user in Mongo with provided username
//         Cow.findOne({
//             'name': name
//         }, function(err, cow) {
//             // In case of any error, return using the done method
//             if (err) {
//                 console.log('Error in SignUp: ' + err);
//                 return done(err);
//             }
//             // already exists
//             if (cow) {
//                 console.log('Cow already exists with that name: ' + name);
//                 // return done(null, false, console.log('cow seems to be in existance'));
//             } else {
//                 // if there is no user with that email
//                 // create the user
//                 var newCow = new Cow();

//                 // set the user's local credentials
//                 newCow.name = name;
//                 newCow.id = id;
//                 newCow.description = description;
//                 // save the user
//                 newCow.save(function(err) {
//                     if (err) {
//                         console.log('Error in Saving user: ' + err);
//                         throw err;
//                     }
//                     console.log('Cow Creation succesful');
//                     return done(null, newCow);
//                 });
//             }
//         });
//     };

//     for (var i = 0; i < mooCows.length; i++) {
//         findOrCreateCow(mooCows[i]);
// };


// // findOrCreateCow(name)

