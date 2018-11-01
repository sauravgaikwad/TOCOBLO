$(document).ready(function(){

	chrome.tabs.getSelected(null,function(tab){
		var link=document.createElement('a');

	                
		link.href=tab.url;

               if(link.href.match(/www.youtube.com/) || (link.href.match(/twitter.com/)) || (link.href.match(/www.reddit.com/)))
     		{
		 	//$('#host').html(""+link);
                }

	})

	function myfnOn(){
		 	chrome.storage.sync.clear(function(){
				//alert("clear");
			});
			chrome.storage.sync.set({key: 1}, function() {
	        	//alert('Value is set to ' + 1);
	        });
		 	//alert("ON");
		 }

	function myfnMed(){
		 	chrome.storage.sync.clear(function(){
				//alert("clear");
			});
			chrome.storage.sync.set({key: 2}, function() {
	        	//alert('Value is set to ' + 2);
	        });
		 	//alert("MEDIUM");
		 }

	function myfnOff(){
			chrome.storage.sync.clear(function(){
				//alert("clear");
			});
			chrome.storage.sync.set({key: 3}, function() {
	        	//alert('Value is set to ' + 3);
	        });
		 	//alert("OFF");
		 }

	function myfnOk()
	{
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        	chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    	});
	}
	document.getElementById('medium').addEventListener('click', myfnMed);
	document.getElementById('off').addEventListener('click', myfnOff);
	document.getElementById('on').addEventListener('click', myfnOn);
	document.getElementById('btn').addEventListener('click', myfnOk);
});




