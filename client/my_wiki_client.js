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
	},
	config: function(){
		return function(editor) {
			editor.on('change',function(){
				//console.log(editor.getValue());
				$("#preview_content").contents().find("html").html(editor.getValue());
				Meteor.call("addEditingUser");
			});
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

Template.editingUsers.helpers({
	users:function(){
		var doc = Wiki.findOne();
		if (!doc) {return;}		
		var eusers = EditingUsers.findOne({doc_id : doc._id});
		
		if(!eusers) {return;}
		var users = new Array();
		var i=0;
		for(var user_id in eusers.users){
			users[i]=fixObjects(eusers.users[user_id]);
			i++;
		}
		console.log("users - "+JSON.stringify(users));
		if (Meteor.user()){
			return users;
		}
	}

});

function fixObjects(fixObject){
	var newObj = {};
	for (key in fixObject){
		var key2 = key.replace("-","");
		newObj[key2] =  fixObject[key];
	}
	console.log(newObj);
	return newObj;
}


