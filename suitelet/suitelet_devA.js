function startup(req,res)
{



if(req.getMethod()=== 'Get')
{


nlapiLogExecution('debug','Log added by developer 2');


}







}

function getRecords()
{
var fils=[];
fils.push(new nlobjSearchFilter('internalid',null,'is','1000'));
nlapiLogExecution('debug','Comment added by some other developer');
var rec=nlapiSearchRecord('salesorder',null,fils);



}
