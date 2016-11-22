import io from 'socket.io-client';
import  * as types from '../actions/types';

export default function socketIOMiddleware({dispatch}){
  let apiUrl = 'http://medicalbookings.redimed.com.au:6500';//'https://192.168.36.56:3001'
  let socket = io(apiUrl);

  socket.on('connect', function () {
    console.log("----------> connected to the monitor server");
    socket.emit('webAskForInitialData');
  });


  socket.on('initialDataForWeb',(data)=>{
    console.log('initialDataForWeb = ',data);
    const fetchDataFromServer = {type:types.FETCH_REQUEST_DATA_FROM_SERVER,data};
    dispatch(fetchDataFromServer);
  });

  socket.on('sendReqBeginToWeb',(data)=>{
    console.log('sendReqBeginToWeb = ',data);
    const fetchDataFromServer = {type:types.ADD_REQUEST_DATA_FROM_SERVER,data};
    dispatch(fetchDataFromServer);
  });

  socket.on('sendReqEndToWeb',(data)=>{
    console.log('sendReqEndToWeb = ',data);
    const fetchDataFromServer = {type:types.END_REQUEST_DATA_FROM_SERVER,data};
    dispatch(fetchDataFromServer);
  });

  socket.on('sendReqUpdateToWeb',(data)=>{
    console.log('sendReqEndToWeb = ',data);
    const fetchDataFromServer = {type:types.UPDATE_REQUEST_DATA_FROM_SERVER,data};
    dispatch(fetchDataFromServer);
  });

  socket.on('test',(data)=>{
    console.log('receive test from server = ',data);
  });

  socket.on('welcome', function (data) {
  	console.log("socket connected welcome = ",data);
  });

  socket.on('APPOINTMENT_RESERVE',function(data){
  	console.log('APPOINTMENT_RESERVE = ',data);
    const otherUsersReserveApptAction = {type:types.OTHER_USERS_RESERVE_APPT,calendar:data};
    dispatch(otherUsersReserveApptAction);
  });

  console.log('socketIOMiddleware started....');

  return next => action => {
    console.log("action = ",action);
    switch (action.type) {
    	case types.CURRENT_BOOKING_SET_CALENDAR:
        console.log('day roi !!!',action);
        socket.emit('APPOINTMENT_RESERVE', {msg: 'setCalendarForCurrentBooking', calendar: action.calendar});
    }
    next(action);
  };
}
