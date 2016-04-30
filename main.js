
function videoFun() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	document.getElementById("result").innerHTML="";
	var queryString=window.location.search;
	var parts = queryString.split('=');
	var mov="http://www.youtube.com/embed/";
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.key()==parts[1]){
			mov+=(snapshot.val().Video);
		}
       
	});
	
	var film=document.getElementById("movieShow");
	film.style.display="inline";
	film.src=mov;
}
function methodFun() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var film=document.getElementById("movieShow");
	film.style.display="none";
	var div= document.getElementById("result");
	div.innerHTML="";
	var queryString=window.location.search;
	var parts = queryString.split('=');
	var met;
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.key()==parts[1]){
			met=("<br>"+snapshot.val().Method);
		}
       
	});
	var words=met.split("\n");
	for(i in words)
	{
		div.innerHTML+="<br>"+words[i];
	}
	
}
function costFun() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var film=document.getElementById("movieShow");
	film.style.display="none";
	var div= document.getElementById("result");
	div.innerHTML="";
	var queryString=window.location.search;
	var parts = queryString.split('=');
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.key()==parts[1]){
			div.innerHTML+=("<br>"+snapshot.val().Cost);
		}
       
	});
}
function rateFun() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var film=document.getElementById("movieShow");
	film.style.display="none";
	var div= document.getElementById("result");
	div.innerHTML="";
	var queryString=window.location.search;
	var parts = queryString.split('=');
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.key()==parts[1]){
			div.innerHTML+=("<br>"+snapshot.val().Comments);
		}
       
	});
}
function ingredientsFun() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var film=document.getElementById("movieShow");
	film.style.display="none";
	var div= document.getElementById("result");
	div.innerHTML="";
	var queryString=window.location.search;
	var parts = queryString.split('=');
	var ing;
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.key()==parts[1]){
			ing=("<br>"+snapshot.val().Ingredients);
		}
	});
	var words=ing.split(',');
	for (i in words)
	{
		div.innerHTML+="<br>"+words[i];
	}
}

function commentFun() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var oldComment="";
	var queryString=window.location.search;
	var parts = queryString.split('=');
	
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.key()==parts[1]){
			oldComment=(snapshot.val().Comments);
		}
       
	});
	
	var newComment = prompt("Add your comment");
	var finalComment=oldComment+"<br>"+newComment;
	
	var newFB=myFirebaseRef.child(parts[1]);
	newFB.update({
		"Comments": ""+finalComment
	});
}

function goStart(){

                        var myFirebaseRef = new Firebase("https://cookinapp.firebaseio.com");
                        var password = document.getElementById('uPass').value;
                        var Email = document.getElementById('uEmail').value;
                                        

                                        myFirebaseRef.authWithPassword({
                                              email    : Email,
                                              password : password
                                    }, 
                                            function(error, authData) {
                                              if (error) {
                                                console.log("Login Failed!", error);
												window.alert(error);
                                              } else {
                                                console.log("Authenticated successfully with payload:", authData);
                                                window.location.href="mainscreen.html";
                                                
                                              }
                                            });
                        }
						
function goRegister(){
	window.location.href="registrationscreen.html";

}

function goLogin(){
	window.location.href="loginscreen.html";
	
}

function checkToAdd(){
	var myFirebaseRef = new Firebase("https://cookinapp.firebaseio.com");
	var user = myFirebaseRef.getAuth();
		
		if (user !== null) {
		window.location.href="addrecipescreen.html";
		}
		else(window.alert("Please Sign In"));

}

function goLogout(){
	var myFirebaseRef = new Firebase("https://cookinapp.firebaseio.com");
	myFirebaseRef.unauth();
}


function startGo(){
                var myFirebaseRef = new Firebase("https://cookinapp.firebaseio.com");
                var userEmail = document.getElementById("uemail").value;
                  var userPassword = document.getElementById("upass").value;
                  var userName = document.getElementById('userName').value;
                  var full_name = document.getElementById('fullName').value;
                  var useruni = document.getElementById('uni').value;

                

                 myFirebaseRef.createUser({
                email: userEmail,
                password : userPassword
              }, function(error, userData) {
                if (error) {
                  console.log("Error creating user:", error);
                } else {
                  console.log("Successfully created user account with uid:", userData.uid);
                  window.location.href = "loginscreen.html";
                }
              });

                                   var usersRef = myFirebaseRef.child("users");
                  usersRef.push({
                    Details:  {
                      userName: userName,
                      full_name: full_name,
                      userEmail: userEmail,
                      useruni: useruni

                    },
                    
                  });

      }


function typefunction(){
var type=document.getElementById("Type").value;
var sub1=document.getElementById("cat1");
var sub2=document.getElementById("cat2");
var sub3=document.getElementById("cat3");
var sub4=document.getElementById("cat4");
switch(type){
case "Breakfast": {
sub1.innerHTML="Cooked";
sub1.value="Cooked";
sub2.innerHTML="Cold"; sub2.value="Cold";
sub3.hidden=true;
sub4.hidden=true;
break;
}
case "Lunch": {
sub1.innerHTML="Hot"; sub1.value="Hot";
sub2.innerHTML="Cold"; sub2.value="Cold";
sub3.innerHTML="Healthy"; sub3.value="Healthy";
sub3.hidden=false;
sub4.hidden=true;
break;
}
case "MainMeal": {
sub1.innerHTML="European"; sub1.value="European";
sub2.innerHTML="Italian"; sub2.value="Italian";
sub3.innerHTML="Chinese"; sub3.value="Chinese";
sub4.innerHTML="Indian"; sub4.value="Indian";
sub3.hidden=false;
sub4.hidden=false;
break;
}
case "Drinks": {
sub1.innerHTML="Alcholic"; sub1.value="Alcoholic";
sub2.innerHTML="Cold"; sub2.value="Cold";
sub3.innerHTML="Hot"; sub3.value="Hot";
sub3.hidden=false;
sub4.hidden=true;
break;
}
case "Snack": {
sub1.innerHTML="Hot"; sub1.value="Hot";
sub2.innerHTML="Cold"; sub2.value="Cold";
sub3.innerHTML="Healthy"; sub3.value="Healthy";
sub3.hidden=false;
sub4.hidden=true;
break;
}
default: {
sub1.innerHTML="Cooked"; sub1.value="Cooked";
sub2.innerHTML="Cold"; sub2.value="Cold";
sub3.hidden=true;}
sub4.hidden=true;
break;
}
}
var imgSrc="";
function submitType() {
var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");

var type=document.getElementById("Type").value;
var subcat=document.getElementById("subcat").value;
var rec=document.getElementById("Recipe").value;
var time=document.getElementById("time").value;
var cost=document.getElementById("cost").value;
var ing=document.getElementById("ingredients").value;
var meth=document.getElementById("method").value;
var video=document.getElementById("video").value;
var vid=video.split('=');
var pic=imgSrc;
if (rec=="" || rec=="Please enter recipe name here")
{
	alert("Please enter a valid recipe name");
	document.getElementById("Recipe").focus();
	
}
else if(ing=="" || ing=="Please enter your ingredients here, each on a new line")
{
	alert("Please enter a valid list of ingredients");
	document.getElementById("ingredients").focus();
}
else if(meth=="" || meth=="Please enter your method steps here:")
{
	alert("Please enter a valid method");
	document.getElementById("method").focus();
}
else
{
	var words=ing.split("\n");
	//var mets=meth.split("\n");
	
	var stamp= new Date().getTime();

	myFirebaseRef.push({
		Type: (""+type),
		category: (""+subcat),
		Recipe: (""+rec),
		Time: (""+time),
		Method: (""+meth),
		Video: (""+vid[1]),
		Ingredients: (""+words),
		Rcount: (0), 
		Rating: (0.0),
		Cost: (""+cost),
		Picture: (""+pic),
		Added: (stamp)} ,
	function(error) {
		if (error){
			alert("Data could not be saved." + error);
		}else {
			alert("Recipe successfully submitted!");
		}
	} );
	var timeoutID = window.setTimeout(callhome,5000);
	
}

}

function callhome() {
	$('#logoview').click();
}
function mostFun() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var resArea=document.getElementById("res");
resArea.value="";
	myFirebaseRef.orderByChild("Recipe").on("child_added", function(snapshot) {
  resArea.value+=(snapshot.val().Recipe + ", has a " + snapshot.val().Rating + " rating.\n");

});
}


function addrateFun() {
	 var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
var queryString=window.location.search;
	var parts = queryString.split('=');
var onComplete = function(error) {
  if (error) {
    console.log('Synchronization failed');
  } else {
    console.log('Synchronization succeeded');
  }
};
var inp=false;
while(inp==false)
{
	 var Urate = prompt("Add your rate 1-5");
	 if(Urate in [0,1,2,3,4,5])
{
	inp=true;
}
else alert("please enter a whole number rating between 1 and 5");

}

	 myFirebaseRef.orderByChild("Rating").on("child_added", function(snapshot) {
if(snapshot.key()==parts[1]) {
var newBase=snapshot.key();
var Orate=snapshot.val().Rating;
var Ocount=snapshot.val().Rcount;
myFirebaseRef.child(newBase).update({Rcount: (Ocount+1), Rating: ((Orate*Ocount+(Number(Urate)))/(Ocount+1))}, onComplete);
}
})
}

function searchBreakfastCooked() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Breakfast" && snapshot.val().category=="Cooked")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");				
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchBreakfastCold() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Breakfast" && snapshot.val().category=="Cold")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchBreakfastHealthy() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Breakfast" && snapshot.val().category=="Healthy")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchBreakfastOvernight() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Breakfast" && snapshot.val().category=="Overnight")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchLunchHot() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Lunch" && snapshot.val().category=="Hot")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchLunchCold() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Lunch" && snapshot.val().category=="Cold")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchLunchHealthy() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Lunch" && snapshot.val().category=="Healthy")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchSnackHot() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Snack" && snapshot.val().category=="Hot")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchSnackCold() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Snack" && snapshot.val().category=="Cold")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchSnackHealthy() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Snack" && snapshot.val().category=="Healthy")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchMainChinese() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="MainMeal" && snapshot.val().category=="Chinese")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchMainEuropean() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="MainMeal" && snapshot.val().category=="European")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchMainIndian() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="MainMeal" && snapshot.val().category=="Indian")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchMainItalian() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="MainMeal" && snapshot.val().category=="Italian")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchDrinksHot() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Drinks" && snapshot.val().category=="Hot")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchDrinksCold() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Drinks" && snapshot.val().category=="Cold")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function searchDrinksAlcoholic() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.val().Type=="Drinks" && snapshot.val().category=="Alcoholic")
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}
       
});
	setTimeout("checkEmpty()",5000)
}

function mainSearchBack() {
	var div= document.getElementById("main");
	div.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=true;
}

function displayLoad() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var queryString=window.location.search;
	var parts = queryString.split('=');
	var heading = document.getElementById("meal");
	var img=document.getElementById("foodImg");
	var film=document.getElementById("movieShow");
	film.style.display="none";
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(snapshot.key()==parts[1]){
			heading.innerHTML=(snapshot.val().Recipe);
			img.src=(snapshot.val().Picture);
		}
       
	});
}


function fullSearch() {
	var myFirebaseRef = new Firebase("https://blazing-heat-4990.firebaseio.com/");
	var div= document.getElementById("main");
	div.hidden=true;
	var but= document.getElementById("mainSearchBack");
	but.hidden=false;
	var resDiv=document.getElementById("mealResults");
	resDiv.hidden=false;
	var restext=document.getElementById("results");
	restext.innerHTML="";
	
	var sKey=document.getElementById("sea").value;
	
	myFirebaseRef.orderByChild("Type").on("child_added", function(snapshot) {
		if(((String)(snapshot.val().Type)).indexOf(sKey)!=-1 || ((String)(snapshot.val().category)).indexOf(sKey)!=-1 || ((String)(snapshot.val().Recipe)).indexOf(sKey)!=-1 || ((String)(snapshot.val().Method)).indexOf(sKey)!=-1 || ((String)(snapshot.val().Ingredients)).indexOf(sKey)!=-1 || ((String)(snapshot.val().Comments)).indexOf(sKey)!=-1)
		{
			restext.innerHTML+=("<a href="+"displayrecipescreen.html?recipe="+snapshot.key()+">"+snapshot.val().Recipe + "</a>, has a " + snapshot.val().Rating + " rating.<br>");	
		}   
});
	setTimeout("checkEmpty()",5000)
}
function checkEmpty() 
{
	var restext=document.getElementById("results");
	if (restext.innerHTML=="")
	{
		restext.innerHTML+="Sorry no results found, please try a new search";
	}
}

var spinner = new Spinner({color: '#ddd'});

function handleFileSelect(evt) {
	var f = evt.target.files[0];
	var reader = new FileReader();
	reader.onload = (function(theFile) {
		return function(e) {
			var filePayload = e.target.result;
			var f = new Firebase("https://image-testing.firebaseio.com/");
			spinner.spin(document.getElementById('spin'));
			spinner.stop();
			imgSrc=filePayload;
			document.getElementById("pano").src = e.target.result;
			$('#file-upload').hide();
		};
	})(f);
reader.readAsDataURL(f);
}

//$(function() {
function addLoad(){
	$('#file-upload').hide();
	$('.new_Btn').bind("click" , function () {
        $('#file-upload').click();
    });	
	$('#spin').append(spinner);
    //$('#file-upload').show();
	document.getElementById("file-upload").addEventListener('change', handleFileSelect, false);
//});
};