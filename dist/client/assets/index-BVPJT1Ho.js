import{r as x,j as e}from"./index-CCTOS-bY.js";function k({color:i,size:a}){return e.jsxs("svg",{width:a,height:a*1.6,viewBox:"0 0 20 32",fill:"none",children:[e.jsx("path",{d:"M10 0 C14 4, 20 8, 18 16 C16 24, 10 32, 10 32 C10 32, 4 24, 2 16 C0 8, 6 4, 10 0Z",fill:i,opacity:"0.85"}),e.jsx("path",{d:"M10 4 C12 8, 15 12, 14 18 C13 22, 10 28, 10 28",stroke:"rgba(255,255,255,0.25)",strokeWidth:"1",fill:"none"})]})}function A(){return e.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",opacity:.06,pointerEvents:"none",zIndex:0,animation:"mandalaRotate 80s linear infinite"},children:e.jsxs("svg",{width:"900",height:"900",viewBox:"0 0 900 900",fill:"none",children:[Array.from({length:12},(i,a)=>{const r=a*30*Math.PI/180,h=450+200*Math.cos(r),c=450+200*Math.sin(r),t=450+400*Math.cos(r),f=450+400*Math.sin(r);return e.jsxs("g",{children:[e.jsx("line",{x1:"450",y1:"450",x2:t,y2:f,stroke:"#D4AF37",strokeWidth:"1"}),e.jsx("ellipse",{cx:h,cy:c,rx:"20",ry:"40",fill:"#D4AF37",transform:`rotate(${a*30} ${h} ${c})`})]},a)}),e.jsx("circle",{cx:"450",cy:"450",r:"150",stroke:"#D4AF37",strokeWidth:"1.5",fill:"none"}),e.jsx("circle",{cx:"450",cy:"450",r:"250",stroke:"#D4AF37",strokeWidth:"1",fill:"none",strokeDasharray:"8 4"}),e.jsx("circle",{cx:"450",cy:"450",r:"380",stroke:"#D4AF37",strokeWidth:"1",fill:"none",strokeDasharray:"4 8"}),e.jsx("circle",{cx:"450",cy:"450",r:"50",stroke:"#D4AF37",strokeWidth:"2",fill:"none"}),Array.from({length:8},(i,a)=>{const r=a*45*Math.PI/180;return e.jsx("path",{d:`M 450 450
                  C ${450+60*Math.cos(r-.3)} ${450+60*Math.sin(r-.3)},
                    ${450+100*Math.cos(r)} ${450+100*Math.sin(r)},
                    ${450+130*Math.cos(r)} ${450+130*Math.sin(r)}`,stroke:"#D4AF37",strokeWidth:"1.5",fill:"none"},a)})]})})}function b({side:i}){const a=i==="right";return e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:20,transform:a?"scaleX(-1)":void 0},children:e.jsxs("svg",{width:"200",height:"360",viewBox:"0 0 200 360",fill:"none",children:[e.jsx("rect",{x:"8",y:"8",width:"184",height:"344",rx:"4",stroke:"#D4AF37",strokeWidth:"1.5",fill:"none"}),e.jsx("rect",{x:"16",y:"16",width:"168",height:"328",rx:"3",stroke:"#D4AF37",strokeWidth:"0.8",fill:"none"}),e.jsx("path",{d:"M 40 140 C 40 80, 160 80, 160 140 L 160 220 L 40 220 Z",stroke:"#D4AF37",strokeWidth:"1",fill:"rgba(212,175,55,0.08)"}),e.jsx("path",{d:"M 100 92 C 92 102,80 108,80 120 C 80 132,90 140,100 140 C 110 140,120 132,120 120 C 120 108,108 102,100 92Z",stroke:"#D4AF37",strokeWidth:"1",fill:"rgba(212,175,55,0.2)"}),e.jsx("circle",{cx:"100",cy:"190",r:"30",stroke:"#D4AF37",strokeWidth:"1",fill:"none"}),e.jsx("circle",{cx:"100",cy:"190",r:"20",stroke:"#D4AF37",strokeWidth:"0.5",fill:"none"}),Array.from({length:8},(r,h)=>{const c=h*45*Math.PI/180;return e.jsx("line",{x1:100+20*Math.cos(c),y1:190+20*Math.sin(c),x2:100+30*Math.cos(c),y2:190+30*Math.sin(c),stroke:"#D4AF37",strokeWidth:"1"},h)}),e.jsx("rect",{x:"50",y:"250",width:"100",height:"90",rx:"4",stroke:"#D4AF37",strokeWidth:"1",fill:"rgba(212,175,55,0.06)"}),e.jsx("path",{d:"M 70 260 Q 100 275 130 260 L 130 330 Q 100 315 70 330 Z",stroke:"#D4AF37",strokeWidth:"0.5",fill:"rgba(212,175,55,0.1)"}),e.jsx("path",{d:"M 25 25 Q 35 25 35 35",stroke:"#D4AF37",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M 25 335 Q 35 335 35 325",stroke:"#D4AF37",strokeWidth:"1.5",fill:"none"})]})})}function v(){return e.jsxs("svg",{width:"120",height:"60",viewBox:"0 0 120 60",fill:"none",children:[[0,-20,20,-40,40].map((i,a)=>e.jsx("path",{d:`M ${60+i} 55 C ${50+i} 40, ${45+i} 20, ${60+i} 5 C ${75+i} 20, ${70+i} 40, ${60+i} 55Z`,fill:a===0?"rgba(212,175,55,0.8)":"rgba(212,175,55,0.5)",transform:`rotate(${i/2} 60 55)`},a)),e.jsx("line",{x1:"0",y1:"58",x2:"120",y2:"58",stroke:"#D4AF37",strokeWidth:"0.5"})]})}function j(){return e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[e.jsx("circle",{cx:"20",cy:"20",r:"18",stroke:"#D4AF37",strokeWidth:"1",fill:"none"}),e.jsx("text",{x:"20",y:"27",textAnchor:"middle",fontSize:"22",fill:"#D4AF37",fontFamily:"serif",opacity:"0.9",children:"ॐ"})]})}function w(){const i=x.useRef(null),a=x.useRef(null),r=x.useRef(!1),[h,c]=x.useState(!1),[t,f]=x.useState(!1);x.useEffect(()=>{const s=i.current,o=a.current;if(!s||!o)return;const l=o.offsetWidth,d=o.offsetHeight;s.width=l,s.height=d;const n=s.getContext("2d");if(!n)return;const p=n.createLinearGradient(0,0,l,d);p.addColorStop(0,"#6B0F0F"),p.addColorStop(.3,"#8B1A1A"),p.addColorStop(.6,"#7A1515"),p.addColorStop(1,"#5A0A0A"),n.fillStyle=p,n.roundRect(0,0,l,d,16),n.fill(),n.strokeStyle="#D4AF37",n.lineWidth=2,n.roundRect(4,4,l-8,d-8,14),n.stroke(),n.fillStyle="#D4AF37",n.font=`bold ${Math.floor(l/14)}px Yeseva One, serif`,n.textAlign="center",n.fillText("Scratch Here",l/2,d/2-10),n.font=`${Math.floor(l/18)}px Libre Baskerville, serif`,n.fillStyle="#FFC87A",n.fillText("to reveal the auspicious date",l/2,d/2+18);for(let m=0;m<6;m++){const F=l/7*(m+.5);n.fillStyle="rgba(212,175,55,0.3)",n.beginPath(),n.ellipse(F,d-14,6,10,0,0,Math.PI*2),n.fill()}f(!0)},[]);const g=(s,o)=>{if(h)return;const l=i.current;if(!l)return;const d=l.getContext("2d");if(!d)return;d.globalCompositeOperation="destination-out",d.beginPath(),d.arc(s,o,24,0,Math.PI*2),d.fill();const n=d.getImageData(0,0,l.width,l.height).data;let p=0;for(let m=3;m<n.length;m+=16)n[m]<64&&p++;p/(n.length/64)>.45&&c(!0)},y=s=>{const o=i.current.getBoundingClientRect();return{x:s.clientX-o.left,y:s.clientY-o.top}},u=s=>{const o=i.current.getBoundingClientRect();return{x:s.touches[0].clientX-o.left,y:s.touches[0].clientY-o.top}};return e.jsxs("div",{ref:a,style:{position:"relative",width:"100%",maxWidth:380,height:160,borderRadius:16,boxShadow:"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.25)"},children:[e.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:16,background:"linear-gradient(135deg, #1a0a00, #3d1500)",border:"2px solid #D4AF37",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6},children:[e.jsx("p",{style:{fontFamily:"Cinzel Decorative, serif",color:"#FFA07A",fontSize:"0.75rem",letterSpacing:"0.2em"},children:"Wedding Date"}),e.jsx("p",{style:{fontFamily:"Yeseva One, serif",fontSize:"clamp(1.6rem, 5vw, 2.2rem)",background:"linear-gradient(90deg, #B8860B, #FFD700, #D4AF37)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"10th May 2026"}),e.jsx("p",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",color:"#D4AF37",fontSize:"0.9rem"},children:"Sunday — 12:30 PM"})]}),!h&&t&&e.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,borderRadius:16,cursor:"crosshair",touchAction:"none"},onMouseDown:s=>{r.current=!0;const o=y(s);g(o.x,o.y)},onMouseUp:()=>{r.current=!1},onMouseLeave:()=>{r.current=!1},onMouseMove:s=>{if(r.current){const o=y(s);g(o.x,o.y)}},onTouchStart:s=>{r.current=!0;const o=u(s);g(o.x,o.y)},onTouchEnd:()=>{r.current=!1},onTouchMove:s=>{if(s.preventDefault(),r.current){const o=u(s);g(o.x,o.y)}}}),h&&e.jsx("canvas",{ref:i,style:{display:"none"}})]})}const D=Array.from({length:30},(i,a)=>({id:a,left:Math.random()*100,delay:Math.random()*8,duration:5+Math.random()*5,size:14+Math.random()*18,color:["#FF6B6B","#FFB347","#FF69B4","#FF4500","#DC143C","#FF8C00","#FFD700","#E75480","#C71585"][Math.floor(Math.random()*9)],swayX:Math.random()*120-60,rotations:360+Math.floor(Math.random()*720)}));function M(){const[i,a]=x.useState(!1),[r,h]=x.useState(!1),c=()=>{i||(a(!0),setTimeout(()=>h(!0),1400))};return x.useEffect(()=>{const t=setTimeout(c,800);return()=>clearTimeout(t)},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cinzel+Decorative:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #110303;
          overflow-x: hidden;
        }

        @keyframes mandalaRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes petalFall {
          0%   { transform: translateY(-40px) rotate(0deg) translateX(0px); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 0.7; }
          100% { transform: translateY(105vh) rotate(var(--rot)) translateX(var(--sway)); opacity: 0; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes photoReveal {
          0%   { opacity: 0; filter: blur(16px) brightness(0.2) saturate(0.3); transform: scale(1.08); }
          100% { opacity: 1; filter: blur(0) brightness(1) saturate(1.1); transform: scale(1); }
        }

        @keyframes goldShimmer {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.15); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.1); }
          70%       { transform: scale(1); }
        }

        @keyframes doorOpenLeft {
          from { transform: perspective(1200px) rotateY(0deg); }
          to   { transform: perspective(1200px) rotateY(-80deg); }
        }

        @keyframes doorOpenRight {
          from { transform: perspective(1200px) rotateY(0deg); }
          to   { transform: perspective(1200px) rotateY(80deg); }
        }

        .gold-text {
          background: linear-gradient(90deg, #9B7A1A 0%, #D4AF37 20%, #FFD700 40%, #FFEC8B 55%, #D4AF37 75%, #9B7A1A 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 4s linear infinite;
        }

        .door-left-panel {
          position: absolute;
          top: 0; left: 0;
          width: 50%; height: 100%;
          transform-origin: left center;
          background: linear-gradient(160deg, #5A0C0C 0%, #7D1515 25%, #9B1C1C 45%, #7A1010 70%, #5A0C0C 100%);
          z-index: 200;
          border-right: 3px solid #D4AF37;
          transition: transform 1.3s cubic-bezier(0.77, 0, 0.18, 1);
          overflow: hidden;
          box-shadow: 4px 0 30px rgba(0,0,0,0.8);
        }

        .door-right-panel {
          position: absolute;
          top: 0; right: 0;
          width: 50%; height: 100%;
          transform-origin: right center;
          background: linear-gradient(200deg, #5A0C0C 0%, #7D1515 25%, #9B1C1C 45%, #7A1010 70%, #5A0C0C 100%);
          z-index: 200;
          border-left: 3px solid #D4AF37;
          transition: transform 1.3s cubic-bezier(0.77, 0, 0.18, 1);
          overflow: hidden;
          box-shadow: -4px 0 30px rgba(0,0,0,0.8);
        }

        .door-left-panel.open  { transform: perspective(1200px) rotateY(-82deg); }
        .door-right-panel.open { transform: perspective(1200px) rotateY(82deg); }

        .section-card {
          background: linear-gradient(135deg, rgba(100,15,15,0.35) 0%, rgba(30,5,5,0.85) 100%);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 24px;
          backdrop-filter: blur(8px);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 28px 0;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4AF37 40%, #D4AF37 60%, transparent);
        }

        .family-block {
          background: linear-gradient(160deg, rgba(120,20,20,0.45), rgba(40,8,8,0.75));
          border: 1px solid rgba(212,175,55,0.35);
          border-radius: 18px;
          padding: 36px 28px;
          text-align: center;
          flex: 1;
          min-width: 220px;
        }
      `}),e.jsxs("div",{style:{position:"fixed",inset:0,zIndex:200,pointerEvents:i?"none":"auto"},children:[e.jsx("div",{className:`door-left-panel${i?" open":""}`,children:e.jsx(b,{side:"left"})}),e.jsx("div",{className:`door-right-panel${i?" open":""}`,children:e.jsx(b,{side:"right"})}),!i&&e.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:6,height:"100%",background:"linear-gradient(180deg, transparent 0%, #D4AF37 20%, #FFD700 50%, #D4AF37 80%, transparent 100%)",opacity:.6,zIndex:201,pointerEvents:"none"}}),!i&&e.jsx("button",{onClick:c,style:{position:"absolute",bottom:"8%",left:"50%",transform:"translateX(-50%)",zIndex:202,background:"linear-gradient(135deg, #9B7A1A, #D4AF37, #FFD700, #D4AF37)",color:"#1a0303",border:"none",padding:"14px 44px",borderRadius:"50px",fontFamily:"Cinzel Decorative, serif",fontSize:"0.95rem",letterSpacing:"0.1em",cursor:"pointer",boxShadow:"0 8px 40px rgba(212,175,55,0.55), 0 0 0 2px rgba(212,175,55,0.3)",transition:"transform 0.2s, box-shadow 0.2s"},onMouseEnter:t=>{t.target.style.transform="translateX(-50%) scale(1.05)"},onMouseLeave:t=>{t.target.style.transform="translateX(-50%) scale(1)"},children:"Open Invitation"})]}),e.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg, #110303 0%, #1f0505 35%, #2a0808 60%, #110303 100%)",color:"#FFF8E7",position:"relative",overflowX:"hidden"},children:[e.jsx(A,{}),e.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:1},children:e.jsx(S,{})}),r&&e.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:10,overflow:"hidden"},children:D.map(t=>e.jsx("div",{style:{position:"absolute",left:`${t.left}%`,top:"-40px","--sway":`${t.swayX}px`,"--rot":`${t.rotations}deg`,animation:`petalFall ${t.duration}s ${t.delay}s infinite ease-in`,opacity:0},children:e.jsx(k,{color:t.color,size:t.size})},t.id))}),e.jsxs("div",{style:{position:"relative",zIndex:2},children:[e.jsxs("section",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px 24px 40px",textAlign:"center"},children:[e.jsx("div",{style:{opacity:r?1:0,animation:r?"fadeUp 1s 0.1s ease both":"none"},children:e.jsx(v,{})}),e.jsx("p",{style:{fontFamily:"Cinzel Decorative, serif",fontSize:"clamp(0.6rem, 1.8vw, 0.85rem)",color:"#D4AF37",letterSpacing:"0.35em",textTransform:"uppercase",margin:"20px 0 10px",opacity:r?1:0,animation:r?"fadeUp 1s 0.3s ease both":"none"},children:"With the Blessings of the Almighty"}),e.jsx("h1",{style:{fontFamily:"Yeseva One, serif",fontSize:"clamp(3rem, 10vw, 6rem)",lineHeight:1.05,opacity:r?1:0,animation:r?"fadeUp 1.1s 0.5s ease both":"none"},children:e.jsx("span",{className:"gold-text",children:"Sarvesh"})}),e.jsx("div",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",color:"rgba(255,248,231,0.5)",fontSize:"clamp(1rem, 3vw, 1.4rem)",margin:"4px 0",opacity:r?1:0,animation:r?"fadeUp 1s 0.65s ease both":"none"},children:"&"}),e.jsx("h1",{style:{fontFamily:"Yeseva One, serif",fontSize:"clamp(3rem, 10vw, 6rem)",lineHeight:1.05,opacity:r?1:0,animation:r?"fadeUp 1.1s 0.8s ease both":"none"},children:e.jsx("span",{className:"gold-text",children:"Dipali"})}),e.jsx("p",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",color:"#FFA07A",fontSize:"clamp(1rem, 2.5vw, 1.2rem)",marginTop:12,opacity:r?1:0,animation:r?"fadeUp 1s 1s ease both":"none"},children:"are joyfully getting married"}),e.jsx("div",{style:{marginTop:40,opacity:r?1:0,animation:r?"fadeUp 0.5s 1.2s ease both":"none"},children:e.jsx("div",{style:{width:"clamp(220px, 45vw, 300px)",height:"clamp(220px, 45vw, 300px)",borderRadius:"50%",border:"4px solid #D4AF37",boxShadow:"0 0 0 8px rgba(212,175,55,0.12), 0 0 60px rgba(212,175,55,0.35), 0 0 120px rgba(180,30,30,0.3)",overflow:"hidden",animation:r?"photoReveal 2.8s 1.3s ease both, float 5s 4s ease-in-out infinite":"none",opacity:0},children:e.jsx("img",{src:"/c1.png",alt:"Couple",style:{width:"100%",height:"100%",objectFit:"cover"}})})}),e.jsx("div",{className:"divider",style:{width:"100%",maxWidth:360,marginTop:48},children:e.jsx(j,{})})]}),e.jsx("section",{style:{padding:"20px 20px 60px",maxWidth:760,margin:"0 auto"},children:e.jsxs("div",{className:"section-card",style:{padding:"clamp(28px, 5vw, 52px)"},children:[e.jsx("p",{style:{fontFamily:"Cinzel Decorative, serif",color:"#D4AF37",fontSize:"clamp(0.7rem, 1.8vw, 0.9rem)",letterSpacing:"0.25em",textAlign:"center",marginBottom:28},children:"✦ Sarvesh-Dipali Wedding Invitation ✦"}),e.jsxs("p",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",fontSize:"clamp(1rem, 2.5vw, 1.2rem)",color:"#FFF8E7",lineHeight:2.1,textAlign:"center"},children:['"Two hearts have chosen each other,',e.jsx("br",{}),"two souls have found their home.",e.jsx("br",{}),"The stars aligned, the universe smiled,",e.jsx("br",{}),'and now — they are never alone."']}),e.jsx("div",{className:"divider",children:e.jsx("span",{style:{color:"#D4AF37",fontSize:"1.2rem"},children:"✿"})}),e.jsxs("p",{style:{fontFamily:"Libre Baskerville, serif",fontSize:"clamp(0.9rem, 2vw, 1.05rem)",color:"#FFC87A",lineHeight:2,textAlign:"center"},children:["With hearts overflowing with joy and gratitude,",e.jsx("br",{}),"we humbly request the honour of your gracious presence",e.jsx("br",{}),"as we take our sacred vows and begin this beautiful journey together.",e.jsx("br",{}),e.jsx("br",{}),"Your blessings and love mean the world to us."]})]})}),e.jsxs("section",{style:{padding:"20px 20px 80px",maxWidth:600,margin:"0 auto",textAlign:"center"},children:[e.jsx("div",{className:"divider",style:{maxWidth:400,margin:"0 auto 32px"},children:e.jsx(j,{})}),e.jsx("p",{style:{fontFamily:"Yeseva One, serif",fontSize:"clamp(1.3rem, 4vw, 1.8rem)",marginBottom:8},children:e.jsx("span",{className:"gold-text",children:"The Auspicious Date"})}),e.jsx("p",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",color:"rgba(255,200,122,0.7)",fontSize:"0.9rem",marginBottom:28,letterSpacing:"0.05em"},children:"Scratch the seal below to reveal"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"0 20px"},children:e.jsx(w,{})}),e.jsx("p",{style:{fontFamily:"Libre Baskerville, serif",color:"#D4AF37",fontSize:"0.9rem",marginTop:24,letterSpacing:"0.08em"},children:"Surbhi Community Hall, Naval Civilian Housing Colony, Kanjurmarg West"})]}),e.jsx("section",{style:{padding:"20px 20px 80px",maxWidth:720,margin:"0 auto",textAlign:"center"},children:e.jsxs("div",{style:{background:"linear-gradient(160deg, rgba(160,25,25,0.25), rgba(212,175,55,0.08))",border:"1px solid rgba(212,175,55,0.4)",borderRadius:"60% 40% 55% 45% / 35% 35% 65% 65%",padding:"clamp(36px, 6vw, 60px) clamp(24px, 5vw, 48px)"},children:[e.jsx("div",{style:{fontSize:"2.2rem",animation:"heartbeat 2s ease-in-out infinite",display:"inline-block",marginBottom:20,filter:"drop-shadow(0 0 8px rgba(220,20,60,0.6))"},children:"❤"}),e.jsx("p",{style:{fontFamily:"Yeseva One, serif",fontSize:"clamp(1.4rem, 4vw, 2rem)",marginBottom:24,background:"linear-gradient(90deg, #B8860B, #FFD700, #D4AF37)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"A Promise of Forever"}),e.jsxs("p",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",color:"#FFC87A",lineHeight:2.1,fontSize:"clamp(0.95rem, 2.2vw, 1.1rem)"},children:['"Today I choose you, and tomorrow I choose you again.',e.jsx("br",{}),"In every lifetime, across every universe,",e.jsx("br",{}),"through every storm and every sunrise —",e.jsx("br",{}),e.jsx("span",{style:{color:"#FFD700",fontStyle:"normal",fontFamily:"Yeseva One, serif"},children:"I choose you."}),e.jsx("br",{}),e.jsx("br",{}),"You are my peace, my joy, my forever home.",e.jsx("br",{}),'With every breath — I am yours."']})]})}),e.jsxs("section",{style:{padding:"20px 20px 80px",maxWidth:900,margin:"0 auto"},children:[e.jsx("p",{style:{fontFamily:"Cinzel Decorative, serif",color:"#D4AF37",fontSize:"clamp(0.7rem, 1.8vw, 0.9rem)",letterSpacing:"0.2em",textAlign:"center",marginBottom:12},children:"✦ Invitation From Both Families ✦"}),e.jsx("p",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",color:"rgba(255,200,120,0.6)",textAlign:"center",fontSize:"0.9rem",marginBottom:40},children:"With folded hands and full hearts, we request your blessings"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"stretch",justifyContent:"center"},children:[e.jsxs("div",{className:"family-block",children:[e.jsx("div",{style:{marginBottom:12,color:"#D4AF37"},children:e.jsx("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[0,-1,1,-2,2].map((t,f)=>e.jsx("path",{d:`M ${18+t*5} 34 C ${14+t*5} 26, ${10+t*5} 18, ${18+t*5} 6 C ${26+t*5} 18, ${22+t*5} 26, ${18+t*5} 34Z`,fill:"#D4AF37",opacity:1-Math.abs(t)*.25,transform:`rotate(${t*15} 18 34)`},f))})}),e.jsx("p",{style:{fontFamily:"Cinzel Decorative, serif",color:"#FFA07A",fontSize:"0.7rem",letterSpacing:"0.2em",marginBottom:14},children:"BRIDE'S FAMILY"}),e.jsx("p",{style:{fontFamily:"Yeseva One, serif",fontSize:"clamp(1.3rem, 3vw, 1.6rem)",color:"#FFF8E7",marginBottom:14},children:"Mardhekar Parivar"}),e.jsx("div",{style:{width:60,height:1,background:"linear-gradient(90deg, transparent, #D4AF37, transparent)",margin:"0 auto 16px"}}),e.jsxs("p",{style:{fontFamily:"Libre Baskerville, serif",color:"#FFC87A",fontSize:"0.9rem",lineHeight:2},children:["Shri Ramdas Mardhekar",e.jsx("br",{}),"Smt. Meenakshi Mardhekar",e.jsx("br",{}),e.jsx("em",{style:{color:"#D4AF37",fontSize:"0.82rem"},children:"(Parents of the Bride)"}),e.jsx("br",{}),e.jsx("br",{}),"Mumbai, India"]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",minWidth:40,gap:12},children:[e.jsx("div",{style:{width:1,flex:1,minHeight:40,background:"linear-gradient(180deg, transparent, rgba(212,175,55,0.6), rgba(212,175,55,0.6), transparent)"}}),e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:e.jsx("path",{d:"M16 4 C18 10,24 12,28 16 C24 20,18 22,16 28 C14 22,8 20,4 16 C8 12,14 10,16 4Z",fill:"#D4AF37",opacity:"0.8"})}),e.jsx("div",{style:{width:1,flex:1,minHeight:40,background:"linear-gradient(180deg, transparent, rgba(212,175,55,0.6), rgba(212,175,55,0.6), transparent)"}})]}),e.jsxs("div",{className:"family-block",children:[e.jsx("div",{style:{marginBottom:12,color:"#D4AF37"},children:e.jsx("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[0,-1,1,-2,2].map((t,f)=>e.jsx("path",{d:`M ${18+t*5} 34 C ${14+t*5} 26, ${10+t*5} 18, ${18+t*5} 6 C ${26+t*5} 18, ${22+t*5} 26, ${18+t*5} 34Z`,fill:"#D4AF37",opacity:1-Math.abs(t)*.25,transform:`rotate(${t*15} 18 34)`},f))})}),e.jsx("p",{style:{fontFamily:"Cinzel Decorative, serif",color:"#FFA07A",fontSize:"0.7rem",letterSpacing:"0.2em",marginBottom:14},children:"GROOM'S FAMILY"}),e.jsx("p",{style:{fontFamily:"Yeseva One, serif",fontSize:"clamp(1.3rem, 3vw, 1.6rem)",color:"#FFF8E7",marginBottom:14},children:"Panderkar Parivar"}),e.jsx("div",{style:{width:60,height:1,background:"linear-gradient(90deg, transparent, #D4AF37, transparent)",margin:"0 auto 16px"}}),e.jsxs("p",{style:{fontFamily:"Libre Baskerville, serif",color:"#FFC87A",fontSize:"0.9rem",lineHeight:2},children:["Shri Jagdish Panderkar",e.jsx("br",{}),"Smt. Diksha Panderkar",e.jsx("br",{}),e.jsx("em",{style:{color:"#D4AF37",fontSize:"0.82rem"},children:"(Parents of the Groom)"}),e.jsx("br",{}),e.jsx("br",{}),"Mumbai, India"]})]})]})]}),e.jsxs("footer",{style:{textAlign:"center",padding:"48px 20px 60px",borderTop:"1px solid rgba(212,175,55,0.15)"},children:[e.jsx(v,{}),e.jsxs("p",{style:{fontFamily:"Libre Baskerville, serif",fontStyle:"italic",color:"#D4AF37",fontSize:"1rem",marginTop:20,lineHeight:1.9},children:['"Marriages are made in heaven,',e.jsx("br",{}),'and we are blessed to celebrate ours with you."']}),e.jsx("p",{style:{fontFamily:"Cinzel Decorative, serif",color:"rgba(212,175,55,0.45)",fontSize:"0.72rem",marginTop:20,letterSpacing:"0.25em"},children:"Sarvesh & Dipali — 10th May 2026"})]})]})]})]})}function S(){return e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{position:"absolute",inset:0},children:["M 0 12 L 0 0 L 12 0","M 88 0 L 100 0 L 100 12","M 0 88 L 0 100 L 12 100","M 88 100 L 100 100 L 100 88"].map((i,a)=>e.jsx("path",{d:i,stroke:"#D4AF37",strokeWidth:"0.4",fill:"none",strokeOpacity:"0.5",vectorEffect:"non-scaling-stroke"},a))})}export{M as component};
