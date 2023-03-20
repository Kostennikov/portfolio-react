import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
// import { useHistory, useLocation } from "react-router";

import "../../static/scss/layout.scss";
import "../../static/scss/1c-prosto.scss";
function Prosto() {
    const [ru, setRu] = useState(true);
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
        <div className='prosto-page'>
        {ru && (
             <Fragment>
                <header class="header emerge" data-effect="relax" data-duration="300" data-continue="true">
                    <div class="container">
                        <div class="row">
                            <div class="сol-12 col-xl-12">
                                <div class="header__title emerge" data-effect="fade" data-duration="200">
                                    <div class="header__name">
                                        <img class="header__name-img" srcset="images/ava@2x.png 2x" src="images/ava.png" alt=""/>
                                        <Link class="ava__link" to="/">Ярослав Туголуковский</Link>
                                    </div>
                                    <div class="header__links">
                                        <Link class="header__link" to="video-chat-1c.html">Видеозвонки</Link>
                                        <Link class="header__link" to="menu-1c.html">Меню</Link>
                                        <Link class="header__link" to="app-1c.html">Мобильная&nbsp;касса</Link>
                                        <Link class="header__link active" to="1c-prosto.html">Сайт&nbsp;1С&nbsp;Просто</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="row-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="hero emerge" data-effect="slide" data-duration="150" data-down="10%"
                                    data-continue="true">
                                     <div class="hero__img">
                                        <picture>
                                            <source srcset="images/hero/1c-prosto-hero-mob@2x.webp 2x" src="images/hero/1c-prosto-hero-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/hero/1c-prosto-hero-mob.png" srcset="images/hero/1c-prosto-hero-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                            <source srcset="images/hero/1c-prosto-hero@2x.webp 2x" src="images/hero/1c-prosto-hero.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcset="images/hero/1c-prosto-hero@2x.png 2x" src="images/hero/1c-prosto-hero.png" alt=""/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="row-1">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="hero__guide">
                                    <div class="hero__title">
                                        <h5>Сайт 1С-Просто</h5>
                                    </div>
                                    <div class="hero__desc">
                                        <p>1С-Просто — это экосистема программ и сервисов 1С для малого и среднего бизнеса. Я
                                            и дизайнер Стас Сизиков нарисовали сайт, на котором подробно рассказано как о всей
                                            системе в целом, так и отдельно о каждом продукте. А Кира Зюбанова нарисовала
                                            умопомрачительные иллюстрации.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800"
                                    data-down="25%" data-continue="true">
                                    <div class="hero__desc-right br-mob">
                                        <img class="img-like" src="images/1c-prosto/1c-prosto-logo.svg" loading="lazy" alt=""/>
                                        <Link to="https://1c-prosto.ru" target="_blank">1c-prosto.ru</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-2__title">
                                    <h5>Для всех</h5>
                                </div>

                            </div>
                        </div>
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-2__desc">
                                    <p>Главная страница встречает панорамой улицы, на которой прописались разные типы
                                        бизнесов, ради которых сделаны продукты 1С-Просто. А затем нескучно демонстирует
                                        основные возможности системы.</p>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="row-2__guide-right emerge" data-effect="slide" data-duration="800"
                                    data-down="25%" data-continue="true">
                                    <div class="row-2__desc-right">
                                        <p>Благодарю 1С за<br/> творческую свободу.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-2__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-page-mob@2x.webp 2x"
                                                src="images/1c-prosto/prosto-page-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/prosto-page-mob.png"
                                                srcset="images/1c-prosto/prosto-page-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/prosto-page@2x.webp 2x"
                                                src="images/1c-prosto/prosto-page.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/prosto-page@2x.png 2x" src="images/1c-prosto/prosto-page.png"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-3">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-3__desc">
                                    <p>Каждая страница продукта собрана с большим вниманием к деталям. Приветственная
                                        иллюстрация погружает в контекст использования, а яркие элементы повествуют о самом
                                        важном.</p>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800"
                                    data-down="25%" data-continue="true">
                                    <div class="hero__desc-right">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-3__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/kassa-page-mob@2x.webp 2x"
                                                src="images/1c-prosto/kassa-page-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/kassa-page-mob.png"
                                                srcset="images/1c-prosto/kassa-page-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/kassa-page@2x.webp 2x"
                                                src="images/1c-prosto/kassa-page.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/kassa-page@2x.png 2x" src="images/1c-prosto/kassa-page.png"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-3-5 br-desk">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-3-5__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-table-mob@2x.webp 2x"
                                                src="images/1c-prosto/prosto-table-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/prosto-table-mob.png"
                                                srcset="images/1c-prosto/prosto-table-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/kassa-page@2x.webp 2x"
                                                src="images/1c-prosto/kassa-page.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/kassa-page@2x.png 2x" src="images/1c-prosto/kassa-page.png"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-4__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/mspos-page-mob@2x.webp 2x"
                                                src="images/1c-prosto/mspos-page-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/mspos-page-mob.png"
                                                srcset="images/1c-prosto/mspos-page-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/mspos-page@2x.webp 2x"
                                                src="images/1c-prosto/mspos-page.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/mspos-page@2x.png 2x" src="images/1c-prosto/mspos-page.png"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-5">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-5__guide">
                                    <div class="row-5__desc">
                                        <p>У каждой продуктовой страницы есть дубликат с подробным описанием всех функций. Он
                                            в точности повторяет структуру основной страницы и выступает местом хранения всех
                                            технических деталей.</p>

                                        <p>На нём есть таблицы, галереи, всякие списки и приложенные документы. В админке
                                            нельзя произвольно менять размеры и цвета шрифтов, чтобы вёрстка всегда выглядела
                                            благородно.</p>

                                        <p class="br-desk">Каждому разделу присвоена уникальная ссылка. Можно скинуть место на
                                            странице своим коллегам или в чат поддержки. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="row-5__guide-right emerge" data-effect="slide" data-duration="800"
                                    data-down="25%" data-continue="true">
                                    <div class="row-5__desc-right">
                                        <img class="img-like" src="images/1c-prosto/link-icon.svg" loading="lazy" alt=""/>
                                        <p class="br-mob">Каждому разделу присвоена уникальная ссылка. Можно скинуть место на
                                            странице своим коллегам или в чат поддержки. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-6">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 offset-sm-0 col-md-9 col-lg-9 col-xl-9">
                                <div class="row-6__img-left emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/text-page-desk-mob@2x.webp 2x"
                                                src="images/1c-prosto/text-page-desk-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/text-page-desk-mob.png"
                                                srcset="images/1c-prosto/text-page-desk-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/text-page-desk@2x.webp 2x"
                                                src="images/1c-prosto/text-page-desk.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/text-page-desk@2x.png 2x"
                                            src="images/1c-prosto/text-page-desk.png"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>

                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 br-mob">
                                <div class="row-6__img-right emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/text-page-mob@2x.webp 2x"
                                                src="images/1c-prosto/text-page-mob.webp" type="image/webp"/>
                                        <img srcset="images/1c-prosto/text-page-mob@2x.png 2x"
                                            src="images/1c-prosto/text-page-mob.png"
                                            loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-7 br-mob">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-7__desc">
                                    <p>А вот некоторые плитки, которые мне особенно нравятся. На сайте они расположены в
                                        разных местах.</p>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800"
                                    data-down="25%" data-continue="true">
                                    <div class="hero__desc-right">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-7__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-cells@2x.webp 2x"
                                                src="images/1c-prosto/prosto-cells.webp" type="image/webp"/>
                                        <img srcset="images/1c-prosto/prosto-cells@2x.png 2x"
                                            src="images/1c-prosto/prosto-cells.png"
                                            loading="lazy"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-8">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-8__desc">
                                    <p class="br-mob">Вишенка на торте — 404-я страница. На ней мы сделали полноценный рабочий
                                        стол с ссылками и рабочей косынкой.</p>
                                    <p class="br-desk">Вишенка на торте — 404-я страница. В десктопной версии мы сделали
                                        полноценный рабочий стол с ссылками и рабочей косынкой. Чтобы увидеть её, откройте эту
                                        страницу с компьютера.</p>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800"
                                    data-down="25%" data-continue="true">
                                    <div class="hero__desc-right">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-8__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                    data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-404-mob@2x.webp 2x"
                                                src="images/1c-prosto/prosto-404-mob.webp"
                                                type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/prosto-404-mob.png"
                                                srcset="images/1c-prosto/prosto-404-mob@2x.png"
                                                alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/prosto-404@2x.webp 2x"
                                                src="images/1c-prosto/prosto-404.webp"
                                                type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/prosto-404@2x.png 2x" src="images/1c-prosto/prosto-404.png"
                                            alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="footer emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div class="container">
                        <div class="footer__container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-info">
                                        <div class="page-info__made">
                                            <img src="images/checked.svg" alt=""/>
                                            <p>Сделано&nbsp;в 2021&nbsp;году<br class="br-mob"/> за 3 месяца</p>
                                        </div>
                                        <div class="page-info__persons no-scroll">

                                            <div class="page-info__person">
                                                <img srcset="images/ava@2x.png" src="images/ava.png" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="index.html">Ярослав
                                                            <br/> Туголуковский</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>арт-директор<br/> и дизайнер</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="page-info__person">
                                                <img srcset="images/stas@2x.png" src="images/stas.png" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="https://sizikovdesign.ru/" target="_blank">Стас<br/>
                                                            Сизиков</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>дизайнер</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="page-info__person">
                                                <img srcset="images/1c-prosto/Kira@2x.png" src="images/1c-prosto/Kira.png" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="https://www.behance.net/_kirah__/projects" target="_blank">Кира<br/>
                                                            Зюбанова</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>иллюстратор</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="page-info__person">
                                                <img src="images/1c-prosto/Sijeko.svg" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="https://sijeko.ru/" target="_blank">Компания<br/> Сиджеко</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>разработчик</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="page-info__feedback">
                                            <div class="page-info__feedback-desc">
                                                <p>См.&nbsp;дальше:</p>
                                                <Link class="page-info__feedback-link" to="take-travel.html">Take Travel</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div
                                    class="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                                    <div class="mobile-link emerge" data-effect="slide" data-duration="300" data-up="20px"
                                        data-left="25%" data-continue="true">
                                        <div class="mobile-link__img">
                                            <Link class="img-link" to="take-travel.html">
                                                <picture>
                                                    <source srcset="images/take-travel-mob@2x.webp 2x"
                                                            src="images/take-travel-mob.webp" type="image/webp"/>
                                                    <img srcset="images/take-travel-mob@2x.png 2x" src="images/take-travel-mob.png"
                                                        loading="lazy" alt=""/>
                                                </picture>
                                            </Link>
                                        </div>

                                        <div class="mobile-link__link">
                                            <Link class="link-active" to="take-travel.html"><span>Далее:</span> Cайт «Take
                                                Travel»</Link>
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

                                    <div class="footer__links">
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
                <header class="header emerge" data-effect="relax" data-duration="300" data-continue="true">
                    <div class="container">
                        <div class="row">
                            <div class="сol-12 col-xl-12">
                                <div class="header__title emerge" data-effect="fade" data-duration="200">
                                    <div class="header__name">
                                        <img class="header__name-img" srcset="images/ava@2x.png 2x" src="images/ava.png" alt=""/>
                                        <Link class="ava__link" to="/en\index-en.html">Yaroslav Tugolukovskiy</Link>
                                    </div>
                                    <div class="header__links">
                                        <Link class="header__link" to="/en\video-chat-1c-en.html">Videocalls</Link>
                                        <Link class="header__link" to="/en\menu-1c-en.html">Menu</Link>
                                        <Link class="header__link" to="/en\app-1c-en.html">Mobile&nbsp;cashier</Link>
                                        <Link class="header__link active" to="/en\1c-prosto-en.html">1C-Prosto</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="row-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="hero emerge" data-effect="slide" data-duration="150" data-down="10%" data-continue="true">
                                    <div class="hero__img">
                                        <picture>
                                            <source srcset="images/hero/1c-prosto-hero-mob@2x.webp 2x" src="images/hero/1c-prosto-hero-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                            <source src="images/hero/1c-prosto-hero-mob.png" srcset="images/hero/1c-prosto-hero-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                            <source srcset="images/hero/1c-prosto-hero@2x.webp 2x" src="images/hero/1c-prosto-hero.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                            <img srcset="images/hero/1c-prosto-hero@2x.png 2x" src="images/hero/1c-prosto-hero.png" alt=""/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="row-1">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="hero__guide">
                                    <div class="hero__title"><h5>1C-Prosto</h5></div>
                                    <div class="hero__desc"><p>1C-Prosto is an ecosystem of 1C apps and services for small and
                                        medium-sized businesses.
                                        Stas Sizikov and I have designed a website, where the whole system is shown in detail as well as each product individually.
                                        And Kira Zyubanova drew fantastic illustrations.</p></div>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                                    <div class="hero__desc-right br-mob">
                                        <img class="img-like" src="images/1c-prosto/1c-prosto-logo.svg" loading="lazy" alt=""/>
                                        <Link to="https://1c-prosto.ru" target="_blank">1c-prosto.ru</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-2__title">
                                    <h5>For everyone</h5>
                                </div>

                            </div>
                        </div>
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-2__desc"><p>The main page welcomes you with a panorama of a street with all kinds of businesses for which 1C-Prosto apps were made. And then amusingly illustrates main features of the system.</p></div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="row-2__guide-right emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                                    <div class="row-2__desc-right">
                                        <p>Thanks to 1C for <br/>creative freedom.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-2__img emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-page-mob@2x.webp 2x" src="images/1c-prosto/prosto-page-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/prosto-page-mob.png" srcset="images/1c-prosto/prosto-page-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/prosto-page@2x.webp 2x" src="images/1c-prosto/prosto-page.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/prosto-page@2x.png 2x" src="images/1c-prosto/prosto-page.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-3">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-3__desc">
                                    <p>Each product page was made with great attention to detail. 
                                        The welcome illustration immerses in context of usage, and bright elements narrate about the most important points.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                                    <div class="hero__desc-right">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-3__img emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/kassa-page-mob@2x.webp 2x" src="images/1c-prosto/kassa-page-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/kassa-page-mob.png" srcset="images/1c-prosto/kassa-page-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/kassa-page@2x.webp 2x" src="images/1c-prosto/kassa-page.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/kassa-page@2x.png 2x" src="images/1c-prosto/kassa-page.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-3-5 br-desk">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-3-5__img emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-table-mob@2x.webp 2x" src="images/1c-prosto/prosto-table-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/prosto-table-mob.png" srcset="images/1c-prosto/prosto-table-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/kassa-page@2x.webp 2x" src="images/1c-prosto/kassa-page.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/kassa-page@2x.png 2x" src="images/1c-prosto/kassa-page.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-4__img emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/mspos-page-mob@2x.webp 2x" src="images/1c-prosto/mspos-page-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/mspos-page-mob.png" srcset="images/1c-prosto/mspos-page-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/mspos-page@2x.webp 2x" src="images/1c-prosto/mspos-page.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/mspos-page@2x.png 2x" src="images/1c-prosto/mspos-page.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-5">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-5__desc">
                                    <p>Each product page has a duplicate with detailed description of all its’ functions. It repeats the structure of the main page and is a storage space of all technical details.

                                    </p>
                                    <p>A page admin can add tables, galleries, all kinds of lists and documents, but they can’t arbitrarily change fonts sizes and colors, so that the layout always looks nobly.
                                    </p>

                                    <p class="br-desk">Each section has a unique link, that users can share specific information with colleagues and bosses with.</p>
                                </div>
                            </div>

                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="row-5__guide-right emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                                    <div class="row-5__desc-right">
                                        <img class="img-like" src="images/1c-prosto/link-icon.svg" loading="lazy" alt=""/>
                                        <p class="br-mob">Each section has a unique link, that users can share specific information with colleagues and bosses with.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-6">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 offset-sm-0 col-md-9 col-lg-9 col-xl-9">
                                <div class="row-6__img-left emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/text-page-desk-mob@2x.webp 2x" src="images/1c-prosto/text-page-desk-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/text-page-desk-mob.png" srcset="images/1c-prosto/text-page-desk-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/text-page-desk@2x.webp 2x" src="images/1c-prosto/text-page-desk.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/text-page-desk@2x.png 2x" src="images/1c-prosto/text-page-desk.png" alt=""/>
                                    </picture>
                                </div>
                            </div>

                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 br-mob">
                                <div class="row-6__img-right emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/text-page-mob@2x.webp 2x" src="images/1c-prosto/text-page-mob.webp" type="image/webp"/>
                                        <img srcset="images/1c-prosto/text-page-mob@2x.png 2x" src="images/1c-prosto/text-page-mob.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-7 br-mob">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-7__desc">
                                    <p>Some block that I personally like. They are placed in different parts of the website.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                                    <div class="hero__desc-right">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-7__img emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-cells@2x.webp 2x" src="images/1c-prosto/prosto-cells.webp" type="image/webp"/>
                                        <img srcset="images/1c-prosto/prosto-cells@2x.png 2x" src="images/1c-prosto/prosto-cells.png" loading="lazy" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-8">
                    <div class="container">
                        <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                            <div class="col-sm-12 offset-sm-0 col-md-7 col-lg-7 col-xl-7 offset-md-1">
                                <div class="row-8__desc">
                                    <p class="br-mob">And the cherry on top – page 404. We made the whole desktop with working links
                                        and "Solitaire" that can be played.</p>
                                    <p class="br-desk">And the cherry on top – page 404. We made the whole desktop with working
                                        links and "Solitaire" that can be played.</p>
                                </div>
                            </div>
                            <div class="col-sm-12 offset-sm-0 col-md-3 col-lg-3 col-xl-3 offset-md-1">
                                <div class="hero__guide-right emerge" data-effect="slide" data-duration="800" data-down="25%" data-continue="true">
                                    <div class="hero__desc-right">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="row-8__img emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                    <picture>
                                        <source srcset="images/1c-prosto/prosto-404-mob@2x.webp 2x" src="images/1c-prosto/prosto-404-mob.webp" type="image/webp" media="(max-width: 767px)"/>
                                        <source src="images/1c-prosto/prosto-404-mob.png" srcset="images/1c-prosto/prosto-404-mob@2x.png" alt="" media="(max-width: 767px)"/>

                                        <source srcset="images/1c-prosto/prosto-404@2x.webp 2x" src="images/1c-prosto/prosto-404.webp" type="image/webp" alt="" media="(min-width: 768px)"/>
                                        <img srcset="images/1c-prosto/prosto-404@2x.png 2x" src="images/1c-prosto/prosto-404.png" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="footer emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                    <div class="container">
                        <div class="footer__container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-info">
                                        <div class="page-info__made">
                                            <img src="images/checked.svg" alt=""/>
                                            <p>Made in 2021 in 3 months</p>
                                        </div>
                                        <div class="page-info__persons no-scroll">

                                            <div class="page-info__person">
                                                <img srcset="images/ava@2x.png" src="images/ava.png" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="/en\index-en.html">Yaroslav<br/>
                                                            Tugolukovskiy</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>art-director <br/>and designer</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="page-info__person">
                                                <img srcset="images/stas@2x.png" src="images/stas.png" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="https://sizikovdesign.ru/" target="_blank">Stas<br/>
                                                            Sizikov</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>designer</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="page-info__person">
                                                <img srcset="images/1c-prosto/Kira@2x.png" src="images/1c-prosto/Kira.png" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="https://www.behance.net/_kirah__/projects" target="_blank">Kira<br/>
                                                            Zyubanova</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>illustrator</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="page-info__person">
                                                <img src="images/1c-prosto/Sijeko.svg" alt=""/>
                                                <div class="page-info__data">
                                                    <div class="page-info__data-name">
                                                        <Link to="https://sijeko.ru/" target="_blank">Sijeko<br/> Company</Link>
                                                    </div>
                                                    <div class="page-info__data-proff">
                                                        <span>developer</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="page-info__feedback">
                                            <div class="page-info__feedback-desc">
                                                <p>Next:</p>
                                                <Link class="page-info__feedback-link" to="/en\take-travel-en.html">Take Travel</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 offset-sm-0 col-md-4 offset-md-1 col-lg-4 offset-lg-1 col-xl-4 offset-xl-1">
                                    <div class="mobile-link emerge" data-effect="slide" data-duration="300" data-up="20px" data-left="25%" data-continue="true">
                                        <div class="mobile-link__img">
                                            <Link class="img-link" to="/en\take-travel-en.html">
                                                <picture>
                                                    <source srcset="images/1c-prosto/take-travel-mob@2x.webp 2x" src="images/1c-prosto/take-travel-mob.webp" type="image/webp"/>
                                                    <img srcset="images/1c-prosto/take-travel-mob@2x.png 2x" src="images/1c-prosto/take-travel-mob.png" loading="lazy" alt=""/>
                                                </picture>
                                            </Link>
                                        </div>

                                        <div class="mobile-link__link">
                                            <Link class="link-active" to="/en\take-travel-en.html"><span>Next:</span> Take
                                                Travel</Link>
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

                                    <div class="footer__links">
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

  export default Prosto;