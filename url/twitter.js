//alert("You are in twitter!!");


var c=0;
var prev=0;
var arr="";
var myJson;
var receive="";
var t=1;
 var x=setInterval(length,3000)
 	function length(){
 		chrome.storage.sync.get(['key'], function(result) {
		if(result.key)
		{
			t=result.key;
          	//alert('Value currently is-- ' + t);
        }
        });
 		prev=c;
 		c=document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text").length;
 		
	//alert(c);
	if(c!=0 && c!=prev)
		toJson(c);
	if(c>0 && c==prev){		
		clearInterval(x);
		//alert(arr);
		//document.write(JSON.parse(myJson));
		send(t);
	}
	
	//if(c!=0)
	//hide(prev,c);
	}


function toJson(n)
{

	for(var i=prev;i<n;i++)
	{
		str=document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText;
		
		if (i==0)
		{
			document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText="       ";
			strn=str.replace(/[&\/\\#,+()$~%.'":*?<>{}\n]/g,".");
			arr=arr+strn+"\ufeff,";
		}
		else
		{
			document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText="       ";
			strn=str.replace(/[&\/\\#,+()$~%.'":*?<>{}\n]/g,".");
			arr=arr+strn+"\ufeff,";
		}
		
	}
	//myJson=JSON.stringify(arr);
	//alert(myJson);
}

function send(t)
{
	var url='http://localhost:8000/msg/'+arr;
	$.get(url, function ( data ){
				receive=data;
				var com=arr.split(",");
				//alert(data);
				if(t==1)
			 	{	
			 		for(var i=0;i<data.length;i++)
			 		{
			 			if(data[i]==0)
			 			{
		 				document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText=com[i];
			 			}
						else
		 				{
		 				document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText="********";
		 				}

			 		}
			 	}
			 	if(t==2)
			 	{	
			 		for(var i=0;i<data.length;i++)
			 		{
			 			if(data[i]<=2)
			 			{
			 			document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText=com[i];
			 			}
						else
		 				{
		 				document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText="********";
		 				}
			 		}
			 	}
			 	if(t==3)
			 	{	
			 		for(var i=0;i<data.length;i++)
			 		{
			 			if(data[i]>=0)
			 			{
			 			document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText=com[i];
			 			}
						else
		 				{
		 				document.querySelectorAll("p.TweetTextSize.js-tweet-text.tweet-text")[i].innerText="********";
		 				}
			 		}
			 	}
		 	});
}

