Template.editor.helpers({
	'docid' : function(){
		var doc = Wiki.findOne();
		if (doc){
			return doc._id;
		}
		else{
			return undefined;
		}
	}

});

Template.editor.events({
});


