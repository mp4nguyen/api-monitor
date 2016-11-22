import {
          FETCH_REQUEST_DATA_FROM_SERVER,
          ADD_REQUEST_DATA_FROM_SERVER,
          UPDATE_REQUEST_DATA_FROM_SERVER,
          END_REQUEST_DATA_FROM_SERVER
        } from '../actions/types';
import clone from 'clone';
import * as _ from 'lodash';

let requestMonitorReducer = function(requestMonitor={
                                      requests:[]
                                    },action){
  console.log('requestMonitorReducer = ',action);
  switch(action.type){
    case FETCH_REQUEST_DATA_FROM_SERVER:
        return {...requestMonitor,requests:action.data};
    case ADD_REQUEST_DATA_FROM_SERVER:
        return {...requestMonitor,requests:[...requestMonitor.requests,action.data]};
    case UPDATE_REQUEST_DATA_FROM_SERVER:
        var requests = clone(requestMonitor.requests);
        var index = _.findIndex(requests,  { 'reqId': action.data.reqId, 'pid': action.data.pid } );
        var request = requests[index];
        console.log('===> find index = ',index,'request = ',request);
        request.count = action.data.count;
        request.isKill = action.data.isKill;
        return {...requestMonitor,requests};
    case END_REQUEST_DATA_FROM_SERVER:
        var requests2 = clone(requestMonitor.requests);
        var index2 = _.findIndex(requests2,  { 'reqId': action.data.reqId, 'pid': action.data.pid } );
        var request2 = requests2[index2];
        console.log('===> find index2 = ',index2,'request = ',request2);
        request2.endTime = action.data.endTime;
        request2.duration = action.data.duration;
        return {...requestMonitor,requests:requests2};
    default:
        return requestMonitor;
  }
}

export default requestMonitorReducer;
