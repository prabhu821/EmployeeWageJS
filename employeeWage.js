const IS_PART_TIME = 1,IS_FULL_TIME = 2,WAGE_PER_HR = 20,PART_TIME_HOURS = 4,FULL_TIME_HOURS = 8,TOTAL_WORKING_DAYS=20;;
let empWage,totalWorkingHours=0;
for(let day=1; day<= TOTAL_WORKING_DAYS; day++)
{
    let empCheck = Math.floor(Math.random() * 3 ); 
    totalWorkingHours +=GetWorkingHrs(empCheck);
    
}
empWage = WAGE_PER_HR * totalWorkingHours;
console.log("Employee Monthly wage is "+ empWage+"\n"+"Total Hours Worked:"+totalWorkingHours);

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