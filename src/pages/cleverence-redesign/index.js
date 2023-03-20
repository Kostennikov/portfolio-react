import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
// import { useHistory, useLocation } from "react-router";
import "../../static/scss/layout.scss";
import "../../static/scss/cleverence-redesign.scss";
function CleverenceRedesign(props) {
    const { lang } = props;
   
    const [ru, setRu] = useState(lang);
    console.log('lang', ru);
    useEffect (() => {
        //! v.2.0 http://ilyabirman.net/projects/emerge/
        
        (function(){"use strict";const emerge="emerge";const emergeSpin="emerge-spin-element";const waitingForView=new WeakMap;const spinner=new WeakMap;const defaultDuration=500;const spinner_defaults=Object.freeze({spinSize:24,spinColor:"#404040",spinDirection:"clockwise",spinPeriod:1333,duration:defaultDuration});const cssImageProps=["backgroundImage","borderImage","borderCornerImage","listStyleImage","cursor"];const cssUrlRegex=/url\(\s*(['"]?)(.*?)\1\s*\)/g;function ready(callback){if(document.readyState!=="loading"){callback()}else{document.addEventListener("readystatechange",function(){if(document.readyState==="interactive"){callback()}},{passive:true})}}function spinnerCode(diameter,color,direction,period,fadeDuration){const element=document.createElement("div");Object.assign(element.style,{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",transition:`opacity ${fadeDuration}ms ease-out`});element.innerHTML="<svg viewBox='0 0 100 100' display='block'>"+"<defs><mask id='cut'>"+"<rect width='100' height='100' fill='white' stroke='none' />"+"<circle r='40' cx='50' cy='50' fill='black' stroke='none' />"+"<polygon points='50,50 100,25 150,50 100,75' fill='black'"+"stroke='none' transform-origin='center center' />"+"</mask></defs>"+"<circle r='50' cx='50' cy='50' mask='url(#cut)' stroke='none' />"+"</svg>";const svg=element.firstElementChild;svg.setAttribute("width",diameter);svg.setAttribute("hight",diameter);svg.lastElementChild.setAttribute("fill",color);element.firstElementChild.animate([{transform:"rotate(0turn)"},{transform:"rotate(1turn)"}],{duration:Number(period),iterations:Infinity,direction:direction==="counter-clockwise"?"reverse":"normal"});return element}function withinView(el){const bodyHeight=Math.min(document.body.clientHeight,document.documentElement.clientHeight);const position=el.getBoundingClientRect().top;const scrollTop=window.pageYOffset||document.documentElement.scrollTop;return position-scrollTop<bodyHeight}function getEmergeElements(){return Array.from(document.querySelectorAll(`.${emerge}`))}const imgLoaded=function(){const cache=Object.create(null);return function imgLoaded(url){if(cache[url]!==undefined){return cache[url]}cache[url]=new Promise(function(resolve){const img=document.createElement("img");img.src=url;if(img.complete){resolve()}else{img.addEventListener("load",()=>resolve());img.addEventListener("error",()=>resolve())}});return cache[url]}}();function eventDispatched(element,event){return new Promise(function(resolve){if(element.readyState>=4){resolve()}else{element.addEventListener(event,()=>resolve())}})}function get_element_to_wait_for(element,previous){return element.dataset.await!==undefined?document.getElementById(element.dataset.await):element.dataset.continue!==undefined?previous:undefined}function is_cyclic(element){let next=element;while(next.dataset.await!==undefined){next=document.getElementById(next.dataset.await);if(next===null){return false}if(next===element){return true}}return false}function fire(element){const spinElement=spinner.get(element);if(spinElement){spinElement.style.opacity=0;setTimeout(function(){if(element.parentNode.style.position==="relative"){element.parentNode.style.position=null}spinElement.remove()},defaultDuration)}element.style.transition=`opacity ${defaultDuration}ms ease-out`;element.style.opacity=1;const style2=element.dataset["style-2"];if(style2){element.setAttribute("style",element.getAttribute("style")+"; "+style2)}console.log("  FIRED!",element.id)}const viewWatcher=new IntersectionObserver(function(entries,watcher){entries.forEach(function(entry){if(entry.isIntersecting||withinView(entry.target)){if(waitingForView.has(entry.target)){waitingForView.get(entry.target)()}waitingForView.delete(entry.target);watcher.unobserve(entry.target);fire(entry.target)}})});function play(){const promises=new WeakMap;getEmergeElements().forEach(function(self,index,emerging){if(self.dataset.await&&document.getElementById(self.dataset.await)===null){throw`Emerge: Element with ID “${self.dataset.await}” not found.`}const previous=emerging[index-1];const box=self.getBoundingClientRect();const duration=self.dataset.duration||defaultDuration;let style1="";let style2="";const effect=self.dataset.effect||false;if(self.dataset.opaque){self.style.opacity=1}if(effect){let fxData={};const cssTransform="transform";const cssTransformOrigin="transform-origin";let up=self.dataset.up||0;const down=self.dataset.down||0;let left=self.dataset.left||0;const right=self.dataset.right||0;let angle=self.dataset.angle||"90";let scale=self.dataset.scale||-1;let origin=self.dataset.origin||"50% 50%";if(down){up="-"+down;if(up.substr(0,2)==="--"){up=up.substr(2)}}if(right){left="-"+right;if(left.substr(0,2)==="--"){left=left.substr(2)}}if(effect==="relax"){if(scale===-1){scale=.92}if(origin==="50% 50%"){origin="top"}fxData={one:"scaleY("+scale+")",two:"scaleY(1)",orn:origin,crv:"cubic-bezier(0, 0, 0.001, 1)"}}if(effect==="slide"){if(!up){up="20px"}fxData={one:"translate("+left+","+up+")",two:"translate(0,0)",crv:"cubic-bezier(0, 0.9, 0.1, 1)"}}if(effect==="zoom"){if(scale===-1){scale=.5}fxData={one:"scale("+scale+")",two:"scale(1)",orn:origin,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}}if(effect==="screw"){if(scale===-1){scale=.5}if(!angle){angle=90}fxData={one:"scale("+scale+") rotate("+angle+"deg)",two:"scale(1) rotate(0)",orn:origin,crv:"cubic-bezier(0, 0.75, 0.25, 1)"}}if(fxData){style1+=`${cssTransform}: ${fxData.one};`+`${cssTransformOrigin}: ${fxData.orn};`;style2+=cssTransform+": "+fxData.two+"; "+"transition: "+"opacity "+duration+"ms ease-out, "+`${cssTransform} ${duration}ms ${fxData.crv};`}self.dataset["style-1"]=style1;self.dataset["style-2"]=style2}if(!style1){style1=self.dataset["style-1"]}if(style1){self.setAttribute("style",self.getAttribute("style")+"; "+style1)}const first=[];first.push(Promise.all([self].concat(Array.from(self.querySelectorAll("*"))).reduce(function(sources,element){if(element.nodeName.toLowerCase()==="img"){sources.push(imgLoaded(element.src))}else if(element.nodeName.toLowerCase()==="video"){sources.push(eventDispatched(element,element.dataset["emerge-event"]||"canplaythrough"))}const css=getComputedStyle(element);cssImageProps.forEach(function(key){const value=css[key];let match;if(value&&value.indexOf("url(")!==-1){while(true){match=cssUrlRegex.exec(value);if(match===null){break}sources.push(imgLoaded(match[2]))}}});return sources},[])));const element_to_wait_for=get_element_to_wait_for(self,previous);if(element_to_wait_for!==undefined&&!is_cyclic(self)){first.push(new Promise(function(resolve){queueMicrotask(function(){promises.get(element_to_wait_for).then(resolve)})}))}let last;const hold=Number(self.dataset.hold);if(self.dataset.expose!==undefined&&!withinView(self)){last=new Promise(function(resolve){viewWatcher.observe(self);waitingForView.set(self,resolve)})}else if(!Number.isNaN(hold)){last=function(){let callback;const promise=new Promise(function(resolve){callback=resolve});return function(){setTimeout(callback,hold);return promise}}()}else{last=Promise.resolve()}promises.set(self,Promise.all(first).then(function(){return typeof last==="function"?last():last}));promises.get(self).then(function(){fire(self)});if(self.dataset.spin){let spinElement;const customSpinner=document.getElementById(self.dataset.spinElement);if(customSpinner!==null){spinElement=customSpinner.cloneNode(true);spinElement.style.position="absolute";spinElement.style.display="block"}else{const spinnerOptions=Object.keys(spinner_defaults).reduce(function(options,key){options[key]=self.dataset[key]===undefined?spinner_defaults[key]:self.dataset[key];return options},{});spinElement=spinnerCode(...Object.values(spinnerOptions))}spinElement.style.width="100%";spinElement.style.height=Math.min(box.height,document.body.clientHeight-(self.getBoundingClientRect().top+window.pageYOffset))+"px";spinElement.classList.add(emergeSpin);if(getComputedStyle(self.parentNode).position==="static"){self.parentNode.style.position="relative"}self.parentNode.insertBefore(spinElement,self);spinner.set(self,spinElement)}})}function repeat(event){event.preventDefault();console.log("REPLAY");getEmergeElements().forEach(function(element){element.style.transition=null;element.style.opacity=null});document.querySelectorAll(`.${emergeSpin}`).forEach(function(element){element.remove()});play()}if(window.IntersectionObserver===undefined||document.documentElement.animate===undefined){return}if(window.navigator&&window.navigator.loadPurpose==="preview"){getEmergeElements().forEach(function(element){element.style.transition="none";element.style.opacity=1});return false}const style=document.createElement("style");style.innerHTML=`.${emerge} { opacity: 0; }`;document.head.append(style);ready(function(){play();document.querySelectorAll(".emerge-replay").forEach(function(element){element.addEventListener("click",repeat)})})})();
        
        let date = new Date().getFullYear();
        document.querySelector('.current-year').innerHTML = '&nbsp;' + date;
    }, [ru]) 
    
    useEffect (() => {
        const windowWidth = document.querySelector('body').offsetWidth;
        const headerLinks = document.querySelector('.header__links');
        headerLinks.scrollLeft = windowWidth * 100;
    }, []) 

    return (
        <div className='cleverence-redesign'>
          {ru && (
            <Fragment>
                <header className="header emerge" data-effect="relax" data-duration="300" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="сol-12 col-xl-12">
                                <div className="header__title">
                                    <div className="header__name">
                                        <img className="header__name-img" srcset="images/ava@2x.png 2x" src="images/ava.png" alt=""/>
                                        <Link className="ava__link" to="/">Ярослав Туголуковский</Link>
                                    </div>

                                    <div className="header__links">
                                        <Link className="header__link" to="app-cleverence.html">Приложение&nbsp;«Склад&nbsp;15»</Link>
                                        <Link className="header__link active"
                                        to="cleverence-redesign.html">Редизайн&nbsp;логотипов</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="hero emerge" data-effect="slide" data-duration="250" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="hero-app">
                                    <picture>
                                        <source srcset="images/hero/redesign-hero-mob@2x.webp 2x"
                                                src="images/hero/redesign-hero-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/hero/redesign-hero-mob.png"
                                                srcset="images/hero/redesign-hero-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/hero/redesign-hero@2x.webp 2x" src="images/hero/redesign-hero.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/hero/redesign-hero@2x.png 2x" src="images/hero/redesign-hero.png"
                                            alt=""/>
                                    </picture>
                                    <div className="hero-app__desc">
                                        <h5>Редизайн<br/> логотипов<br/> Клеверенс</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-1 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 offset-sm-0 col-md-6 col-lg-6 col-xl-6 offset-md-1">
                                <div className="row-1__desc">
                                    <p>Компания «Клеверенс» делает приложения для автоматизации учёта самых разных вещей. Я и
                                        Вова Лаврентьев освежили логотипы, которые давно в этом нуждались.<br className="br-desk"/>
                                        Было так:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className="preview emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <div className="preview__img">
                                        <picture>
                                            <source srcset="images/cleverence-redesign/redesign-1-mob@2x.webp 2x"
                                                    src="images/cleverence-redesign/redesign-1-mob.webp"
                                                    type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/cleverence-redesign/redesign-1-mob.png"
                                                    srcset="images/cleverence-redesign/redesign-1-mob@2x.png"
                                                    alt="" media="(max-width: 767px)"/>

                                            <source srcset="images/cleverence-redesign/redesign-1@2x.webp 2x"
                                                    src="images/cleverence-redesign/redesign-1.webp"
                                                    type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcset="images/cleverence-redesign/redesign-1@2x.png 2x"
                                                src="images/cleverence-redesign/redesign-1.png"
                                                alt=""/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-3 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div className="row-3__desc">
                                    <p>А стало вот так:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300"
                                data-down="10%" data-continue="true">
                                <div className="row-4__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-2-1@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-2-1.webp"
                                                type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-2-1@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-2-1.png" loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>

                                <div className="row-4__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="800"
                                data-left="25%" data-continue="true">
                                <div className="row-4__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-2-2@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-2-2.webp"
                                                type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-2-2@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-2-2.png" loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>

                                <div className="row-4__right-desc">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300"
                                data-down="10%" data-continue="true">
                                <div className="row-5__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-3-1@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-3-1.webp"
                                                type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-3-1@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-3-1.png" loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>

                                <div className="row-5__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 br-desk emerge" data-effect="slide" data-duration="300"
                                data-down="10%" data-continue="true">
                                <div className="row-5__center-desc">
                                    <p>У каждого логотипа есть несколько альтернативных версий для самых разных ситуаций.</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300"
                                data-left="25%" data-continue="true">
                                <div className="row-5__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-3-2-mob@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-3-2-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/cleverence-redesign/redesign-3-2-mob.png"
                                                srcset="images/cleverence-redesign/redesign-3-2-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/cleverence-redesign/redesign-3-2@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-3-2.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/cleverence-redesign/redesign-3-2@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-3-2.png"
                                            alt=""/>
                                    </picture>
                                </div>
                                <div className="row-5__right-desc br-mob">
                                    <p>У каждого логотипа есть несколько альтернативных версий для самых разных ситуаций.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 order-two emerge" data-effect="slide" data-duration="300"
                                data-down="10%" data-continue="true">
                                <div className="row-6__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-4-1@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-4-1.webp"
                                                type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-4-1@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-4-1.png" loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>

                                <div className="row-6__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="800"
                                data-left="25%" data-continue="true">
                                <div className="row-6__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-4-2@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-4-2.webp"
                                                type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-4-2@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-4-2.png" loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>

                                <div className="row-6__right-desc">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 emerge br-desk" data-effect="slide"
                                data-duration="300"
                                data-down="10%" data-continue="true">

                                <div className="row-7__desc">
                                    <p>Подпись «by Mobile Smarts перестала быть неотъемлемой частью логотипа и незавязчиво
                                        появляется, когда нужно намекнуть о платформе.</p>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 emerge" data-effect="slide"
                                data-duration="300"
                                data-down="10%" data-continue="true">
                                <div className="row-7__img ">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-5-mob@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-5-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/cleverence-redesign/redesign-5-mob.png"
                                                srcset="images/cleverence-redesign/redesign-5-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/cleverence-redesign/redesign-5@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-5.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/cleverence-redesign/redesign-5@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-5.png"
                                            alt=""/>
                                    </picture>

                                </div>

                                <div className="row-7__img-desc br-mob">
                                    <p>Подпись «by Mobile Smarts перестала быть неотъемлемой частью логотипа и незавязчиво
                                        появляется, когда нужно намекнуть о платформе.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300"
                                data-down="10%" data-continue="true">
                                <div className="row-8__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-6-1@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-6-1.webp"
                                                type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-6-1@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-6-1.png" loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>

                                <div className="row-8__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="800"
                                data-left="25%" data-continue="true">
                                <div className="row-8__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-6-2@2x.webp 2x"
                                                src="images/cleverence-redesign/redesign-6-2.webp"
                                                type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-6-2@2x.png 2x"
                                            src="images/cleverence-redesign/redesign-6-2.png" loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>

                                <div className="row-8__right-desc">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="footer__container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-info">
                                        <div className="page-info__made">
                                            <img src="images/checked.svg" alt=""/>
                                            <p>Сделано&nbsp;в 2021&nbsp;году<br className="br-mob"/> за 4 дня</p>
                                        </div>
                                        <div className="page-info__persons no-scroll">

                                            <div className="page-info__person">
                                                <img srcset="images/ava@2x.png" src="images/ava.png" alt=""/>
                                                <div className="page-info__data">
                                                    <div className="page-info__data-name">
                                                        <Link to="index.html">Ярослав
                                                            <br/> Туголуковский</Link>
                                                    </div>
                                                    <div className="page-info__data-proff">
                                                        <p>арт-директор</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="page-info__person">
                                                <img srcset="images/vova@2x.png" src="images/vova.png" alt=""/>
                                                <div className="page-info__data">
                                                    <div className="page-info__data-name">
                                                        <Link to="https://www.behance.net/Lavrentew"
                                                        target="_blank">Владимир<br/>Лаврентьев</Link>
                                                    </div>
                                                    <div className="page-info__data-proff">
                                                        <p>дизайнер</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="page-info__feedback">
                                            <div className="page-info__feedback-desc">
                                                <p>См.&nbsp;дальше:</p>
                                                <Link className="page-info__feedback-link" to="1c-prosto.html">Сайт «1С-Просто»</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div
                                    className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                                    <div className="mobile-link emerge" data-effect="slide" data-duration="300" data-up="20px"
                                        data-left="25%" data-continue="true">
                                        <div className="mobile-link__img">
                                            <Link className="img-link" to="1c-prosto.html">
                                                <picture>
                                                    <source srcset="images/1c-prosto/1c-prosto-link-mob@2x.webp 2x"
                                                            src="images/1c-prosto/1c-prosto-link-mob.webp" type="image/webp"/>
                                                    <img srcset="images/1c-prosto/1c-prosto-link-mob@2x.png 2x"
                                                        src="images/1c-prosto/1c-prosto-link-mob.png" loading="lazy" alt=""/>
                                                </picture>
                                            </Link>
                                        </div>

                                        <div className="mobile-link__link">
                                            <Link className="link-active" to="1c-prosto.html"><span>Далее:</span> Сайт
                                                1С-Просто</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer__blocks">
                                    <div className="footer__year">
                                        <p>&#169; 2013 <span className="footer__dash">———</span>
                                            <span className="footer__dash-mob">—————————————————————</span>
                                            <span className="current-year">&nbsp;</span>
                                        </p>
                                    </div>

                                    <div className="footer__links">
                                        <Link className="link-active emerge" data-effect="fade" data-duration="300"
                                        to="mailto:tugolukovskiy@gmail.com">tugolukovskiy@gmail.com</Link>
                                        <Link className="link-active emerge" data-effect="fade" data-duration="300" to="https://t.me/tugolukovskiy" target="_blank">телеграм</Link>
                                        <Link className="link-active link-margin emerge" data-effect="fade" data-duration="300" to="https://www.instagram.com/tugolukovskiy/"
                                        target="_blank">инста<span className="link-active__inst">грам</span></Link>
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
                <header className="header emerge" data-effect="relax" data-duration="300" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="сol-12 col-xl-12">
                                <div className="header__title">
                                    <div className="header__name">
                                        <img className="header__name-img" srcset="images/ava@2x.png 2x" src="images/ava.png" alt=""/>
                                        <Link className="ava__link" to="/en\index-en.html">Yaroslav Tugolukovskiy</Link>
                                    </div>

                                    <div className="header__links header__lang">
                                        <Link className="header__link" to="/en\app-cleverence-en.html">‘Warehouse 15’ app</Link>
                                        <Link className="header__link active" to="/en\cleverence-redesign-en.html">Logos redesign</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="hero emerge" data-effect="slide" data-duration="250" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="hero-app">
                                    <picture>
                                        <source srcset="images/hero/redesign-hero-mob@2x.webp 2x" src="images/hero/redesign-hero-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/hero/redesign-hero-mob.png" srcset="images/hero/redesign-hero-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/hero/redesign-hero@2x.webp 2x" src="images/hero/redesign-hero.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/hero/redesign-hero@2x.png 2x" src="images/hero/redesign-hero.png" alt=""/>
                                    </picture>
                                    <div className="hero-app__desc">
                                        <h5>Cleverence <br/>logos redesign</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-1 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 offset-sm-0 col-md-6 col-lg-6 col-xl-6 offset-md-1">
                                <div className="row-1__desc"><p>Cleverence is one of the biggest developers of goods accounting
                                    automatization apps.
                                    Vova Lavrentiev and I have refreshed apps logos, that have long needed it. <br className="br-desk"/>That's how they used to look:</p></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className="preview emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <div className="preview__img">
                                        <picture>
                                            <source srcset="images/cleverence-redesign/redesign-1-mob@2x.webp 2x" src="images/cleverence-redesign/redesign-1-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/cleverence-redesign/redesign-1-mob.png" srcset="images/cleverence-redesign/redesign-1-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                            <source srcset="images/cleverence-redesign/redesign-1@2x.webp 2x" src="images/cleverence-redesign/redesign-1.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcset="images/cleverence-redesign/redesign-1@2x.png 2x" src="images/cleverence-redesign/redesign-1.png" alt=""/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-3 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div className="row-3__desc">
                                    <p>And this is how they look now:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div className="row-4__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-2-1@2x.webp 2x" src="images/cleverence-redesign/redesign-2-1.webp" type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-2-1@2x.png 2x" src="images/cleverence-redesign/redesign-2-1.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="row-4__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="800" data-left="25%" data-continue="true">
                                <div className="row-4__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-2-2@2x.webp 2x" src="images/cleverence-redesign/redesign-2-2.webp" type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-2-2@2x.png 2x" src="images/cleverence-redesign/redesign-2-2.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="row-4__right-desc">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div className="row-5__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-3-1@2x.webp 2x" src="images/cleverence-redesign/redesign-3-1.webp" type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-3-1@2x.png 2x" src="images/cleverence-redesign/redesign-3-1.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="row-5__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 br-desk emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div className="row-5__center-desc">
                                    <p>Each logo has multiple versions for different situations.</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300" data-left="25%" data-continue="true">
                                <div className="row-5__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-3-2-mob@2x.webp 2x" src="images/cleverence-redesign/redesign-3-2-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/cleverence-redesign/redesign-3-2-mob.png" srcset="images/cleverence-redesign/redesign-3-2-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/cleverence-redesign/redesign-3-2@2x.webp 2x" src="images/cleverence-redesign/redesign-3-2.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/cleverence-redesign/redesign-3-2@2x.png 2x" src="images/cleverence-redesign/redesign-3-2.png" alt=""/>
                                    </picture>
                                </div>
                                <div className="row-5__right-desc br-mob">
                                    <p>Each logo has multiple versions for different situations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 order-two emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div className="row-6__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-4-1@2x.webp 2x" src="images/cleverence-redesign/redesign-4-1.webp" type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-4-1@2x.png 2x" src="images/cleverence-redesign/redesign-4-1.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="row-6__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="800" data-left="25%" data-continue="true">
                                <div className="row-6__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-4-2@2x.webp 2x" src="images/cleverence-redesign/redesign-4-2.webp" type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-4-2@2x.png 2x" src="images/cleverence-redesign/redesign-4-2.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="row-6__right-desc">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 emerge br-desk" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">

                                <div className="row-7__desc">
                                    <p>The description "by Mobile Smarts" ceased to be an inalienable
                                        part of the logo and appears when a hint about the platform is needed.</p>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div className="row-7__img ">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-5-mob@2x.webp 2x" src="images/cleverence-redesign/redesign-5-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/cleverence-redesign/redesign-5-mob.png" srcset="images/cleverence-redesign/redesign-5-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/cleverence-redesign/redesign-5@2x.webp 2x" src="images/cleverence-redesign/redesign-5.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/cleverence-redesign/redesign-5@2x.png 2x" src="images/cleverence-redesign/redesign-5.png" alt=""/>
                                    </picture>

                                </div>

                                <div className="row-7__img-desc br-mob">
                                    <p>The description "by Mobile Smarts" ceased to be an inalienable
                                        part of the logo and appears when a hint about the platform is needed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div className="row-8__left">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-6-1@2x.webp 2x" src="images/cleverence-redesign/redesign-6-1.webp" type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-6-1@2x.png 2x" src="images/cleverence-redesign/redesign-6-1.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="row-8__left-desc">
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 emerge" data-effect="slide" data-duration="800" data-left="25%" data-continue="true">
                                <div className="row-8__right">
                                    <picture>
                                        <source srcset="images/cleverence-redesign/redesign-6-2@2x.webp 2x" src="images/cleverence-redesign/redesign-6-2.webp" type="image/webp"/>
                                        <img srcset="images/cleverence-redesign/redesign-6-2@2x.png 2x" src="images/cleverence-redesign/redesign-6-2.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>

                                <div className="row-8__right-desc">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div className="container">
                        <div className="footer__container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-info">
                                        <div className="page-info__made">
                                            <img src="images/checked.svg" alt=""/>
                                            <p>Made in 2021<br className="br-mob"/> in 4 days</p>
                                        </div>
                                        <div className="page-info__persons no-scroll">

                                            <div className="page-info__person">
                                                <img srcset="images/ava@2x.png" src="images/ava.png" alt=""/>
                                                <div className="page-info__data">
                                                    <div className="page-info__data-name">
                                                        <Link to="/en\index-en.html">Yaroslav <br/>
                                                            Tugolukovskiy</Link>
                                                    </div>
                                                    <div className="page-info__data-proff">
                                                        <p>art-director</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="page-info__person">
                                                <img srcset="images/vova@2x.png" src="images/vova.png" alt=""/>
                                                <div className="page-info__data">
                                                    <div className="page-info__data-name">
                                                        <Link to="https://www.behance.net/Lavrentew" target="_blank">Vladimir<br/>Lavrentiev</Link>
                                                    </div>
                                                    <div className="page-info__data-proff">
                                                        <p>designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="page-info__feedback">
                                            <div className="page-info__feedback-desc">
                                                <p>Next:</p>
                                                <Link className="page-info__feedback-link" to="/en\1c-prosto-en.html">1C-Prosto</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                                    <div className="mobile-link emerge" data-effect="slide" data-duration="300" data-up="20px" data-left="25%" data-continue="true">
                                        <div className="mobile-link__img">
                                            <Link className="img-link" to="/en\1c-prosto-en.html">
                                                <picture>
                                                    <source srcset="images/1c-prosto-link-mob@2x.webp 2x" src="images/1c-prosto-link-mob.webp" type="image/webp"/>
                                                    <img srcset="images/1c-prosto-link-mob@2x.png 2x" src="images/1c-prosto-link-mob.png" loading="lazy" alt=""/>
                                                </picture>
                                            </Link>
                                        </div>

                                        <div className="mobile-link__link">
                                            <Link className="link-active" to="/en\1c-prosto-en.html"><span>Next:</span> 1C-Prosto</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer__blocks">
                                    <div className="footer__year">
                                        <p>&#169; 2013 <span className="footer__dash">———</span>
                                            <span className="footer__dash-mob">—————————————————————</span>
                                            <span className="current-year">&nbsp;</span>
                                        </p>
                                    </div>

                                    <div className="footer__links">
                                        <Link className="link-active emerge" data-effect="fade" data-duration="300"
                                        to="mailto:tugolukovskiy@gmail.com">tugolukovskiy@gmail.com</Link>
                                        <Link className="link-active emerge" data-effect="fade" data-duration="300" to="https://t.me/tugolukovskiy" target="_blank">telegram</Link>
                                        <Link className="link-active link-margin emerge" data-effect="fade" data-duration="300" to="https://www.instagram.com/tugolukovskiy/"
                                        target="_blank">insta<span className="link-active__inst">gram</span></Link>
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

  export default CleverenceRedesign;