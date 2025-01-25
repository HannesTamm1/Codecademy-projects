// How many hours of sleep I get per day
function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 6;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 6;
      case 'friday':
        return 8;
      case 'saturday':
        return 9;
      case 'sunday':
        return 10;
      default:
        return 0; 
    }
  }
  
  // My sleep hours combined
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  // Sleep hours I should be getting
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours *= 7;
  };
  
  // Calculating if my sleep per week is in balance or should I sleep less or more
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log(`You got perfect amount of sleep, which is ${idealSleepHours}hours per week.`);
    } else if (actualSleepHours > idealSleepHours){
      console.log(`You\'ve got more sleep than needed, you got: ${actualSleepHours}hours per week, but should get: ${idealSleepHours} hours per week.`);
    } else if (actualSleepHours < idealSleepHours){
      console.log(`You should get more sleep, you got: ${actualSleepHours} hours per week, but should get: ${idealSleepHours} hours per week.`);
    } else {
      console.log('Invalid information.');
    }
  };
  calculateSleepDebt();