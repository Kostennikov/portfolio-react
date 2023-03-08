import React, { useState, useEffect, Fragment } from 'react';
// import { Link } from "react-router-dom";
// import { useHistory, useLocation } from "react-router";
import "../../static/scss/main-page.scss";
import "../../static/scss/layout.scss";
import "../../static/scss/video-chat-1c.scss";
// import "../../js/emerge"
function VideoChat() {
    // const location = useLocation();
   
    // console.log(location.pathname);
 
    return (
        <div className='video-chat'>
            <section className="row-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12">
                            <div className="video-chat emerge" data-effect="slide" data-duration="150" data-down="10%"
                        data-continue="true" >
                                <div className="video-chat__img">
                                    <picture>
                                        <source srcSet="images/emoji@2x.webp 2x" src="images/emoji.webp" type="image/webp"/>
                                        <img srcSet="images/emoji@2x.png 2x" src="images/emoji.png" decoding="async" loading="lazy"
                                            alt="" />
                                    </picture>
                                </div>
                                <div className="video-chat__title">
                                    <p>Видеозвонки для 1С</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 col-lg-7 col-xl-7 offset-1">
                            <div className="video-chat__guide">
                                <div className="video-chat__desc">
                                    <p>1C не нуждается в&nbsp;представлении. С&nbsp;компанией либо знакомы лично, либо&nbsp;через
                                        набор стереотипов (некоторые из&nbsp;которых правдивы).
                                    </p>
                                    <p>С недавнего времени внутри 1С появились чаты и&nbsp;видеозвонки, которыми
                                        пользуются многие сотрудники и&nbsp;клиенты компании. Они давно привыкли к&nbsp;программе
                                        и&nbsp;ее особенностям, поэтому важно было сделать дизайн, привычный
                                        пользователям 1С, но&nbsp;при этом свежий, удобный,и&nbsp;без разногласий с&nbsp;программами
                                        для созвонов.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 offset-1">
                            <div className="video-chat__guide-right">

                                <div className="video-chat__desc-right">
                                    <img className="img-like" src="images/like.svg" alt=""/>
                                    <p>Отдельное спасибо ребятам из&nbsp;1С за&nbsp;активное участие и&nbsp;смелость.</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }

  export default VideoChat;