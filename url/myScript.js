/*
	1--on (all comments will be hided)
	2--normal
	3--off (all comments will shown)
*/

var c=0;
var prev=0;
var arr="";
var t=1;
	
        
var myJson;
var receive;

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
 		c=document.querySelectorAll("yt-formatted-string#content-text").length
 		
	//alert(c);
	if(c!=0 && c!=prev)
		toJson(c);
	if(c>0 && c==prev){		
		clearInterval(x);
		//alert(arr);
		
		/*chrome.storage.sync.get(['key'], function(result) {
		if(result.key)
		{
			arr=result.key;
          	alert('Value currently is ' + arr);
        }
        else
        	alert("Blank");
        });
		chrome.storage.sync.set({key: arr}, function() {
          alert('Value is set to ' + arr);
        });*/
		//document.write(JSON.parse(myJson));
		
		send(t);
	}
	
	//if(c!=0)
	//hide(prev,c);
	}


function toJson(n)
{
	//var str=document.querySelectorAll("yt-formatted-string#content-text")[0].innerText;
	//document.querySelectorAll("yt-formatted-string#content-text")[0].innerText="*******";
	//arr=[{id: 0,comment: str}];
	//alert("Prev:"+prev);
	for(var i=prev;i<n;i++)
	{
		str=document.querySelectorAll("yt-formatted-string#content-text")[i].innerText;
		
		if (i==0)
		{
			document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="         ";
			strn=str.replace(/[&\/\\#,+()$~%.'":*?<>{}\n]/g,".");
			arr=arr+strn+",";
		}
		else
		{
			document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="         ";
			strn=str.replace(/[&\/\\#,+()$~%.'":*?<>{}\n]/g,".");
			arr=arr+strn+",";
		}
		//alert(document.querySelectorAll("yt-formatted-string#content-text")[i].innerText);
	}
	//myJson=JSON.stringify(arr);
	//alert(myJson);
}

function send(t)
{
	//alert("in send--"+t);
	var url='http://localhost:8000/msg/'+arr;
	$.get(url, function ( data ){
				//receive=data;
				//setReceive(data);
				//arr1=arr;
				var com=arr.split(",");
				//alert(com);
				if(t==1)
			 	{	
			 		for(var i=0;i<data.length;i++)
			 		{
			 			if(data[i]==0)
			 			{
			 				document.querySelectorAll("yt-formatted-string#content-text")[i].innerText=com[i];
			 			}
						else
		 				{
		 				document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="********";
		 				}
			 		}
			 	}
			 	if(t==2)
			 	{	
			 		for(var i=0;i<data.length;i++)
			 		{
			 			if(data[i]<=2)
			 			{
			 				document.querySelectorAll("yt-formatted-string#content-text")[i].innerText=com[i];
			 			}
						else
		 				{
		 				document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="********";
		 				}
			 		}
			 	}
			 	if(t==3)
			 	{	
			 		for(var i=0;i<data.length;i++)
			 		{
			 			if(data[i]>=0)
			 			{
			 				document.querySelectorAll("yt-formatted-string#content-text")[i].innerText=com[i];
			 			}
						else
		 				{
		 				document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="********";
		 				}
			 		}
			 	}
	
		 	});
	//alert("Outer--"+receive);
}




/*
		function myfnOn(){
		 		alert("ON CLICKED FROM HTML ");
		 		send(2);
		 }
		 function myfnMed(){
		 		alert("MEDIUM CLICKED FROM HTML ");
		 }
		 function myfnOff(){
		 		alert(receive);
		 		for(var i=0;i<receive.length;i++)
		 		{
		 			if(receive[i]>=0)
		 			{
		 				document.querySelectorAll("yt-formatted-string#content-text")[i].innerText=com[i];
		 			}
		 		}
		 }
$(document).ready(function(){
		 var dum2=dum;
		 function myfn(){
		 		alert("OK CLICKED FROM HTML "+dum);
		 }
		document.getElementById('btn').addEventListener('click', myfn);
		document.getElementById('on').addEventListener('click', myfnOn);
		document.getElementById('medium').addEventListener('click', myfnMed);
		document.getElementById('off').addEventListener('click', myfnOff);

	});

*/
function hide(p,n)
{
	for(var i=p;i<n;i++)
	{
		document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="********";
	}

}
