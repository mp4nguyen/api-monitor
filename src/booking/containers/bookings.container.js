import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

//import Calendar from   "../../common_uis/components/calendar.component";
import MyScheduler from '../../common_uis/MyScheduler';
import PatientSearch from '../../patient/containers/PatientSearch.container';
import * as actions from '../../redux/actions';

const log = (type) => console.log.bind(console, type);


class Bookings extends Component {

    static contextTypes = {
      router: React.PropTypes.object
    };

    constructor(props){
      super(props);
      this.state={eventWillAdd: null,isOpenDialog: false};
      this.currentEventId = 4;
    }

    componentWillMount(){
        //this.props.fetchDoctorsForBookingModule();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    _selectingAreaCallback(selectingArea){
      console.log('_selectingAreaCallback = ',selectingArea);
      this.setState({isOpenDialog: true});
    }

    _clickingOnEventCallback(event){
      console.log('ScheduleFrame._clickingOnEventCallback = ',event);
    }

    _resizingEventCallback(event){
      console.log('ScheduleFrame._resizingEventCallback = ',event);
    }

    _movingEventCallback(event){
      console.log('ScheduleFrame._movingEventCallback = ',event);
    }

    _handleCloseDialog(){
      this.setState({isOpenDialog: false});
    }

    render() {


        return (
        (

          <div className="page-content-inner">
              <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="dashboard-stat2 ">
                          <div className="display">
                              <div className="number">
                                  <h3 className="font-green-sharp">
                                      <span data-counter="counterup" data-value="7800">0</span>
                                      <small className="font-green-sharp">$</small>
                                  </h3>
                                  <small>TOTAL PROFIT</small>
                              </div>
                              <div className="icon">
                                  <i className="icon-pie-chart"></i>
                              </div>
                          </div>
                          <div className="progress-info">
                              <div className="progress">
                                  <span style={{width: '76%'}} className="progress-bar progress-bar-success green-sharp">
                                      <span className="sr-only">76% progress</span>
                                  </span>
                              </div>
                              <div className="status">
                                  <div className="status-title"> progress </div>
                                  <div className="status-number"> 76% </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="dashboard-stat2 ">
                          <div className="display">
                              <div className="number">
                                  <h3 className="font-red-haze">
                                      <span data-counter="counterup" data-value="1349">0</span>
                                  </h3>
                                  <small>NEW FEEDBACKS</small>
                              </div>
                              <div className="icon">
                                  <i className="icon-like"></i>
                              </div>
                          </div>
                          <div className="progress-info">
                              <div className="progress">
                                  <span style={{width: '85%'}} className="progress-bar progress-bar-success red-haze">
                                      <span className="sr-only">85% change</span>
                                  </span>
                              </div>
                              <div className="status">
                                  <div className="status-title"> change </div>
                                  <div className="status-number"> 85% </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="dashboard-stat2 ">
                          <div className="display">
                              <div className="number">
                                  <h3 className="font-blue-sharp">
                                      <span data-counter="counterup" data-value="567"></span>
                                  </h3>
                                  <small>NEW ORDERS</small>
                              </div>
                              <div className="icon">
                                  <i className="icon-basket"></i>
                              </div>
                          </div>
                          <div className="progress-info">
                              <div className="progress">
                                  <span style={{width: '45%'}} className="progress-bar progress-bar-success blue-sharp">
                                      <span className="sr-only">45% grow</span>
                                  </span>
                              </div>
                              <div className="status">
                                  <div className="status-title"> grow </div>
                                  <div className="status-number"> 45% </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="dashboard-stat2 ">
                          <div className="display">
                              <div className="number">
                                  <h3 className="font-purple-soft">
                                      <span data-counter="counterup" data-value="276"></span>
                                  </h3>
                                  <small>NEW USERS</small>
                              </div>
                              <div className="icon">
                                  <i className="icon-user"></i>
                              </div>
                          </div>
                          <div className="progress-info">
                              <div className="progress">
                                  <span style={{width: '57%'}} className="progress-bar progress-bar-success purple-soft">
                                      <span className="sr-only">56% change</span>
                                  </span>
                              </div>
                              <div className="status">
                                  <div className="status-title"> change </div>
                                  <div className="status-number"> 57% </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption">
                                  <span className="caption-subject bold uppercase font-dark">Revenue</span>
                                  <span className="caption-helper">distance stats...</span>
                              </div>
                              <div className="actions">
                                  <a className="btn btn-circle btn-icon-only btn-default" href="#">
                                      <i className="icon-cloud-upload"></i>
                                  </a>
                                  <a className="btn btn-circle btn-icon-only btn-default" href="#">
                                      <i className="icon-wrench"></i>
                                  </a>
                                  <a className="btn btn-circle btn-icon-only btn-default" href="#">
                                      <i className="icon-trash"></i>
                                  </a>
                                  <a className="btn btn-circle btn-icon-only btn-default fullscreen" href="#"> </a>
                              </div>
                          </div>
                          <div className="portlet-body">
                              <div id="dashboard_amchart_1" className="CSSAnimationChart"></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                      <div className="portlet light ">
                          <div className="portlet-title">
                              <div className="caption ">
                                  <span className="caption-subject font-dark bold uppercase">Finance</span>
                                  <span className="caption-helper">distance stats...</span>
                              </div>
                              <div className="actions">
                                  <a href="#" className="btn btn-circle green btn-outline btn-sm">
                                      <i className="fa fa-pencil"></i> Export </a>
                                  <a href="#" className="btn btn-circle green btn-outline btn-sm">
                                      <i className="fa fa-print"></i> Print </a>
                              </div>
                          </div>
                          <div className="portlet-body">
                              <div id="dashboard_amchart_3" className="CSSAnimationChart"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                      <div className="portlet light ">
                          <div className="portlet-title tabbable-line">
                              <div className="caption">
                                  <i className="icon-bubbles font-dark hide"></i>
                                  <span className="caption-subject font-dark bold uppercase">Comments</span>
                              </div>
                              <ul className="nav nav-tabs">
                                  <li className="active">
                                      <a href="#portlet_comments_1" data-toggle="tab"> Pending </a>
                                  </li>
                                  <li>
                                      <a href="#portlet_comments_2" data-toggle="tab"> Approved </a>
                                  </li>
                              </ul>
                          </div>
                          <div className="portlet-body">
                              <div className="tab-content">
                                  <div className="tab-pane active" id="portlet_comments_1">

                                      <div className="mt-comments">
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar1.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Michael Baker</span>
                                                      <span className="mt-comment-date">26 Feb, 10:30AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-pending">Pending</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar6.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Larisa Maskalyova</span>
                                                      <span className="mt-comment-date">12 Feb, 08:30AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> It is a long established fact that a reader will be distracted. </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-rejected">Rejected</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar8.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Natasha Kim</span>
                                                      <span className="mt-comment-date">19 Dec,09:50 AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> The generated Lorem or non-characteristic Ipsum is therefore or non-characteristic. </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-pending">Pending</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar4.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Sebastian Davidson</span>
                                                      <span className="mt-comment-date">10 Dec, 09:20 AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> The standard chunk of Lorem or non-characteristic Ipsum used since the 1500s or non-characteristic. </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-rejected">Rejected</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                                  <div className="tab-pane" id="portlet_comments_2">

                                      <div className="mt-comments">
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar4.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Michael Baker</span>
                                                      <span className="mt-comment-date">26 Feb, 10:30AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar8.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Larisa Maskalyova</span>
                                                      <span className="mt-comment-date">12 Feb, 08:30AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> It is a long established fact that a reader will be distracted by. </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar6.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Natasha Kim</span>
                                                      <span className="mt-comment-date">19 Dec,09:50 AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-comment">
                                              <div className="mt-comment-img">
                                                  <img src="../assets/pages/media/users/avatar1.jpg" /> </div>
                                              <div className="mt-comment-body">
                                                  <div className="mt-comment-info">
                                                      <span className="mt-comment-author">Sebastian Davidson</span>
                                                      <span className="mt-comment-date">10 Dec, 09:20 AM</span>
                                                  </div>
                                                  <div className="mt-comment-text"> The standard chunk of Lorem Ipsum used since the 1500s </div>
                                                  <div className="mt-comment-details">
                                                      <span className="mt-comment-status mt-comment-status-approved">Approved</span>
                                                      <ul className="mt-comment-actions">
                                                          <li>
                                                              <a href="#">Quick Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">View</a>
                                                          </li>
                                                          <li>
                                                              <a href="#">Delete</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                      <div className="portlet light ">
                          <div className="portlet-title tabbable-line">
                              <div className="caption">
                                  <i className=" icon-social-twitter font-dark hide"></i>
                                  <span className="caption-subject font-dark bold uppercase">Quick Actions</span>
                              </div>
                              <ul className="nav nav-tabs">
                                  <li className="active">
                                      <a href="#tab_actions_pending" data-toggle="tab"> Pending </a>
                                  </li>
                                  <li>
                                      <a href="#tab_actions_completed" data-toggle="tab"> Completed </a>
                                  </li>
                              </ul>
                          </div>
                          <div className="portlet-body">
                              <div className="tab-content">
                                  <div className="tab-pane active" id="tab_actions_pending">

                                      <div className="mt-actions">
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar10.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className="icon-magnet"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Natasha Kim</span>
                                                              <p className="mt-action-desc">Dummy text of the printing</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-green"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar3.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className=" icon-bubbles"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Gavin Bond</span>
                                                              <p className="mt-action-desc">pending for approval</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-red"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar2.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className="icon-call-in"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Diana Berri</span>
                                                              <p className="mt-action-desc">Lorem Ipsum is simply dummy text</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-green"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar7.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className=" icon-bell"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">John Clark</span>
                                                              <p className="mt-action-desc">Text of the printing and typesetting industry</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-red"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar8.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className="icon-magnet"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Donna Clarkson </span>
                                                              <p className="mt-action-desc">Simply dummy text of the printing</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-green"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar9.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className="icon-magnet"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Tom Larson</span>
                                                              <p className="mt-action-desc">Lorem Ipsum is simply dummy text</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-green"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                                  <div className="tab-pane" id="tab_actions_completed">

                                      <div className="mt-actions">
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar1.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className="icon-action-redo"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Frank Cameron</span>
                                                              <p className="mt-action-desc">Lorem Ipsum is simply dummy</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-red"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar8.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className="icon-cup"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Ella Davidson </span>
                                                              <p className="mt-action-desc">Text of the printing and typesetting industry</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-green"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar5.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className=" icon-graduation"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Jason Dickens </span>
                                                              <p className="mt-action-desc">Dummy text of the printing and typesetting industry</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-red"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="mt-action">
                                              <div className="mt-action-img">
                                                  <img src="../assets/pages/media/users/avatar2.jpg" /> </div>
                                              <div className="mt-action-body">
                                                  <div className="mt-action-row">
                                                      <div className="mt-action-info ">
                                                          <div className="mt-action-icon ">
                                                              <i className="icon-badge"></i>
                                                          </div>
                                                          <div className="mt-action-details ">
                                                              <span className="mt-action-author">Jan Kim</span>
                                                              <p className="mt-action-desc">Lorem Ipsum is simply dummy</p>
                                                          </div>
                                                      </div>
                                                      <div className="mt-action-datetime ">
                                                          <span className="mt-action-date">3 jun</span>
                                                          <span className="mt-action-dot bg-green"></span>
                                                          <span className="mt=action-time">9:30-13:00</span>
                                                      </div>
                                                      <div className="mt-action-buttons ">
                                                          <div className="btn-group btn-group-circle">
                                                              <button type="button" className="btn btn-outline green btn-sm">Appove</button>
                                                              <button type="button" className="btn btn-outline red btn-sm">Reject</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
      );
    }
}


function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps,actions)(Bookings);
