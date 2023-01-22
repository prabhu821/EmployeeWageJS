const IS_PART_TIME = 1,IS_FULL_TIME = 2,WAGE_PER_HR = 20,PART_TIME_HOURS = 4,FULL_TIME_HOURS = 8,TOTAL_WORKING_DAYS=20,TOTAL_WORKING_HOURS=100;
let empWage,totalWorkingDays=0,totalWorkingHours=0;
while(totalWorkingHours<=TOTAL_WORKING_HOURS && totalWorkingDays<TOTAL_WORKING_DAYS)
{
    let empCheck = Math.floor(Math.random() * 3 ); 
    totalWorkingHours +=GetWorkingHrs(empCheck);
    totalWorkingDays++;
}
empWage = WAGE_PER_HR * totalWorkingHours;
console.log("Employee Monthly wage is "+ empWage+"\n"+"Total Working Hours:"+totalWorkingHours+"\n"+"Total Working Days:"+totalWorkingDays);

//Method to get Work Hours
function GetWorkingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
            break;
    }
}