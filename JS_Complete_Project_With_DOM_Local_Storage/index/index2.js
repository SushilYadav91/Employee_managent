var eno = undefined;
var ename = undefined;
var job = undefined;
var esalary = undefined;
var ebonus = undefined;
var eCommision = undefined;
var  employeedata = [];

function init(){
    eno = document.getElementById("eno");
    ename = document.getElementById("ename");
    job = document.getElementById("job");
    esalary = document.getElementById("esalary");
    ebonus = document.getElementById("ebonus");
    eCommision = document.getElementById("eCommission");
}
function saveDataInLocalStorage(){
    let enovalue = eno.value;
    let enamevalue = ename.value;
    let jobvalue = job.value;
    let esalaryvalue = esalary.value;
    let ebonusvalue = ebonus.value;
    let eCommisionvalue = eCommision.value;
    let newObj = {enovalue,enamevalue,jobvalue,esalaryvalue,ebonusvalue,eCommisionvalue};
    employeedata.push(newObj)
let userDetails = JSON.stringify(employeedata);
    localStorage.setItem('userDetailsData',userDetails);
};


function saveUserData(){
    let storeData = localStorage.getItem('userDetails');
    
    let eno = eno.value;
}

