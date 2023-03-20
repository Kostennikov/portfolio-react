import React, { useState, useEffect, Fragment } from 'react';
// import { useHistory, useLocation } from "react-router";

import { Link } from "react-router-dom";
import { langReducer } from '../../rootReducer';
// import createStore, { applyMiddleware } from 'redux';
// import { langReducer } from '../../rootReducer';
// import { changeLang } from '../../actions';
// import logger from 'redux-logger';
// import "../../js/emerge"
// import { locale } from "../../config";
// import VideoChat from "../video-chat-1c";
import "../../static/scss/main-page.scss";
import "../../static/scss/layout.scss";


// const store = createStore(langReducer, 'ru', applyMiddleware(logger));


function Home() {
   
    const [ru, setRu] = useState(true);
    console.log('ru', ru)
    // const location = useLocation();

    // console.log(location.pathname);
    useEffect (() => {
        //! v.2.0 http://ilyabirman.net/projects/emerge/
        
        (function(){"use strict";const emerge="emerge";const emergeSpin="emerge-spin-element";const waitingForView=new WeakMap;const spinner=new WeakMap;const defaultDuration=500;const spinner_defaults=Object.freeze({spinSize:24,spinColor:"#404040",spinDirection:"clockwise",spinPeriod:1333,duration:defaultDuration});const cssImageProps=["backgroundImage","borderImage","borderCornerImage","listStyleImage","cursor"];const cssUrlRegex=/url\(\s*(['"]?)(.*?)\1\s*\)/g;function ready(callback){if(document.readyState!=="loading"){callback()}else{document.addEventListener("readystatechange",function(){if(document.readyState==="interactive"){callback()}},{passive:true})}}function spinnerCode(diameter,color,direction,period,fadeDuration){const element=document.createElement("div");Object.assign(element.style,{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",transition:`opacity ${fadeDuration}ms ease-out`});element.innerHTML="<svg viewBox='0 0 100 100' display='block'>"+"<defs><mask id='cut'>"+"<rect width='100' height='100' fill='white' stroke='none' />"+"<circle r='40' cx='50' cy='50' fill='black' stroke='none' />"+"<polygon points='50,50 100,25 150,50 100,75' fill='black'"+"stroke='none' transform-origin='center center' />"+"</mask></defs>"+"<circle r='50' cx='50' cy='50' mask='url(#cut)' stroke='none' />"+"</svg>";const svg=element.firstElementChild;svg.setAttribute("width",diameter);svg.setAttribute("hight",diameter);svg.lastElementChild.setAttribute("fill",color);element.firstElementChild.animate([{transform:"rotate(0turn)"},{transform:"rotate(1turn)"}],{duration:Number(period),iterations:Infinity,direction:direction==="counter-clockwise"?"reverse":"normal"});return element}function withinView(el){const bodyHeight=Math.min(document.body.clientHeight,document.documentElement.clientHeight);const position=el.getBoundingClientRect().top;const scrollTop=window.pageYOffset||document.documentElement.scrollTop;return position-scrollTop<bodyHeight}function getEmergeElements(){return Array.from(document.querySelectorAll(`.${emerge}`))}const imgLoaded=function(){const cache=Object.create(null);return function imgLoaded(url){if(cache[url]!==undefined){return cache[url]}cache[url]=new Promise(function(resolve){const img=document.createElement("img");img.src=url;if(img.complete){resolve()}else{img.addEventListener("load",()=>resolve());img.addEventListener("error",()=>resolve())}});return cache[url]}}();function eventDispatched(element,event){return new Promise(function(resolve){if(element.readyState>=4){resolve()}else{element.addEventListener(event,()=>resolve())}})}function get_element_to_wait_for(element,previous){return element.dataset.await!==undefined?document.getElementById(element.dataset.await):element.dataset.continue!==undefined?previous:undefined}function is_cyclic(element){let next=element;while(next.dataset.await!==undefined){next=document.getElementById(next.dataset.await);if(next===null){return false}if(next===element){return true}}return false}function fire(element){const spinElement=spinner.get(element);if(spinElement){spinElement.style.opacity=0;setTimeout(function(){if(element.parentNode.style.position==="relative"){element.parentNode.style.position=null}spinElement.remove()},defaultDuration)}element.style.transition=`opacity ${defaultDuration}ms ease-out`;element.style.opacity=1;const style2=element.dataset["style-2"];if(style2){element.setAttribute("style",element.getAttribute("style")+"; "+style2)}console.log("  FIRED!",element.id)}const viewWatcher=new IntersectionObserver(function(entries,watcher){entries.forEach(function(entry){if(entry.isIntersecting||withinView(entry.target)){if(waitingForView.has(entry.target)){waitingForView.get(entry.target)()}waitingForView.delete(entry.target);watcher.unobserve(entry.target);fire(entry.target)}})});function play(){const promises=new WeakMap;getEmergeElements().forEach(function(self,index,emerging){if(self.dataset.await&&document.getElementById(self.dataset.await)===null){throw`Emerge: Element with ID “${self.dataset.await}” not found.`}const previous=emerging[index-1];const box=self.getBoundingClientRect();const duration=self.dataset.duration||defaultDuration;let style1="";let style2="";const effect=self.dataset.effect||false;if(self.dataset.opaque){self.style.opacity=1}if(effect){let fxData={};const cssTransform="transform";const cssTransformOrigin="transform-origin";let up=self.dataset.up||0;const down=self.dataset.down||0;let left=self.dataset.left||0;const right=self.dataset.right||0;let angle=self.dataset.angle||"90";let scale=self.dataset.scale||-1;let origin=self.dataset.origin||"50% 50%";if(down){up="-"+down;if(up.substr(0,2)==="--"){up=up.substr(2)}}if(right){left="-"+right;if(left.substr(0,2)==="--"){left=left.substr(2)}}if(effect==="relax"){if(scale===-1){scale=.92}if(origin==="50% 50%"){origin="top"}fxData={one:"scaleY("+scale+")",two:"scaleY(1)",orn:origin,crv:"cubic-bezier(0, 0, 0.001, 1)"}}if(effect==="slide"){if(!up){up="20px"}fxData={one:"translate("+left+","+up+")",two:"translate(0,0)",crv:"cubic-bezier(0, 0.9, 0.1, 1)"}}if(effect==="zoom"){if(scale===-1){scale=.5}fxData={one:"scale("+scale+")",two:"scale(1)",orn:origin,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}}if(effect==="screw"){if(scale===-1){scale=.5}if(!angle){angle=90}fxData={one:"scale("+scale+") rotate("+angle+"deg)",two:"scale(1) rotate(0)",orn:origin,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}}if(fxData){style1+=`${cssTransform}: ${fxData.one};`+`${cssTransformOrigin}: ${fxData.orn};`;style2+=cssTransform+": "+fxData.two+"; "+"transition: "+"opacity "+duration+"ms ease-out, "+`${cssTransform} ${duration}ms ${fxData.crv};`}self.dataset["style-1"]=style1;self.dataset["style-2"]=style2}if(!style1){style1=self.dataset["style-1"]}if(style1){self.setAttribute("style",self.getAttribute("style")+"; "+style1)}const first=[];first.push(Promise.all([self].concat(Array.from(self.querySelectorAll("*"))).reduce(function(sources,element){if(element.nodeName.toLowerCase()==="img"){sources.push(imgLoaded(element.src))}else if(element.nodeName.toLowerCase()==="video"){sources.push(eventDispatched(element,element.dataset["emerge-event"]||"canplaythrough"))}const css=getComputedStyle(element);cssImageProps.forEach(function(key){const value=css[key];let match;if(value&&value.indexOf("url(")!==-1){while(true){match=cssUrlRegex.exec(value);if(match===null){break}sources.push(imgLoaded(match[2]))}}});return sources},[])));const element_to_wait_for=get_element_to_wait_for(self,previous);if(element_to_wait_for!==undefined&&!is_cyclic(self)){first.push(new Promise(function(resolve){queueMicrotask(function(){promises.get(element_to_wait_for).then(resolve)})}))}let last;const hold=Number(self.dataset.hold);if(self.dataset.expose!==undefined&&!withinView(self)){last=new Promise(function(resolve){viewWatcher.observe(self);waitingForView.set(self,resolve)})}else if(!Number.isNaN(hold)){last=function(){let callback;const promise=new Promise(function(resolve){callback=resolve});return function(){setTimeout(callback,hold);return promise}}()}else{last=Promise.resolve()}promises.set(self,Promise.all(first).then(function(){return typeof last==="function"?last():last}));promises.get(self).then(function(){fire(self)});if(self.dataset.spin){let spinElement;const customSpinner=document.getElementById(self.dataset.spinElement);if(customSpinner!==null){spinElement=customSpinner.cloneNode(true);spinElement.style.position="absolute";spinElement.style.display="block"}else{const spinnerOptions=Object.keys(spinner_defaults).reduce(function(options,key){options[key]=self.dataset[key]===undefined?spinner_defaults[key]:self.dataset[key];return options},{});spinElement=spinnerCode(...Object.values(spinnerOptions))}spinElement.style.width="100%";spinElement.style.height=Math.min(box.height,document.body.clientHeight-(self.getBoundingClientRect().top+window.pageYOffset))+"px";spinElement.classList.add(emergeSpin);if(getComputedStyle(self.parentNode).position==="static"){self.parentNode.style.position="relative"}self.parentNode.insertBefore(spinElement,self);spinner.set(self,spinElement)}})}function repeat(event){event.preventDefault();console.log("REPLAY");getEmergeElements().forEach(function(element){element.style.transition=null;element.style.opacity=null});document.querySelectorAll(`.${emergeSpin}`).forEach(function(element){element.remove()});play()}if(window.IntersectionObserver===undefined||document.documentElement.animate===undefined){return}if(window.navigator&&window.navigator.loadPurpose==="preview"){getEmergeElements().forEach(function(element){element.style.transition="none";element.style.opacity=1});return false}const style=document.createElement("style");style.innerHTML=`.${emerge} { opacity: 0; }`;document.head.append(style);ready(function(){play();document.querySelectorAll(".emerge-replay").forEach(function(element){element.addEventListener("click",repeat)})})})();
        
        let date = new Date().getFullYear();
        document.querySelector('.current-year').innerHTML = '&nbsp;' + date;
    }, [ru]) 
   

    return (
     <div className='home'>
     {ru && (
        <Fragment>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="header__blocks">
                                <div className="header__title emerge" data-effect="fade" data-duration="200">
                                    <div className="header__title-name">
                                        <img className="header__title-name_img" src="images/name.svg" alt="" />
                                        <div className="header__title-ava emerge" data-effect="relax" data-duration="300"
                                            data-continue="true">
                                            <img className="header__title-ava_img" srcSet="images/ava@2x.png 2x"
                                                src="images/ava.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header__links">
                                    <Link className="link-active emerge" data-effect="fade" data-duration="300"
                                    to="mailto:tugolukovskiy@gmail.com">tugolukovskiy@gmail.com</Link>
                                    <Link className="link-active emerge" data-effect="fade" data-duration="300" to="https://t.me/tugolukovskiy" target="_blank">телеграм</Link>
                                    <Link className="link-active emerge" data-effect="fade" data-duration="300" to="https://www.instagram.com/tugolukovskiy/"
                                    target="_blank">инстаграм</Link>

                                    <div className={ru ? 'link-deactive link-active link-lang' : 'link-active link-lang'} 
                                        onClick={e => setRu(ru)}>
                                            ру
                                    </div>
                                    <img className="lang-arrow" src="images/lang-arrow.svg" alt="" />                              
                                    <div className="link-active" 
                                        onClick={e => setRu(!ru)}>
                                            en
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="header__desc emerge" data-effect="fade" data-duration="300">
                                <p>Дизайню,&nbsp;
                                    <Link className="link-active" to="poetry.html">пишу стихи</Link>
                                    &nbsp;и&nbsp;музыку
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        
            <section className="row-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="redesign emerge" data-effect="slide" data-duration="300" data-bottom="20px"
                                data-left="25%" data-continue="true">
                                <div className="redesign__img">
                                    <Link className="img-link" to="cleverence-redesign" lang={true}
                                        onClick={e => setRu(ru)}>
                                        <picture>
                                            <source srcSet="images/cleverence-redesign/cleverence-link-mob@2x.webp 2x"
                                                    src="images/cleverence-redesign/cleverence-link-mob.webp"
                                                    type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/cleverence-redesign/cleverence-link-mob.png"
                                                    srcSet="images/cleverence-redesign/cleverence-link-mob@2x.png"
                                                    alt="" media="(max-width: 767px)"/>

                                            <source srcSet="images/cleverence-redesign/cleverence-link@2x.webp 2x"
                                                    src="images/cleverence-redesign/cleverence-link.webp"
                                                    type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcSet="images/cleverence-redesign/cleverence-link@2x.png 2x"
                                                src="images/cleverence-redesign/cleverence-link.png"
                                                alt="" media="(max-width: 767px)"/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="redesign__link">
                                    <Link className="link-active" to="cleverence-redesign" onClick={e => setRu(ru)} lang={true}>Редизайн&nbsp;иконок<br/>
                                        приложений<br className="br-mob"/>
                                        Cleverence</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-8 col-lg-8 col-xl-8 offset-md-1">
                            <div className="prosto emerge" data-effect="slide" data-duration="300" data-down="20px"
                                data-right="25%" data-continue="true">
                                <div className="prosto__img">
                                    <Link className="img-link" to="1c-prosto.html">
                                        <picture>
                                            <source srcSet="images/1c-prosto/1c-prosto-link-mob@2x.webp 2x"
                                                    src="images/1c-prosto/1c-prosto-link-mob.webp"
                                                    type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/1c-prosto/1c-prosto-link-mob.png"
                                                    srcSet="images/1c-prosto/1c-prosto-link-mob@2x.png"
                                                    alt="" media="(max-width: 767px)"/>

                                            <source srcSet="images/1c-prosto/1c-prosto-link@2x.webp 2x"
                                                    src="images/1c-prosto/1c-prosto-link.webp"
                                                    type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcSet="images/1c-prosto/1c-prosto-link@2x.png 2x"
                                                src="images/1c-prosto/1c-prosto-link.png"
                                                alt="" media="(max-width: 767px)"/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="prosto__link">
                                    <Link className="link-active" to="1c-prosto.html">Сайт&nbsp;«1С-Просто»</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-1">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="video emerge" data-effect="slide" data-duration="300" data-down="20px"
                                data-right="25%" data-continue="true">
                                <div className="video__img">
                                    <Link className="img-link" to="video-chat-1c.html">
                                        <picture>
                                            <source srcSet="images/hero/main-hero@2x.webp 2x" src="images/hero/main-hero.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/hero/main-hero@2x.png 2x" src="images/hero/main-hero.png"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="video__link">
                                    <Link className="link-active" to="video-chat-1c.html">Видеозвонки в&nbsp;1С</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="travel emerge" data-effect="slide" data-duration="300" data-bottom="20px"
                                data-left="25%" data-continue="true">
                                <div className="travel__img">
                                    <Link className="img-link" to="take-travel.html">
                                        <picture>
                                            <source srcSet="images/take-travel-mob@2x.webp 2x" src="images/take-travel-mob.webp"
                                                    type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/take-travel-mob.png" srcSet="images/take-travel-mob@2x.png"
                                                    alt="" media="(max-width: 767px)"/>
                                            <source src="images/travel.svg" alt="" srcSet="" media="(min-width: 768px)"/>
                                            <img src="images/travel.svg" alt="" media="(max-width: 767px)"/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="travel__link">
                                    <Link className="link-active" to="take-travel.html">Take Travel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="respect emerge" data-effect="slide" data-duration="300" data-up="20px"
                                data-right="25%" data-continue="true">
                                <div className="respect__img">
                                    <picture>
                                        <source srcSet="images/respect-cat@2x.webp 2x" src="images/respect-cat.webp"
                                                type="image/webp"/>
                                        <img srcSet="images/respect-cat@2x.png 2x" src="images/respect-cat.png"
                                            loading="lazy"
                                            alt="" />
                                    </picture>
                                </div>
                                <div className="respect__desc">
                                    <p>Знак, напоминающий, что нужно уважать кошку. 2019 год</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                            <div className="meso-admin emerge" data-effect="slide" data-duration="300" data-up="20px"
                                data-left="25%" data-continue="true">
                                <div className="meso-admin__img">
                                    <Link className="img-link" to="admin-meso.html">
                                        <picture>
                                            <source srcSet="images/gamepad@2x.webp 2x" src="images/gamepad.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/gamepad@2x.png 2x" src="images/gamepad.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="meso-admin__link">
                                    <Link className="link-active" to="admin-meso.html">Админка<br/> управления<br/>
                                        магазинами<br/> для
                                        компании<br/> MESO</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="kissing emerge" data-effect="slide" data-duration="300" data-right="25%"
                                data-continue="true">
                                <div className="kissing__img">
                                    <svg width="100%" height="100%" viewBox="0 0 632 410" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_ddd)">
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M547.365 347.387H84.6289C64.1843 347.387 47.6119 330.809 47.6119 310.357V69.6431C47.6119 49.1912 64.1843 32.6128 84.6289 32.6128H547.365C567.809 32.6128 584.382 49.1912 584.382 69.6431V310.35C584.388 330.809 567.809 347.387 547.365 347.387Z"
                                                    fill="white"/>
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M84.6289 35.2257C65.6268 35.2257 50.2238 50.6343 50.2238 69.6432V310.357C50.2238 329.366 65.6268 344.774 84.6289 344.774H547.365C566.367 344.774 581.776 329.365 581.77 310.351V69.6432C581.77 50.6343 566.367 35.2257 547.365 35.2257H84.6289ZM45 69.6432C45 47.7482 62.7418 30 84.6289 30H547.365C569.252 30 586.993 47.7482 586.993 69.6432V310.349C586.993 310.35 586.993 310.35 586.993 310.35C587 332.253 569.251 350 547.365 350H84.6289C62.7418 350 45 332.252 45 310.357V69.6432Z"
                                                    fill="#EC1D24"/>
                                                <path
                                                    d="M542.369 331.651H89.6307C75.3175 331.651 63.7142 320.044 63.7142 305.725V74.2742C63.7142 59.9559 75.3175 48.3484 89.6307 48.3484H542.369C556.682 48.3484 568.286 59.9559 568.286 74.2742V305.725C568.286 320.044 556.682 331.651 542.369 331.651Z"
                                                    fill="#EC1D24"/>
                                                <path
                                                    d="M106.334 88.6057H115.397L115.887 89.4614L116.135 89.7096L116.625 90.5653C116.788 90.7874 116.931 91.0095 117.056 91.2251C117.18 91.4406 117.278 91.6301 117.362 91.7934L117.611 91.9175L117.735 92.1657L118.838 93.8771L119.818 95.3468C119.896 95.4056 119.942 95.4709 119.942 95.5297V95.5885C120.555 96.2613 120.96 96.8753 121.169 97.424C121.457 97.731 121.692 98.025 121.888 98.3124C122.083 98.5998 122.247 98.8741 122.39 99.142L122.88 99.756L123.246 100.488L123.494 100.853L123.742 101.102L124.232 101.957L124.48 102.205L125.335 103.551L126.315 105.021L127.17 106.249L127.418 106.497L127.666 106.863L127.79 107.229L128.039 107.594L128.287 107.843L128.776 108.698L129.025 108.947L129.88 110.292L130.004 110.54L130.252 110.906C130.33 110.965 130.376 111.03 130.376 111.089V111.148C130.579 111.37 130.761 111.586 130.925 111.788C131.088 111.991 131.232 112.187 131.356 112.369L131.721 112.983L131.969 113.473C132.4 113.924 132.681 114.375 132.825 114.819L133.315 115.551C133.563 115.733 133.765 115.982 133.928 116.282L134.418 117.014C134.621 117.301 134.79 117.562 134.921 117.811C135.051 118.059 135.169 118.281 135.273 118.483C135.417 118.588 135.496 118.706 135.522 118.849L135.887 119.097L136.011 119.463L136.259 119.711L136.508 120.077L136.632 120.443C137.265 121.175 137.716 121.789 137.977 122.279V88.6057H146.061V135.513H136.939L136.449 134.657L136.201 134.409L136.077 134.043C135.443 133.311 134.993 132.697 134.732 132.207L134.607 131.959C134.301 131.554 134.033 131.175 133.811 130.829C133.589 130.483 133.399 130.163 133.262 129.882L132.649 129.15L131.421 127.315L131.297 127.067L131.049 126.818L130.559 125.963C130.396 125.741 130.252 125.518 130.128 125.303C130.004 125.087 129.906 124.898 129.821 124.735C129.39 124.304 129.109 123.938 128.966 123.631C128.659 123.16 128.456 122.795 128.352 122.527C128.208 122.448 128.13 122.363 128.104 122.279L127.856 122.03L127.732 121.665L127.484 121.416L127.359 121.051C127.137 120.828 126.942 120.619 126.778 120.423C126.615 120.227 126.484 120.032 126.38 119.829L124.787 117.504L124.539 116.89C124.029 116.419 123.703 115.929 123.559 115.42C122.945 114.747 122.541 114.133 122.332 113.584L121.842 113.094L121.594 112.48L120.98 111.866L120.614 111.135L120.249 110.645C120.085 110.423 119.942 110.201 119.818 109.985C119.694 109.77 119.596 109.58 119.511 109.417L119.021 108.685C118.877 108.607 118.799 108.522 118.773 108.437L117.917 107.209C117.715 106.922 117.545 106.66 117.415 106.412C117.284 106.164 117.167 105.942 117.062 105.739L116.696 105.374L116.572 105.008L116.207 104.642L116.083 104.276C115.939 104.198 115.861 104.113 115.834 104.028C115.795 103.989 115.763 103.95 115.743 103.923C115.723 103.891 115.71 103.858 115.71 103.819V103.786C115.077 103.055 114.626 102.441 114.365 101.951V135.506H106.334V88.6057Z"
                                                    fill="white"/>
                                                <path
                                                    d="M181.079 87.2603H183.404L183.894 87.3844H184.259C184.893 87.3844 185.383 87.4236 185.729 87.5085H186.46C187.257 87.7567 187.968 87.8743 188.602 87.8743H188.785C198.579 91.6302 203.679 99.0637 204.09 110.162C204.11 110.573 204.129 110.985 204.149 111.403C204.169 111.821 204.182 112.232 204.182 112.644C204.182 123.481 199.741 131.064 190.868 135.395C187.622 136.499 184.56 137.048 181.687 137.048C176.117 137.048 171.18 134.944 166.871 130.738C162.933 125.982 160.89 120.835 160.746 115.309C160.661 115.061 160.622 114.78 160.622 114.453C160.622 114.022 160.583 113.696 160.498 113.473V111.638L160.622 110.534V108.823L160.746 108.333V107.967L160.87 107.601C160.929 106.354 161.138 105.256 161.484 104.296C164.207 93.5898 170.736 87.9135 181.079 87.2603ZM168.719 115.309C169.189 121.919 172.042 126.414 177.286 128.778C177.508 128.817 177.671 128.863 177.775 128.902L180.838 129.634C190.737 129.412 195.752 124.14 195.895 113.833C195.954 112.938 195.987 112.069 195.987 111.233C195.987 100.07 190.854 94.4847 180.59 94.4847C172.552 96.059 168.529 101.709 168.529 111.449C168.536 112.677 168.595 113.963 168.719 115.309Z"
                                                    fill="white"/>
                                                <path
                                                    d="M242.753 88.8541H250.837V109.678L251.326 109.064L252.058 108.333C252.136 108.189 252.221 108.111 252.306 108.085L252.43 107.836L252.678 107.588L254.271 105.753L254.885 105.139L255.009 104.773L255.74 104.159L255.864 103.911L257.21 102.317L257.699 101.703L259.044 100.233L259.534 99.743L259.9 99.129C260.122 98.8416 260.344 98.6065 260.559 98.4105C260.775 98.2145 260.964 98.0512 261.127 97.9075C261.493 97.2543 261.904 96.7644 262.355 96.4378L263.583 94.844L263.948 94.4782L264.314 93.9883L265.293 93.0085L266.397 91.6629L266.645 91.4146C266.723 91.2709 266.808 91.1926 266.893 91.1664L267.017 90.9182L267.265 90.67L268.859 88.8345H278.288C277.778 89.7098 277.204 90.4087 276.577 90.9182C276.414 91.2056 276.211 91.4473 275.963 91.6498L275.473 92.3814L274.494 93.3612L273.762 94.341L273.514 94.5892C273.371 94.7721 273.227 94.9354 273.083 95.0791C272.94 95.2228 272.796 95.347 272.652 95.4449C272.163 96.2614 271.634 96.8755 271.059 97.2805L270.694 97.7704L269.348 99.4818L268.983 99.8476C268.735 100.115 268.526 100.351 268.343 100.566C268.16 100.782 268.003 100.991 267.886 101.193L267.52 101.441L267.154 101.807L266.906 102.297L266.292 102.911L266.044 103.277L265.796 103.525L265.548 103.891L265.182 104.139L265.058 104.387L264.81 104.636C263.955 105.739 263.217 106.556 262.603 107.085C263.054 108.065 263.459 108.797 263.831 109.293L264.196 110.149C264.379 110.332 264.503 110.534 264.562 110.763L265.052 111.377L265.542 112.232L265.79 112.722L266.038 113.088L266.286 113.578L266.41 113.944L266.658 114.068L266.782 114.558C266.861 114.617 266.906 114.682 266.906 114.741V114.799C267.455 115.374 267.827 115.982 268.01 116.635L268.5 117.491L268.748 117.739L269.975 119.823L270.465 120.678L270.831 121.534L271.32 122.148L271.444 122.514C271.647 122.782 271.823 123.036 271.967 123.278C272.11 123.526 272.221 123.755 272.306 123.984L272.672 124.474L272.92 125.088L273.286 125.577L274.141 127.047L274.631 127.779L274.755 128.269L275.121 128.759L275.245 129.124C275.388 129.229 275.467 129.346 275.493 129.49L275.741 129.98C276.146 130.431 276.433 130.921 276.596 131.45C277.106 131.979 277.432 132.514 277.576 133.044L277.824 133.292L279.052 135.617H269.988L269.623 134.762L269.257 134.396L269.009 133.906L268.519 133.05L268.395 132.684L268.147 132.436L268.023 132.188C267.86 131.9 267.709 131.646 267.579 131.424C267.448 131.202 267.311 131.006 267.167 130.842L267.043 130.476L266.795 129.987L266.306 129.255L265.94 128.523L265.574 127.909L265.084 127.178L264.719 126.564L264.595 126.316C264.085 125.499 263.72 124.807 263.491 124.232C263.308 124.01 263.184 123.801 263.126 123.618C263.086 123.579 263.054 123.539 263.034 123.513C263.015 123.481 263.001 123.448 263.001 123.409V123.376C262.368 122.56 261.918 121.828 261.656 121.168L261.532 120.802C261.003 120.169 260.631 119.64 260.429 119.209L260.305 118.719L260.057 118.353L259.691 117.863L259.567 117.497L259.077 116.766L258.953 116.4L258.705 116.152L258.581 115.903L258.457 115.538L258.209 115.414C257.882 114.702 257.556 114.087 257.229 113.578L256.981 113.82L256.857 114.068C256.511 114.355 256.263 114.643 256.126 114.924L255.76 115.172L254.656 116.642L254.167 117.007L253.677 117.739L253.311 117.987C252.9 118.64 252.495 119.13 252.084 119.457C251.699 120.006 251.287 120.456 250.856 120.802V135.624H242.772V88.8541H242.753Z"
                                                    fill="white"/>
                                                <path d="M290.054 88.854H298.138V135.637H290.054V88.854Z" fill="white"/>
                                                <path
                                                    d="M346.321 95.5887L345.707 95.9545C345.505 96.1766 345.309 96.3726 345.126 96.5359C344.943 96.6992 344.767 96.8298 344.603 96.9343L343.99 97.5483L343.624 97.6724C343.239 98.1623 342.827 98.489 342.396 98.6523C342.011 99.1814 341.521 99.5929 340.927 99.8803C340.679 100.207 340.437 100.455 340.196 100.612C337.297 96.7971 333.745 94.8832 329.546 94.8832C329.095 94.8832 328.606 94.9159 328.077 94.9747C324.322 95.0988 321.913 96.7318 320.855 99.8738C320.855 102.036 321.508 103.832 322.814 105.263L323.669 105.753L324.035 105.877L325.38 106.491H325.994L326.483 106.615L327.097 106.739C327.567 106.922 327.972 107.046 328.325 107.105L329.304 107.353H329.67L333.712 108.333H334.078L334.443 108.457H334.809L335.175 108.581L336.885 108.947L337.251 109.071L337.741 109.195L338.72 109.561C339.758 109.829 340.62 110.155 341.293 110.541L341.541 110.789L341.907 110.913L342.155 111.279C342.462 111.442 342.703 111.605 342.886 111.769C343.03 111.854 343.108 111.932 343.134 112.017L344.603 113.362C346.314 115.897 347.176 118.477 347.176 121.11C347.176 122.501 346.928 123.918 346.445 125.368C345.1 129.961 342.488 133.148 338.609 134.918C338.1 135.245 337.61 135.493 337.14 135.65C335.912 135.898 334.731 136.075 333.588 136.186C332.445 136.297 331.322 136.355 330.218 136.355C322.526 136.355 316.18 133.383 311.178 127.446L311.302 127.197L311.55 127.073C311.628 126.995 311.7 126.949 311.765 126.949H311.798C312.249 126.42 312.738 126.009 313.267 125.721L313.633 125.355L315.102 124.127L315.35 124.003C315.429 123.925 315.5 123.879 315.566 123.879H315.598C315.925 123.533 316.238 123.219 316.545 122.945C316.852 122.671 317.146 122.449 317.433 122.285H317.799C321.266 126.819 325.197 129.085 329.585 129.085C331.89 129.085 334.287 128.491 336.781 127.308C337.251 126.779 337.702 126.368 338.126 126.08L338.25 125.715C338.72 125.061 339.047 124.408 339.23 123.755C339.249 123.611 339.262 123.481 339.262 123.357C339.262 123.232 339.262 123.108 339.262 122.991C339.262 120.646 338.355 118.817 336.539 117.51L336.174 117.386C335.723 117.203 335.318 117.079 334.946 117.02L334.698 116.772H334.332L333.842 116.648L333.594 116.524H333.229L332.981 116.4C332.184 116.276 331.531 116.113 331.022 115.91H330.656L329.677 115.662H329.311L328.821 115.538L328.573 115.414C327.776 115.289 327.123 115.126 326.614 114.924C318.452 113.983 313.92 109.783 313.026 102.31C313.209 93.4331 318.067 88.5733 327.594 87.7371C328.064 87.698 328.521 87.6653 328.971 87.6457C329.422 87.6261 329.859 87.613 330.29 87.613C337.342 87.6261 342.69 90.2847 346.321 95.5887Z"
                                                    fill="white"/>
                                                <path
                                                    d="M392.747 95.5887L392.133 95.9545C391.931 96.1766 391.735 96.3726 391.552 96.5359C391.369 96.6992 391.193 96.8298 391.03 96.9343L390.416 97.5483L390.05 97.6724C389.665 98.1623 389.254 98.489 388.823 98.6523C388.438 99.1814 387.948 99.5929 387.354 99.8803C387.105 100.207 386.864 100.455 386.622 100.612C383.723 96.7971 380.171 94.8832 375.972 94.8832C375.522 94.8832 375.032 94.9159 374.503 94.9747C370.749 95.0988 368.339 96.7318 367.281 99.8738C367.281 102.036 367.934 103.832 369.24 105.263L370.096 105.753L370.461 105.877L371.806 106.491H372.42L372.91 106.615L373.524 106.739C373.994 106.922 374.399 107.046 374.751 107.105L375.731 107.353H376.096L380.138 108.333H380.504L380.87 108.457H381.235L381.601 108.581L383.312 108.947L383.677 109.071L384.167 109.195L385.147 109.561C386.185 109.829 387.047 110.155 387.719 110.541L387.967 110.789L388.333 110.913L388.581 111.279C388.888 111.442 389.13 111.605 389.312 111.769C389.456 111.854 389.534 111.932 389.561 112.017L391.03 113.362C392.741 115.897 393.603 118.477 393.603 121.11C393.603 122.501 393.354 123.918 392.871 125.368C391.526 129.961 388.914 133.148 385.036 134.918C384.526 135.245 384.036 135.493 383.566 135.65C382.339 135.898 381.157 136.075 380.014 136.186C378.871 136.297 377.748 136.355 376.645 136.355C368.953 136.355 362.606 133.383 357.604 127.446L357.728 127.197L357.976 127.073C358.055 126.995 358.127 126.949 358.192 126.949H358.225C358.675 126.42 359.165 126.009 359.694 125.721L360.059 125.355L361.529 124.127L361.777 124.003C361.855 123.925 361.927 123.879 361.992 123.879H362.025C362.351 123.533 362.665 123.219 362.972 122.945C363.279 122.671 363.572 122.449 363.86 122.285H364.225C367.693 126.819 371.623 129.085 376.011 129.085C378.316 129.085 380.713 128.491 383.207 127.308C383.677 126.779 384.128 126.368 384.552 126.08L384.676 125.715C385.147 125.061 385.473 124.408 385.656 123.755C385.675 123.611 385.688 123.481 385.688 123.357C385.688 123.232 385.688 123.108 385.688 122.991C385.688 120.646 384.781 118.817 382.966 117.51L382.6 117.386C382.149 117.203 381.745 117.079 381.372 117.02L381.124 116.772H380.759L380.269 116.648L380.021 116.524H379.655L379.407 116.4C378.61 116.276 377.957 116.113 377.448 115.91H377.082L376.103 115.662H375.737L375.247 115.538L374.999 115.414C374.203 115.289 373.55 115.126 373.04 114.924C364.878 113.983 360.347 109.783 359.452 102.31C359.635 93.4331 364.493 88.5733 374.02 87.7371C374.49 87.698 374.947 87.6653 375.398 87.6457C375.848 87.6261 376.286 87.613 376.717 87.613C383.769 87.6261 389.11 90.2847 392.747 95.5887Z"
                                                    fill="white"/>
                                                <path d="M407.792 88.854H415.875V135.637H407.792V88.854Z" fill="white"/>
                                                <path
                                                    d="M432.807 88.6057H441.87L442.36 89.4614L442.608 89.7096L443.098 90.5653C443.261 90.7874 443.405 91.0095 443.529 91.2251C443.653 91.4406 443.751 91.6301 443.836 91.7934L444.084 91.9175L444.208 92.1657L445.311 93.8771L446.291 95.3468C446.369 95.4056 446.415 95.4709 446.415 95.5297V95.5885C447.029 96.2613 447.434 96.8753 447.643 97.424C447.93 97.731 448.165 98.025 448.361 98.3124C448.557 98.5998 448.72 98.8741 448.864 99.142L449.353 99.756L449.719 100.488L449.967 100.853L450.215 101.102L450.705 101.957L450.953 102.205L451.809 103.551L452.788 105.021L453.643 106.249L453.892 106.497L454.14 106.863L454.264 107.229L454.512 107.594L454.76 107.843L455.25 108.698L455.498 108.947L456.353 110.292L456.477 110.54L456.725 110.906C456.804 110.965 456.849 111.03 456.849 111.089V111.148C457.052 111.37 457.235 111.586 457.398 111.788C457.561 111.991 457.705 112.187 457.829 112.369L458.195 112.983L458.443 113.473C458.874 113.924 459.154 114.375 459.298 114.819L459.788 115.551C460.036 115.733 460.238 115.982 460.402 116.282L460.891 117.014C461.094 117.301 461.264 117.562 461.394 117.811C461.525 118.059 461.642 118.281 461.747 118.483C461.89 118.588 461.969 118.706 461.995 118.849L462.361 119.097L462.485 119.463L462.733 119.711L462.981 120.077L463.105 120.443C463.738 121.175 464.189 121.789 464.45 122.279V88.6057H472.534V135.513H463.471L462.981 134.657L462.733 134.409L462.609 134.043C461.975 133.311 461.525 132.697 461.264 132.207L461.14 131.959C460.833 131.554 460.565 131.175 460.343 130.829C460.121 130.483 459.932 130.163 459.794 129.882L459.181 129.15L457.953 127.315L457.829 127.067L457.581 126.818L457.091 125.963C456.928 125.741 456.784 125.518 456.66 125.303C456.536 125.087 456.438 124.898 456.353 124.735C455.922 124.304 455.641 123.938 455.498 123.631C455.191 123.16 454.989 122.795 454.884 122.527C454.74 122.448 454.662 122.363 454.636 122.279L454.388 122.03L454.264 121.665L454.016 121.416L453.892 121.051C453.67 120.828 453.474 120.619 453.31 120.423C453.147 120.227 453.017 120.032 452.912 119.829L451.319 117.504L451.071 116.89C450.561 116.419 450.235 115.929 450.091 115.42C449.477 114.747 449.073 114.133 448.864 113.584L448.374 113.094L448.126 112.48L447.512 111.866L447.146 111.135L446.781 110.645C446.617 110.423 446.474 110.201 446.35 109.985C446.226 109.77 446.128 109.58 446.043 109.417L445.553 108.685C445.409 108.607 445.331 108.522 445.305 108.437L444.45 107.209C444.247 106.922 444.077 106.66 443.947 106.412C443.816 106.164 443.699 105.942 443.594 105.739L443.228 105.374L443.104 105.008L442.739 104.642L442.615 104.276C442.471 104.198 442.393 104.113 442.367 104.028C442.327 103.989 442.295 103.95 442.275 103.923C442.256 103.891 442.242 103.858 442.242 103.819V103.786C441.609 103.055 441.159 102.441 440.897 101.951V135.506H432.814V88.6057H432.807Z"
                                                    fill="white"/>
                                                <path
                                                    d="M527.26 98.5281L526.404 98.8939C525.914 99.2205 525.503 99.423 525.177 99.5079C525.092 99.6516 525.013 99.73 524.928 99.7561L524.563 99.8802L524.315 100.128L524.067 100.253L523.335 100.501L523.211 100.749L521.742 101.363C521.252 101.709 520.841 101.912 520.514 101.977C520.292 101.611 520.129 101.245 520.025 100.873C519.985 100.834 519.953 100.795 519.933 100.769C519.914 100.736 519.901 100.703 519.901 100.664V100.631L519.652 100.507L518.549 98.7959C515.16 95.9806 511.804 94.5696 508.48 94.5696C505.6 94.5696 502.754 95.6082 499.939 97.692L499.208 98.1819C499.123 98.3256 499.045 98.404 498.96 98.4301C498.875 98.5738 498.797 98.6522 498.712 98.6783L498.464 99.0441L498.215 99.1682L498.091 99.4164C497.869 99.7822 497.654 100.109 497.451 100.396C497.249 100.684 497.053 100.925 496.87 101.128C495.545 105.067 494.879 108.875 494.879 112.546C494.879 116.217 495.538 119.803 496.87 123.291L497.118 123.415C497.713 124.5 498.366 125.355 499.077 125.989C502.035 128.523 505.137 129.784 508.382 129.784C509.995 129.784 511.667 129.457 513.404 128.804C518.033 127.008 520.351 123.755 520.351 119.039C520.351 118.634 520.338 118.209 520.305 117.785C520.273 117.36 520.221 116.909 520.136 116.439H506.789V109.215H527.358V135.669H520.136C520.155 135.421 520.168 135.193 520.168 134.964V134.259C520.168 133.788 520.155 133.357 520.136 132.959C520.116 132.56 520.077 132.201 520.012 131.874C519.013 133.488 517.785 134.709 516.342 135.545L515.852 135.669C514.977 136.218 513.998 136.59 512.914 136.773C512.137 136.898 511.379 136.982 510.635 137.035C509.89 137.087 509.159 137.113 508.447 137.113C502.532 137.113 497.615 135.166 493.697 131.267C489.903 127.348 487.781 122.938 487.33 118.039C487.167 116.811 487.036 115.642 486.945 114.519C486.854 113.395 486.808 112.291 486.808 111.213C486.808 99.743 491.836 92.0156 501.898 88.0376L503.126 87.9134L503.491 87.7893H503.857L504.223 87.6652C505.059 87.6456 505.796 87.5607 506.43 87.417C506.737 87.3974 507.037 87.3843 507.331 87.3713C507.625 87.3582 507.925 87.3582 508.232 87.3582C517.191 87.319 523.525 91.0554 527.26 98.5281Z"
                                                    fill="white"/>
                                                <path d="M190.776 164.104H198.86V210.887H190.776V164.104Z" fill="white"/>
                                                <path
                                                    d="M215.792 163.855H224.855L225.345 164.711L225.593 164.959L226.082 165.815C226.246 166.037 226.389 166.259 226.513 166.475C226.637 166.69 226.735 166.88 226.82 167.043L227.068 167.167L227.192 167.415L228.296 169.127L229.275 170.597C229.354 170.655 229.399 170.721 229.399 170.779V170.838C230.013 171.511 230.418 172.125 230.627 172.674C230.914 172.981 231.149 173.275 231.345 173.562C231.541 173.849 231.704 174.124 231.848 174.392L232.338 175.006L232.703 175.737L232.952 176.103L233.2 176.351L233.689 177.207L233.938 177.455L234.793 178.801L235.772 180.271L236.628 181.499L236.876 181.747L237.124 182.113L237.248 182.478L237.496 182.844L237.744 183.092L238.234 183.948L238.482 184.196L239.338 185.542L239.462 185.79L239.71 186.156C239.788 186.215 239.834 186.28 239.834 186.339V186.398C240.036 186.62 240.219 186.835 240.382 187.038C240.546 187.24 240.689 187.436 240.813 187.619L241.179 188.233L241.427 188.723C241.858 189.174 242.139 189.624 242.283 190.069L242.772 190.8C243.02 190.983 243.223 191.231 243.386 191.532L243.876 192.263C244.078 192.551 244.248 192.812 244.379 193.06C244.509 193.309 244.627 193.531 244.731 193.733C244.875 193.838 244.953 193.955 244.979 194.099L245.345 194.347L245.469 194.713L245.717 194.961L245.965 195.327L246.089 195.693C246.723 196.424 247.173 197.038 247.435 197.528V163.849H255.518V210.756H246.455L245.965 209.9L245.717 209.652L245.593 209.286C244.96 208.554 244.509 207.94 244.248 207.451L244.124 207.202C243.817 206.797 243.549 206.418 243.327 206.072C243.105 205.726 242.916 205.413 242.779 205.125L242.165 204.394L240.937 202.558L240.813 202.31L240.565 202.062L240.076 201.206C239.912 200.984 239.769 200.762 239.645 200.546C239.521 200.331 239.423 200.141 239.338 199.978C238.907 199.547 238.626 199.181 238.482 198.874C238.175 198.404 237.973 198.038 237.869 197.77C237.725 197.692 237.647 197.607 237.62 197.522L237.372 197.274L237.248 196.908L237 196.66L236.876 196.294C236.654 196.072 236.458 195.863 236.295 195.667C236.132 195.471 236.001 195.275 235.897 195.072L234.303 192.747L234.055 192.133C233.546 191.662 233.219 191.173 233.076 190.663C232.462 189.99 232.057 189.376 231.848 188.828L231.358 188.338L231.11 187.724L230.496 187.11L230.131 186.378L229.765 185.888C229.602 185.666 229.458 185.444 229.334 185.228C229.21 185.013 229.112 184.823 229.027 184.66L228.538 183.928C228.394 183.85 228.316 183.765 228.289 183.68L227.434 182.452C227.232 182.165 227.062 181.904 226.931 181.655C226.801 181.407 226.683 181.185 226.579 180.983L226.213 180.617L226.089 180.251L225.723 179.885L225.599 179.519C225.455 179.441 225.377 179.356 225.351 179.271C225.312 179.232 225.279 179.193 225.26 179.167C225.24 179.134 225.227 179.101 225.227 179.062V179.029C224.594 178.298 224.143 177.684 223.882 177.194V210.756H215.798V163.855H215.792Z"
                                                    fill="white"/>
                                                <path
                                                    d="M291.752 163.855H325.543V171.204H312.686V210.762H304.602V171.204H291.745V163.855H291.752Z"
                                                    fill="white"/>
                                                <path
                                                    d="M336.461 164.104H344.545V182.354H365.361V164.104H373.439V210.887H365.361V189.579H344.545V210.887H336.461V164.104Z"
                                                    fill="white"/>
                                                <path
                                                    d="M390.416 163.979H419.8V171.328H398.5V183.086C398.519 183.412 398.67 183.576 398.957 183.576H417.965V190.8H398.5V203.048C398.5 203.459 398.663 203.662 398.99 203.662H421.151V210.886H390.423V163.979H390.416Z"
                                                    fill="white"/>
                                                <path
                                                    d="M101.652 239.229H110.101L110.225 240.085L110.35 240.45L110.598 241.306L110.846 242.776L111.211 244.004L111.46 245.474L111.825 246.702L111.949 247.682C112.093 248.028 112.171 248.315 112.197 248.537L112.321 249.027L112.57 249.759V250.249C112.648 250.307 112.694 250.373 112.694 250.432V250.863C112.916 251.313 113.04 251.803 113.059 252.332L113.307 253.064L113.556 253.92L113.804 255.389L114.169 256.617L114.293 257.349L115.025 260.413C115.084 260.7 115.142 260.961 115.195 261.196C115.247 261.432 115.273 261.66 115.273 261.882L115.521 262.372V262.862L115.769 263.476V263.966L116.017 264.456V264.946C116.239 265.56 116.363 266.089 116.383 266.54L116.507 267.03C116.651 267.441 116.762 267.813 116.847 268.16C116.925 268.506 116.977 268.826 116.997 269.107L117.245 270.087L117.493 270.942L117.741 270.211L118.231 267.761L118.479 267.147L118.603 266.416L118.969 264.704L119.217 263.848V263.483L119.707 261.523L119.831 260.791L120.079 260.302L120.203 259.812L120.327 259.198V258.708L120.451 258.342L120.941 256.382L121.189 254.913L121.313 254.423L121.561 253.933C121.6 253.28 121.724 252.705 121.927 252.221L122.051 251.607V251.242L122.299 250.262L122.423 249.896L122.789 248.302L122.913 247.57L123.161 246.839L123.285 246.225L123.651 244.631L123.775 244.017L123.899 243.769C123.918 243.547 123.944 243.325 123.977 243.109C124.01 242.894 124.062 242.704 124.147 242.541L124.271 242.175V241.809L124.395 241.319L124.519 240.953L124.885 239.242H133.948V239.608C134.235 240.32 134.398 241.019 134.438 241.692L134.686 242.671L134.81 243.037L135.3 245.245L135.548 246.225C135.711 246.819 135.796 247.309 135.796 247.695C135.94 248.041 136.018 248.328 136.044 248.55L136.292 249.406L136.416 250.262L136.54 250.752L136.664 251.117C136.723 251.385 136.775 251.62 136.814 251.836C136.854 252.051 136.886 252.261 136.906 252.463C137.069 252.848 137.18 253.208 137.245 253.534C137.304 253.861 137.356 254.155 137.396 254.423L137.52 255.154L137.768 255.768L137.892 256.5V256.866C138.094 257.356 138.218 257.806 138.258 258.211L138.382 258.943C138.584 259.433 138.708 259.883 138.747 260.288L138.871 260.902L139.237 262.248V262.738C139.315 262.921 139.361 263.123 139.361 263.352C139.583 263.822 139.707 264.227 139.727 264.58L139.851 265.194L139.975 265.926L140.099 266.416C140.301 267.049 140.425 267.617 140.465 268.127C140.543 268.186 140.589 268.251 140.589 268.31V268.741C140.876 269.453 141.039 270.152 141.078 270.825C141.202 270.785 141.281 270.701 141.327 270.576C141.431 270.067 141.529 269.623 141.633 269.244C141.738 268.865 141.836 268.532 141.94 268.251V267.768C142.208 267.036 142.371 266.383 142.43 265.808L142.678 264.952L143.168 262.993L143.292 262.013L143.54 261.157L143.664 260.791V260.426C143.808 260.04 143.919 259.687 144.004 259.367C144.082 259.054 144.134 258.753 144.154 258.466L144.402 257.61L145.381 253.567L145.747 251.607L145.995 250.627C146.217 250.033 146.341 249.543 146.361 249.158L146.485 248.544L146.733 247.564C146.916 246.97 147.04 246.48 147.099 246.094L147.223 245.604L147.589 243.893L147.837 243.161V242.796L148.202 241.816V241.326L148.326 240.96L148.692 239.249H157.017L156.528 241.698L156.162 243.168L156.038 243.534L155.672 245.245L155.424 246.225L155.176 247.081L154.686 249.53L154.438 250.386L153.949 252.711L153.7 253.567L153.576 253.933L153.328 255.278L153.204 255.527L153.08 256.382C152.878 257.055 152.754 257.63 152.714 258.094L152.225 259.563L152.101 260.419L151.977 260.909L151.852 261.275L151.728 262.13L151.604 262.496L150.873 265.56L150.749 266.416L150.501 267.271L149.887 269.721L149.763 270.576L149.032 273.64L148.666 275.351C148.444 275.965 148.32 276.495 148.3 276.945L147.811 278.539V279.029C147.589 279.643 147.464 280.172 147.445 280.623C147.242 281.296 147.118 281.87 147.079 282.334L146.831 283.19L146.707 283.438L146.583 284.294C146.381 284.967 146.256 285.541 146.217 286.005H137.154L137.03 285.025C136.886 284.679 136.808 284.392 136.782 284.17L136.534 283.19L136.41 282.334L136.162 281.479C136.103 281.23 136.051 281.002 136.011 280.773C135.972 280.551 135.94 280.335 135.92 280.133L135.796 279.643L135.672 279.029C135.587 278.924 135.548 278.807 135.548 278.663L135.424 278.049L135.3 277.683C135.241 277.416 135.189 277.18 135.149 276.965C135.11 276.749 135.078 276.54 135.058 276.338C134.914 275.952 134.81 275.593 134.738 275.267C134.666 274.94 134.607 274.646 134.568 274.378L134.444 273.888L134.32 273.274C134.235 273.026 134.183 272.797 134.15 272.569C134.118 272.347 134.092 272.131 134.072 271.929C133.928 271.524 133.817 271.132 133.732 270.766C133.648 270.4 133.602 270.054 133.582 269.727C133.497 269.623 133.458 269.505 133.458 269.361L133.334 268.872L133.21 268.506C133.151 268.075 133.066 267.67 132.962 267.278L132.714 266.174L132.59 265.442L132.342 264.828L132.094 263.359L131.969 262.993V262.627C131.767 262.137 131.643 261.686 131.604 261.281L131.356 259.812L131.108 259.198L130.859 258.218V257.728C130.611 257.055 130.494 256.48 130.494 256.016C130.409 255.912 130.37 255.794 130.37 255.651L130.246 255.285V254.919C130.043 254.449 129.919 253.959 129.88 253.449C129.678 252.796 129.553 252.182 129.514 251.614L129.266 252.104L129.142 252.835L128.776 254.429L128.528 255.775L128.404 256.141L127.914 258.224L127.79 258.714L127.542 259.942L127.418 260.432L127.17 261.778L127.046 262.144L126.556 264.469L126.308 265.325L126.184 266.18C125.962 266.794 125.838 267.323 125.818 267.774L125.694 268.022L125.57 268.754L125.446 269.12L124.832 272.183L124.708 272.549L124.219 274.875L124.095 275.364L123.971 275.979L123.846 276.344L123.357 278.67L123.109 279.65L122.86 280.878L122.736 281.126L122.488 282.23L122.364 282.72L122.24 283.575C122.096 284.085 122.018 284.496 121.992 284.803C121.907 285.006 121.855 285.202 121.822 285.385C121.79 285.568 121.763 285.744 121.744 285.907C121.457 285.946 121.195 285.986 120.96 286.012C120.725 286.044 120.497 286.057 120.275 286.057H119.968C119.863 286.057 119.765 286.044 119.661 286.025H112.557V285.535C112.269 284.803 112.106 284.104 112.067 283.451C111.982 283.347 111.943 283.229 111.943 283.085L111.819 282.471C111.368 281.021 111.087 279.8 110.963 278.8L110.839 278.435L110.225 276.109L110.101 275.129L109.122 271.334V270.844C108.919 270.374 108.795 269.884 108.756 269.375L108.508 268.643L108.26 267.768V267.402L107.646 264.952V264.587L107.522 264.097L107.274 263.607L107.15 262.627C106.987 262.137 106.856 261.686 106.752 261.281C106.647 260.876 106.575 260.504 106.536 260.177L106.412 259.812V259.446C106.327 259.341 106.288 259.224 106.288 259.08L106.04 258.1L105.916 257.734C105.831 257.303 105.759 256.918 105.687 256.572C105.615 256.225 105.531 255.918 105.426 255.651L105.302 254.795C105.158 254.39 105.047 254.011 104.962 253.665C104.878 253.319 104.832 253.005 104.812 252.718L104.708 252.091C104.623 251.986 104.584 251.869 104.584 251.725L103.97 249.275L103.722 248.42L103.598 247.806L103.474 247.316L103.35 246.46C103.186 246.029 103.102 245.663 103.102 245.356V245.232L102.853 244.618L102.729 244.128C102.644 243.534 102.527 243.044 102.364 242.658V242.168C102.279 242.064 102.24 241.946 102.24 241.803L101.626 239.477V239.229H101.652Z"
                                                    fill="white"/>
                                                <path
                                                    d="M185.337 237.76H187.661L188.151 237.884H188.517C189.15 237.884 189.64 237.923 189.986 238.008H190.717C191.514 238.256 192.226 238.374 192.859 238.374H193.042C202.837 242.129 207.936 249.563 208.348 260.661C208.367 261.073 208.387 261.484 208.406 261.902C208.426 262.32 208.439 262.732 208.439 263.143C208.439 273.98 203.999 281.564 195.125 285.894C191.88 286.998 188.817 287.547 185.944 287.547C180.374 287.547 175.438 285.444 171.128 281.237C167.191 276.482 165.147 271.334 165.003 265.808C164.918 265.56 164.879 265.279 164.879 264.953C164.879 264.521 164.84 264.195 164.755 263.973V262.137L164.879 261.033V259.322L165.003 258.832V258.466L165.127 258.1C165.186 256.853 165.395 255.755 165.741 254.795C168.458 244.089 174.987 238.413 185.337 237.76ZM172.97 265.808C173.44 272.419 176.293 276.913 181.537 279.277C181.759 279.317 181.922 279.362 182.026 279.402L185.089 280.133C194.988 279.911 200.003 274.64 200.146 264.332C200.205 263.437 200.238 262.568 200.238 261.732C200.238 250.569 195.105 244.984 184.841 244.984C176.803 246.558 172.78 252.208 172.78 261.948C172.787 263.176 172.846 264.463 172.97 265.808Z"
                                                    fill="white"/>
                                                <path
                                                    d="M222.458 239.105H236.536C237.248 239.046 237.947 239.013 238.619 239.013C246.351 239.013 251.574 242.391 254.291 249.151C254.839 250.928 255.12 252.652 255.12 254.325C255.12 256.304 254.722 258.211 253.925 260.053C252.495 263.541 250.086 265.788 246.703 266.788L246.951 267.036L247.075 267.402L248.055 269.237L248.421 269.969L248.669 270.701L249.772 272.66L250.262 273.764L250.51 274.13L250.634 274.496L251 275.351C251.326 275.841 251.529 276.253 251.614 276.579C251.96 277.05 252.208 277.455 252.345 277.807L252.711 278.539L252.959 279.153C253.285 279.702 253.527 280.237 253.69 280.747C254.239 281.505 254.611 282.236 254.794 282.955L255.042 283.203L255.29 283.693L255.78 284.921C256.067 285.267 256.23 285.633 256.269 286.025H247.702L247.337 285.293C246.827 284.437 246.462 283.66 246.233 282.968L245.502 281.74L245.378 281.25C245.012 280.76 244.764 280.309 244.646 279.904L244.281 279.173L244.157 278.807C244.117 278.768 244.085 278.728 244.065 278.702C244.046 278.67 244.033 278.637 244.033 278.598V278.565L243.784 278.317L243.66 278.069L243.536 277.703L242.805 276.233L242.074 274.888L241.826 274.398L241.701 273.908L241.453 273.66L241.329 273.294L241.081 272.928L240.957 272.68C240.689 272.027 240.448 271.537 240.226 271.21L238.633 267.781H230.549V286.031H222.465V239.105H222.458ZM230.536 260.543H241.525C241.93 260.543 242.315 260.53 242.674 260.51C243.034 260.491 243.353 260.458 243.641 260.419C246.214 258.603 247.5 256.421 247.5 253.867C247.5 252.907 247.317 251.908 246.951 250.869C246.116 248.994 244.849 247.642 243.158 246.826L241.93 246.578C241.682 246.538 241.453 246.506 241.225 246.486C241.003 246.467 240.787 246.453 240.585 246.453H230.542V260.543H230.536Z"
                                                    fill="white"/>
                                                <path
                                                    d="M270.302 239.353H278.386V260.177L278.875 259.563L279.607 258.832C279.685 258.688 279.77 258.61 279.855 258.584L279.979 258.335L280.227 258.087L281.82 256.252L282.434 255.638L282.558 255.272L283.289 254.658L283.413 254.41L284.759 252.816L285.248 252.202L286.593 250.732L287.083 250.242L287.449 249.628C287.671 249.341 287.893 249.105 288.108 248.91C288.324 248.714 288.513 248.55 288.676 248.407C289.042 247.753 289.453 247.263 289.904 246.937L291.132 245.343L291.497 244.977L291.863 244.487L292.842 243.507L293.946 242.162L294.194 241.914C294.272 241.77 294.357 241.692 294.442 241.665L294.566 241.417L294.814 241.169L296.408 239.333H305.836C305.327 240.209 304.753 240.908 304.126 241.417C303.962 241.705 303.76 241.946 303.512 242.149L303.022 242.88L302.043 243.86L301.311 244.84L301.063 245.088C300.92 245.271 300.776 245.434 300.632 245.578C300.489 245.722 300.345 245.846 300.201 245.944C299.712 246.76 299.183 247.374 298.608 247.779L298.242 248.269L296.897 249.981L296.532 250.347C296.284 250.614 296.075 250.85 295.892 251.065C295.709 251.281 295.552 251.49 295.435 251.692L295.069 251.94L294.703 252.306L294.455 252.796L293.841 253.41L293.593 253.776L293.345 254.024L293.097 254.39L292.731 254.638L292.607 254.886L292.359 255.135C291.504 256.239 290.766 257.055 290.152 257.584C290.603 258.564 291.008 259.296 291.38 259.792L291.745 260.648C291.928 260.831 292.052 261.033 292.111 261.262L292.601 261.876L293.09 262.731L293.339 263.221L293.587 263.587L293.835 264.077L293.959 264.443L294.207 264.567L294.331 265.057C294.409 265.116 294.455 265.181 294.455 265.24V265.299C295.004 265.873 295.376 266.481 295.559 267.134L296.048 267.99L296.297 268.238L297.524 270.322L298.014 271.177L298.38 272.033L298.869 272.647L298.993 273.013C299.196 273.281 299.372 273.535 299.516 273.777C299.659 274.025 299.77 274.254 299.855 274.483L300.221 274.973L300.469 275.587L300.835 276.076L301.69 277.546L302.18 278.278L302.304 278.768L302.67 279.258L302.794 279.623C302.937 279.728 303.016 279.845 303.042 279.989L303.29 280.479C303.695 280.93 303.982 281.42 304.145 281.949C304.655 282.478 304.981 283.013 305.125 283.543L305.373 283.791L306.6 286.116H297.537L297.172 285.261L296.806 284.895L296.558 284.405L296.068 283.549L295.944 283.183L295.696 282.935L295.572 282.687C295.409 282.399 295.258 282.145 295.128 281.923C294.997 281.701 294.86 281.505 294.716 281.341L294.592 280.975L294.344 280.486L293.854 279.754L293.489 279.022L293.123 278.408L292.633 277.677L292.268 277.063L292.144 276.815C291.634 275.998 291.269 275.306 291.04 274.731C290.857 274.509 290.733 274.3 290.674 274.117C290.635 274.078 290.603 274.038 290.583 274.012C290.563 273.98 290.55 273.947 290.55 273.908V273.875C289.917 273.059 289.466 272.327 289.205 271.667L289.081 271.301C288.552 270.668 288.18 270.139 287.978 269.708L287.854 269.218L287.606 268.852L287.24 268.362L287.116 267.996L286.626 267.265L286.502 266.899L286.254 266.651L286.13 266.402L286.006 266.037L285.758 265.913C285.431 265.201 285.105 264.587 284.778 264.077L284.53 264.325L284.406 264.573C284.06 264.861 283.812 265.148 283.675 265.429L283.309 265.677L282.205 267.147L281.716 267.513L281.226 268.244L280.86 268.493C280.449 269.146 280.044 269.636 279.633 269.962C279.247 270.511 278.836 270.962 278.405 271.308V286.129H270.321V239.353H270.302Z"
                                                    fill="white"/>
                                                <path
                                                    d="M317.616 239.105H336.102C336.285 239.144 336.454 239.177 336.605 239.196C336.755 239.216 336.905 239.229 337.049 239.229H337.199L338.544 239.477C338.929 239.621 339.282 239.745 339.602 239.843C339.915 239.948 340.215 240.026 340.503 240.091C346.726 243.318 349.84 247.989 349.84 254.116C349.84 254.501 349.827 254.9 349.795 255.291C349.762 255.683 349.729 256.095 349.69 256.5C347.607 264.913 342.54 269.113 334.476 269.113C334.045 269.113 333.614 269.1 333.176 269.081C332.739 269.061 332.282 269.028 331.812 268.989H325.811V286.012H317.616V239.105ZM325.693 261.765H333.562C334.195 261.765 334.711 261.804 335.122 261.889C335.201 261.81 335.272 261.765 335.338 261.765H335.37L336.226 261.641L336.957 261.517C340.385 259.74 342.103 257.343 342.103 254.318C342.103 253.319 341.9 252.208 341.489 250.98C340.549 249.347 339.367 248.08 337.937 247.185C337.244 247.041 336.631 246.839 336.102 246.571H335.488L334.757 246.447H325.693V261.765Z"
                                                    fill="white"/>
                                                <path
                                                    d="M361.542 239.229H369.625V278.787H387.87V286.012H361.548V239.229H361.542Z"
                                                    fill="white"/>
                                                <path
                                                    d="M411.396 239.229H421.315L421.563 240.209C421.641 240.353 421.7 240.496 421.733 240.64C421.765 240.784 421.791 240.927 421.811 241.071L422.059 241.561L422.425 242.789L422.549 243.037L422.673 243.527L422.797 243.893L422.921 244.383L423.287 245.239L423.411 245.487V245.853C423.574 246.14 423.705 246.421 423.796 246.695C423.887 246.97 423.966 247.224 424.025 247.446L424.149 247.936L424.273 248.184V248.55C424.436 248.838 424.567 249.119 424.658 249.393C424.749 249.667 424.828 249.922 424.887 250.144L425.135 251.124C425.441 251.653 425.605 252.143 425.624 252.594L425.99 253.449L426.238 254.429L426.486 255.285C426.565 255.389 426.61 255.507 426.61 255.651L426.858 256.016L426.983 256.506C427.022 256.709 427.087 256.892 427.165 257.055C427.244 257.218 427.309 257.362 427.348 257.486V257.852C427.753 258.61 428.001 259.341 428.08 260.06C428.223 260.328 428.302 260.569 428.328 260.791C428.471 261.059 428.55 261.301 428.576 261.523L429.066 262.993L429.19 263.241L429.314 263.731L429.438 264.097L429.562 264.587L429.927 265.442L430.052 265.69V266.056C430.215 266.344 430.345 266.625 430.45 266.899C430.554 267.173 430.62 267.428 430.665 267.65L430.789 268.382C431.116 269.015 431.318 269.584 431.403 270.093C431.788 270.968 432.037 271.746 432.134 272.419C432.278 272.686 432.357 272.928 432.383 273.15L432.748 273.882L432.996 274.613C433.101 275.103 433.218 275.515 433.362 275.841L433.61 276.945L433.976 277.677L434.224 278.781L434.472 279.271L434.596 279.761C434.818 280.29 435.001 280.793 435.145 281.263C435.288 281.733 435.393 282.171 435.452 282.582L435.7 282.948V283.314C435.778 283.419 435.824 283.536 435.824 283.68C436.046 284.026 436.17 284.353 436.189 284.66C436.457 285.234 436.62 285.724 436.679 286.129H428.595L428.471 285.639L428.223 285.15L428.099 284.418C428.014 284.313 427.975 284.196 427.975 284.052C427.59 283.275 427.342 282.543 427.244 281.844L426.996 281.479L426.872 280.989C426.832 280.786 426.774 280.603 426.702 280.44C426.63 280.277 426.565 280.133 426.506 280.009V279.643C426.121 278.866 425.872 278.134 425.775 277.435H407.165L407.041 277.925L406.793 278.415L406.669 279.029L406.544 279.519C406.44 279.741 406.349 279.97 406.251 280.192C406.159 280.414 406.094 280.642 406.055 280.865L405.931 281.23L405.683 281.72C405.643 281.942 405.598 282.106 405.558 282.21L405.434 282.7L405.31 283.066L405.186 283.314L404.331 286.129H396.247V285.764L396.495 285.032L396.619 284.542C396.802 284.137 396.926 283.81 396.985 283.562L397.109 283.314L397.357 282.334L397.605 281.479L398.337 279.395L398.702 278.167L398.95 277.435C399.133 277.03 399.257 276.704 399.316 276.455L399.806 274.986L400.785 271.922L401.517 269.597C401.719 269.146 401.876 268.741 401.974 268.369C402.078 268.003 402.17 267.676 402.248 267.389L402.372 266.899L402.62 266.533C402.679 266.063 402.803 265.612 402.986 265.188L403.234 264.456L403.358 263.966C403.541 263.561 403.665 263.234 403.724 262.986L403.848 262.738L404.096 261.758L404.344 260.902L404.71 260.047L405.075 258.819L405.441 257.715L405.565 257.467L406.296 255.141L406.42 254.651L407.4 251.588C407.668 251.039 407.831 250.549 407.89 250.118L409.235 246.323V245.957L409.483 245.343L409.607 244.977L409.731 244.487L409.979 243.997L410.103 243.632L410.227 243.142L410.351 242.776L410.475 242.286L410.841 241.43L411.207 239.961L411.396 239.229ZM416.293 249.517L415.562 251.601L415.314 252.456L414.948 253.312L414.824 254.044L414.576 254.775L414.21 255.507L414.086 256.239L413.721 256.97V257.336L413.473 257.702C413.27 258.766 413.022 259.622 412.741 260.275L412.617 260.765L412.369 261.379L411.638 263.463L411.272 264.809L411.024 265.423L410.9 265.913L410.652 266.527L410.528 267.016L410.162 268.12L410.038 268.369C409.79 269.309 409.548 270.041 409.307 270.576H423.385L423.137 269.597L422.771 268.741L422.523 267.885L422.157 267.03L421.543 264.946L421.295 263.966L420.929 263.11L420.805 262.496C420.662 262.248 420.583 262.046 420.557 261.882L419.943 260.171L419.819 259.681L419.571 259.191V258.825L418.84 256.866L418.716 256.134C418.572 255.866 418.494 255.625 418.468 255.402L418.102 254.671L417.854 253.567C417.769 253.462 417.73 253.345 417.73 253.201C417.645 253.097 417.606 252.979 417.606 252.835L417.358 252.47V252.091C417.155 251.64 417.031 251.235 416.992 250.863C416.953 250.823 416.92 250.784 416.901 250.758C416.881 250.725 416.868 250.693 416.868 250.654V250.621L416.254 249.151V249.517H416.293Z"
                                                    fill="white"/>
                                                <path
                                                    d="M485.815 251.967C485.731 252.11 485.613 252.234 485.45 252.332L484.836 252.457L484.346 252.581H483.856C483.674 252.666 483.471 252.705 483.243 252.705C482.812 252.868 482.446 252.953 482.139 252.953H482.015C481.911 253.038 481.793 253.077 481.649 253.077L481.16 253.201L480.304 253.325L480.056 253.449L478.097 253.815C475.89 247.995 472.129 245.088 466.801 245.088C465.554 245.088 464.176 245.265 462.668 245.611C462.563 245.696 462.446 245.735 462.302 245.735L461.446 246.101C461.015 246.323 460.611 246.486 460.219 246.591C460.134 246.734 460.056 246.813 459.971 246.839L459.605 246.963L459.239 247.211L458.991 247.46L458.626 247.584C458.24 247.969 457.888 248.309 457.568 248.596C457.248 248.883 456.947 249.119 456.667 249.302L456.543 249.667L455.929 250.281L455.805 250.647L455.557 250.771C455.269 251.503 454.943 252.117 454.577 252.607C453.539 256.095 453.017 259.479 453.017 262.745C453.017 265.338 453.33 267.84 453.963 270.243C455.576 276.305 459.37 279.61 465.351 280.166H465.475C472.025 280.166 476.23 277.265 478.084 271.471L478.698 271.596C478.946 271.68 479.175 271.733 479.403 271.765C479.625 271.798 479.841 271.824 480.043 271.844L480.291 271.968L482.25 272.334L482.74 272.458L483.595 272.582L485.802 273.072C482.903 281.786 477.19 286.567 468.662 287.403C468.316 287.442 467.963 287.462 467.604 287.462C467.245 287.462 466.892 287.462 466.546 287.462C458.462 287.462 452.435 284.137 448.459 277.481C446.01 272.419 444.789 267.435 444.789 262.536C444.789 259.165 445.357 255.821 446.5 252.489C449.602 243.73 455.439 238.876 464.006 237.916C464.254 237.897 464.489 237.883 464.724 237.883C464.959 237.883 465.188 237.883 465.41 237.883C475.897 237.851 482.688 242.554 485.815 251.967Z"
                                                    fill="white"/>
                                                <path
                                                    d="M498.483 239.229H527.867V246.578H506.567V258.335C506.586 258.662 506.737 258.825 507.024 258.825H526.032V266.05H506.567V278.297C506.567 278.709 506.73 278.911 507.057 278.911H529.218V286.136H498.49V239.229H498.483Z"
                                                    fill="white"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <filter id="filter0_ddd" x="0" y="0" width="632" height="410"
                                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy="15"/>
                                                <feGaussianBlur stdDeviation="22.5"/>
                                                <feColorMatrix type="matrix"
                                                            values="0 0 0 0 0.92549 0 0 0 0 0.113725 0 0 0 0 0.141176 0 0 0 0.1 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                        result="effect1_dropShadow"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy="2"/>
                                                <feGaussianBlur stdDeviation="2.5"/>
                                                <feColorMatrix type="matrix"
                                                            values="0 0 0 0 0.454167 0 0 0 0 0.0321701 0 0 0 0 0.0464405 0 0 0 0.15 0"/>
                                                <feBlend mode="normal" in2="effect1_dropShadow"
                                                        result="effect2_dropShadow"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy="10"/>
                                                <feGaussianBlur stdDeviation="7.5"/>
                                                <feColorMatrix type="matrix"
                                                            values="0 0 0 0 0.7875 0 0 0 0 0.0885938 0 0 0 0 0.112228 0 0 0 0.1 0"/>
                                                <feBlend mode="normal" in2="effect2_dropShadow"
                                                        result="effect3_dropShadow"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow"
                                                        result="shape"/>
                                            </filter>
                                            <clipPath id="clip0">
                                                <rect x="45" y="30" width="542" height="320" rx="34" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    {/* <!--						<img src="images/kissing.svg" alt="No kissing">--> */}
                                </div>
                                <div className="kissing__desc">
                                    <p>Знак, запрещающий целоваться на рабочем месте. 2020 год</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-7 offset-md-1 col-lg-7 offset-lg-1 col-xl-7 offset-xl-1">
                            <div className="menu emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="menu__img">
                                    <Link className="img-link" to="menu-1c.html">
                                        <picture>
                                            <source srcSet="images/favor@2x.webp 2x" src="images/favor.webp" type="image/webp"/>
                                            <img srcSet="images/favor@2x.png 2x" src="images/favor.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="menu__link">
                                    <Link className="link-active" to="menu-1c.html">Большое обновление<br/> меню платформы
                                        1С</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="meso-app emerge" data-effect="slide" data-duration="300" data-bottom="20px"
                                data-right="25%" data-continue="true">
                                <div className="meso-app__img">
                                    <Link className="img-link" to="app-meso.html">
                                        <picture>
                                            <source srcSet="images/meso@2x.webp 2x" src="images/meso.webp" type="image/webp"/>
                                            <img srcSet="images/meso@2x.png 2x" src="images/meso.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="meso-app__link">
                                    <Link className="link-active" to="app-meso.html">MESO&nbsp;&mdash; приложение<br/> для
                                        заказа продуктов<br/> из магазинов у&nbsp;дома</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 offset-sm-0 col-md-7 offset-md-1
                            col-lg-7 offset-md-1 col-xl-7 offset-xl-1"></div>
                    </div>
                </div>
            </section>

            <section className="row-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="photoshop emerge" data-effect="slide" data-duration="300" data-bottom="20px"
                                data-right="25%" data-continue="true">
                                <div className="photoshop__img">
                                    <span className="photoshop__img-eyes">
                                        <img src="images/eyes.svg" alt="" />
                                    </span>
                                    <picture>
                                        <source srcSet="images/photoshop@2x.webp 2x" src="images/photoshop.webp"
                                                type="image/webp"/>
                                        <img srcSet="images/photoshop@2x.png 2x" src="images/photoshop.png"
                                            loading="lazy"
                                            alt="" />
                                    </picture>
                                </div>
                                <div className="photoshop__desc">
                                    <p>Правильное окно сохранения в&nbsp;Фотошопе. Фотошоп должен сразу показывать
                                        популярные
                                        форматы и&nbsp;запоминать&nbsp;те, которыми я&nbsp;пользуюсь</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-7 offset-md-1 col-lg-7 offset-lg-1 col-xl-7 offset-xl-1">
                            <div className="present emerge" data-effect="slide" data-duration="300" data-bottom="20px"
                                data-left="25%" data-continue="true">
                                <div className="present__img">
                                    <Link className="img-link" to="kos-day.html">
                                        <img src="images/present.svg" alt="" />
                                    </Link>
                                </div>

                                <div className="present__link">
                                    <Link className="link-active" to="kos-day.html">Очень много<br className="br-mob" /> презентаций
                                        <br/> на&nbsp;KOS-Day 2020</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-6 signature scroll no-scroll">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="neck emerge" data-effect="slide" data-duration="300" data-down="20%"
                                data-continue="true">
                                <div className="neck__img">
                                    <picture>
                                        <source srcSet="images/neck@2x.webp 2x" src="images/neck.webp" type="image/webp"
                                                media="(min-width: 768px)"/>
                                        <source srcSet="images/neck-mob@2x.webp 2x" src="images/neck-mob.webp" type="image/webp"
                                                media="(max-width: 767px)"/>
                                        <source srcSet="images/neck-mob@2x.png 2x" src="images/neck-mob.png"
                                                media="(max-width: 767px)"/>
                                        <img srcSet="images/neck@2x.png 2x" src="images/neck.png"
                                            loading="lazy"
                                            alt="" />
                                    </picture>
                                </div>
                                <div className="neck__desc br-mob">
                                    <p>Схема грифа гитары до 12-го лада с расположенными на нём нотами. 2020 год</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="signature signature__main emerge" data-effect="slide" data-duration="300" data-down="10%"
                data-continue="true">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 offset-0 col-md-7 offset-md-1 br-desk scroll no-scroll">
                            <div className="sign">
                                <div className="sign-text emerge" data-effect="slide" data-duration="800" data-right="25%"
                                    data-continue="true">
                                    <p>Схема грифа гитары до 12-го лада с расположенными на нём нотами. 2020 год</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="row-7 br-mob">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="bks-land emerge" data-effect="slide" data-duration="300" data-right="25%"
                                data-continue="true">
                                <div className="bks-land__img">
                                    <Link className="img-link" to="bks-land.html">
                                        <picture>
                                            <source srcSet="images/bks-rect@2x.webp 2x" src="images/bks-rect.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/bks-rect@2x.png 2x" src="images/bks-rect.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>

                                <div className="bsk-land__info">
                                    <div className="bks-land__link">
                                        <Link className="link-active" to="bks-land.html">Серия лендингов<br/> БКС Премьер</Link>
                                    </div>

                                    <div className="bks-land__time">
                                        <p className="bks-land__time-hour">~1 час</p>
                                        <p className="bks-land__time-middle">среднее время<br/> сбора страницы</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="bks-mob emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="bks-mob__img">
                                    <Link className="img-link" to="bks-mob.html">
                                        <img src="images/bks-mob.svg" alt="" />
                                    </Link>
                                </div>

                                <div className="bks-mob__link">
                                    <Link className="link-active" to="bks-mob.html">Мобильная версия<br/> сервиса БКС Капитал
                                        <br/> для партнёров</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-8">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="bks-invest emerge" data-effect="slide" data-duration="300" data-right="25%"
                                data-continue="true">
                                <div className="bks-invest__img">
                                    <Link className="img-link" to="bks-story.html">
                                        <picture>
                                            <source srcSet="images/bks-invest@2x.webp 2x" src="images/bks-invest.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/bks-invest@2x.png 2x" src="images/bks-invest.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="bks-invest__link">
                                    <Link className="link-active" to="bks-story.html">Интерактивный<br/> рассказ о&nbsp;типах
                                        <br/> инвестиций с&nbsp;БКС</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="stamp emerge" data-effect="slide" data-duration="300" data-down="20%"
                                data-continue="true">
                                <div className="stamp__img">
                                    <img src="images/stamp.svg" alt="" />
                                </div>

                                <div className="stamp__desc">
                                    <p>Актуальная печать ИП&nbsp;Туголуковский&nbsp;Я.&nbsp;С. 2019 год</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="app-auto emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="app-auto__img">
                                    <Link className="img-link" to="app-cleverence.html">
                                        <picture>
                                            <source srcSet="images/automat@2x.webp 2x" src="images/automat.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/automat@2x.png 2x" src="images/automat.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="app-auto__link">
                                    <Link className="link-active" to="app-cleverence.html">Андроид-приложение для автоматизации<br/>
                                        учёта товаров</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-9">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-4 col-lg-8 offset-lg-4 col-xl-8 offset-xl-4">
                            <div className="frontol-app emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="frontol-app__img">
                                    <Link className="img-link" to="frontol-trade.html">
                                        <picture>
                                            <source srcSet="images/frontol@2x.webp 2x" src="images/frontol.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/frontol@2x.png 2x" src="images/frontol.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="frontol-app__link">
                                    <Link className="link-active" to="frontol-trade.html">Приложение товароучётной<br/> системы
                                        Frontol Trade</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-10">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="case emerge" data-effect="slide" data-duration="300" data-right="25%"
                                data-continue="true">
                                <div className="case__img">
                                    <picture>
                                        <source srcSet="images/case@2x.webp 2x" src="images/case.webp" type="image/webp"/>
                                        <img srcSet="images/case@2x.png 2x" src="images/case.png"
                                            loading="lazy"
                                            alt="" />
                                    </picture>
                                </div>
                                <div className="case__link">
                                    <p>Чехол для iPhone в виде опознавательного знака. 2020 год</p>
                                    <p>Можно <Link className="link-active"
                                                target="_blank"
                                                to="https://www.figma.com/file/TVEB5VOD4GQsqSGAIKqh0u/%D0%A7%D0%B5%D1%85%D0%BB%D1%8B-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BE%D0%B2?node-id=0%3A1">
                                        скачать в высоком разрешении</Link></p>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-1 col-lg-8 offset-lg-1 col-xl-8 offset-xl-1">
                            <div className="frontol-illust emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="frontol-illust__img">
                                    <Link className="img-link illust-links" to="frontol-illustrations.html">
                                        <picture>
                                            <source srcSet="images/frontol-illust1@2x.webp 2x" src="images/frontol-illust1.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/frontol-illust1@2x.png 2x" src="images/frontol-illust1.png"
                                                loading="lazy"
                                                alt=""/>
                                        </picture>
                                    </Link>
                                    <Link className="img-link illust-links" to="frontol-illustrations.html">
                                        <picture>
                                            <source srcSet="images/frontol-illust2@2x.webp 2x" src="images/frontol-illust2.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/frontol-illust2@2x.png 2x" src="images/frontol-illust2.png"
                                                loading="lazy"
                                                alt=""/>
                                        </picture>
                                    </Link>
                                </div>

                                <div className="frontol-illust__link">
                                    <Link className="link-active" to="frontol-illustrations.html">Иллюстрации и&nbsp;листовки
                                        <br/> для программ Frontol</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-11">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="bks-partners emerge" data-effect="slide" data-duration="300" data-right="25%"
                                data-continue="true">
                                <div className="bks-partners__img">
                                    <Link className="img-link" to="bks-partners.html">
                                        <picture>
                                            <source srcSet="images/bks-partners@2x.webp 2x" src="images/bks-pantners.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/bks-partners@2x.png 2x" src="images/bks-pantners.png"
                                                loading="lazy"
                                                alt=""/>
                                        </picture>
                                    </Link>
                                </div>

                                <div className="bks-partners__link">
                                    <Link className="link-active" to="bks-partners.html">Партнёрские сайты<br/> для компании
                                        БКС</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                            <div className="olivier emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="olivier__img">
                                    <Link className="img-link" to="olivier.html">
                                        <picture>
                                            <source srcSet="images/olivier@2x.webp 2x" src="images/olivier.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/olivier@2x.png 2x" src="images/olivier.png"
                                                loading="lazy"
                                                alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="olivier__link">
                                    <Link className="link-active" to="olivier.html">Логотип портала<br/>
                                        &laquo;Оливье&raquo;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-12">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="bks-items">
                                <div className="bks-graph emerge" data-effect="slide" data-duration="300" data-right="25%"
                                    data-continue="true">
                                    <div className="bks-graph__img">
                                        <Link className="img-link" to="bks-invest.html">
                                            <img className="desk-link" src="images/bks-graph.svg" alt=""/>
                                            <picture className="mob-link">
                                                <source srcSet="images/bks-graph-mob@2x.webp 2x" src="images/bks-graph-mob.webp"
                                                        type="image/webp"/>
                                                <img srcSet="images/bks-graph-mob@2x.png 2x" src="images/bks-graph-mob.png"
                                                    loading="lazy"
                                                    alt=""/>
                                            </picture>
                                        </Link>
                                    </div>

                                    <div className="bks-graph__link">
                                        <Link className="link-active" to="bks-invest.html">Инвестиционные<br/> отчёты для
                                            клиентов<br/> компании БКС </Link>
                                    </div>
                                </div>

                                <div className="mob-cash emerge" data-effect="slide" data-duration="300" data-right="25%"
                                    data-continue="true">
                                    <div className="mob-cash__img">
                                        <Link className="img-link" to="app-1c.html">
                                            <img src="images/1c-mob.svg" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="mob-cash__link">
                                        <Link className="link-active" to="app-1c.html">Приложение<br/> 1С:Мобильной<br/>
                                            кассы</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="song emerge" data-effect="slide" data-duration="300" data-down="25%"
                                data-continue="true">
                                <div className="song__img">
                                    <Link className="img-link" to="https://www.youtube.com/watch?v=Wsf11rHnO9c"
                                    target="_blank">
                                        <picture>
                                            <source srcSet="images/song@2x.webp 2x" src="images/song.webp" type="image/webp"/>
                                            <img srcSet="images/song@2x.png 2x" src="images/song.png"
                                                loading="lazy"
                                                alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="song__link">
                                    <Link className="link-active" to="https://www.youtube.com/watch?v=Wsf11rHnO9c"
                                    target="_blank">Песня и&nbsp;клип<br/> &laquo;Ты&nbsp;говоришь&raquo;</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                            <div className="butcher emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="butcher__img">
                                    <picture>
                                        <source srcSet="images/butcher@2x.webp 2x" src="images/butcher.webp" type="image/webp"/>
                                        <img srcSet="images/butcher@2x.png 2x" src="images/butcher.png"
                                            loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>
                                <div className="butcher__link">
                                    <p>Иван Васильевич меняет профессию на мясника ради календаря в честь года кино. 2016
                                        год
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="mob-cash mob-cash__second  emerge" data-effect="slide" data-duration="300"
                                data-right="25%" data-continue="true">
                                <div className="mob-cash__img">
                                    <Link className="img-link" to="app-1c.html">
                                        <img src="images/1c-mob-second.svg" alt=""/>
                                    </Link>
                                </div>
                                <div className="mob-cash__link">
                                    <Link className="link-active" to="app-1c.html">Приложение<br/> 1С:Мобильной<br
                                        className="br-mob"/>
                                        кассы</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-13">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="marketing emerge" data-effect="slide" data-duration="300" data-right="25%"
                                data-continue="true">
                                <div className="marketing__img">
                                    <Link className="img-link" to="https://www.youtube.com/watch?v=W0B_QFWCRd4"
                                    target="_blank">
                                        <picture>
                                            <source srcSet="images/marketing@2x.webp 2x" src="images/marketing.webp"
                                                    type="image/webp"/>
                                            <img srcSet="images/marketing@2x.png 2x" src="images/marketing.png"
                                                loading="lazy"
                                                alt="" />
                                        </picture>
                                    </Link>
                                </div>
                                <div className="marketing__info">
                                    <div className="marketing__link">
                                        <Link className="link-active" to="https://www.youtube.com/watch?v=W0B_QFWCRd4"
                                        target="_blank">Съёмка рекламы</Link>
                                    </div>
                                    <div className="marketing__desc">
                                        <span>Совместно с&nbsp;Антоном Медведевым</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 offset-sm-0 col-md-2 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
                            <div className="sun-cake emerge" data-effect="slide" data-duration="300" data-left="25%"
                                data-continue="true">
                                <div className="sun-cake__img">
                                    <img src="images/sun-cake.svg" alt="" />
                                </div>
                                <div className="sun-cake__link">
                                    <p>Нейминг, лого<br className="br-mob" /> и&nbsp;фирстиль<br className="br-mob" />
                                        для блинной<br className="br-mob" /> Сан Кейк</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-14 br-mob">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="icons emerge" data-effect="slide" data-duration="300" data-down="25%"
                                data-continue="true">
                                <div className="icons__img">
                                    <picture>
                                        <source srcSet="images/icons@2x.webp 2x" src="images/icons.webp" type="image/webp"/>
                                        <img srcSet="images/icons@2x.png 2x" src="images/icons.png"
                                            loading="lazy"
                                            alt="" />
                                    </picture>
                                </div>

                                <div className="icons__desc">
                                    <span>Иконки для компании i-Retail. 2015 год</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="container">
                    <div class="footer__container">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-info">
                                    <div class="col-12 col-md-6">
                                        <div class="page-info__desc emerge" data-effect="fade" data-duration="300">
                                            <span>Проектирую сайты, приложения, и&nbsp;дизайню разные прикольные штуки.</span>
                                            <span>Если хотите поработать со&nbsp;мной, пишите на&nbsp;<Link
                                                class="link-active"
                                                target="_blank"
                                                to="mailto:tugolukovskiy@gmail.com">почту</Link>
                                                &nbsp;или в&nbsp;<Link class="link-active"
                                                        target="_blank"
                                                        to="https://t.me/tugolukovskiy">телеграм</Link>.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="footer__blocks">
                                <div class="footer__year">
                                    <p>&#169; 2013 <span class="footer__dash">———</span>
                                        <span class="footer__dash-mob">—————————————————————</span>
                                        <span class="current-year">&nbsp;</span>
                                    </p>
                                </div>


                                <div class="footer__dev emerge" data-effect="fade" data-duration="300">
                                    <span>Сайт собран </span>
                                    <Link class="link-active" to="https://t.me/kostennikov"
                                        target="_blank">Пашей Костенниковым</Link>
                                </div>

                                <div class="footer__links">
                                    <Link class="link-active emerge" data-effect="fade" data-duration="300"
                                    to="mailto:tugolukovskiy@gmail.com">tugolukovskiy@gmail.com</Link>
                                    <Link class="link-active emerge" data-effect="fade" data-duration="300" to="https://t.me/tugolukovskiy" target="_blank">телеграм</Link>
                                    <Link class="link-active link-margin emerge" data-effect="fade" data-duration="300" to="https://www.instagram.com/tugolukovskiy/"
                                    target="_blank">инста<span class="link-active__inst">грам</span></Link>
                                   <div className={ru ? 'link-deactive link-active link-lang' : 'link-active link-lang'} 
                                        onClick={e => setRu(ru)}>
                                            ру
                                    </div>
                                    <img className="lang-arrow" src="images/lang-arrow.svg" alt="" />                              
                                    <div className="link-active" 
                                        onClick={e => setRu(!ru)}>
                                            en
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
        
        )}
      {!ru && (
        <Fragment>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="header__blocks">
                                <div className="header__title emerge" data-effect="fade" data-duration="200">
                                    <div className="header__title-name">
                                        <img className="header__title-name_img" src="images/name.svg" alt="" />
                                        <div className="header__title-ava emerge" data-effect="relax" data-duration="300"
                                            data-continue="true">
                                            <img className="header__title-ava_img" srcSet="images/ava@2x.png 2x"
                                                src="images/ava.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="header__links">
                                    <Link className="link-active emerge" data-effect="fade" data-duration="300"
                                    to="mailto:tugolukovskiy@gmail.com">tugolukovskiy@gmail.com</Link>
                                    <Link className="link-active emerge" data-effect="fade" data-duration="300" to="https://t.me/tugolukovskiy" target="_blank">telegram</Link>
                                    <Link className="link-active emerge" data-effect="fade" data-duration="300" to="https://www.instagram.com/tugolukovskiy/"
                                    target="_blank">instagram</Link>

                                    <div className={!ru ? 'link-active link-lang' : 'link-active link-deactive link-lang'} 
                                        onClick={e => setRu(!ru)}>
                                            ру
                                    </div>                             
                                    <img className={!ru ? 'lang-arrow lang-arrow-reverse' : 'lang-arrow'} src="images/lang-arrow.svg" alt="" />
                                    <div className={!ru ? 'link-deactive link-active' : 'link-active'} 
                                        onClick={e => setRu(ru)}>
                                            en
                                    </div>
                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="header__desc emerge" data-effect="fade" data-duration="300">
                                <p>Designer, <Link class="link-active" to="/en\poetry-en.html">poet</Link> and musician
					            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        
            <section className="row-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="redesign emerge" data-effect="slide" data-duration="300" data-bottom="20px" data-left="25%" data-continue="true">
                                <div className="redesign__img">
                                    <Link className="img-link" to="cleverence-redesign" lang='false'>
                                        <picture>
                                            <source srcset="images/cleverence-redesign/cleverence-link-mob@2x.webp 2x" src="images/cleverence-redesign/cleverence-link-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/cleverence-redesign/cleverence-link-mob.png" srcset="images/cleverence-redesign/cleverence-link-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                            <source srcset="images/cleverence-redesign/cleverence-link@2x.webp 2x" src="images/cleverence-redesign/cleverence-link.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcset="images/cleverence-redesign/cleverence-link@2x.png 2x" src="images/cleverence-redesign/cleverence-link.png" alt="" media="(max-width: 767px)"/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="redesign__link">
                                    <Link className="link-active" to="cleverence-redesign" lang='false'>Cleverence<br/>
                                        logos redesign</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-8 col-lg-8 col-xl-8 offset-md-1">
                            <div className="prosto emerge" data-effect="slide" data-duration="300" data-down="20px" data-right="25%" data-continue="true">
                                <div className="prosto__img">
                                    <Link className="img-link" to="/en\1c-prosto-en.html">
                                        <picture>
                                            <source srcset="images/1c-prosto/1c-prosto-link-mob@2x.webp 2x" src="images/1c-prosto/1c-prosto-link-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/1c-prosto/1c-prosto-link-mob.png" srcset="images/1c-prosto/1c-prosto-link-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                            <source srcset="images/1c-prosto/1c-prosto-link@2x.webp 2x" src="images/1c-prosto/1c-prosto-link.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcset="images/1c-prosto/1c-prosto-link@2x.png 2x" src="images/1c-prosto/1c-prosto-link.png" alt="" media="(max-width: 767px)"/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="prosto__link">
                                    <Link className="link-active" to="/en\1c-prosto-en.html">1C-Prosto</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-1">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="video emerge" data-effect="slide" data-duration="300" data-down="20px" data-right="25%" data-continue="true">
                                <div className="video__img">
                                    <Link className="img-link" to="/en\video-chat-1c-en.html">
                                        <picture>
                                            <source srcset="images/hero/main-hero@2x.webp 2x" src="images/hero/main-hero.webp" type="image/webp"/>
                                            <img srcset="images/hero/main-hero@2x.png 2x" src="images/hero/main-hero.png" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="video__link">
                                    <Link className="link-active" to="/en\video-chat-1c-en.html">1C videocalls</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="travel emerge" data-effect="slide" data-duration="300" data-bottom="20px" data-left="25%" data-continue="true">
                                <div className="travel__img">
                                    <Link className="img-link" to="/en\take-travel-en.html">
                                        <picture>
                                            <source srcset="images/take-travel-mob@2x.webp 2x" src="images/take-travel-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/take-travel-mob.png" srcset="images/take-travel-mob@2x.png" alt="" media="(max-width: 767px)"/>
                                            <source src="images/travel.svg" alt="" srcset="" media="(min-width: 768px)"/>
                                            <img src="images/travel.svg" alt="" media="(max-width: 767px)"/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="travel__link">
                                    <Link className="link-active" to="/en\take-travel-en.html">Take Travel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="respect emerge" data-effect="slide" data-duration="300" data-up="20px" data-right="25%" data-continue="true">
                                <div className="respect__img">
                                    <picture>
                                        <source srcset="images/respect-cat@2x.webp 2x" src="images/respect-cat.webp" type="image/webp"/>
                                        <img srcset="images/respect-cat@2x.png 2x" src="images/respect-cat.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>
                                <div className="respect__desc">
                                    <p>Sign that reminds to pay respect to the cat. Hangs on friends’ apartment wall.
                                        2019</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                            <div className="meso-admin emerge" data-effect="slide" data-duration="300" data-up="20px" data-left="25%" data-continue="true">
                                <div className="meso-admin__img">
                                    <Link className="img-link" to="/en\admin-meso-en.html">
                                        <picture>
                                            <source srcset="images/gamepad@2x.webp 2x" src="images/gamepad.webp" type="image/webp"/>
                                            <img srcset="images/gamepad@2x.png 2x" src="images/gamepad.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="meso-admin__link">
                                    <Link className="link-active" to="/en\admin-meso-en.html">MESO<br/>
                                        admin panel<br/> for grocery<br/> stores</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="kissing emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                <div className="kissing__img">
                                    <svg width="100%" height="100%" viewBox="0 0 632 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_ddd)">
                                            <g clip-path="url(#clip0)">
                                                <path d="M547.365 347.387H84.6289C64.1843 347.387 47.6119 330.809 47.6119 310.357V69.6431C47.6119 49.1912 64.1843 32.6128 84.6289 32.6128H547.365C567.809 32.6128 584.382 49.1912 584.382 69.6431V310.35C584.388 330.809 567.809 347.387 547.365 347.387Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.6289 35.2257C65.6268 35.2257 50.2238 50.6343 50.2238 69.6432V310.357C50.2238 329.366 65.6268 344.774 84.6289 344.774H547.365C566.367 344.774 581.776 329.365 581.77 310.351V69.6432C581.77 50.6343 566.367 35.2257 547.365 35.2257H84.6289ZM45 69.6432C45 47.7482 62.7418 30 84.6289 30H547.365C569.252 30 586.993 47.7482 586.993 69.6432V310.349C586.993 310.35 586.993 310.35 586.993 310.35C587 332.253 569.251 350 547.365 350H84.6289C62.7418 350 45 332.252 45 310.357V69.6432Z" fill="#EC1D24"></path>
                                                <path d="M542.369 331.651H89.6307C75.3175 331.651 63.7142 320.044 63.7142 305.725V74.2742C63.7142 59.9559 75.3175 48.3484 89.6307 48.3484H542.369C556.682 48.3484 568.286 59.9559 568.286 74.2742V305.725C568.286 320.044 556.682 331.651 542.369 331.651Z" fill="#EC1D24"></path>
                                                <path d="M106.334 88.6057H115.397L115.887 89.4614L116.135 89.7096L116.625 90.5653C116.788 90.7874 116.931 91.0095 117.056 91.2251C117.18 91.4406 117.278 91.6301 117.362 91.7934L117.611 91.9175L117.735 92.1657L118.838 93.8771L119.818 95.3468C119.896 95.4056 119.942 95.4709 119.942 95.5297V95.5885C120.555 96.2613 120.96 96.8753 121.169 97.424C121.457 97.731 121.692 98.025 121.888 98.3124C122.083 98.5998 122.247 98.8741 122.39 99.142L122.88 99.756L123.246 100.488L123.494 100.853L123.742 101.102L124.232 101.957L124.48 102.205L125.335 103.551L126.315 105.021L127.17 106.249L127.418 106.497L127.666 106.863L127.79 107.229L128.039 107.594L128.287 107.843L128.776 108.698L129.025 108.947L129.88 110.292L130.004 110.54L130.252 110.906C130.33 110.965 130.376 111.03 130.376 111.089V111.148C130.579 111.37 130.761 111.586 130.925 111.788C131.088 111.991 131.232 112.187 131.356 112.369L131.721 112.983L131.969 113.473C132.4 113.924 132.681 114.375 132.825 114.819L133.315 115.551C133.563 115.733 133.765 115.982 133.928 116.282L134.418 117.014C134.621 117.301 134.79 117.562 134.921 117.811C135.051 118.059 135.169 118.281 135.273 118.483C135.417 118.588 135.496 118.706 135.522 118.849L135.887 119.097L136.011 119.463L136.259 119.711L136.508 120.077L136.632 120.443C137.265 121.175 137.716 121.789 137.977 122.279V88.6057H146.061V135.513H136.939L136.449 134.657L136.201 134.409L136.077 134.043C135.443 133.311 134.993 132.697 134.732 132.207L134.607 131.959C134.301 131.554 134.033 131.175 133.811 130.829C133.589 130.483 133.399 130.163 133.262 129.882L132.649 129.15L131.421 127.315L131.297 127.067L131.049 126.818L130.559 125.963C130.396 125.741 130.252 125.518 130.128 125.303C130.004 125.087 129.906 124.898 129.821 124.735C129.39 124.304 129.109 123.938 128.966 123.631C128.659 123.16 128.456 122.795 128.352 122.527C128.208 122.448 128.13 122.363 128.104 122.279L127.856 122.03L127.732 121.665L127.484 121.416L127.359 121.051C127.137 120.828 126.942 120.619 126.778 120.423C126.615 120.227 126.484 120.032 126.38 119.829L124.787 117.504L124.539 116.89C124.029 116.419 123.703 115.929 123.559 115.42C122.945 114.747 122.541 114.133 122.332 113.584L121.842 113.094L121.594 112.48L120.98 111.866L120.614 111.135L120.249 110.645C120.085 110.423 119.942 110.201 119.818 109.985C119.694 109.77 119.596 109.58 119.511 109.417L119.021 108.685C118.877 108.607 118.799 108.522 118.773 108.437L117.917 107.209C117.715 106.922 117.545 106.66 117.415 106.412C117.284 106.164 117.167 105.942 117.062 105.739L116.696 105.374L116.572 105.008L116.207 104.642L116.083 104.276C115.939 104.198 115.861 104.113 115.834 104.028C115.795 103.989 115.763 103.95 115.743 103.923C115.723 103.891 115.71 103.858 115.71 103.819V103.786C115.077 103.055 114.626 102.441 114.365 101.951V135.506H106.334V88.6057Z" fill="white"></path>
                                                <path d="M181.079 87.2603H183.404L183.894 87.3844H184.259C184.893 87.3844 185.383 87.4236 185.729 87.5085H186.46C187.257 87.7567 187.968 87.8743 188.602 87.8743H188.785C198.579 91.6302 203.679 99.0637 204.09 110.162C204.11 110.573 204.129 110.985 204.149 111.403C204.169 111.821 204.182 112.232 204.182 112.644C204.182 123.481 199.741 131.064 190.868 135.395C187.622 136.499 184.56 137.048 181.687 137.048C176.117 137.048 171.18 134.944 166.871 130.738C162.933 125.982 160.89 120.835 160.746 115.309C160.661 115.061 160.622 114.78 160.622 114.453C160.622 114.022 160.583 113.696 160.498 113.473V111.638L160.622 110.534V108.823L160.746 108.333V107.967L160.87 107.601C160.929 106.354 161.138 105.256 161.484 104.296C164.207 93.5898 170.736 87.9135 181.079 87.2603ZM168.719 115.309C169.189 121.919 172.042 126.414 177.286 128.778C177.508 128.817 177.671 128.863 177.775 128.902L180.838 129.634C190.737 129.412 195.752 124.14 195.895 113.833C195.954 112.938 195.987 112.069 195.987 111.233C195.987 100.07 190.854 94.4847 180.59 94.4847C172.552 96.059 168.529 101.709 168.529 111.449C168.536 112.677 168.595 113.963 168.719 115.309Z" fill="white"></path>
                                                <path d="M242.753 88.8541H250.837V109.678L251.326 109.064L252.058 108.333C252.136 108.189 252.221 108.111 252.306 108.085L252.43 107.836L252.678 107.588L254.271 105.753L254.885 105.139L255.009 104.773L255.74 104.159L255.864 103.911L257.21 102.317L257.699 101.703L259.044 100.233L259.534 99.743L259.9 99.129C260.122 98.8416 260.344 98.6065 260.559 98.4105C260.775 98.2145 260.964 98.0512 261.127 97.9075C261.493 97.2543 261.904 96.7644 262.355 96.4378L263.583 94.844L263.948 94.4782L264.314 93.9883L265.293 93.0085L266.397 91.6629L266.645 91.4146C266.723 91.2709 266.808 91.1926 266.893 91.1664L267.017 90.9182L267.265 90.67L268.859 88.8345H278.288C277.778 89.7098 277.204 90.4087 276.577 90.9182C276.414 91.2056 276.211 91.4473 275.963 91.6498L275.473 92.3814L274.494 93.3612L273.762 94.341L273.514 94.5892C273.371 94.7721 273.227 94.9354 273.083 95.0791C272.94 95.2228 272.796 95.347 272.652 95.4449C272.163 96.2614 271.634 96.8755 271.059 97.2805L270.694 97.7704L269.348 99.4818L268.983 99.8476C268.735 100.115 268.526 100.351 268.343 100.566C268.16 100.782 268.003 100.991 267.886 101.193L267.52 101.441L267.154 101.807L266.906 102.297L266.292 102.911L266.044 103.277L265.796 103.525L265.548 103.891L265.182 104.139L265.058 104.387L264.81 104.636C263.955 105.739 263.217 106.556 262.603 107.085C263.054 108.065 263.459 108.797 263.831 109.293L264.196 110.149C264.379 110.332 264.503 110.534 264.562 110.763L265.052 111.377L265.542 112.232L265.79 112.722L266.038 113.088L266.286 113.578L266.41 113.944L266.658 114.068L266.782 114.558C266.861 114.617 266.906 114.682 266.906 114.741V114.799C267.455 115.374 267.827 115.982 268.01 116.635L268.5 117.491L268.748 117.739L269.975 119.823L270.465 120.678L270.831 121.534L271.32 122.148L271.444 122.514C271.647 122.782 271.823 123.036 271.967 123.278C272.11 123.526 272.221 123.755 272.306 123.984L272.672 124.474L272.92 125.088L273.286 125.577L274.141 127.047L274.631 127.779L274.755 128.269L275.121 128.759L275.245 129.124C275.388 129.229 275.467 129.346 275.493 129.49L275.741 129.98C276.146 130.431 276.433 130.921 276.596 131.45C277.106 131.979 277.432 132.514 277.576 133.044L277.824 133.292L279.052 135.617H269.988L269.623 134.762L269.257 134.396L269.009 133.906L268.519 133.05L268.395 132.684L268.147 132.436L268.023 132.188C267.86 131.9 267.709 131.646 267.579 131.424C267.448 131.202 267.311 131.006 267.167 130.842L267.043 130.476L266.795 129.987L266.306 129.255L265.94 128.523L265.574 127.909L265.084 127.178L264.719 126.564L264.595 126.316C264.085 125.499 263.72 124.807 263.491 124.232C263.308 124.01 263.184 123.801 263.126 123.618C263.086 123.579 263.054 123.539 263.034 123.513C263.015 123.481 263.001 123.448 263.001 123.409V123.376C262.368 122.56 261.918 121.828 261.656 121.168L261.532 120.802C261.003 120.169 260.631 119.64 260.429 119.209L260.305 118.719L260.057 118.353L259.691 117.863L259.567 117.497L259.077 116.766L258.953 116.4L258.705 116.152L258.581 115.903L258.457 115.538L258.209 115.414C257.882 114.702 257.556 114.087 257.229 113.578L256.981 113.82L256.857 114.068C256.511 114.355 256.263 114.643 256.126 114.924L255.76 115.172L254.656 116.642L254.167 117.007L253.677 117.739L253.311 117.987C252.9 118.64 252.495 119.13 252.084 119.457C251.699 120.006 251.287 120.456 250.856 120.802V135.624H242.772V88.8541H242.753Z" fill="white"></path>
                                                <path d="M290.054 88.854H298.138V135.637H290.054V88.854Z" fill="white"></path>
                                                <path d="M346.321 95.5887L345.707 95.9545C345.505 96.1766 345.309 96.3726 345.126 96.5359C344.943 96.6992 344.767 96.8298 344.603 96.9343L343.99 97.5483L343.624 97.6724C343.239 98.1623 342.827 98.489 342.396 98.6523C342.011 99.1814 341.521 99.5929 340.927 99.8803C340.679 100.207 340.437 100.455 340.196 100.612C337.297 96.7971 333.745 94.8832 329.546 94.8832C329.095 94.8832 328.606 94.9159 328.077 94.9747C324.322 95.0988 321.913 96.7318 320.855 99.8738C320.855 102.036 321.508 103.832 322.814 105.263L323.669 105.753L324.035 105.877L325.38 106.491H325.994L326.483 106.615L327.097 106.739C327.567 106.922 327.972 107.046 328.325 107.105L329.304 107.353H329.67L333.712 108.333H334.078L334.443 108.457H334.809L335.175 108.581L336.885 108.947L337.251 109.071L337.741 109.195L338.72 109.561C339.758 109.829 340.62 110.155 341.293 110.541L341.541 110.789L341.907 110.913L342.155 111.279C342.462 111.442 342.703 111.605 342.886 111.769C343.03 111.854 343.108 111.932 343.134 112.017L344.603 113.362C346.314 115.897 347.176 118.477 347.176 121.11C347.176 122.501 346.928 123.918 346.445 125.368C345.1 129.961 342.488 133.148 338.609 134.918C338.1 135.245 337.61 135.493 337.14 135.65C335.912 135.898 334.731 136.075 333.588 136.186C332.445 136.297 331.322 136.355 330.218 136.355C322.526 136.355 316.18 133.383 311.178 127.446L311.302 127.197L311.55 127.073C311.628 126.995 311.7 126.949 311.765 126.949H311.798C312.249 126.42 312.738 126.009 313.267 125.721L313.633 125.355L315.102 124.127L315.35 124.003C315.429 123.925 315.5 123.879 315.566 123.879H315.598C315.925 123.533 316.238 123.219 316.545 122.945C316.852 122.671 317.146 122.449 317.433 122.285H317.799C321.266 126.819 325.197 129.085 329.585 129.085C331.89 129.085 334.287 128.491 336.781 127.308C337.251 126.779 337.702 126.368 338.126 126.08L338.25 125.715C338.72 125.061 339.047 124.408 339.23 123.755C339.249 123.611 339.262 123.481 339.262 123.357C339.262 123.232 339.262 123.108 339.262 122.991C339.262 120.646 338.355 118.817 336.539 117.51L336.174 117.386C335.723 117.203 335.318 117.079 334.946 117.02L334.698 116.772H334.332L333.842 116.648L333.594 116.524H333.229L332.981 116.4C332.184 116.276 331.531 116.113 331.022 115.91H330.656L329.677 115.662H329.311L328.821 115.538L328.573 115.414C327.776 115.289 327.123 115.126 326.614 114.924C318.452 113.983 313.92 109.783 313.026 102.31C313.209 93.4331 318.067 88.5733 327.594 87.7371C328.064 87.698 328.521 87.6653 328.971 87.6457C329.422 87.6261 329.859 87.613 330.29 87.613C337.342 87.6261 342.69 90.2847 346.321 95.5887Z" fill="white"></path>
                                                <path d="M392.747 95.5887L392.133 95.9545C391.931 96.1766 391.735 96.3726 391.552 96.5359C391.369 96.6992 391.193 96.8298 391.03 96.9343L390.416 97.5483L390.05 97.6724C389.665 98.1623 389.254 98.489 388.823 98.6523C388.438 99.1814 387.948 99.5929 387.354 99.8803C387.105 100.207 386.864 100.455 386.622 100.612C383.723 96.7971 380.171 94.8832 375.972 94.8832C375.522 94.8832 375.032 94.9159 374.503 94.9747C370.749 95.0988 368.339 96.7318 367.281 99.8738C367.281 102.036 367.934 103.832 369.24 105.263L370.096 105.753L370.461 105.877L371.806 106.491H372.42L372.91 106.615L373.524 106.739C373.994 106.922 374.399 107.046 374.751 107.105L375.731 107.353H376.096L380.138 108.333H380.504L380.87 108.457H381.235L381.601 108.581L383.312 108.947L383.677 109.071L384.167 109.195L385.147 109.561C386.185 109.829 387.047 110.155 387.719 110.541L387.967 110.789L388.333 110.913L388.581 111.279C388.888 111.442 389.13 111.605 389.312 111.769C389.456 111.854 389.534 111.932 389.561 112.017L391.03 113.362C392.741 115.897 393.603 118.477 393.603 121.11C393.603 122.501 393.354 123.918 392.871 125.368C391.526 129.961 388.914 133.148 385.036 134.918C384.526 135.245 384.036 135.493 383.566 135.65C382.339 135.898 381.157 136.075 380.014 136.186C378.871 136.297 377.748 136.355 376.645 136.355C368.953 136.355 362.606 133.383 357.604 127.446L357.728 127.197L357.976 127.073C358.055 126.995 358.127 126.949 358.192 126.949H358.225C358.675 126.42 359.165 126.009 359.694 125.721L360.059 125.355L361.529 124.127L361.777 124.003C361.855 123.925 361.927 123.879 361.992 123.879H362.025C362.351 123.533 362.665 123.219 362.972 122.945C363.279 122.671 363.572 122.449 363.86 122.285H364.225C367.693 126.819 371.623 129.085 376.011 129.085C378.316 129.085 380.713 128.491 383.207 127.308C383.677 126.779 384.128 126.368 384.552 126.08L384.676 125.715C385.147 125.061 385.473 124.408 385.656 123.755C385.675 123.611 385.688 123.481 385.688 123.357C385.688 123.232 385.688 123.108 385.688 122.991C385.688 120.646 384.781 118.817 382.966 117.51L382.6 117.386C382.149 117.203 381.745 117.079 381.372 117.02L381.124 116.772H380.759L380.269 116.648L380.021 116.524H379.655L379.407 116.4C378.61 116.276 377.957 116.113 377.448 115.91H377.082L376.103 115.662H375.737L375.247 115.538L374.999 115.414C374.203 115.289 373.55 115.126 373.04 114.924C364.878 113.983 360.347 109.783 359.452 102.31C359.635 93.4331 364.493 88.5733 374.02 87.7371C374.49 87.698 374.947 87.6653 375.398 87.6457C375.848 87.6261 376.286 87.613 376.717 87.613C383.769 87.6261 389.11 90.2847 392.747 95.5887Z" fill="white"></path>
                                                <path d="M407.792 88.854H415.875V135.637H407.792V88.854Z" fill="white"></path>
                                                <path d="M432.807 88.6057H441.87L442.36 89.4614L442.608 89.7096L443.098 90.5653C443.261 90.7874 443.405 91.0095 443.529 91.2251C443.653 91.4406 443.751 91.6301 443.836 91.7934L444.084 91.9175L444.208 92.1657L445.311 93.8771L446.291 95.3468C446.369 95.4056 446.415 95.4709 446.415 95.5297V95.5885C447.029 96.2613 447.434 96.8753 447.643 97.424C447.93 97.731 448.165 98.025 448.361 98.3124C448.557 98.5998 448.72 98.8741 448.864 99.142L449.353 99.756L449.719 100.488L449.967 100.853L450.215 101.102L450.705 101.957L450.953 102.205L451.809 103.551L452.788 105.021L453.643 106.249L453.892 106.497L454.14 106.863L454.264 107.229L454.512 107.594L454.76 107.843L455.25 108.698L455.498 108.947L456.353 110.292L456.477 110.54L456.725 110.906C456.804 110.965 456.849 111.03 456.849 111.089V111.148C457.052 111.37 457.235 111.586 457.398 111.788C457.561 111.991 457.705 112.187 457.829 112.369L458.195 112.983L458.443 113.473C458.874 113.924 459.154 114.375 459.298 114.819L459.788 115.551C460.036 115.733 460.238 115.982 460.402 116.282L460.891 117.014C461.094 117.301 461.264 117.562 461.394 117.811C461.525 118.059 461.642 118.281 461.747 118.483C461.89 118.588 461.969 118.706 461.995 118.849L462.361 119.097L462.485 119.463L462.733 119.711L462.981 120.077L463.105 120.443C463.738 121.175 464.189 121.789 464.45 122.279V88.6057H472.534V135.513H463.471L462.981 134.657L462.733 134.409L462.609 134.043C461.975 133.311 461.525 132.697 461.264 132.207L461.14 131.959C460.833 131.554 460.565 131.175 460.343 130.829C460.121 130.483 459.932 130.163 459.794 129.882L459.181 129.15L457.953 127.315L457.829 127.067L457.581 126.818L457.091 125.963C456.928 125.741 456.784 125.518 456.66 125.303C456.536 125.087 456.438 124.898 456.353 124.735C455.922 124.304 455.641 123.938 455.498 123.631C455.191 123.16 454.989 122.795 454.884 122.527C454.74 122.448 454.662 122.363 454.636 122.279L454.388 122.03L454.264 121.665L454.016 121.416L453.892 121.051C453.67 120.828 453.474 120.619 453.31 120.423C453.147 120.227 453.017 120.032 452.912 119.829L451.319 117.504L451.071 116.89C450.561 116.419 450.235 115.929 450.091 115.42C449.477 114.747 449.073 114.133 448.864 113.584L448.374 113.094L448.126 112.48L447.512 111.866L447.146 111.135L446.781 110.645C446.617 110.423 446.474 110.201 446.35 109.985C446.226 109.77 446.128 109.58 446.043 109.417L445.553 108.685C445.409 108.607 445.331 108.522 445.305 108.437L444.45 107.209C444.247 106.922 444.077 106.66 443.947 106.412C443.816 106.164 443.699 105.942 443.594 105.739L443.228 105.374L443.104 105.008L442.739 104.642L442.615 104.276C442.471 104.198 442.393 104.113 442.367 104.028C442.327 103.989 442.295 103.95 442.275 103.923C442.256 103.891 442.242 103.858 442.242 103.819V103.786C441.609 103.055 441.159 102.441 440.897 101.951V135.506H432.814V88.6057H432.807Z" fill="white"></path>
                                                <path d="M527.26 98.5281L526.404 98.8939C525.914 99.2205 525.503 99.423 525.177 99.5079C525.092 99.6516 525.013 99.73 524.928 99.7561L524.563 99.8802L524.315 100.128L524.067 100.253L523.335 100.501L523.211 100.749L521.742 101.363C521.252 101.709 520.841 101.912 520.514 101.977C520.292 101.611 520.129 101.245 520.025 100.873C519.985 100.834 519.953 100.795 519.933 100.769C519.914 100.736 519.901 100.703 519.901 100.664V100.631L519.652 100.507L518.549 98.7959C515.16 95.9806 511.804 94.5696 508.48 94.5696C505.6 94.5696 502.754 95.6082 499.939 97.692L499.208 98.1819C499.123 98.3256 499.045 98.404 498.96 98.4301C498.875 98.5738 498.797 98.6522 498.712 98.6783L498.464 99.0441L498.215 99.1682L498.091 99.4164C497.869 99.7822 497.654 100.109 497.451 100.396C497.249 100.684 497.053 100.925 496.87 101.128C495.545 105.067 494.879 108.875 494.879 112.546C494.879 116.217 495.538 119.803 496.87 123.291L497.118 123.415C497.713 124.5 498.366 125.355 499.077 125.989C502.035 128.523 505.137 129.784 508.382 129.784C509.995 129.784 511.667 129.457 513.404 128.804C518.033 127.008 520.351 123.755 520.351 119.039C520.351 118.634 520.338 118.209 520.305 117.785C520.273 117.36 520.221 116.909 520.136 116.439H506.789V109.215H527.358V135.669H520.136C520.155 135.421 520.168 135.193 520.168 134.964V134.259C520.168 133.788 520.155 133.357 520.136 132.959C520.116 132.56 520.077 132.201 520.012 131.874C519.013 133.488 517.785 134.709 516.342 135.545L515.852 135.669C514.977 136.218 513.998 136.59 512.914 136.773C512.137 136.898 511.379 136.982 510.635 137.035C509.89 137.087 509.159 137.113 508.447 137.113C502.532 137.113 497.615 135.166 493.697 131.267C489.903 127.348 487.781 122.938 487.33 118.039C487.167 116.811 487.036 115.642 486.945 114.519C486.854 113.395 486.808 112.291 486.808 111.213C486.808 99.743 491.836 92.0156 501.898 88.0376L503.126 87.9134L503.491 87.7893H503.857L504.223 87.6652C505.059 87.6456 505.796 87.5607 506.43 87.417C506.737 87.3974 507.037 87.3843 507.331 87.3713C507.625 87.3582 507.925 87.3582 508.232 87.3582C517.191 87.319 523.525 91.0554 527.26 98.5281Z" fill="white"></path>
                                                <path d="M190.776 164.104H198.86V210.887H190.776V164.104Z" fill="white"></path>
                                                <path d="M215.792 163.855H224.855L225.345 164.711L225.593 164.959L226.082 165.815C226.246 166.037 226.389 166.259 226.513 166.475C226.637 166.69 226.735 166.88 226.82 167.043L227.068 167.167L227.192 167.415L228.296 169.127L229.275 170.597C229.354 170.655 229.399 170.721 229.399 170.779V170.838C230.013 171.511 230.418 172.125 230.627 172.674C230.914 172.981 231.149 173.275 231.345 173.562C231.541 173.849 231.704 174.124 231.848 174.392L232.338 175.006L232.703 175.737L232.952 176.103L233.2 176.351L233.689 177.207L233.938 177.455L234.793 178.801L235.772 180.271L236.628 181.499L236.876 181.747L237.124 182.113L237.248 182.478L237.496 182.844L237.744 183.092L238.234 183.948L238.482 184.196L239.338 185.542L239.462 185.79L239.71 186.156C239.788 186.215 239.834 186.28 239.834 186.339V186.398C240.036 186.62 240.219 186.835 240.382 187.038C240.546 187.24 240.689 187.436 240.813 187.619L241.179 188.233L241.427 188.723C241.858 189.174 242.139 189.624 242.283 190.069L242.772 190.8C243.02 190.983 243.223 191.231 243.386 191.532L243.876 192.263C244.078 192.551 244.248 192.812 244.379 193.06C244.509 193.309 244.627 193.531 244.731 193.733C244.875 193.838 244.953 193.955 244.979 194.099L245.345 194.347L245.469 194.713L245.717 194.961L245.965 195.327L246.089 195.693C246.723 196.424 247.173 197.038 247.435 197.528V163.849H255.518V210.756H246.455L245.965 209.9L245.717 209.652L245.593 209.286C244.96 208.554 244.509 207.94 244.248 207.451L244.124 207.202C243.817 206.797 243.549 206.418 243.327 206.072C243.105 205.726 242.916 205.413 242.779 205.125L242.165 204.394L240.937 202.558L240.813 202.31L240.565 202.062L240.076 201.206C239.912 200.984 239.769 200.762 239.645 200.546C239.521 200.331 239.423 200.141 239.338 199.978C238.907 199.547 238.626 199.181 238.482 198.874C238.175 198.404 237.973 198.038 237.869 197.77C237.725 197.692 237.647 197.607 237.62 197.522L237.372 197.274L237.248 196.908L237 196.66L236.876 196.294C236.654 196.072 236.458 195.863 236.295 195.667C236.132 195.471 236.001 195.275 235.897 195.072L234.303 192.747L234.055 192.133C233.546 191.662 233.219 191.173 233.076 190.663C232.462 189.99 232.057 189.376 231.848 188.828L231.358 188.338L231.11 187.724L230.496 187.11L230.131 186.378L229.765 185.888C229.602 185.666 229.458 185.444 229.334 185.228C229.21 185.013 229.112 184.823 229.027 184.66L228.538 183.928C228.394 183.85 228.316 183.765 228.289 183.68L227.434 182.452C227.232 182.165 227.062 181.904 226.931 181.655C226.801 181.407 226.683 181.185 226.579 180.983L226.213 180.617L226.089 180.251L225.723 179.885L225.599 179.519C225.455 179.441 225.377 179.356 225.351 179.271C225.312 179.232 225.279 179.193 225.26 179.167C225.24 179.134 225.227 179.101 225.227 179.062V179.029C224.594 178.298 224.143 177.684 223.882 177.194V210.756H215.798V163.855H215.792Z" fill="white"></path>
                                                <path d="M291.752 163.855H325.543V171.204H312.686V210.762H304.602V171.204H291.745V163.855H291.752Z" fill="white"></path>
                                                <path d="M336.461 164.104H344.545V182.354H365.361V164.104H373.439V210.887H365.361V189.579H344.545V210.887H336.461V164.104Z" fill="white"></path>
                                                <path d="M390.416 163.979H419.8V171.328H398.5V183.086C398.519 183.412 398.67 183.576 398.957 183.576H417.965V190.8H398.5V203.048C398.5 203.459 398.663 203.662 398.99 203.662H421.151V210.886H390.423V163.979H390.416Z" fill="white"></path>
                                                <path d="M101.652 239.229H110.101L110.225 240.085L110.35 240.45L110.598 241.306L110.846 242.776L111.211 244.004L111.46 245.474L111.825 246.702L111.949 247.682C112.093 248.028 112.171 248.315 112.197 248.537L112.321 249.027L112.57 249.759V250.249C112.648 250.307 112.694 250.373 112.694 250.432V250.863C112.916 251.313 113.04 251.803 113.059 252.332L113.307 253.064L113.556 253.92L113.804 255.389L114.169 256.617L114.293 257.349L115.025 260.413C115.084 260.7 115.142 260.961 115.195 261.196C115.247 261.432 115.273 261.66 115.273 261.882L115.521 262.372V262.862L115.769 263.476V263.966L116.017 264.456V264.946C116.239 265.56 116.363 266.089 116.383 266.54L116.507 267.03C116.651 267.441 116.762 267.813 116.847 268.16C116.925 268.506 116.977 268.826 116.997 269.107L117.245 270.087L117.493 270.942L117.741 270.211L118.231 267.761L118.479 267.147L118.603 266.416L118.969 264.704L119.217 263.848V263.483L119.707 261.523L119.831 260.791L120.079 260.302L120.203 259.812L120.327 259.198V258.708L120.451 258.342L120.941 256.382L121.189 254.913L121.313 254.423L121.561 253.933C121.6 253.28 121.724 252.705 121.927 252.221L122.051 251.607V251.242L122.299 250.262L122.423 249.896L122.789 248.302L122.913 247.57L123.161 246.839L123.285 246.225L123.651 244.631L123.775 244.017L123.899 243.769C123.918 243.547 123.944 243.325 123.977 243.109C124.01 242.894 124.062 242.704 124.147 242.541L124.271 242.175V241.809L124.395 241.319L124.519 240.953L124.885 239.242H133.948V239.608C134.235 240.32 134.398 241.019 134.438 241.692L134.686 242.671L134.81 243.037L135.3 245.245L135.548 246.225C135.711 246.819 135.796 247.309 135.796 247.695C135.94 248.041 136.018 248.328 136.044 248.55L136.292 249.406L136.416 250.262L136.54 250.752L136.664 251.117C136.723 251.385 136.775 251.62 136.814 251.836C136.854 252.051 136.886 252.261 136.906 252.463C137.069 252.848 137.18 253.208 137.245 253.534C137.304 253.861 137.356 254.155 137.396 254.423L137.52 255.154L137.768 255.768L137.892 256.5V256.866C138.094 257.356 138.218 257.806 138.258 258.211L138.382 258.943C138.584 259.433 138.708 259.883 138.747 260.288L138.871 260.902L139.237 262.248V262.738C139.315 262.921 139.361 263.123 139.361 263.352C139.583 263.822 139.707 264.227 139.727 264.58L139.851 265.194L139.975 265.926L140.099 266.416C140.301 267.049 140.425 267.617 140.465 268.127C140.543 268.186 140.589 268.251 140.589 268.31V268.741C140.876 269.453 141.039 270.152 141.078 270.825C141.202 270.785 141.281 270.701 141.327 270.576C141.431 270.067 141.529 269.623 141.633 269.244C141.738 268.865 141.836 268.532 141.94 268.251V267.768C142.208 267.036 142.371 266.383 142.43 265.808L142.678 264.952L143.168 262.993L143.292 262.013L143.54 261.157L143.664 260.791V260.426C143.808 260.04 143.919 259.687 144.004 259.367C144.082 259.054 144.134 258.753 144.154 258.466L144.402 257.61L145.381 253.567L145.747 251.607L145.995 250.627C146.217 250.033 146.341 249.543 146.361 249.158L146.485 248.544L146.733 247.564C146.916 246.97 147.04 246.48 147.099 246.094L147.223 245.604L147.589 243.893L147.837 243.161V242.796L148.202 241.816V241.326L148.326 240.96L148.692 239.249H157.017L156.528 241.698L156.162 243.168L156.038 243.534L155.672 245.245L155.424 246.225L155.176 247.081L154.686 249.53L154.438 250.386L153.949 252.711L153.7 253.567L153.576 253.933L153.328 255.278L153.204 255.527L153.08 256.382C152.878 257.055 152.754 257.63 152.714 258.094L152.225 259.563L152.101 260.419L151.977 260.909L151.852 261.275L151.728 262.13L151.604 262.496L150.873 265.56L150.749 266.416L150.501 267.271L149.887 269.721L149.763 270.576L149.032 273.64L148.666 275.351C148.444 275.965 148.32 276.495 148.3 276.945L147.811 278.539V279.029C147.589 279.643 147.464 280.172 147.445 280.623C147.242 281.296 147.118 281.87 147.079 282.334L146.831 283.19L146.707 283.438L146.583 284.294C146.381 284.967 146.256 285.541 146.217 286.005H137.154L137.03 285.025C136.886 284.679 136.808 284.392 136.782 284.17L136.534 283.19L136.41 282.334L136.162 281.479C136.103 281.23 136.051 281.002 136.011 280.773C135.972 280.551 135.94 280.335 135.92 280.133L135.796 279.643L135.672 279.029C135.587 278.924 135.548 278.807 135.548 278.663L135.424 278.049L135.3 277.683C135.241 277.416 135.189 277.18 135.149 276.965C135.11 276.749 135.078 276.54 135.058 276.338C134.914 275.952 134.81 275.593 134.738 275.267C134.666 274.94 134.607 274.646 134.568 274.378L134.444 273.888L134.32 273.274C134.235 273.026 134.183 272.797 134.15 272.569C134.118 272.347 134.092 272.131 134.072 271.929C133.928 271.524 133.817 271.132 133.732 270.766C133.648 270.4 133.602 270.054 133.582 269.727C133.497 269.623 133.458 269.505 133.458 269.361L133.334 268.872L133.21 268.506C133.151 268.075 133.066 267.67 132.962 267.278L132.714 266.174L132.59 265.442L132.342 264.828L132.094 263.359L131.969 262.993V262.627C131.767 262.137 131.643 261.686 131.604 261.281L131.356 259.812L131.108 259.198L130.859 258.218V257.728C130.611 257.055 130.494 256.48 130.494 256.016C130.409 255.912 130.37 255.794 130.37 255.651L130.246 255.285V254.919C130.043 254.449 129.919 253.959 129.88 253.449C129.678 252.796 129.553 252.182 129.514 251.614L129.266 252.104L129.142 252.835L128.776 254.429L128.528 255.775L128.404 256.141L127.914 258.224L127.79 258.714L127.542 259.942L127.418 260.432L127.17 261.778L127.046 262.144L126.556 264.469L126.308 265.325L126.184 266.18C125.962 266.794 125.838 267.323 125.818 267.774L125.694 268.022L125.57 268.754L125.446 269.12L124.832 272.183L124.708 272.549L124.219 274.875L124.095 275.364L123.971 275.979L123.846 276.344L123.357 278.67L123.109 279.65L122.86 280.878L122.736 281.126L122.488 282.23L122.364 282.72L122.24 283.575C122.096 284.085 122.018 284.496 121.992 284.803C121.907 285.006 121.855 285.202 121.822 285.385C121.79 285.568 121.763 285.744 121.744 285.907C121.457 285.946 121.195 285.986 120.96 286.012C120.725 286.044 120.497 286.057 120.275 286.057H119.968C119.863 286.057 119.765 286.044 119.661 286.025H112.557V285.535C112.269 284.803 112.106 284.104 112.067 283.451C111.982 283.347 111.943 283.229 111.943 283.085L111.819 282.471C111.368 281.021 111.087 279.8 110.963 278.8L110.839 278.435L110.225 276.109L110.101 275.129L109.122 271.334V270.844C108.919 270.374 108.795 269.884 108.756 269.375L108.508 268.643L108.26 267.768V267.402L107.646 264.952V264.587L107.522 264.097L107.274 263.607L107.15 262.627C106.987 262.137 106.856 261.686 106.752 261.281C106.647 260.876 106.575 260.504 106.536 260.177L106.412 259.812V259.446C106.327 259.341 106.288 259.224 106.288 259.08L106.04 258.1L105.916 257.734C105.831 257.303 105.759 256.918 105.687 256.572C105.615 256.225 105.531 255.918 105.426 255.651L105.302 254.795C105.158 254.39 105.047 254.011 104.962 253.665C104.878 253.319 104.832 253.005 104.812 252.718L104.708 252.091C104.623 251.986 104.584 251.869 104.584 251.725L103.97 249.275L103.722 248.42L103.598 247.806L103.474 247.316L103.35 246.46C103.186 246.029 103.102 245.663 103.102 245.356V245.232L102.853 244.618L102.729 244.128C102.644 243.534 102.527 243.044 102.364 242.658V242.168C102.279 242.064 102.24 241.946 102.24 241.803L101.626 239.477V239.229H101.652Z" fill="white"></path>
                                                <path d="M185.337 237.76H187.661L188.151 237.884H188.517C189.15 237.884 189.64 237.923 189.986 238.008H190.717C191.514 238.256 192.226 238.374 192.859 238.374H193.042C202.837 242.129 207.936 249.563 208.348 260.661C208.367 261.073 208.387 261.484 208.406 261.902C208.426 262.32 208.439 262.732 208.439 263.143C208.439 273.98 203.999 281.564 195.125 285.894C191.88 286.998 188.817 287.547 185.944 287.547C180.374 287.547 175.438 285.444 171.128 281.237C167.191 276.482 165.147 271.334 165.003 265.808C164.918 265.56 164.879 265.279 164.879 264.953C164.879 264.521 164.84 264.195 164.755 263.973V262.137L164.879 261.033V259.322L165.003 258.832V258.466L165.127 258.1C165.186 256.853 165.395 255.755 165.741 254.795C168.458 244.089 174.987 238.413 185.337 237.76ZM172.97 265.808C173.44 272.419 176.293 276.913 181.537 279.277C181.759 279.317 181.922 279.362 182.026 279.402L185.089 280.133C194.988 279.911 200.003 274.64 200.146 264.332C200.205 263.437 200.238 262.568 200.238 261.732C200.238 250.569 195.105 244.984 184.841 244.984C176.803 246.558 172.78 252.208 172.78 261.948C172.787 263.176 172.846 264.463 172.97 265.808Z" fill="white"></path>
                                                <path d="M222.458 239.105H236.536C237.248 239.046 237.947 239.013 238.619 239.013C246.351 239.013 251.574 242.391 254.291 249.151C254.839 250.928 255.12 252.652 255.12 254.325C255.12 256.304 254.722 258.211 253.925 260.053C252.495 263.541 250.086 265.788 246.703 266.788L246.951 267.036L247.075 267.402L248.055 269.237L248.421 269.969L248.669 270.701L249.772 272.66L250.262 273.764L250.51 274.13L250.634 274.496L251 275.351C251.326 275.841 251.529 276.253 251.614 276.579C251.96 277.05 252.208 277.455 252.345 277.807L252.711 278.539L252.959 279.153C253.285 279.702 253.527 280.237 253.69 280.747C254.239 281.505 254.611 282.236 254.794 282.955L255.042 283.203L255.29 283.693L255.78 284.921C256.067 285.267 256.23 285.633 256.269 286.025H247.702L247.337 285.293C246.827 284.437 246.462 283.66 246.233 282.968L245.502 281.74L245.378 281.25C245.012 280.76 244.764 280.309 244.646 279.904L244.281 279.173L244.157 278.807C244.117 278.768 244.085 278.728 244.065 278.702C244.046 278.67 244.033 278.637 244.033 278.598V278.565L243.784 278.317L243.66 278.069L243.536 277.703L242.805 276.233L242.074 274.888L241.826 274.398L241.701 273.908L241.453 273.66L241.329 273.294L241.081 272.928L240.957 272.68C240.689 272.027 240.448 271.537 240.226 271.21L238.633 267.781H230.549V286.031H222.465V239.105H222.458ZM230.536 260.543H241.525C241.93 260.543 242.315 260.53 242.674 260.51C243.034 260.491 243.353 260.458 243.641 260.419C246.214 258.603 247.5 256.421 247.5 253.867C247.5 252.907 247.317 251.908 246.951 250.869C246.116 248.994 244.849 247.642 243.158 246.826L241.93 246.578C241.682 246.538 241.453 246.506 241.225 246.486C241.003 246.467 240.787 246.453 240.585 246.453H230.542V260.543H230.536Z" fill="white"></path>
                                                <path d="M270.302 239.353H278.386V260.177L278.875 259.563L279.607 258.832C279.685 258.688 279.77 258.61 279.855 258.584L279.979 258.335L280.227 258.087L281.82 256.252L282.434 255.638L282.558 255.272L283.289 254.658L283.413 254.41L284.759 252.816L285.248 252.202L286.593 250.732L287.083 250.242L287.449 249.628C287.671 249.341 287.893 249.105 288.108 248.91C288.324 248.714 288.513 248.55 288.676 248.407C289.042 247.753 289.453 247.263 289.904 246.937L291.132 245.343L291.497 244.977L291.863 244.487L292.842 243.507L293.946 242.162L294.194 241.914C294.272 241.77 294.357 241.692 294.442 241.665L294.566 241.417L294.814 241.169L296.408 239.333H305.836C305.327 240.209 304.753 240.908 304.126 241.417C303.962 241.705 303.76 241.946 303.512 242.149L303.022 242.88L302.043 243.86L301.311 244.84L301.063 245.088C300.92 245.271 300.776 245.434 300.632 245.578C300.489 245.722 300.345 245.846 300.201 245.944C299.712 246.76 299.183 247.374 298.608 247.779L298.242 248.269L296.897 249.981L296.532 250.347C296.284 250.614 296.075 250.85 295.892 251.065C295.709 251.281 295.552 251.49 295.435 251.692L295.069 251.94L294.703 252.306L294.455 252.796L293.841 253.41L293.593 253.776L293.345 254.024L293.097 254.39L292.731 254.638L292.607 254.886L292.359 255.135C291.504 256.239 290.766 257.055 290.152 257.584C290.603 258.564 291.008 259.296 291.38 259.792L291.745 260.648C291.928 260.831 292.052 261.033 292.111 261.262L292.601 261.876L293.09 262.731L293.339 263.221L293.587 263.587L293.835 264.077L293.959 264.443L294.207 264.567L294.331 265.057C294.409 265.116 294.455 265.181 294.455 265.24V265.299C295.004 265.873 295.376 266.481 295.559 267.134L296.048 267.99L296.297 268.238L297.524 270.322L298.014 271.177L298.38 272.033L298.869 272.647L298.993 273.013C299.196 273.281 299.372 273.535 299.516 273.777C299.659 274.025 299.77 274.254 299.855 274.483L300.221 274.973L300.469 275.587L300.835 276.076L301.69 277.546L302.18 278.278L302.304 278.768L302.67 279.258L302.794 279.623C302.937 279.728 303.016 279.845 303.042 279.989L303.29 280.479C303.695 280.93 303.982 281.42 304.145 281.949C304.655 282.478 304.981 283.013 305.125 283.543L305.373 283.791L306.6 286.116H297.537L297.172 285.261L296.806 284.895L296.558 284.405L296.068 283.549L295.944 283.183L295.696 282.935L295.572 282.687C295.409 282.399 295.258 282.145 295.128 281.923C294.997 281.701 294.86 281.505 294.716 281.341L294.592 280.975L294.344 280.486L293.854 279.754L293.489 279.022L293.123 278.408L292.633 277.677L292.268 277.063L292.144 276.815C291.634 275.998 291.269 275.306 291.04 274.731C290.857 274.509 290.733 274.3 290.674 274.117C290.635 274.078 290.603 274.038 290.583 274.012C290.563 273.98 290.55 273.947 290.55 273.908V273.875C289.917 273.059 289.466 272.327 289.205 271.667L289.081 271.301C288.552 270.668 288.18 270.139 287.978 269.708L287.854 269.218L287.606 268.852L287.24 268.362L287.116 267.996L286.626 267.265L286.502 266.899L286.254 266.651L286.13 266.402L286.006 266.037L285.758 265.913C285.431 265.201 285.105 264.587 284.778 264.077L284.53 264.325L284.406 264.573C284.06 264.861 283.812 265.148 283.675 265.429L283.309 265.677L282.205 267.147L281.716 267.513L281.226 268.244L280.86 268.493C280.449 269.146 280.044 269.636 279.633 269.962C279.247 270.511 278.836 270.962 278.405 271.308V286.129H270.321V239.353H270.302Z" fill="white"></path>
                                                <path d="M317.616 239.105H336.102C336.285 239.144 336.454 239.177 336.605 239.196C336.755 239.216 336.905 239.229 337.049 239.229H337.199L338.544 239.477C338.929 239.621 339.282 239.745 339.602 239.843C339.915 239.948 340.215 240.026 340.503 240.091C346.726 243.318 349.84 247.989 349.84 254.116C349.84 254.501 349.827 254.9 349.795 255.291C349.762 255.683 349.729 256.095 349.69 256.5C347.607 264.913 342.54 269.113 334.476 269.113C334.045 269.113 333.614 269.1 333.176 269.081C332.739 269.061 332.282 269.028 331.812 268.989H325.811V286.012H317.616V239.105ZM325.693 261.765H333.562C334.195 261.765 334.711 261.804 335.122 261.889C335.201 261.81 335.272 261.765 335.338 261.765H335.37L336.226 261.641L336.957 261.517C340.385 259.74 342.103 257.343 342.103 254.318C342.103 253.319 341.9 252.208 341.489 250.98C340.549 249.347 339.367 248.08 337.937 247.185C337.244 247.041 336.631 246.839 336.102 246.571H335.488L334.757 246.447H325.693V261.765Z" fill="white"></path>
                                                <path d="M361.542 239.229H369.625V278.787H387.87V286.012H361.548V239.229H361.542Z" fill="white"></path>
                                                <path d="M411.396 239.229H421.315L421.563 240.209C421.641 240.353 421.7 240.496 421.733 240.64C421.765 240.784 421.791 240.927 421.811 241.071L422.059 241.561L422.425 242.789L422.549 243.037L422.673 243.527L422.797 243.893L422.921 244.383L423.287 245.239L423.411 245.487V245.853C423.574 246.14 423.705 246.421 423.796 246.695C423.887 246.97 423.966 247.224 424.025 247.446L424.149 247.936L424.273 248.184V248.55C424.436 248.838 424.567 249.119 424.658 249.393C424.749 249.667 424.828 249.922 424.887 250.144L425.135 251.124C425.441 251.653 425.605 252.143 425.624 252.594L425.99 253.449L426.238 254.429L426.486 255.285C426.565 255.389 426.61 255.507 426.61 255.651L426.858 256.016L426.983 256.506C427.022 256.709 427.087 256.892 427.165 257.055C427.244 257.218 427.309 257.362 427.348 257.486V257.852C427.753 258.61 428.001 259.341 428.08 260.06C428.223 260.328 428.302 260.569 428.328 260.791C428.471 261.059 428.55 261.301 428.576 261.523L429.066 262.993L429.19 263.241L429.314 263.731L429.438 264.097L429.562 264.587L429.927 265.442L430.052 265.69V266.056C430.215 266.344 430.345 266.625 430.45 266.899C430.554 267.173 430.62 267.428 430.665 267.65L430.789 268.382C431.116 269.015 431.318 269.584 431.403 270.093C431.788 270.968 432.037 271.746 432.134 272.419C432.278 272.686 432.357 272.928 432.383 273.15L432.748 273.882L432.996 274.613C433.101 275.103 433.218 275.515 433.362 275.841L433.61 276.945L433.976 277.677L434.224 278.781L434.472 279.271L434.596 279.761C434.818 280.29 435.001 280.793 435.145 281.263C435.288 281.733 435.393 282.171 435.452 282.582L435.7 282.948V283.314C435.778 283.419 435.824 283.536 435.824 283.68C436.046 284.026 436.17 284.353 436.189 284.66C436.457 285.234 436.62 285.724 436.679 286.129H428.595L428.471 285.639L428.223 285.15L428.099 284.418C428.014 284.313 427.975 284.196 427.975 284.052C427.59 283.275 427.342 282.543 427.244 281.844L426.996 281.479L426.872 280.989C426.832 280.786 426.774 280.603 426.702 280.44C426.63 280.277 426.565 280.133 426.506 280.009V279.643C426.121 278.866 425.872 278.134 425.775 277.435H407.165L407.041 277.925L406.793 278.415L406.669 279.029L406.544 279.519C406.44 279.741 406.349 279.97 406.251 280.192C406.159 280.414 406.094 280.642 406.055 280.865L405.931 281.23L405.683 281.72C405.643 281.942 405.598 282.106 405.558 282.21L405.434 282.7L405.31 283.066L405.186 283.314L404.331 286.129H396.247V285.764L396.495 285.032L396.619 284.542C396.802 284.137 396.926 283.81 396.985 283.562L397.109 283.314L397.357 282.334L397.605 281.479L398.337 279.395L398.702 278.167L398.95 277.435C399.133 277.03 399.257 276.704 399.316 276.455L399.806 274.986L400.785 271.922L401.517 269.597C401.719 269.146 401.876 268.741 401.974 268.369C402.078 268.003 402.17 267.676 402.248 267.389L402.372 266.899L402.62 266.533C402.679 266.063 402.803 265.612 402.986 265.188L403.234 264.456L403.358 263.966C403.541 263.561 403.665 263.234 403.724 262.986L403.848 262.738L404.096 261.758L404.344 260.902L404.71 260.047L405.075 258.819L405.441 257.715L405.565 257.467L406.296 255.141L406.42 254.651L407.4 251.588C407.668 251.039 407.831 250.549 407.89 250.118L409.235 246.323V245.957L409.483 245.343L409.607 244.977L409.731 244.487L409.979 243.997L410.103 243.632L410.227 243.142L410.351 242.776L410.475 242.286L410.841 241.43L411.207 239.961L411.396 239.229ZM416.293 249.517L415.562 251.601L415.314 252.456L414.948 253.312L414.824 254.044L414.576 254.775L414.21 255.507L414.086 256.239L413.721 256.97V257.336L413.473 257.702C413.27 258.766 413.022 259.622 412.741 260.275L412.617 260.765L412.369 261.379L411.638 263.463L411.272 264.809L411.024 265.423L410.9 265.913L410.652 266.527L410.528 267.016L410.162 268.12L410.038 268.369C409.79 269.309 409.548 270.041 409.307 270.576H423.385L423.137 269.597L422.771 268.741L422.523 267.885L422.157 267.03L421.543 264.946L421.295 263.966L420.929 263.11L420.805 262.496C420.662 262.248 420.583 262.046 420.557 261.882L419.943 260.171L419.819 259.681L419.571 259.191V258.825L418.84 256.866L418.716 256.134C418.572 255.866 418.494 255.625 418.468 255.402L418.102 254.671L417.854 253.567C417.769 253.462 417.73 253.345 417.73 253.201C417.645 253.097 417.606 252.979 417.606 252.835L417.358 252.47V252.091C417.155 251.64 417.031 251.235 416.992 250.863C416.953 250.823 416.92 250.784 416.901 250.758C416.881 250.725 416.868 250.693 416.868 250.654V250.621L416.254 249.151V249.517H416.293Z" fill="white"></path>
                                                <path d="M485.815 251.967C485.731 252.11 485.613 252.234 485.45 252.332L484.836 252.457L484.346 252.581H483.856C483.674 252.666 483.471 252.705 483.243 252.705C482.812 252.868 482.446 252.953 482.139 252.953H482.015C481.911 253.038 481.793 253.077 481.649 253.077L481.16 253.201L480.304 253.325L480.056 253.449L478.097 253.815C475.89 247.995 472.129 245.088 466.801 245.088C465.554 245.088 464.176 245.265 462.668 245.611C462.563 245.696 462.446 245.735 462.302 245.735L461.446 246.101C461.015 246.323 460.611 246.486 460.219 246.591C460.134 246.734 460.056 246.813 459.971 246.839L459.605 246.963L459.239 247.211L458.991 247.46L458.626 247.584C458.24 247.969 457.888 248.309 457.568 248.596C457.248 248.883 456.947 249.119 456.667 249.302L456.543 249.667L455.929 250.281L455.805 250.647L455.557 250.771C455.269 251.503 454.943 252.117 454.577 252.607C453.539 256.095 453.017 259.479 453.017 262.745C453.017 265.338 453.33 267.84 453.963 270.243C455.576 276.305 459.37 279.61 465.351 280.166H465.475C472.025 280.166 476.23 277.265 478.084 271.471L478.698 271.596C478.946 271.68 479.175 271.733 479.403 271.765C479.625 271.798 479.841 271.824 480.043 271.844L480.291 271.968L482.25 272.334L482.74 272.458L483.595 272.582L485.802 273.072C482.903 281.786 477.19 286.567 468.662 287.403C468.316 287.442 467.963 287.462 467.604 287.462C467.245 287.462 466.892 287.462 466.546 287.462C458.462 287.462 452.435 284.137 448.459 277.481C446.01 272.419 444.789 267.435 444.789 262.536C444.789 259.165 445.357 255.821 446.5 252.489C449.602 243.73 455.439 238.876 464.006 237.916C464.254 237.897 464.489 237.883 464.724 237.883C464.959 237.883 465.188 237.883 465.41 237.883C475.897 237.851 482.688 242.554 485.815 251.967Z" fill="white"></path>
                                                <path d="M498.483 239.229H527.867V246.578H506.567V258.335C506.586 258.662 506.737 258.825 507.024 258.825H526.032V266.05H506.567V278.297C506.567 278.709 506.73 278.911 507.057 278.911H529.218V286.136H498.49V239.229H498.483Z" fill="white"></path>
                                            </g>
                                        </g>
                                        <defs>
                                            <filter id="filter0_ddd" x="0" y="0" width="632" height="410" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                <feOffset dy="15"></feOffset>
                                                <feGaussianBlur stdDeviation="22.5"></feGaussianBlur>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.113725 0 0 0 0 0.141176 0 0 0 0.1 0"></feColorMatrix>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                <feOffset dy="2"></feOffset>
                                                <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.454167 0 0 0 0 0.0321701 0 0 0 0 0.0464405 0 0 0 0.15 0"></feColorMatrix>
                                                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                                <feOffset dy="10"></feOffset>
                                                <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.7875 0 0 0 0 0.0885938 0 0 0 0 0.112228 0 0 0 0.1 0"></feColorMatrix>
                                                <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"></feBlend>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"></feBlend>
                                            </filter>
                                            <clipPath id="clip0">
                                                <rect x="45" y="30" width="542" height="320" rx="34" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="kissing__desc">
                                    <p>Sign that prohibits kissing in the workplace. One of them is placed in my kitchen
                                        and another in friends’ apartment. 2020</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-7 offset-md-1 col-lg-7 offset-lg-1 col-xl-7 offset-xl-1">
                            <div className="menu emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="menu__img">
                                    <Link className="img-link" to="/en\menu-1c-en.html">
                                        <picture>
                                            <source srcset="images/favor@2x.webp 2x" src="images/favor.webp" type="image/webp"/>
                                            <img srcset="images/favor@2x.png 2x" src="images/favor.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="menu__link">
                                    <Link className="link-active" to="/en\menu-1c-en.html">Major renewal <br/>of 1C menu</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="meso-app emerge" data-effect="slide" data-duration="300" data-bottom="20px" data-right="25%" data-continue="true">
                                <div className="meso-app__img">
                                    <Link className="img-link" to="/en\app-meso-en.html">
                                        <picture>
                                            <source srcset="images/meso@2x.webp 2x" src="images/meso.webp" type="image/webp"/>
                                            <img srcset="images/meso@2x.png 2x" src="images/meso.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="meso-app__link">
                                    <Link className="link-active" to="/en\app-meso-en.html">MESO — an app for<br/> ordering goods
                                        from<br/> local grocery stores</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 offset-sm-0 col-md-7 offset-md-1
                            col-lg-7 offset-md-1 col-xl-7 offset-xl-1"></div>
                    </div>
                </div>
            </section>

            <section className="row-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="photoshop emerge" data-effect="slide" data-duration="300" data-bottom="20px" data-right="25%" data-continue="true">
                                <div className="photoshop__img">
                                    <span className="photoshop__img-eyes">
                                        <img src="images/eyes.svg" alt=""/>
                                    </span>
                                    <picture>
                                        <source srcset="images/photoshop@2x.webp 2x" src="images/photoshop.webp" type="image/webp"/>
                                        <img srcset="images/photoshop@2x.png 2x" src="images/photoshop.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>
                                <div className="photoshop__desc">
                                    <p>A correct saving window in Photoshop. It shows popular formats and remembers the
                                        ones that I use.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-7 offset-md-1 col-lg-7 offset-lg-1 col-xl-7 offset-xl-1">
                            <div className="present emerge" data-effect="slide" data-duration="300" data-bottom="20px" data-left="25%" data-continue="true">
                                <div className="present__img">
                                    <Link className="img-link" to="/en\kos-day-en.html">
                                        <img src="images/present.svg" alt=""/>
                                    </Link>
                                </div>

                                <div className="present__link">
                                    <Link className="link-active" to="/en\kos-day-en.html">A lot of<br className="br-mob"/> presentations
                                        <br/> for KOS-Day 2020</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-6 signature scroll no-scroll">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="neck emerge" data-effect="slide" data-duration="300" data-down="20%" data-continue="true">
                                <div className="neck__img">
                                    <picture>
                                        <source srcset="images/neck@2x.webp 2x" src="images/neck.webp" type="image/webp" media="(min-width: 768px)"/>
                                        <source srcset="images/neck-mob@2x.webp 2x" src="images/neck-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source srcset="images/neck-mob@2x.png 2x" src="images/neck-mob.png" media="(max-width: 767px)"/>
                                        <img srcset="images/neck@2x.png 2x" src="images/neck.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>
                                <div className="neck__desc br-mob">
                                    <p>Guitar neck scheme with notes up to the 12th fret. 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="signature signature__main emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 offset-0 col-md-7 offset-md-1 br-desk scroll no-scroll">
                            <div className="sign">
                                <div className="sign-text emerge" data-effect="slide" data-duration="800" data-right="25%" data-continue="true">
                                    <p>Guitar neck scheme with notes up to the 12th fret. 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="row-7 br-mob">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="bks-land emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                <div className="bks-land__img">
                                    <Link className="img-link" to="/en\bks-land-en.html">
                                        <picture>
                                            <source srcset="images/bks-rect@2x.webp 2x" src="images/bks-rect.webp" type="image/webp"/>
                                            <img srcset="images/bks-rect@2x.png 2x" src="images/bks-rect.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>

                                <div className="bsk-land__info">
                                    <div className="bks-land__link">
                                        <Link className="link-active" to="/en\bks-land-en.html">BCS Premier<br/> landing pages</Link>
                                    </div>

                                    <div className="bks-land__time">
                                        <p className="bks-land__time-hour">~1 hour</p>
                                        <p className="bks-land__time-middle">average time <br/> of page design</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="bks-mob emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="bks-mob__img">
                                    <Link className="img-link" to="/en\bks-mob-en.html">
                                        <img src="images/bks-mob.svg" alt=""/>
                                    </Link>
                                </div>

                                <div className="bks-mob__link">
                                    <Link className="link-active" to="/en\bks-mob-en.html">Mobile service <br/>for partners <br/>of
                                        BCS Capital</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-8">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="bks-invest emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                <div className="bks-invest__img">
                                    <Link className="img-link" to="/en\bks-story-en.html">
                                        <picture>
                                            <source srcset="images/bks-invest@2x.webp 2x" src="images/bks-invest.webp" type="image/webp"/>
                                            <img srcset="images/bks-invest@2x.png 2x" src="images/bks-invest.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="bks-invest__link">
                                    <Link className="link-active" to="/en\bks-story-en.html">BCS narratives<br/>
                                        about investment <br/>types</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="stamp emerge" data-effect="slide" data-duration="300" data-down="20%" data-continue="true">
                                <div className="stamp__img">
                                    <img src="images/stamp.svg" alt=""/>
                                </div>

                                <div className="stamp__desc">
                                    <p>Tugolukovskiy, SP business stamp. 2019</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-3 offset-md-1 col-lg-3 offset-lg-1 col-xl-3 offset-xl-1">
                            <div className="app-auto emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="app-auto__img">
                                    <Link className="img-link" to="/en\app-cleverence-en.html">
                                        <picture>
                                            <source srcset="images/automat@2x.webp 2x" src="images/automat.webp" type="image/webp"/>
                                            <img srcset="images/automat@2x.png 2x" src="images/automat.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="app-auto__link">
                                    <Link className="link-active" to="/en\app-cleverence-en.html">Android app for<br/> goods
                                        accounting<br/> automatization</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-9">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-4 col-lg-8 offset-lg-4 col-xl-8 offset-xl-4">
                            <div className="frontol-app emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="frontol-app__img">
                                    <Link className="img-link" to="/en\frontol-trade-en.html">
                                        <picture>
                                            <source srcset="images/frontol@2x.webp 2x" src="images/frontol.webp" type="image/webp"/>
                                            <img srcset="images/frontol@2x.png 2x" src="images/frontol.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="frontol-app__link">
                                    <Link className="link-active" to="/en\frontol-trade-en.html">Frontol Trade — a windows app <br className="br-mob"/>for inventory system</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-10">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="case emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                <div className="case__img">
                                    <picture>
                                        <source srcset="images/case@2x.webp 2x" src="images/case.webp" type="image/webp"/>
                                        <img srcset="images/case@2x.png 2x" src="images/case.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>
                                <div className="case__link">
                                    <p>iPhone case styled as<br/> a pipeline marker. 2020</p>
                                    <p><Link className="link-active" target="_blank" to="https://www.figma.com/file/TVEB5VOD4GQsqSGAIKqh0u/%D0%A7%D0%B5%D1%85%D0%BB%D1%8B-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BE%D0%B2?node-id=0%3A1">
                                        Download highres</Link></p>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-1 col-lg-8 offset-lg-1 col-xl-8 offset-xl-1">
                            <div className="frontol-illust emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="frontol-illust__img">
                                    <Link className="img-link illust-links" to="/en\frontol-illustrations-en.html">
                                        <picture>
                                            <source srcset="images/frontol-illust1@2x.webp 2x" src="images/frontol-illust1.webp" type="image/webp"/>
                                            <img srcset="images/frontol-illust1@2x.png 2x" src="images/frontol-illust1.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                    <Link className="img-link illust-links" to="/en\frontol-illustrations-en.html">
                                        <picture>
                                            <source srcset="images/frontol-illust2@2x.webp 2x" src="images/frontol-illust2.webp" type="image/webp"/>
                                            <img srcset="images/frontol-illust2@2x.png 2x" src="images/frontol-illust2.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>

                                <div className="frontol-illust__link">
                                    <Link className="link-active" to="/en\frontol-illustrations-en.html">Illustrations and
                                        fliers<br/> for Frontol programs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-11">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                            <div className="bks-partners emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                <div className="bks-partners__img">
                                    <Link className="img-link" to="/en\bks-partners-en.html">
                                        <picture>
                                            <source srcset="images/bks-partners@2x.webp 2x" src="images/bks-pantners.webp" type="image/webp"/>
                                            <img srcset="images/bks-partners@2x.png 2x" src="images/bks-pantners.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>

                                <div className="bks-partners__link">
                                    <Link className="link-active" to="/en\bks-partners-en.html">Partner websites for<br/> BCS
                                        Financial Group</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                            <div className="olivier emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="olivier__img">
                                    <Link className="img-link" to="/en\olivier-en.html">
                                        <picture>
                                            <source srcset="images/olivier@2x.webp 2x" src="images/olivier.webp" type="image/webp"/>
                                            <img srcset="images/olivier@2x.png 2x" src="images/olivier.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="olivier__link">
                                    <Link className="link-active" to="/en\olivier-en.html">"Olivier"<br/> portal logo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-12">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="bks-items">
                                <div className="bks-graph emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                    <div className="bks-graph__img">
                                        <Link className="img-link" to="/en\bks-invest-en.html">
                                            <img className="desk-link" src="/bks-graph.b0319758.svg" alt=""/>
                                            <picture className="mob-link">
                                                <source srcset="images/bks-graph-mob@2x.webp 2x" src="images/bks-graph-mob.webp" type="image/webp"/>
                                                <img srcset="images/bks-graph-mob@2x.png 2x" src="images/bks-graph-mob.png" loading="lazy" alt=""/>
                                            </picture>
                                        </Link>
                                    </div>

                                    <div className="bks-graph__link">
                                        <Link className="link-active" to="/en\bks-invest-en.html">Investment <br/>
                                            reports for clients <br/>of BCS company</Link>
                                    </div>
                                </div>

                                <div className="mob-cash emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                    <div className="mob-cash__img">
                                        <Link className="img-link" to="/en\app-1c-en.html">
                                            <img src="images/1c-mob.svg" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="mob-cash__link">
                                        <Link className="link-active" to="/en\app-1c-en.html">1C cashiers <br/>mobile app</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="song emerge" data-effect="slide" data-duration="300" data-down="25%" data-continue="true">
                                <div className="song__img">
                                    <Link className="img-link" to="https://www.youtube.com/watch?v=Wsf11rHnO9c" target="_blank">
                                        <picture>
                                            <source srcset="images/song@2x.webp 2x" src="images/song.webp" type="image/webp"/>
                                            <img srcset="images/song@2x.png 2x" src="images/song.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="song__link">
                                    <Link className="link-active" to="https://www.youtube.com/watch?v=Wsf11rHnO9c" target="_blank">Music video<br/> &laquo;Ты&nbsp;говоришь&raquo;</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                            <div className="butcher emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="butcher__img">
                                    <picture>
                                        <source srcset="images/butcher@2x.webp 2x" src="imagesbutcher.webp" type="image/webp"/>
                                        <img srcset="images/butcher@2x.png 2x" src="images/butcher.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>
                                <div className="butcher__link">
                                    <p>Ivan Vasilievich changes profession to a butcher for the Year of Films calendar.
                                        2016</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="mob-cash mob-cash__second  emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                <div className="mob-cash__img">
                                    <Link className="img-link" to="/en\app-1c-en.html">
                                        <img src="images/1c-mob-second.svg" alt=""/>
                                    </Link>
                                </div>
                                <div className="mob-cash__link">
                                    <Link className="link-active" to="/en\app-1c-en.html">1C cashiers<br/> mobile app</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-13">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="marketing emerge" data-effect="slide" data-duration="300" data-right="25%" data-continue="true">
                                <div className="marketing__img">
                                    <Link className="img-link" to="https://www.youtube.com/watch?v=W0B_QFWCRd4" target="_blank">
                                        <picture>
                                            <source srcset="images/marketing@2x.webp 2x" src="images/marketing.webp" type="image/webp"/>
                                            <img srcset="images/marketing@2x.png 2x" src="images/marketing.png" loading="lazy" alt=""/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="marketing__info">
                                    <div className="marketing__link">
                                        <Link className="link-active" to="https://www.youtube.com/watch?v=W0B_QFWCRd4" target="_blank">Ad shooting</Link>
                                    </div>
                                    <div className="marketing__desc">
                                        <span>with Anton Medvedev</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 offset-sm-0 col-md-2 offset-md-1 col-lg-2 offset-lg-1 col-xl-2 offset-xl-1">
                            <div className="sun-cake emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="sun-cake__img">
                                    <img src="images/sun-cake.svg" alt=""/>
                                </div>
                                <div className="sun-cake__link">
                                    <p>Sun Cake<br className="br-mob"/> naming<br className="br-mob"/>
                                        and logo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row-14 br-mob">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="icons emerge" data-effect="slide" data-duration="300" data-down="25%" data-continue="true">
                                <div className="icons__img">
                                    <picture>
                                        <source srcset="images/icons@2x.webp 2x" src="images/icons.webp" type="image/webp"/>
                                        <img srcset="images/icons@2x.png 2x" src="images/icons.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="icons__desc">
                                    <span>i-Retail icons. 2015</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="container">
                    <div class="footer__container">
                        <div class="row">
                            <div class="col-12">

                            <div class="page-info">
                                    <div class="col-12 col-md-6">
                                        <div class="page-info__desc emerge" data-effect="fade" data-duration="300">
                                            <span>I design apps, websites and <br class="br-mob"/>some funny things.</span>
                                            <span>If you want to work with me, <br class="br-mob"/>reach me via&nbsp;
                                                <Link
                                                class="link-active"
                                                target="_blank"
                                                to="mailto:tugolukovskiy@gmail.com">mail</Link>
                                                &nbsp;or&nbsp;<Link class="link-active"
                                                        target="_blank"
                                                        to="https://t.me/tugolukovskiy">telegram</Link>.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="footer__blocks">
                                <div class="footer__year">
                                    <p>&#169; 2013 <span class="footer__dash">———</span>
                                        <span class="footer__dash-mob">—————————————————————</span>
                                        <span class="current-year">&nbsp;</span>
                                    </p>
                                </div>

                                <div class="footer__dev emerge" data-effect="fade" data-duration="300">
                                    <span>Code by </span>
                                    <Link class="link-active" to="https://t.me/kostennikov"
                                        target="_blank">Pasha Kostennikov</Link>
                                </div>

                                <div class="footer__links">
                                    <Link class="link-active emerge" data-effect="fade" data-duration="300"
                                    to="mailto:tugolukovskiy@gmail.com">tugolukovskiy@gmail.com</Link>
                                    <Link class="link-active emerge" data-effect="fade" data-duration="300" to="https://t.me/tugolukovskiy" target="_blank">telegram</Link>
                                    <Link class="link-active link-margin emerge" data-effect="fade" data-duration="300" to="https://www.instagram.com/tugolukovskiy/"
                                    target="_blank">insta<span class="link-active__inst">gram</span></Link>
                                    <div className={!ru ? 'link-active link-lang' : 'link-active link-deactive link-lang'} 
                                        onClick={e => setRu(!ru)}>
                                            ру
                                    </div>                             
                                    <img className={!ru ? 'lang-arrow lang-arrow-reverse' : 'lang-arrow'} src="images/lang-arrow.svg" alt="" />
                                    <div className={!ru ? 'link-deactive link-active' : 'link-active'} 
                                        onClick={e => setRu(ru)}>
                                            en
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
        )}
     </div>
    );
  }

  export default Home;