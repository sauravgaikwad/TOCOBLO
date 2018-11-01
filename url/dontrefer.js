//var x=document.getElementById("comment-text").innerHTML;
//var x=document.getElementsByTagName("yt-formatted-string");
//x[1].innerHTML="*****"
//var x=document.getElementById("content");

//alert(x.querySelectorAll("div ytd-masthead")[0].innerHTML);


var c=0;
var prev=0;
var arr=[];
var myJson;

 var x=setInterval(length,3000)
 	function length(){
 		prev=c;
 		c=document.querySelectorAll("yt-formatted-string#content-text").length
 		
	//alert(c);
	if(c!=0 && c!=prev)
		toJson(c);
	if(c>0 && c==prev){		
		clearInterval(x);
		//alert("HELLO");
		alert(myJson);
		//document.write(JSON.parse(myJson));
		//send();
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
			document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="*******";
			arr=[{id: 0,comment: str}];
		}
		else
		{
			document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="*******";
			arr.push({
				id: i,
				comment: str
			});
		}
		//alert(document.querySelectorAll("yt-formatted-string#content-text")[i].innerText);
	}
	myJson=JSON.stringify(arr);
	//alert(myJson);
}

function send()
{
	var url='http://localhost:8000/msg/'+myJson;
	$.get(url, function ( data ){
		 		document.write(data);
		 	});
}

function hide(p,n)
{
	for(var i=p;i<n;i++)
	{
		document.querySelectorAll("yt-formatted-string#content-text")[i].innerText="*******";
	}

}