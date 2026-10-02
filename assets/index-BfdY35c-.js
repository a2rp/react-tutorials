import{d as a,j as e,N as s,F as p,a as o,b as d,c}from"./index-Bkwq0BLR.js";const x=a.div`
    max-width: 1080px;
    margin: 0 auto;
    padding: 24px 0 34px;
`,l=a.p`
    margin: 0 0 14px;
    color: #aeaeae;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`,h=a.section`
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(230px, 0.7fr);
    gap: 32px;
    align-items: end;
    padding: 30px 0 72px;
`,g=a.h1`,
    max-width: 680px;
    margin: 0;
    color: #f6f6f6;
    font-size: clamp(40px, 7vw, 76px);
    line-height: 0.98;
    letter-spacing: -0.06em;
`,m=a.p`
    max-width: 660px;
    margin: 22px 0 0;
    color: #9f9f9f;
    font-size: 16px;
    line-height: 1.7;
`,f=a.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;

    a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 11px 14px;
        border: 1px solid #4a4a4a;
        border-radius: 10px;
        color: #e8e8e8;
        text-decoration: none;
        transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

        &:hover {
            border-color: #aeaeae;
            color: #aeaeae;
            box-shadow: 0 8px 18px rgba(123, 123, 123, 0.16);
        }
    }
`,b=a.aside`
    display: grid;
    gap: 10px;
    padding: 22px;
    border: 1px solid #3b3b3b;
    border-radius: 16px;
    background: linear-gradient(145deg, #1d1d1d, #141414);
    box-shadow: 0 20px 42px rgba(0, 0, 0, 0.2);

    svg {
        color: #aeaeae;
        font-size: 26px;
    }

    strong {
        color: #f3f3f3;
        font-size: 17px;
    }

    span {
        color: #929292;
        font-size: 13px;
        line-height: 1.6;
    }
`,u=a.section`
    scroll-margin-top: 90px;
`,j=a.p`
    margin: 0 0 14px;
    color: #838383;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
`,w=a.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
`,y=a.article`
    min-height: 170px;
    padding: 20px;
    border: 1px solid #373737;
    border-radius: 14px;
    background: #191919;
    transition: border-color 160ms ease, box-shadow 160ms ease;

    &:hover {
        border-color: #747474;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    svg {
        color: #aeaeae;
        font-size: 22px;
    }

    h2 {
        margin: 22px 0 8px;
        color: #f2f2f2;
        font-size: 19px;
    }

    p {
        margin: 0;
        color: #999999;
        font-size: 13px;
        line-height: 1.6;
    }

    @media (max-width: 850px) {
        min-height: 0;
    }
`,r={Wrapper:x,Eyebrow:l,Hero:h,Title:g,Intro:m,Actions:f,FeatureCard:b,Section:u,SectionLabel:j,CardGrid:w,Card:y},v=[{icon:o,title:"Short lessons",text:"Each page keeps one idea clear, practical, and easy to revisit."},{icon:d,title:"Useful patterns",text:"Build a stronger foundation with examples that fit real interfaces."},{icon:c,title:"Commit-ready notes",text:"Turn every concept into a small experiment you can keep improving."}],C=()=>e.jsxs(r.Wrapper,{children:[e.jsx(r.Eyebrow,{children:"React learning hub"}),e.jsxs(r.Hero,{children:[e.jsxs("div",{children:[e.jsx(r.Title,{children:"Learn the idea. Build the interface."}),e.jsx(r.Intro,{children:"A route-based collection of concise React notes, practical examples, and small exercises for steady frontend progress."}),e.jsxs(r.Actions,{children:[e.jsxs(s,{to:"/about",children:["About the project ",e.jsx(p,{})]}),e.jsx("a",{href:"#highlights",children:"Explore approach"})]})]}),e.jsxs(r.FeatureCard,{children:[e.jsx(o,{}),e.jsx("strong",{children:"Start with one concept"}),e.jsx("span",{children:"Read a note, try the pattern, then make it your own."})]})]}),e.jsxs(r.Section,{id:"highlights",children:[e.jsx(r.SectionLabel,{children:"What you will find"}),e.jsx(r.CardGrid,{children:v.map(({icon:t,title:i,text:n})=>e.jsxs(r.Card,{children:[t({}),e.jsx("h2",{children:i}),e.jsx("p",{children:n})]},i))})]})]});export{C as default};
