var eno = undefined;
var enm = undefined;
var job = undefined;
var sal = undefined;
var comm = undefined;
var bonus = undefined;
var tbody = undefined;

var empary=[];

function init()
{
    eno = document.getElementById("eno");
    enm = document.getElementById("enm");
    job = document.getElementById("job");
    sal = document.getElementById("sal");
    comm = document.getElementById("comm");
    bonus = document.getElementById("bonus");
    tbody = document.getElementById("tbody");

    //Data Fetch From Local Storage
    var data = localStorage.getItem("employee");

    //Convert String type Data into Object
    var eData = JSON.parse(data);

    for(let e of eData)
    {
       //console.log(e);
       empary.push(e);  //Data Push in Array 
       showData(e);  //call by Object
    }
}

function getProcess()
{
    var emp_no = eno.value;
    var emp_enm = enm.value;
    var emp_job = job.value;
    var emp_sal = parseInt(sal.value);
    var emp_comm = parseInt(comm.value);
    var emp_bonus = parseInt(bonus.value);



    console.log(emp_no.length+" : "+emp_enm.length+" : "+emp_job+" : "+isNaN(emp_sal)+" : "+isNaN(emp_comm)+" : "+isNaN(emp_bonus));

   if(emp_no.length != 0 && emp_enm.length != 0 && emp_job != 0 && (!isNaN(emp_sal)) && (!isNaN(emp_comm)) && (!isNaN(emp_bonus)))
    {
       // // var obj = {emp_no:emp_no,emp_enm:emp_enm,emp_job:emp_job,emp_sal:emp_sal,emp_bonus:emp_bonus,emp_comm:emp_comm};
        // or 
        var obj = {emp_no,emp_enm,emp_job,emp_sal,emp_bonus,emp_comm};

       empary.push(obj);
       console.log("Length : "+empary.length);

       //Step 2
       var empData = JSON.stringify(empary);
   
        //Data Save in Local Storage
       localStorage.setItem("employee",empData); 
       
       showData(obj); //call show Method
       clearFileds();
    }
    else
    {
      alert("Plz Enter Fill");
    }


   
  
}
/* //Step 1
function saveDataInLocalStorage()
{
   console.log(empary);
   //Convert Array oject into String
   var empData = JSON.stringify(empary);

   //Data Save in Local Storage
   localStorage.setItem("employee",empData);
}
*/
function showData(obj)
{
   var tr = document.createElement("tr");
   var td1 = document.createElement("td");
   var td2 = document.createElement("td");
   var td3 = document.createElement("td");
   var td4 = document.createElement("td");
   var td5 = document.createElement("td");
   var td6 = document.createElement("td");
   var td7 = document.createElement("td");
   var td8 = document.createElement("td");
   var td9 = document.createElement("td");

   //Create Button
   var btn = document.createElement("button");
   btn.innerText = "Delete";
   btn.setAttribute("class","btn-lg btn-danger");
   btn.onclick=deleteData;



   td1.innerText = empary.length;
   tr.appendChild(td1);

   
   td2.innerText = obj.emp_no;
   tr.appendChild(td2);

   td3.innerText = obj.emp_enm;
   tr.appendChild(td3);

   td4.innerText = obj.emp_job;
   tr.appendChild(td4);

   td5.innerText = obj.emp_sal;
   tr.appendChild(td5);

   td6.innerText = obj.emp_comm;
   tr.appendChild(td6);

   td7.innerText = obj.emp_bonus;
   tr.appendChild(td7);

   td8.innerText = obj.emp_sal + obj.emp_bonus + obj.emp_comm;
   tr.appendChild(td8);

   td9.appendChild(btn);
   tr.appendChild(td9);

   var idx = empary.length-1;
   btn.setAttribute("data-idx",idx);

   tbody.appendChild(tr);
}

function clearFileds()
{
    eno.value = '';
    enm.value = '';
    job.value = '';
    sal.value = '';
    comm.value = '';
    bonus.value = '';
}

function deleteData()
{
    //alert("Hello...."+this);
    var id = this.getAttribute('data-idx');  
   //alert("Id is : "+id);
   empary.splice(id,1);
   
   //Data Remove From Table not a Local Storage
   this.parentElement.parentElement.remove();

   
   //Data Remove from Local Storage
     // This Code => Comming Soon.....
}