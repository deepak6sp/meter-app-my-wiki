this.Wiki = new Mongo.Collection("wiki");
this.EditingUsers = new Mongo.Collection("editingUsers")

Meteor.methods({
	addEditingUser:function(){
		//var user = Meteor.user().profile;
		var doc = Wiki.findOne();
		if (!doc){return;}
		var user = Meteor.user().profile;
		console.log("user - "+JSON.stringify(user));
		if(!this.userId) {return;}
		
		var eusers = EditingUsers.findOne({doc_id : doc._id});
		if(!eusers){
			eusers = {
				doc_id : doc._id,
				users : {}
			};
		}
		user.lastEdit =  new Date();
		eusers.users[this.userId] = user;
		EditingUsers.upsert({_id: eusers._id},eusers);
		//EditingUsers.insert({user : "mattew"});
	}
});