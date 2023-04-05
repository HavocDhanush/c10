var names_of_activites = [];
    
function submit()
{
    var ActivityName = document.getElementById("activity1").value;
	names_of_activites.push(ActivityName);
	console.log(ActivityName);    
    console.log(names_of_activities);
    var lenght_of_activity = names_of_activites.length;
    console.log(lenght_of_activity);
	document.getElementById("display_activity").innerHTML=names_of_activites.toString();
   }



function show()
{
	var i= names_of_activites.join("<br>");
	console.log(names_of_activites);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		names_of_activites.sort();         
		var i= names_of_activites.join("<br>");
		console.log(names_of_activites);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_activites.length; j++)
		{
			if(s==names_of_activites[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="activity found "+found+" time/s";
	console.log("found activity "+found+" time/s");
}