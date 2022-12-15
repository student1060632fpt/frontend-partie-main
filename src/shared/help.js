import moment from "moment";

//FUNTION RANDOM TEXT
const makeRandomId = () => {
  let result = '';
  let length = 7;
  let arrResult = [];
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let j = 0; j < 3; j++) {
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    arrResult.push(result)
  }
  const returnValue = arrResult.join('_')
  return returnValue;
}
const  daysRemaining = (time)=> {
  var eventdate = moment.unix(time);
  var todaysdate = moment();
  return eventdate.diff(todaysdate, 'days');
}


//Ellipsis text
function truncateText(input="Lorem insum", length = 30) {
  if (input.length > length) {
     return input.substring(0, length) + '...';
  }
  return input;
};

export { makeRandomId,truncateText, daysRemaining }