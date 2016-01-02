Meteor.startup(function(){
	if (!Wiki.findOne()){
		Wiki.insert({title:"new document"});
	}
});