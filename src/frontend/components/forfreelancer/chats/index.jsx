import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Img_02,Img_03,Img_05 } from "../../imagepath";
    
const Chats = (props) => {  
  useEffect(() => {
    document.body.className = 'chat-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
    {/* Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 back-text">
            <Link to="/dashboard" className="btn btn-primary back-btn">
              <i className="fa fa-chevron-left" /> Back{" "}
            </Link>
          </div>
          <div className="col-md-12">
            <div className="chat-window">
              {/* Chat Left */}
              <div className="chat-cont-left">
                <div className="chat-header">
                  <form className="chat-search">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <i className="fas fa-search icon-circle" />
                      </div>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </div>
                <div className="chat-users-list">
                  <div className="chat-scroll">
                    <a href=";" className="media d-flex">
                      <div className="media-img-wrap flex-shrink-0">
                        <div className="avatar avatar-away">
                          <img
                            src={Img_02}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div>
                          <div className="user-name">Andrew Glover </div>
                          <div className="user-last-chat">
                            It seems logical that the{" "}
                          </div>
                        </div>
                        <div>
                          <div className="last-chat-time block">05 min</div>
                          <div className="badge bgg-yellow badge-pill">11</div>
                        </div>
                      </div>
                    </a>
                    <a
                      href=";"
                      className="media read-chat active d-flex"
                    >
                      <div className="media-img-wrap flex-shrink-0">
                        <div className="avatar avatar-online">
                          <img
                            src={Img_03}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div>
                          <div className="user-name">Mickey Bernier </div>
                          <div className="user-last-chat">
                            Lorem Ipsum is simply dummy text
                          </div>
                        </div>
                        <div>
                          <div className="last-chat-time block">05 Min</div>
                          <div className="badge bgg-yellow badge-pill">5</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* /Chat Left */}
              {/* Chat Right */}
              <div className="chat-cont-right">
                <div className="chat-header">
                  <a
                    id="back_user_list"
                    href=""
                    className="back-user-list"
                  >
                    <i className="material-icons">chevron_left</i>
                  </a>
                  <div className="media d-flex">
                    <div className="media-img-wrap flex-shrink-0">
                      <div className="avatar avatar-online">
                        <img
                          src={Img_05}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body flex-grow-1">
                      <div className="user-name">Doris Brown </div>
                      <div className="user-status">online</div>
                    </div>
                  </div>
                  <div className="chat-options">
                    <a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#voice_call"
                    >
                      <i className="material-icons icon-grey">local_phone</i>
                    </a>
                    <a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#video_call"
                    >
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
                      <li className="media received d-flex">
                        <div className="avatar flex-shrink-0">
                          <img
                            src={Img_02}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="media-body flex-grow-1">
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
                          </div>
                        </div>
                      </li>
                      <li className="media sent d-flex">
                        <div className="avatar flex-shrink-0">
                          <img
                            src={Img_05}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="media-body flex-grow-1">
                          <div className="msg-box">
                            <div>
                              <p>
                                Good morning, How are you? What about our next
                                meeting?
                              </p>
                              <ul className="chat-msg-info">
                                <li>
                                  <div className="chat-time">
                                    <span>10:02 AM</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="media received d-flex">
                        <div className="avatar flex-shrink-0">
                          <img
                            src={Img_02}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="media-body flex-grow-1">
                          <div className="msg-box">
                            <div>
                              <p>I am good thanks</p>
                              <ul className="chat-msg-info">
                                <li>
                                  <div className="chat-time">
                                    <span>10:03 AM</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chat-footer">
                  <div className="input-group">
                    <div className="avatar">
                      <img
                        src={Img_05}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <input
                      type="text"
                      className="input-msg-send form-control"
                      placeholder="Reply..."
                    />
                    <div className="btn-file btn">
                      <i className="far fa-grin fa-1x" />
                    </div>
                    <div className="btn-file btn">
                      <i className="fa fa-paperclip" />
                      <input type="file" />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary msg-send-btn rounded-pill"
                    >
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </div>
                </div>
              </div>
              {/* /Chat Right */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* Voice Call Modal */}
  <div className="modal fade call-modal" id="voice_call">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          {/* Outgoing Call */}
          <div className="call-box incoming-box">
            <div className="call-wrapper">
              <div className="call-inner">
                <div className="call-user">
                  <img
                    alt="User Image"
                    src={Img_05}
                    className="call-avatar"
                  />
                  <h4>Darren Elder</h4>
                  <span>Connecting...</span>
                </div>
                <div className="call-items">
                  <a
                    href=""
                    className="btn call-item call-end"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="material-icons">call_end</i>
                  </a>
                  <Link
                    to="/voice-call"
                    className="btn call-item call-start"
                  >
                    <i className="material-icons">call</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Outgoing Call */}
        </div>
      </div>
    </div>
  </div>
  {/* /Voice Call Modal */}
  {/* Video Call Modal */}
  <div className="modal fade call-modal" id="video_call">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          {/* Incoming Call */}
          <div className="call-box incoming-box">
            <div className="call-wrapper">
              <div className="call-inner">
                <div className="call-user">
                  <img
                    className="call-avatar"
                    src={Img_05}
                    alt="User Image"
                  />
                  <h4>Darren Elder</h4>
                  <span>Calling ...</span>
                </div>
                <div className="call-items">
                  <a
                    href=""
                    className="btn call-item call-end"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="material-icons">call_end</i>
                  </a>
                  <Link
                    to="/video-call"
                    className="btn call-item call-start"
                  >
                    <i className="material-icons">videocam</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Incoming Call */}
        </div>
      </div>
    </div>
  </div>
  {/* Video Call Modal */}
  </>
  
      )
  
}
export default Chats;