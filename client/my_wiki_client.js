Meteor.setInterval(function(){
	Session.set("current_date",new Date());
},1000);


Template.editor.helpers({
	docid: function(){
		var doc = Wiki.findOne();
		if (doc){
			return doc._id;
		}
		else{
			return undefined;
		}
	}


});

Template.display_date.helpers({
	date: function(){
		return Session.get("current_date");
	}
});

Template.editor.events({
});


