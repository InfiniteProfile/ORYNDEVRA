'use strict';
/* ORYNDEVRA: deterministic, endless profile generator. IDs are handled only as decimal strings. */
const W=s=>s.split(','),S_=s=>s.split(';');
const SUB=W('memory,equation,silence,borrowed light,unspent time,refusal,echo,debt,symmetry,forgotten names,resonance,negative space,probability,regret-gravity,static,unfinished sentences,shadow-without-source,tempo,paradox,hunger for edges');
const FORM=W('Lattice,Choir,Tide,Knot,Aperture,Weave,Lacuna,Spiral,Archive,Verdict,Engine,Garden,Membrane,Cascade,Orbit,Seam,Lantern,Fugue,Tessellation,Wound,Cartographer,Parliament,Bloom,Threshold');
const ORIGIN=W('Contradiction Bloom,Unanswered Question,Collapsed Rule,Rounding Error of Existence,Shared Dream of Nothing,Forgotten Zero,Mirror Fracture,Last Echo of a Law,Self-Naming Silence,Debt Between Axioms,Recursive Accident,First Disagreement');
const AXIOM=W('Axiom of Reversible Weight,Law of Borrowed Edges,Axiom of Unequal Zero,Law of Listening Matter,Axiom of Refused Distance,Law of Folded Causes,Axiom of Hungry Symmetry,Law of Counted Light,Axiom of Soft Identity,Law of Open Endings,Axiom of Visible Silence,Law of Shared Shape');
const PHEN=W('Gravity Leak,Colorless Glow,Spontaneous Syllogism,Inverse Shadow,Sound Without Cause,Rule Decay,Duplicate Instant,Weightless Grief,Edge Bloom,Silent Thunder,Memory Rain,Folding Light');
const TE=S_('Retrograde-remembering|It recalls its ending first and meets its beginning as a surprise.;Simultaneous|Every moment of its life is happening at once and it attends each one politely.;Looped|It lives one afternoon that has never finished repeating itself.;Unordered|Its events arrive shuffled, so it never knows which came before.;Pre-echoing|Its reactions precede their causes by a few heartbeats of someone else.;Odd-instant|It exists only on every other instant and has learned not to mind.;Dilating|Time thickens around it until one thought lasts a thousand arrivals.;Debt-timed|It owes the future one moment for each moment it spends.;Seasonless-seasonal|It cycles through winters that contain no cold and no year.;Frozen-between|It dwells in the gap between two ticks and calls it home.;Fractional|It lives in tenths of moments that other things round away.;Ever-arriving|It is always just about to begin and has never once been late.').map(s=>s.split('|'));
const TEMP=TE.map(x=>x[0]);
const PERC=S_('Tastes distance;Hears contradictions;Touches probabilities;Sees absence;Smells intentions;Feels the edges of ideas;Tastes the colour of futures;Senses being watched before it happens;Reads the texture of names;Hears the shape of silence;Perceives through omission;Senses mathematics as weather');
const INTEL=S_('Diffuse sentience;Single-thought mind;Parliamentary awareness;Dormant brilliance;Awareness without a self;Collective of one;Recursive consciousness;Conditional mind;Seasonal cognition;Questioning intellect;Proto-awareness;Paradoxical sapience');
const ZA=W('Unmeasured,Hollow,Listening,Inverted,Unfinished,Tidal,Weightless,Remembering,Glass,Murmuring,Indivisible,Borrowed');
const ZN=W('Gap,Corridor,Expanse,Interval,Atrium,Margin,Chorus,Fold,Basin,Orchard of Rules,Pause,Understory');
const A1=S_('a kneeling horizon of;a spiral stair woven from;an open wound in;a lattice of;a tower leaning toward its own cause, built of;a swarm of;a lantern holding;a corridor folded out of;a drifting grid of;a slow bloom of;a hollow crown of;a listening wall of;a river climbing upward through;a mesh of');
const A2=S_('visible only where light refuses to go;whose outline shifts when two minds observe it;trailing a seam where its cause once was;pulsing at intervals nobody counts;with no inside, only deeper outsides;casting a shadow that arrives early;bordered by a hum with no source;leaving an afterimage of what it will do;each edge holding a different opinion;too dense with meaning to hold a single colour');
const FK=S_('Nonphysical: it exists as a relation between other things;Partly physical: only its outline has mass;Purely conceptual, with no location to point at;Distributed across several Zones at once;Physical only while unobserved;Physical only while ignored;A pattern that lives inside other beings;Self-contained and weightless');
const VB=W('Unwinds,Borrows,Silences,Folds,Rehearses,Edits,Weighs,Plants,Translates,Forgives,Inverts,Lends,Mislays,Tunes,Annotates,Dissolves');
const OB=S_('the colour of nearby decisions;a neighbours last second;the outline of any promise;the weight of a name;the distance between two thoughts;a rule for exactly one instant;the memory of being unobserved;the direction of the word after;an unspoken agreement;the shape of an absent sound;the age of any question;the border between yes and almost');
const RV=S_('trades secrets with;argues endlessly with;is haunted by;harmonizes with;politely devours;mistakes itself for;cannot be introduced to;keeps a ledger of;lends edges to;grieves for');
const RO=S_('anything that remembers it;its own earlier states;beings with no edges;neighbours of its own origin;rules it has broken;the Zone that holds it;entities that think in colours;whatever is about to happen;all things unnamed;a single unfinished sentence');
const TR=W('patient,theatrical,suspicious of symmetry,tender,mischievous,austere,nostalgic for futures,hospitable,restless,solemn,playful,exacting,secretive,generous,obsessive,serene,contrarian,curious,protective of silence,forgiving');
const Q=S_('Collects the first moments of other beings.;Refuses to be measured twice.;Apologizes to the rules it bends.;Speaks only in questions that answer themselves.;Rearranges its own edges when pleased.;Hosts conversations between absent things.;Hums a note that does not exist yet.;Keeps one corner of itself permanently unfinished.;Greets every instant by name.;Never repeats a gesture, even by accident.;Mourns things that were never possible.;Trades secrets for shape.');
const F1=S_('Whenever it is named,;Once every thousandth silence,;If it is measured twice,;At the end of each unfinished thought,;When two witnesses disagree about it,;During every pause in its Zone,;Whenever it forgets itself,;If a rule is broken nearby,;When it laughs,;Each time it is remembered wrongly,;At the moment of its choosing,;Whenever it counts down to zero,;Beneath a sky that is only an idea,;When it is ignored,');
const F2=S_('a law somewhere quietly forgets itself.;it gains one edge and loses a colour.;the nearest silence becomes slightly heavier.;a stranger dream begins in a distant Zone.;every echo within reach arrives before its sound.;it briefly becomes the answer to a question nobody asked.;neighbouring beings hum a note they cannot explain.;its shadow files a formal objection.;the number of its sides is quietly revised.;time forgets which way it was facing.;an unborn concept takes its place for an instant.;its name rearranges itself and politely returns.;the absence around it grows warmer.;cause and effect swap seats and apologize.');
const ON=W('v,k,th,r,z,n,m,s,l,dr,q,y,x,sh,br,ph,gl,ts,h,c'),VO=W('a,e,i,o,u,ae,ou,ei,ya,io,ue'),CO=W(',,,n,r,l,s,th,x,m,k,d');
const FILTERS=[['ftype','Existence type',FORM],['origin','Origin pattern',ORIGIN],['axiom','Axiom field',AXIOM],['temp','Temporal class',TEMP],['perc','Perception system',PERC],['phen','Unusual phenomenon',PHEN]];
const cap=s=>s[0].toUpperCase()+s.slice(1);
/* decimal-string arithmetic: no Number/parseInt on IDs */
const validId=s=>/^[1-9][0-9]*$/.test(s);
function inc(s){const a=s.split('');let i=a.length-1;while(i>=0){if(a[i]==='9'){a[i]='0';i--}else{a[i]=String.fromCharCode(a[i].charCodeAt(0)+1);return a.join('')}}return '1'+a.join('')}
function dec(s){if(s==='1')return null;const a=s.split('');let i=a.length-1;while(a[i]==='0'){a[i]='9';i--}a[i]=String.fromCharCode(a[i].charCodeAt(0)-1);return a.join('').replace(/^0+/,'')}
/* deterministic hash -> PRNG (sfc32 seeded by a string hash) */
function rng(id){let h1=1779033703,h2=3144134277,h3=1013904242,h4=2773480762;
for(let i=0;i<id.length;i++){const k=id.charCodeAt(i);h1=h2^Math.imul(h1^k,597399067);h2=h3^Math.imul(h2^k,2869860233);h3=h4^Math.imul(h3^k,951274213);h4=h1^Math.imul(h4^k,2716044179)}
h1=Math.imul(h3^(h1>>>18),597399067);h2=Math.imul(h4^(h2>>>22),2869860233);h3=Math.imul(h1^(h3>>>17),951274213);h4=Math.imul(h2^(h4>>>19),2716044179);
let a=(h1^h2^h3^h4)>>>0,b=(h2^h1)>>>0,c=(h3^h1)>>>0,d=(h4^h1)>>>0;
const n=()=>{let t=(a+b|0)+d|0;d=d+1|0;a=b^b>>>9;b=c+(c<<3)|0;c=c<<21|c>>>11;c=c+t|0;return(t>>>0)/4294967296};
for(let i=0;i<12;i++)n();return n}
function profile(id){
const r=rng(id),I=n=>r()*n|0,P=a=>a[I(a.length)];
const ft=I(FORM.length),s1=I(SUB.length),or=I(ORIGIN.length),ax=I(AXIOM.length),tm=I(TEMP.length),pc=I(PERC.length),ph=I(PHEN.length),za=I(ZA.length),zn=I(ZN.length);
let s2=I(SUB.length);if(s2===s1)s2=(s2+1)%SUB.length;
let n='';for(let i=2+I(3);i>0;i--)n+=P(ON)+P(VO)+(i>1?P(CO):P(CO));
const ab=[];while(ab.length<3){const x=P(VB)+' '+P(OB);if(!ab.includes(x))ab.push(x)}
const t1=I(TR.length);let t2=I(TR.length),t3=I(TR.length);if(t2===t1)t2=(t2+1)%TR.length;while(t3===t1||t3===t2)t3=(t3+1)%TR.length;
return{id,name:cap(n),form:FORM[ft],type:FORM[ft]+' of '+SUB[s1],zone:ZA[za]+' '+ZN[zn],origin:ORIGIN[or],axiom:AXIOM[ax],temp:TEMP[tm],perc:PERC[pc],phen:PHEN[ph],intel:P(INTEL),
body:P(FK),app:'It manifests as '+P(A1)+' '+SUB[s2]+', '+P(A2)+'.',abil:ab,time:TE[tm][1],
percx:'It '+PERC[pc].toLowerCase()+', a sense no human organ could host.',
rel:'It '+P(RV)+' '+P(RO)+' and '+P(RV)+' '+P(RO)+'.',
pers:cap(TR[t1])+', '+TR[t2]+' and '+TR[t3]+'. '+P(Q),fact:P(F1)+' '+P(F2),
k:{ftype:ft,origin:or,axiom:ax,temp:tm,perc:pc,phen:ph}}}
/* artwork: procedural SVG from the ID */
let U=0;
function art(id){const r=rng(id+'~'),f=n=>n.toFixed(1),H=[268,348,186],a=r()*3|0,b=(a+1+(r()*2|0))%3,
c1='hsl('+((H[a]+r()*16-8)|0)+' 90% 62%)',c2='hsl('+((H[b]+r()*16-8)|0)+' 90% 58%)',hb=(H[b]|0),st=r()*8|0,u='g'+(++U),X=i=>i%2?c1:c2;let o='',i,j;
const poly=(rd,n,rot)=>{let p='';for(let k=0;k<n;k++){const t=rot+k/n*6.2832;p+=f(100+Math.cos(t)*rd)+','+f(100+Math.sin(t)*rd)+' '}return p};
if(st===0)for(i=0;i<10;i++){const q=r()*14-7;o+='<circle cx="'+f(100+q)+'" cy="'+f(100-q)+'" r="'+f(8+i*9.5)+'" stroke="'+X(i)+'" stroke-width="'+f(.6+r()*2)+'" stroke-dasharray="'+f(1+r()*30)+' '+f(2+r()*20)+'" opacity="'+f(.35+r()*.6)+'"/>'}
else if(st===1){const n=5+(r()*9|0);for(i=0;i<n;i++){const t=i/n*6.2832,x=100+Math.cos(t)*95,y=100+Math.sin(t)*95,q=30+r()*60;o+='<line x1="100" y1="100" x2="'+f(x)+'" y2="'+f(y)+'" stroke="'+c1+'" stroke-width="1" opacity=".6"/><circle cx="'+f(100+Math.cos(t)*q)+'" cy="'+f(100+Math.sin(t)*q)+'" r="'+f(2+r()*7)+'" fill="'+c2+'"/>'}}
else if(st===2)for(j=0;j<7;j++){let d='M0 '+f(20+j*26);for(i=1;i<=8;i++)d+=' L'+f(i*25)+' '+f(20+j*26+r()*40-20);o+='<path d="'+d+'" stroke="'+X(j)+'" stroke-width="'+f(.8+r()*2.2)+'" opacity=".8"/>'}
else if(st===3)for(i=0;i<6;i++){const rx=30+r()*70,ry=10+r()*40,t=r()*6.2832;o+='<ellipse cx="100" cy="100" rx="'+f(rx)+'" ry="'+f(ry)+'" transform="rotate('+(r()*180|0)+' 100 100)" stroke="'+X(i)+'" stroke-width="1.4" opacity=".8"/><circle cx="'+f(100+Math.cos(t)*rx*.6)+'" cy="'+f(100+Math.sin(t)*ry)+'" r="'+f(2+r()*5)+'" fill="'+X(i+1)+'"/>'}
else if(st===4)for(i=0;i<12;i++){const y=15+i*15;o+='<path d="M0 '+y+' Q50 '+f(y+r()*44-22)+' 100 '+y+' T200 '+y+'" stroke="'+X(i)+'" stroke-width="'+f(1+r()*3)+'" opacity="'+f(.3+r()*.6)+'"/>'}
else if(st===5){const n=3+(r()*6|0),rot=r()*.6;for(i=0;i<8;i++)o+='<polygon points="'+poly(92-i*10.5,n,i*rot)+'" stroke="'+X(i)+'" stroke-width="1.5" opacity="'+f(.9-i*.07)+'"/>'}
else if(st===6)for(i=0;i<80;i++)o+='<circle cx="'+f(100+(r()+r()+r()-1.5)*110)+'" cy="'+f(100+(r()+r()+r()-1.5)*110)+'" r="'+f(.6+r()*3.5)+'" fill="'+X(i)+'" opacity="'+f(.3+r()*.7)+'"/>';
else for(i=0;i<6;i++)for(j=0;j<6;j++){if(r()<.3)continue;const x=i*33+17,y=j*33+17,s=4+r()*14;o+='<polygon points="'+x+','+f(y-s)+' '+f(x+s)+','+y+' '+x+','+f(y+s)+' '+f(x-s)+','+y+'" fill="'+X(i+j)+'" opacity="'+f(.25+r()*.65)+'"/>'}
return'<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract artwork"><defs><radialGradient id="'+u+'" cx="'+f(30+r()*40)+'%" cy="'+f(30+r()*40)+'%"><stop offset="0" stop-color="hsl('+hb+' 70% 17%)"/><stop offset="1" stop-color="#05040a"/></radialGradient></defs><rect width="200" height="200" fill="url(#'+u+')"/><g fill="none" stroke-linecap="round">'+o+'</g></svg>'}
function related(id){const r=rng(id+'^'),out=[];for(let k=0;k<6;k++){let s=String(1+(r()*9|0));for(let i=1;i<id.length;i++)s+=r()*10|0;if(s===id)s=inc(s);out.push(s)}return out}
if(typeof module!=='undefined')module.exports={profile,inc,dec,art,validId,related};
if(typeof document!=='undefined')(function(){
const $=s=>document.getElementById(s),grid=$('grid'),detail=$('detail'),dbody=$('dbody'),qi=$('q'),tpl=document.createElement('template');
const idle=window.requestIdleCallback?f=>requestIdleCallback(f,{timeout:1500}):f=>setTimeout(f,60);
const hasIO='IntersectionObserver' in window;
const St={f:{},q:'',cur:'1',queue:[],busy:false,want:false,gen:0};
let sent=null;const spacer=document.createElement('div');spacer.className='spacer';spacer.hidden=true;spacer.innerHTML='<button type="button" data-home>Return to the first horizon</button>';
const draw=el=>{try{el.innerHTML=art(el.closest('.card').dataset.id)}catch(e){}el.dataset.d=1};
const artIO=hasIO?new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){artIO.unobserve(e.target);draw(e.target)}},{rootMargin:'500px 0px'}):null;
const sentIO=hasIO?new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){sentIO.disconnect();sent=null;flush()}},{rootMargin:'0px 0px 700px 0px'}):null;
const ok=p=>{for(const k in St.f)if(p.k[k]!==St.f[k])return false;return!St.q||(p.name+' '+p.type+' '+p.origin+' '+p.zone).toLowerCase().includes(St.q)};
/* time-sliced scan of the ID stream: yields batches of matching profiles without blocking the main thread */
function scan(n,tok){return new Promise(res=>{const out=[];let tried=0;(function step(){if(tok!==St.gen)return res(null);const t=performance.now();let c=0;
while(out.length<n){const id=St.cur;St.cur=inc(id);const p=profile(id);tried++;if(ok(p))out.push(p);if((++c&63)===0&&performance.now()-t>7)break}
if(out.length>=n||tried>1500000)return res(out);setTimeout(step,0)})()})}
const card=p=>'<article class="card" tabindex="0" role="button" data-id="'+p.id+'" aria-label="'+p.name+'"><div class="art"></div><div class="cb"><h3>'+p.name+'</h3><div class="ty">'+p.type+'</div><div class="idc">'+p.id+'</div><div class="zn">'+p.zone+'</div><div class="tags"><span>'+p.origin+'</span><span>'+p.phen+'</span></div></div></article>';
function render(b){tpl.innerHTML=b.map(card).join('');const arts=[...tpl.content.querySelectorAll('.art')];grid.appendChild(tpl.content);
for(const a of arts)artIO?artIO.observe(a):draw(a);
const k=grid.children;if(k.length>260){sent=k[k.length-260];sentIO?sentIO.observe(sent):0}}
function prefill(tok){if(St.busy||St.queue.length>=300||tok!==St.gen)return;St.busy=true;scan(300,tok).then(b=>{if(tok!==St.gen)return;St.busy=false;if(b)St.queue.push(...b);if(St.want&&St.queue.length)flush()})}
function flush(){if(!St.queue.length){St.want=true;prefill(St.gen);return}St.want=false;const b=St.queue;St.queue=[];render(b);const g=St.gen;idle(()=>prefill(g));idle(prune)}
/* bound DOM size: drop far-above cards and replace them with a spacer so the scroll position never moves */
function prune(){const k=grid.children;if(k.length<1500)return;if(k[300].getBoundingClientRect().bottom>-200)return;const keep=k[301],y0=keep.getBoundingClientRect().top;let sh=parseFloat(spacer.style.height)||0;spacer.hidden=false;
for(let i=0;i<300;i++){const c=k[1],a=c.querySelector('.art');if(artIO)artIO.unobserve(a);c.remove()}
for(let j=0;j<3;j++){sh+=y0-keep.getBoundingClientRect().top;spacer.style.height=Math.max(sh,0)+'px'}}
function reset(){const tok=++St.gen;St.cur='1';St.queue=[];St.busy=false;St.want=false;sent=null;if(sentIO)sentIO.disconnect();grid.innerHTML='';spacer.hidden=true;spacer.style.height='0';grid.appendChild(spacer);
scan(360,tok).then(b=>{if(!b)return;if(!b.length){grid.insertAdjacentHTML('beforeend','<p class="none">No being matched in this stretch of reality. Loosen a filter or change the search.</p>');return}render(b);idle(()=>prefill(tok))})}
if(!hasIO)window.addEventListener('scroll',(()=>{let t=0;return()=>{if(t)return;t=requestAnimationFrame(()=>{t=0;if(sent&&sent.getBoundingClientRect().top<innerHeight+700){sent=null;flush()}})}})(),{passive:true});
/* detail view: ?id=<decimal> (also #id=...) */
function show(id){const p=profile(id),pv=dec(id),nx=inc(id);
const rel=related(id).map(x=>{const q=profile(x);return'<a class="rel" href="?id='+x+'" data-go="'+x+'"><b>'+q.name+'</b><div class="idc">'+x+'</div><i>'+q.type+'</i></a>'}).join('');
const row=(t,v,w)=>'<div'+(w?' class="w"':'')+'><dt>'+t+'</dt><dd>'+v+'</dd></div>';
dbody.innerHTML='<div class="dbar"><button type="button" data-close>Back</button><span><button type="button" data-go="'+(pv||'')+'"'+(pv?'':' disabled')+'>Previous</button> <button type="button" data-go="'+nx+'">Next</button></span></div><div class="dart">'+art(id)+'</div><h2>'+p.name+'</h2><div class="idc">'+id+'</div><div class="ty">'+p.type+'</div><dl>'
+row('Origin principle',p.origin)+row('Existence Zone',p.zone)+row('Axiom field',p.axiom)+row('Awareness',p.intel)+row('Form',p.body,1)+row('Appearance',p.app,1)+row('Perception system',p.percx+' ('+p.perc+')',1)
+row('Abilities','<ul>'+p.abil.map(a=>'<li>'+a+'</li>').join('')+'</ul>',1)+row('Relationship with time',p.time+' ('+p.temp+')',1)+row('Relationship with others',p.rel,1)+row('Personality',p.pers,1)+row('Unusual phenomenon',p.phen)+row('Interesting fact',p.fact,1)
+'</dl><h3 class="rh">Related beings</h3><div class="rels">'+rel+'</div>';
detail.hidden=false;detail.scrollTop=0;const b=dbody.querySelector('[data-close]');try{b.focus({preventScroll:true})}catch(e){}}
function hide(){detail.hidden=true}
function go(id){try{history.pushState({d:1},'','?id='+id)}catch(e){}show(id)}
function close(){if(history.state&&history.state.d)history.back();else{try{history.replaceState(null,'',location.pathname)}catch(e){}hide()}}
function urlId(){const m=/[?&]id=(\d+)/.exec(location.search)||/id=(\d+)/.exec(location.hash);const v=m&&m[1].replace(/^0+/,'');return v&&validId(v)?v:null}
window.addEventListener('popstate',()=>{const id=urlId();id?show(id):hide()});
detail.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){e.preventDefault();if(g.dataset.go)go(g.dataset.go);return}if(e.target.closest('[data-close]'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!detail.hidden)close()});
grid.addEventListener('click',e=>{if(e.target.closest('[data-home]')){reset();scrollTo(0,0);return}const c=e.target.closest('.card');if(c)go(c.dataset.id)});
grid.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const c=e.target.closest('.card');if(c){e.preventDefault();go(c.dataset.id)}}});
/* search + filters */
const applyText=v=>{St.q=v.toLowerCase();reset()};
$('sf').addEventListener('submit',e=>{e.preventDefault();const v=qi.value.trim();if(/^\d+$/.test(v)){const id=v.replace(/^0+/,'');if(validId(id)){qi.classList.remove('bad');go(id)}else qi.classList.add('bad')}else{qi.classList.remove('bad');applyText(v)}});
let dt;qi.addEventListener('input',()=>{clearTimeout(dt);dt=setTimeout(()=>{const v=qi.value.trim();qi.classList.remove('bad');if(/^\d*$/.test(v)){if(St.q){St.q='';reset()}return}applyText(v)},400)});
const fb=$('filters');
for(const[key,label,list]of FILTERS){const s=document.createElement('select');s.setAttribute('aria-label',label);s.dataset.k=key;s.innerHTML='<option value="">'+label+': any</option>'+list.map((x,i)=>'<option value="'+i+'">'+x+'</option>').join('');fb.appendChild(s)}
fb.addEventListener('change',e=>{const s=e.target;if(s.value==='')delete St.f[s.dataset.k];else St.f[s.dataset.k]=+s.value;reset()});
try{reset();const id=urlId();if(id)show(id)}catch(e){grid.textContent='ORYNDEVRA could not start in this browser.'}
})();
