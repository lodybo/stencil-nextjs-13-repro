import{r,h as o,H as t}from"./p-da559836.js";const s=class{constructor(o){r(this,o)}render(){return o(t,null,o("button",{class:{button:!0,primary:this.primary}},o("slot",null)))}};s.style=":host{display:block}.button{background-color:#cbd5e1;color:#374151;font-size:1.2rem;padding:10px;border-radius:5px;border:none;cursor:pointer}.primary{background-color:rebeccapurple;color:#FFFFFF}";const n=class{constructor(o){r(this,o)}getText(){return(this.first||"")+((r=this.middle)?` ${r}`:"")+((o=this.last)?` ${o}`:"");var r,o}render(){return o("div",null,"Hello, World! I'm ",this.getText())}};n.style=":host{display:block}";export{s as my_button,n as my_component}