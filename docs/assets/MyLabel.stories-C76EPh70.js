import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{t as n}from"./compiler-runtime-DYpk9JtJ.js";var r=e((()=>{})),i,a,o,s=e((()=>{i=n(),r(),a=t(),o=e=>{let t=(0,i.c)(9),{label:n,size:r,allCaps:o,color:s,fontColor:c}=e,l=r===void 0?`normal`:r,u=o===void 0?!1:o,d=`${l} ${s===void 0?`text-primary`:s}  `,f=c&&c,p;t[0]===f?p=t[1]:(p={color:f},t[0]=f,t[1]=p);let m;t[2]!==u||t[3]!==n?(m=u?n.toUpperCase():n,t[2]=u,t[3]=n,t[4]=m):m=t[4];let h;return t[5]!==d||t[6]!==p||t[7]!==m?(h=(0,a.jsx)(`span`,{className:d,style:p,children:m}),t[5]=d,t[6]=p,t[7]=m,t[8]=h):h=t[8],h},o.__docgenInfo={description:``,methods:[],displayName:`MyLabel`,props:{label:{required:!0,tsType:{name:`string`},description:`Texto to display`},size:{required:!1,tsType:{name:`union`,raw:`"normal" | "h1" | "h2" | "h3"`,elements:[{name:`literal`,value:`"normal"`},{name:`literal`,value:`"h1"`},{name:`literal`,value:`"h2"`},{name:`literal`,value:`"h3"`}]},description:`*label size`,defaultValue:{value:`"normal"`,computed:!1}},allCaps:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`"text-primary" | "text-secondary" | "text-tertiary"`,elements:[{name:`literal`,value:`"text-primary"`},{name:`literal`,value:`"text-secondary"`},{name:`literal`,value:`"text-tertiary"`}]},description:``,defaultValue:{value:`"text-primary"`,computed:!1}},fontColor:{required:!1,tsType:{name:`string`},description:``}}}})),c,l,u,d,f,p;e((()=>{s(),c={title:`UI/labels/MyLabel`,component:o,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{size:{control:`select`,fontColor:{control:`color`}}}},l={args:{label:`Basic label`}},u={args:{label:`All Caps label`,allCaps:!0}},d={args:{label:`Secondary  label`,color:`text-secondary`}},f={args:{label:`Custom Color label`,fontColor:`#268d32`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Basic label"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "All Caps label",
    allCaps: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secondary  label",
    color: "text-secondary"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Custom Color label",
    fontColor: "#268d32"
  }
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`AllCaps`,`Secondary`,`CustomColor`]}))();export{u as AllCaps,l as Basic,f as CustomColor,d as Secondary,p as __namedExportsOrder,c as default};