function startup(req,res)
{



if(req.getMethod()=== 'Get')
{


nlapiLogExecution('debug','Log added by developer 2');


}







}

function getRecords()
{

nlapiLogExecution('debug','getRecords function started by  Dev B','getRecords');
var rec=nlapiSearchRecord('salesorder',null,[new nlobjSearchFilter('mainline',null,'is','T')]);




}
