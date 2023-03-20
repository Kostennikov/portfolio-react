import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
// import { useHistory, useLocation } from "react-router";
import "../../static/scss/layout.scss";
import "../../static/scss/poetry.scss";

function Poetry() {
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
        <div className='poetry-page'>
            {ru && (
                <Fragment>
                    <header class="header">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-xl-12">
                                    <div class="header__title">
                                        <div class="header__name emerge" data-effect="slide" data-duration="300" data-down="10%"
                                            data-continue="true">
                                            <img class="header__name-img" srcset="img/ava@2x.png 2x" src="img/ava.png" alt=""/>
                                            <a class="ava__link" href="/">Ярослав Туголуковский</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="logo">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="logo__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                        data-continue="true">
                                        <img src="img/poems.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="poems">
                        <div class="container">
                            <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div class="col-12 offset-0 col-md-5 offset-md-4">
                                    <div class="poems__items">
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>В&nbsp;кафе</h5>
                                                </div>
                                                <p>На низких стульях о высоком,<br/>
                                                    Высокомерно скрючив лица,<br/>
                                                    Официанту полубоком<br/>
                                                    Они твердят: «Это не птица!<br/>
                                                </p>
                                                <p>
                                                    Да как же вы, скажите, сударь,<br/>
                                                    Посмели принести нам это?<br/>
                                                    Оно лишь портит нам посуду,<br/>
                                                    Еще и сильно перегрето.<br/>
                                                </p>
                                                <p>
                                                    Топтали, значит, мы мозоли,<br/>
                                                    На солнце, значит, мы ругались.<br/>
                                                    Кричали в небо: «Эй, доколе<br/>
                                                    глазеть на серые вуали?»</p>
                                                <p>
                                                    Пока до вас доковыляли,<br/>
                                                    Пропали все запасы силы.<br/>
                                                    Изведав все края печали,<br/>
                                                    Мы в стулья задницы вонзили.</p>
                                                <p>
                                                    Пока возились вы с заказом<br/>
                                                    И еле ноги волочили,<br/>
                                                    Мы рассуждали о высоком:<br/>
                                                    Десерту «и» иль все же «или».</p>
                                                <p>
                                                    Поверьте мне, совсем не просто<br/>
                                                    Решить о градусах на завтрак.<br/>
                                                    Быть может взять бокальчик Bosca,<br/>
                                                    Быть может сделать это завтра.</p>
                                                <p>
                                                    По четвергам в такую темень<br/>
                                                    Желанно радости в бокале.<br/>
                                                    Быть может к месту будет ревень,<br/>
                                                    Быть может херес? Нет, едва ли.</p>
                                                <p>
                                                    И так сидели мы в раздумьях<br/>
                                                    И вдруг приносите вы это!<br/>
                                                    Я против этого бастую!<br/>
                                                    Не птица! Сильно перегрето!</p>
                                                <p>
                                                    Взглянув в лицо официанта,<br/>
                                                    Горящее бледнее неба,<br/>
                                                    Я разделился на два фронта:<br/>
                                                    Заказ был мой иль все же не был?</p>
                                                <p>
                                                    Решив, что все это не важно,<br/>
                                                    Сказал: «Простите человека.<br/>
                                                    Ну перепутал он, не страшно,<br/>
                                                    Запутался малясь в котлетах.</p>
                                                <p>
                                                    Несите мне эту «не птицу»,<br/>
                                                    Как раз люблю погорячее.<br/>
                                                    Сквозь осуждающие лица<br/>
                                                    Официант вдруг стал светлее.</p>
                                                <p>
                                                    И вмиг над тучным небосводом<br/>
                                                    Досталось солнце из конверта.<br/>
                                                    А те вернулись к «о высоком»:<br/>
                                                    С десертом или без десерта?</p>
                                            </div>
                                        </div>

                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Стамбул</h5>
                                                </div>
                                                <p>Я ловил Луну в лукошко.<br/>
                                                    Из окна торчала кошка.<br/>
                                                    Мошка села ей на нос,<br/>
                                                    Рассмешив котят до слез.<br/>
                                                </p>
                                                <p>
                                                    На камнях лежали рыбы,<br/>
                                                    Рыбаки кололи глыбы,<br/>
                                                    Голубое покрывало<br/>
                                                    Их собою накрывало.<br/>
                                                </p>
                                                <p>
                                                    Звонко пели мегафоны<br/>
                                                    Фоном странные законы.<br/>
                                                    Но мне интересней кошка<br/>
                                                    И ловить Луну в лукошко.</p>
                                            </div>
                                        </div>

                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Бы</h5>
                                                </div>
                                                <p>Я собирался написать тебе вчера.<br/>
                                                    Как раньше. После дня. Поближе к вечеру.<br/>
                                                    И прямиком через вопросы о делах<br/>
                                                    Мы мыслями ушли бы в бесконечное.<br/>
                                                    Там правит нами страсть, но не вражда.<br/>
                                                    С нервозным тиком разрезаем полуслово<br/>
                                                    Так резко, что понять глухонемого<br/>
                                                    Составило бы меньшего труда.<br/>
                                                </p>
                                                <p>
                                                    Мой друг. Я собирался написать.<br/>
                                                    Поклялся бы, но ты не веришь в Бога.<br/>
                                                    Ох, помню как неистово и строго<br/>
                                                    Ты мог его часами обсуждать.<br/>
                                                </p>
                                                <p>
                                                    Ты знаешь сколько у меня всего.<br/>
                                                    Со всех сторон я обложился планами.<br/>
                                                    Не облажаться бы, да не обжиться ранами.<br/>
                                                    Тебя, друг, позову на торжество.</p>
                                                <p>
                                                    Мой друг. Я собирался написать,<br/>
                                                    Но вспомнил уже ближе к темной ночи.<br/>
                                                    Хотел начать с вопроса о делах<br/>
                                                    О личных, знаешь, а не о рабочих.<br/>
                                                    А дальше, как обычно: пандеизм,<br/>
                                                    Деизм, итсизм и все другие измы.<br/>
                                                    И так внутри всей этой кутерьмы<br/>
                                                    Дошли бы до значения марксизма.</p>
                                                <p>
                                                    Но знаешь, друг, я начал уставать.<br/>
                                                    Не от тебя, нет-нет, скорей от споров.<br/>
                                                    На утро еще рано так вставать.<br/>
                                                    Я напишу мой друг. Надеюсь, очень скоро.</p>
                                            </div>
                                        </div>

                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Магниты</h5>
                                                </div>
                                                <p>Свежий воздух без копоти <br/> И малолеток с липовым чаем. <br/> Слова разольются
                                                    в шепоте, <br/> Звонком, как пение чаек. <br/> А за опушкой Финский залив <br/>
                                                    Будет ждать под охраной сосен. <br/> Поедем туда в обед, <br/> Обратно вернемся
                                                    в восемь. <br/> Проведем замечательный день <br/> И домой приползем убитыми!<br/>
                                                </p>
                                                <p class="poems__item-text_italic">В целом, хороший план, <br/> Но я предпочитаю
                                                    магниты.</p>
                                            </div>
                                        </div>
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Тело</h5>
                                                </div>
                                                <p>По улицам густым несется тело. <br/>
                                                    Со стороны как будто вникуда.<br/>
                                                    И телу будто думать надоело,<br/>
                                                    И будто все для тела ерунда.<br/>
                                                </p>
                                                <p>
                                                    Несётся тело будто без сомнений,<br/>
                                                    А в голове как будто мнений нет.<br/>
                                                    Не замедляет ход поток движений,<br/>
                                                    Перед глазами лишь зеленый свет.<br/>
                                                </p>
                                                <p>
                                                    Пересекает звонкие бульвары,<br/>
                                                    Глухие улицы и сонные мосты.<br/>
                                                    Не слепят тело фонари и фары.<br/>
                                                    Дороги, улицы, дома – пусты.<br/>
                                                </p>
                                                <p>
                                                    Не делит тело жизнь на дни недели –<br/>
                                                    Идет вперед, не выбирая день.<br/>
                                                    Что пятница ему, что понедельник.<br/>
                                                    Что бодрость духа, что тугая лень.<br/>
                                                </p>
                                                <p>
                                                    Так что же с этим телом просиходит?<br/>
                                                    И что же у него сейчас внутри?<br/>
                                                    Зачем оно бесцельно ночью бродит?<br/>
                                                    О чем с собою тело говорит?<br/>
                                                </p>
                                                <p>
                                                    А ничего внутри не происходит.<br/>
                                                    Неужто ведь должно происходить?<br/>
                                                    Сегодня тело просто часть природы,<br/>
                                                    Сегодня тело научилось жить.</p>
                                            </div>
                                        </div>
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Скафандр</h5>
                                                </div>
                                                <p>Свет с Востока, горький кофе,<br/>
                                                    Истрепанный скафандр.<br/>
                                                    На палубе как на Голгофе.<br/>
                                                    Не приносили – сам.<br/>
                                                </p>
                                                <p>
                                                    Глубокий вдох, широкий взгляд,<br/>
                                                    Уменьшен сердца такт.<br/>
                                                    Тик-так, тик-так, часы велят.<br/>
                                                    Удар об воду – шрам.</p>
                                                <div class="poems__item-text_middle">
                                                    <p>Внизу не слышен ветра свист,<br/>
                                                        Не чувствуется дождь,<br/>
                                                        Бураны, смерчи, суета,<br/>
                                                        Что день внизу, что ночь.<br/>
                                                        Что ночь, что день,<br/>
                                                        Что тлен, что желчь –<br/>
                                                        Хочу остаться там.<br/>
                                                        Боюсь, что только вновь прибьет<br/>
                                                        К знакомым берегам.<br/></p>
                                                </div>

                                                <div class="poems__item-text_right">
                                                    <p>Где оглушает ветра визг,<br/>
                                                        И дождь со всех сторон.<br/>
                                                        Где нет укрытия от брызг,<br/>
                                                        И так неровен сон.<br/>
                                                    </p>
                                                    <p>
                                                        Глоток, еще. Мутнеет взгляд,<br/>
                                                        Дрожит луна в окне.<br/>
                                                        Я на поверхности себя,<br/>
                                                        Но будто бы на дне.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <br/>
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Белые&nbsp;шторы</h5>
                                                </div>
                                                <p>Город под белыми шторами,<br/>
                                                    До покрывала еще далеко.<br/>
                                                    Небо слепит просторами –<br/>
                                                    Небу всегда хорошо.<br/>
                                                </p>
                                                <p>
                                                    По асфальту разбросаны трещины,<br/>
                                                    А по трещинам толпы ног.<br/>
                                                    В лазури волны кучкуются,<br/>
                                                    Обнимая холодный песок.<br/>
                                                </p>
                                                <p>
                                                    Листья спешат по ветрам,<br/>
                                                    Как будто жизнь торопя.<br/>
                                                    А я не спешу. Мне всё равно.<br/>
                                                    Я проживаю себя.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer class="footer emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                        <div class="container">
                            <div class="footer__container">
                                <div class="row">
                                    <div class="col-12 br-mob">
                                        <div class="page-info">
                                            <div class="col-6">
                                                <div class="page-info__desc">
                                                    <p>Проектирую сайты, приложения, и&nbsp;дизайню разные прикольные штуки.</p>
                                                    <p>Если хотите поработать со&nbsp;мной, пишите на <a class="link-active"
                                                                                                        href="mailto:tugolukovskiy@gmail.com">почту</a>
                                                        или в <a class="link-active"
                                                                href="https://t.me/tugolukovskiy">телеграм</a>.
                                                    </p>
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
                    <header class="header">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-xl-12">
                                    <div class="header__title">
                                        <div class="header__name emerge" data-effect="slide" data-duration="300" data-down="10%"
                                            data-continue="true">
                                            <img class="header__name-img" srcset="img/ava@2x.png 2x" src="img/ava.png" alt=""/>
                                            <a class="ava__link" href="/">Ярослав Туголуковский</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="logo">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="logo__img emerge" data-effect="slide" data-duration="300" data-down="10%"
                                        data-continue="true">
                                        <img src="img/poems.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="poems">
                        <div class="container">
                            <div class="row emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                                <div class="col-12 offset-0 col-md-5 offset-md-4">
                                    <div class="poems__items">
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>В&nbsp;кафе</h5>
                                                </div>
                                                <p>На низких стульях о высоком,<br/>
                                                    Высокомерно скрючив лица,<br/>
                                                    Официанту полубоком<br/>
                                                    Они твердят: «Это не птица!<br/>
                                                </p>
                                                <p>
                                                    Да как же вы, скажите, сударь,<br/>
                                                    Посмели принести нам это?<br/>
                                                    Оно лишь портит нам посуду,<br/>
                                                    Еще и сильно перегрето.<br/>
                                                </p>
                                                <p>
                                                    Топтали, значит, мы мозоли,<br/>
                                                    На солнце, значит, мы ругались.<br/>
                                                    Кричали в небо: «Эй, доколе<br/>
                                                    глазеть на серые вуали?»</p>
                                                <p>
                                                    Пока до вас доковыляли,<br/>
                                                    Пропали все запасы силы.<br/>
                                                    Изведав все края печали,<br/>
                                                    Мы в стулья задницы вонзили.</p>
                                                <p>
                                                    Пока возились вы с заказом<br/>
                                                    И еле ноги волочили,<br/>
                                                    Мы рассуждали о высоком:<br/>
                                                    Десерту «и» иль все же «или».</p>
                                                <p>
                                                    Поверьте мне, совсем не просто<br/>
                                                    Решить о градусах на завтрак.<br/>
                                                    Быть может взять бокальчик Bosca,<br/>
                                                    Быть может сделать это завтра.</p>
                                                <p>
                                                    По четвергам в такую темень<br/>
                                                    Желанно радости в бокале.<br/>
                                                    Быть может к месту будет ревень,<br/>
                                                    Быть может херес? Нет, едва ли.</p>
                                                <p>
                                                    И так сидели мы в раздумьях<br/>
                                                    И вдруг приносите вы это!<br/>
                                                    Я против этого бастую!<br/>
                                                    Не птица! Сильно перегрето!</p>
                                                <p>
                                                    Взглянув в лицо официанта,<br/>
                                                    Горящее бледнее неба,<br/>
                                                    Я разделился на два фронта:<br/>
                                                    Заказ был мой иль все же не был?</p>
                                                <p>
                                                    Решив, что все это не важно,<br/>
                                                    Сказал: «Простите человека.<br/>
                                                    Ну перепутал он, не страшно,<br/>
                                                    Запутался малясь в котлетах.</p>
                                                <p>
                                                    Несите мне эту «не птицу»,<br/>
                                                    Как раз люблю погорячее.<br/>
                                                    Сквозь осуждающие лица<br/>
                                                    Официант вдруг стал светлее.</p>
                                                <p>
                                                    И вмиг над тучным небосводом<br/>
                                                    Досталось солнце из конверта.<br/>
                                                    А те вернулись к «о высоком»:<br/>
                                                    С десертом или без десерта?</p>
                                            </div>
                                        </div>

                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Стамбул</h5>
                                                </div>
                                                <p>Я ловил Луну в лукошко.<br/>
                                                    Из окна торчала кошка.<br/>
                                                    Мошка села ей на нос,<br/>
                                                    Рассмешив котят до слез.<br/>
                                                </p>
                                                <p>
                                                    На камнях лежали рыбы,<br/>
                                                    Рыбаки кололи глыбы,<br/>
                                                    Голубое покрывало<br/>
                                                    Их собою накрывало.<br/>
                                                </p>
                                                <p>
                                                    Звонко пели мегафоны<br/>
                                                    Фоном странные законы.<br/>
                                                    Но мне интересней кошка<br/>
                                                    И ловить Луну в лукошко.</p>
                                            </div>
                                        </div>

                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Бы</h5>
                                                </div>
                                                <p>Я собирался написать тебе вчера.<br/>
                                                    Как раньше. После дня. Поближе к вечеру.<br/>
                                                    И прямиком через вопросы о делах<br/>
                                                    Мы мыслями ушли бы в бесконечное.<br/>
                                                    Там правит нами страсть, но не вражда.<br/>
                                                    С нервозным тиком разрезаем полуслово<br/>
                                                    Так резко, что понять глухонемого<br/>
                                                    Составило бы меньшего труда.<br/>
                                                </p>
                                                <p>
                                                    Мой друг. Я собирался написать.<br/>
                                                    Поклялся бы, но ты не веришь в Бога.<br/>
                                                    Ох, помню как неистово и строго<br/>
                                                    Ты мог его часами обсуждать.<br/>
                                                </p>
                                                <p>
                                                    Ты знаешь сколько у меня всего.<br/>
                                                    Со всех сторон я обложился планами.<br/>
                                                    Не облажаться бы, да не обжиться ранами.<br/>
                                                    Тебя, друг, позову на торжество.</p>
                                                <p>
                                                    Мой друг. Я собирался написать,<br/>
                                                    Но вспомнил уже ближе к темной ночи.<br/>
                                                    Хотел начать с вопроса о делах<br/>
                                                    О личных, знаешь, а не о рабочих.<br/>
                                                    А дальше, как обычно: пандеизм,<br/>
                                                    Деизм, итсизм и все другие измы.<br/>
                                                    И так внутри всей этой кутерьмы<br/>
                                                    Дошли бы до значения марксизма.</p>
                                                <p>
                                                    Но знаешь, друг, я начал уставать.<br/>
                                                    Не от тебя, нет-нет, скорей от споров.<br/>
                                                    На утро еще рано так вставать.<br/>
                                                    Я напишу мой друг. Надеюсь, очень скоро.</p>
                                            </div>
                                        </div>

                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Магниты</h5>
                                                </div>
                                                <p>Свежий воздух без копоти <br/> И малолеток с липовым чаем. <br/> Слова разольются
                                                    в шепоте, <br/> Звонком, как пение чаек. <br/> А за опушкой Финский залив <br/>
                                                    Будет ждать под охраной сосен. <br/> Поедем туда в обед, <br/> Обратно вернемся
                                                    в восемь. <br/> Проведем замечательный день <br/> И домой приползем убитыми!<br/>
                                                </p>
                                                <p class="poems__item-text_italic">В целом, хороший план, <br/> Но я предпочитаю
                                                    магниты.</p>
                                            </div>
                                        </div>
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Тело</h5>
                                                </div>
                                                <p>По улицам густым несется тело. <br/>
                                                    Со стороны как будто вникуда.<br/>
                                                    И телу будто думать надоело,<br/>
                                                    И будто все для тела ерунда.<br/>
                                                </p>
                                                <p>
                                                    Несётся тело будто без сомнений,<br/>
                                                    А в голове как будто мнений нет.<br/>
                                                    Не замедляет ход поток движений,<br/>
                                                    Перед глазами лишь зеленый свет.<br/>
                                                </p>
                                                <p>
                                                    Пересекает звонкие бульвары,<br/>
                                                    Глухие улицы и сонные мосты.<br/>
                                                    Не слепят тело фонари и фары.<br/>
                                                    Дороги, улицы, дома – пусты.<br/>
                                                </p>
                                                <p>
                                                    Не делит тело жизнь на дни недели –<br/>
                                                    Идет вперед, не выбирая день.<br/>
                                                    Что пятница ему, что понедельник.<br/>
                                                    Что бодрость духа, что тугая лень.<br/>
                                                </p>
                                                <p>
                                                    Так что же с этим телом просиходит?<br/>
                                                    И что же у него сейчас внутри?<br/>
                                                    Зачем оно бесцельно ночью бродит?<br/>
                                                    О чем с собою тело говорит?<br/>
                                                </p>
                                                <p>
                                                    А ничего внутри не происходит.<br/>
                                                    Неужто ведь должно происходить?<br/>
                                                    Сегодня тело просто часть природы,<br/>
                                                    Сегодня тело научилось жить.</p>
                                            </div>
                                        </div>
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Скафандр</h5>
                                                </div>
                                                <p>Свет с Востока, горький кофе,<br/>
                                                    Истрепанный скафандр.<br/>
                                                    На палубе как на Голгофе.<br/>
                                                    Не приносили – сам.<br/>
                                                </p>
                                                <p>
                                                    Глубокий вдох, широкий взгляд,<br/>
                                                    Уменьшен сердца такт.<br/>
                                                    Тик-так, тик-так, часы велят.<br/>
                                                    Удар об воду – шрам.</p>
                                                <div class="poems__item-text_middle">
                                                    <p>Внизу не слышен ветра свист,<br/>
                                                        Не чувствуется дождь,<br/>
                                                        Бураны, смерчи, суета,<br/>
                                                        Что день внизу, что ночь.<br/>
                                                        Что ночь, что день,<br/>
                                                        Что тлен, что желчь –<br/>
                                                        Хочу остаться там.<br/>
                                                        Боюсь, что только вновь прибьет<br/>
                                                        К знакомым берегам.<br/></p>
                                                </div>

                                                <div class="poems__item-text_right">
                                                    <p>Где оглушает ветра визг,<br/>
                                                        И дождь со всех сторон.<br/>
                                                        Где нет укрытия от брызг,<br/>
                                                        И так неровен сон.<br/>
                                                    </p>
                                                    <p>
                                                        Глоток, еще. Мутнеет взгляд,<br/>
                                                        Дрожит луна в окне.<br/>
                                                        Я на поверхности себя,<br/>
                                                        Но будто бы на дне.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <br/>
                                        <div class="poems__item">
                                            <div class="poems__item-text">
                                                <div class="poems__item-title">
                                                    <h5>Белые&nbsp;шторы</h5>
                                                </div>
                                                <p>Город под белыми шторами,<br/>
                                                    До покрывала еще далеко.<br/>
                                                    Небо слепит просторами –<br/>
                                                    Небу всегда хорошо.<br/>
                                                </p>
                                                <p>
                                                    По асфальту разбросаны трещины,<br/>
                                                    А по трещинам толпы ног.<br/>
                                                    В лазури волны кучкуются,<br/>
                                                    Обнимая холодный песок.<br/>
                                                </p>
                                                <p>
                                                    Листья спешат по ветрам,<br/>
                                                    Как будто жизнь торопя.<br/>
                                                    А я не спешу. Мне всё равно.<br/>
                                                    Я проживаю себя.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer class="footer emerge" data-effect="slide" data-duration="300" data-down="10%" data-continue="true">
                        <div class="container">
                            <div class="footer__container">
                                <div class="row">
                                    <div class="col-12 br-mob">
                                        <div class="page-info">
                                            <div class="col-6">
                                                <div class="page-info__desc">
                                                    <p>Проектирую сайты, приложения, и&nbsp;дизайню разные прикольные штуки.</p>
                                                    <p>Если хотите поработать со&nbsp;мной, пишите на <a class="link-active"
                                                                                                        href="mailto:tugolukovskiy@gmail.com">почту</a>
                                                        или в <a class="link-active"
                                                                href="https://t.me/tugolukovskiy">телеграм</a>.
                                                    </p>
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

  export default Poetry;