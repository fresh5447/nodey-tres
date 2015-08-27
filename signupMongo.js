        // function toCall(req, name, done) {
            
        //     console.log("what is name?");

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
        //                 return done(null, false, req.flash('message', 'User Already Exists'));
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
