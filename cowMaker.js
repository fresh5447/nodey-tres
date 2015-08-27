// var Cow = require('./models/cow');
// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/textMate');



// // var data = {
// //     cowData: [{
// //             "name": "Brown Cow",
// //             "id": "12345",
// //             "description": "Fat Cow"
// //         }, {
// //             "name": "Blue Cow",
// //             "id": "67890",
// //             "description": "Skinny Cow"
// //         }, {
// //             "name": "Black Cow",
// //             "id": "13579",
// //             "description": "Funny Cow"
// //         }

// //     ]


// // }


// function toCall(req, name, done) {
// 	var name = "Boddyyyy Brown";
// 	console.log("what is name?" + name);
//     findOrCreateCow = function() {
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
//     // Delay the execution of findOrCreateUser and execute the method
//     // in the next tick of the event loop
//     process.nextTick(findOrCreateCow);
// }

// toCall();

