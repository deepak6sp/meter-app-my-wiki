
  Meteor.startup(function () {
    // code to run on server at startup
    
    Meteor.startup(function(){
    	if (!Wiki.findOne()){
    		Wiki.insert({title:"new document"});
    	}
    });

  }); 