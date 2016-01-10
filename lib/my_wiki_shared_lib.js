this.Wiki = new Mongo.Collection("wiki");
EditingUsers = new Mongo.Collection("editingUsers")

Meteor.methods({
	addEditingUser:function(){
		var user = Meteor.user().profile;
		var doc = Wiki.findOne();
		eusers = {
			doc_id : doc._id,
			users : user
		};
		EditingUsers.upsert({_id: eusers._id},eusers);
	}
});