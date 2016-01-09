this.Wiki = new Mongo.Collection("wiki");
EditingUsers = new Mongo.Collection("editingUsers")

Meteor.methods({
	addEditingUser:function(){
		EditingUsers.insert({user:"matt"});
	}
});