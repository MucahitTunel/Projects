var hours = [
  {0:"10:00-10:30"},
  {1:"10:30-11:00"},
  {2:"11:00-11:30"},
  {3:"11:30-12:00"},
  {4:"12:00-12:30"},
  {5:"12:30-13:00"},
  {6:"13:00-13:30"},
  {7:"13:30-14:00"},
  {8:"14:00-14:30"},
  {9:"14:30-15:00"},
  {10:"15:00-15:30"},
  {11:"15:30-16:00"},
  {12:"16:00-16:30"},
  {13:"16:30-17:00"},
  {14:"17:00-17:30"},
  {15:"17:30-18:00"},
  {16:"18:00-18:30"},
  {17:"18:30-19:00"},
  {18:"19:00-19:30"},
  {19:"19:30-20:00"},
]


const HoursReducers = (state = hours, action) => {

  switch (action.type) {
    case "HOURS":
      return action.payload;
      break;
    default:
      return state;
  }
}

export default HoursReducers;
