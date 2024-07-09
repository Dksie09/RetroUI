import e,{useMemo as o,createContext as r,useContext as t,forwardRef as n}from"react";var l=function(){return l=Object.assign||function(e){for(var o,r=1,t=arguments.length;r<t;r++)for(var n in o=arguments[r])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},l.apply(this,arguments)};function a(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r}"function"==typeof SuppressedError&&SuppressedError;var s={pixelButton:"Button-module__pixelButton___8EYeN"},c=function(r){var t=r.children,n=r.className,c=void 0===n?"":n,p=r.bg,h=r.textColor,i=r.shadow,u=r.borderColor,v=r.style,d=a(r,["children","className","bg","textColor","shadow","borderColor","style"]),m=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(u||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[u]),g=l(l({},v),{"--button-custom-bg":p,"--button-custom-text":h,"--button-custom-shadow":i,"--button-custom-border":u,borderImageSource:m});return e.createElement("button",l({className:"".concat(s.pixelButton," ").concat(c," p-0"),style:g},d),t)},p={pixelCard:"Card-module__pixelCard___RY5ZX"},h=function(r){var t=r.children,n=r.className,s=void 0===n?"":n,c=r.bg,h=r.textColor,i=r.borderColor,u=r.shadowColor,v=r.style,d=a(r,["children","className","bg","textColor","borderColor","shadowColor","style"]),m=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),g=l(l({},v),{"--card-custom-bg":c,"--card-custom-text":h,"--card-custom-border":i,"--card-custom-shadow":u,borderImageSource:m});return e.createElement("div",l({className:"".concat(p.pixelCard," ").concat(s),style:g},d),t)},i={pixelDropdown:"DropdownMenu-module__pixelDropdown___qMDXF",pixelDropdownTrigger:"DropdownMenu-module__pixelDropdownTrigger___TTH5D",pixelDropdownArrow:"DropdownMenu-module__pixelDropdownArrow___C6PFR",pixelDropdownContent:"DropdownMenu-module__pixelDropdownContent___xUGvv",pixelDropdownItem:"DropdownMenu-module__pixelDropdownItem___NbolQ"},u=r(void 0),v=function(r){var t=r.children,n=r.className,l=void 0===n?"":n,a=r.bg,s=r.textColor,c=r.borderColor,p=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(c||"rgb(0,0,0)",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[c]),h=o((function(){return{bg:a,textColor:s,borderColor:c,svgString:p}}),[a,s,c,p]);return e.createElement(u.Provider,{value:h},e.createElement("div",{className:"".concat(i.pixelDropdown," ").concat(l)},t))},d=function(o){var r=o.children,n=t(u),l={"--dropdown-custom-bg":null==n?void 0:n.bg,"--dropdown-custom-text":null==n?void 0:n.textColor,"--dropdown-custom-border":null==n?void 0:n.borderColor,borderImageSource:null==n?void 0:n.svgString};return e.createElement("div",{className:i.pixelDropdownTrigger,style:l},r,e.createElement("span",{className:i.pixelDropdownArrow},">"))},m=function(o){var r=o.children,n=t(u),l={"--dropdown-custom-bg":null==n?void 0:n.bg,"--dropdown-custom-text":null==n?void 0:n.textColor,"--dropdown-custom-border":null==n?void 0:n.borderColor,borderImageSource:null==n?void 0:n.svgString};return e.createElement("div",{className:i.pixelDropdownContent,style:l},r)},g=function(o){var r=o.children,t=o.onClick;return e.createElement("a",{className:i.pixelDropdownItem,onClick:t},r)},x={pixelProgressbarContainer:"ProgressBar-module__pixelProgressbarContainer___eQrfa",pixelProgressbar:"ProgressBar-module__pixelProgressbar___naQch",pixelProgressbarSm:"ProgressBar-module__pixelProgressbarSm___bcfOY",pixelProgressbarMd:"ProgressBar-module__pixelProgressbarMd___EBy8U",pixelProgressbarLg:"ProgressBar-module__pixelProgressbarLg___b2T9x"},_=function(r){var t=r.progress,n=r.className,l=void 0===n?"":n,a=r.size,s=void 0===a?"md":a,c=r.color,p=r.borderColor,h=Math.min(Math.max(t,0),100),i=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(p||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[p]),u="".concat(x.pixelProgressbarContainer," ").concat(x["pixelProgressbar".concat(s.charAt(0).toUpperCase()+s.slice(1))]," ").concat(l).trim(),v={"--progressbar-custom-color":c,"--progressbar-custom-border-color":p,borderImageSource:i};return e.createElement("div",{className:u,style:v},e.createElement("div",{className:x.pixelProgressbar,style:{width:"".concat(h,"%")}}))},M={pixelPopupOverlay:"Popup-module__pixelPopupOverlay___sCrPr",pixelPopup:"Popup-module__pixelPopup___n--zK",pixelPopupInner:"Popup-module__pixelPopupInner___8KoDw",pixelPopupTitle:"Popup-module__pixelPopupTitle___ofGZp",pixelPopupCloseButton:"Popup-module__pixelPopupCloseButton___BiT6T",pixelPopupContent:"Popup-module__pixelPopupContent___ECzm3"},b=function(r){var t=r.isOpen,n=r.onClose,l=r.className,a=void 0===l?"":l,s=r.children,c=r.title,p=r.closeButtonText,h=void 0===p?"X":p,i=r.bg,u=r.baseBg,v=r.overlayBg,d=r.textColor,m=r.borderColor;if(!t)return null;var g=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(m||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[m]),x={"--popup-bg":i,"--popup-base-bg":u,"--popup-overlay-bg":v,"--popup-text":d,"--popup-border":m,"--popup-border-svg":g};return e.createElement("div",{className:"".concat(M.pixelPopupOverlay," ").concat(a),onClick:n,style:x},e.createElement("div",{className:M.pixelPopup,onClick:function(e){return e.stopPropagation()}},e.createElement("div",{className:M.pixelPopupInner},c&&e.createElement("h2",{className:M.pixelPopupTitle},c),e.createElement("button",{className:M.pixelPopupCloseButton,onClick:n},h),e.createElement("div",{className:M.pixelPopupContent},s))))},z={pixelContainer:"Input-module__pixelContainer___q-uvd",pixelInput:"Input-module__pixelInput___iCtVe",pixelInputIconButton:"Input-module__pixelInputIconButton___RE0AJ"},w=function(r){var t=r.className,n=void 0===t?"":t,s=r.icon,c=r.onIconClick,p=r.bg,h=r.textColor,i=r.borderColor,u=r.style,v=a(r,["className","icon","onIconClick","bg","textColor","borderColor","style"]),d=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),m=l(l({},u),{"--input-custom-bg":p,"--input-custom-text":h,"--input-custom-border":i,borderImageSource:d});return e.createElement("div",{className:"".concat(z.pixelContainer," relative mx-1 my-2 ").concat(n),style:m},e.createElement("input",l({className:"".concat(z.pixelInput," w-full pr-7 font-minecraft")},v)),s&&e.createElement("button",{className:"".concat(z.pixelInputIconButton," absolute right-0 top-0"),onClick:c,type:"button"},e.createElement("img",{src:s,alt:"Input icon",className:"w-5 h-5"})))},C={pixelTextarea:"TextArea-module__pixelTextarea___PfPoJ"},P=n((function(r,t){var n=r.className,s=void 0===n?"":n,c=r.bg,p=r.textColor,h=r.borderColor,i=r.style,u=a(r,["className","bg","textColor","borderColor","style"]),v=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(h||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[h]),d=l(l({},i),{"--textarea-custom-bg":c,"--textarea-custom-text":p,"--textarea-custom-border":h,borderImageSource:v});return e.createElement("textarea",l({ref:t,className:"".concat(C.pixelTextarea," font-minecraft ").concat(s),style:d},u))}));P.displayName="TextArea";var f=void 0;export{c as Button,s as ButtonStyles,h as Card,p as CardStyles,v as DropdownMenu,m as DropdownMenuContent,g as DropdownMenuItem,i as DropdownMenuStyles,d as DropdownMenuTrigger,w as Input,z as InputStyles,b as Popup,M as PopupStyles,_ as ProgressBar,x as ProgressBarStyles,P as TextArea,C as TextAreaStyles,f as globalStyles};
//# sourceMappingURL=index.js.map
