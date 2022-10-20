export const validateDate =  (start: any, end: any) => {
  try {
    const startTime =  start.split(":", 3);
    const endTime =  end.split(":", 3);
    let startTimeHour = startTime[0] as number;
    let endTimeHour = endTime[0] as number;
    let hourDiff = endTimeHour - startTimeHour;
  
    let startTimeMin = startTime[1] as number;
    let endTimeMin = endTime[1] as number;
    let minDiff = endTimeMin - startTimeMin;
  
    if (hourDiff === 1 && minDiff === 0) {
      return "60 min";
    } else if (hourDiff === 0 && minDiff === 30) {
      return "30 min";
    } else {
      return "error";
    }    
  } catch (error:any) {
    return error.message    
  };;    
};;