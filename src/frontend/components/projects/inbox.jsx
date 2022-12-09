import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Img_02,Img_03,Img_05 } from "../imagepath"
import Projects from "./index"

class Chats extends Component {
   
    render() {
     
        return (
            <> 
            <div className="breadcrumb-bar">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <h2 className="breadcrumb-title">Chats</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Chats</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
            <Projects/>
            <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="chat-window mb-5">
                {/* Chat Left */}
                <div className="chat-cont-left">
                  <div className="chat-header">
                    <form className="chat-search">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <i className="fas fa-search icon-circle" />
                        </div>
                        <input type="text" className="form-control" placeholder="Search" />
                      </div>
                    </form>
                  </div>
                  <ul className="nav nav-tabs nav-tabs-bottom">
                    <li className="nav-item"><a className="nav-link active" href="#chat1" data-toggle="tab">ACTIVE</a></li>
                    <li className="nav-item"><a className="nav-link" href="#chat2" data-toggle="tab">UNREAD (0)</a></li>
                    <li className="nav-item"><a className="nav-link" href="#chat3" data-toggle="tab">SUPPORT</a></li>
                    <li className="nav-item"><a className="nav-link" href="#chat4" data-toggle="tab"> ARCHIEVED</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="chat1">
                      <div className="chat-users-list">
                        <div className="chat-scroll">
                          <a href="" className="media">
                            <div className="media-img-wrap">
                              <div className="avatar avatar-away">
                                <img src={Img_02} alt="User Image" className="avatar-img rounded-circle" />
                              </div>
                            </div>
                            <div className="media-body">
                              <div>
                                <div className="user-name">Regina Dickerson</div>
                                <div className="user-last-chat">It seems logical that the </div>
                              </div>
                              <div>
                                <div className="last-chat-time block">05 min</div>
                                <div className="badge bgg-yellow badge-pill">11</div>
                              </div>
                            </div>
                          </a>
                          <a href="" className="media read-chat active">
                            <div className="media-img-wrap">
                              <div className="avatar avatar-online">
                                <img src={Img_03} alt="User Image" className="avatar-img rounded-circle" />
                              </div>
                            </div>
                            <div className="media-body">
                              <div>
                                <div className="user-name">Forest Kroch</div>
                                <div className="user-last-chat">It seems logical that the </div>
                              </div>
                              <div>
                                <div className="last-chat-time block">05 Min</div>
                                <div className="badge bgg-yellow badge-pill">11</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Chat Left */}
                {/* Chat Right */}
                <div className="chat-cont-right">
                  <div className="chat-header">
                    <a id="back_user_list" href="" className="back-user-list">
                      <i className="material-icons">chevron_left</i>
                    </a>
                    <div className="media">
                      <div className="media-img-wrap">
                        <div className="avatar avatar-online">
                          <img src={Img_05} alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="user-name">Doris Brown </div>
                        <div className="user-status">online</div>
                      </div>
                    </div>
                    <div className="chat-options">
                      <a href="" data-toggle="modal" data-target="#voice_call">
                        <i className="material-icons icon-grey">local_phone</i>
                      </a>
                      <a href="" data-toggle="modal" data-target="#video_call">
                        <i className="material-icons icon-grey">videocam</i>
                      </a>
                      <a href="">
                        <i className="material-icons">more_vert</i>
                      </a>
                    </div>
                  </div>
                  <div className="chat-body">
                    <div className="chat-scroll">
                      <ul className="list-unstyled">
                        <li className="media received">
                          <div className="avatar">
                            <img src={Img_05} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>Good morning.....</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:00 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>															
                              <h6>Doris Brown</h6>
                            </div>
                          </div>
                        </li>
                        <li className="media sent">
                          <div className="avatar">
                            <img src={Img_05} alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                          <div className="media-body">
                            <div className="msg-box">
                              <div>
                                <p>Good morning, How are you? What about our next meeting?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:02 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <h6>Doris Brown</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chat-footer">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="avatar">
                          <img src={Img_05} alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                      </div>
                      <input type="text" className="input-msg-send form-control" placeholder="Reply..." />
                      <div className="input-group-append">												
                        <div className="btn-file btn">
                          <i className="far fa-grin fa-1x" />
                        </div>
                        <div className="btn-file btn">
                          <i className="fa fa-paperclip" />
                          <input type="file" />
                        </div>
                        <button type="button" className="btn btn-primary msg-send-btn"><i className="fa fa-reply" /> Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Chat Right */}
              </div>				
            </div>	
          </div>
        </div>
      </div>
            </>
         )
    }
}
export default Chats;