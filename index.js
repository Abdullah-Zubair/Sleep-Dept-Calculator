
// returns number of hours You sleep per day  
const getSleepHours = day => {
    day = day.toLowerCase();
    
    switch (day)
      {
        case 'monday' : return 17;
          break;
        case 'tuesday' : return 8;
          break;
        case 'wednesday' : return 10
          break;
        case 'thrusday' : return 12;
          break;
        case 'friday' : return 8;
          break;
        case 'saturday': return 6;
          break;
        case 'sunday': return 10;
          break;
        default : return 'Enter valid Day';
          break;
      }
  }
  
  // calculates the total number of hours You sleep in a week 

  const getActualSleepHours = () => getSleepHours ('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday')+
  getSleepHours('thrusday') + getSleepHours('friday')+ getSleepHours('SAturday')+
  getSleepHours('Sunday');
  
  // returns ideal sleep hours for one week 

  const getIdealSleepHours = ( idealHours ) =>
  {
    return idealHours *= 7;
  }
  
  // calculates sleep dept

  const calculateSleepDept = () =>
  {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours (8);
    if (actualSleepHours === idealSleepHours )
      {
        console.log('You got the perfect amount of sleep.');
      }
    else if (actualSleepHours > idealSleepHours )
      {
        console.log('You got ' + (actualSleepHours-idealSleepHours) + ' hour(s) more sleep than you needed this week.');
      }
    else if (actualSleepHours < idealSleepHours )
      {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
      }
  }
  
  // funtion calling 
  
  calculateSleepDept();
  
  