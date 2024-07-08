import e,{useMemo as o,forwardRef as t}from"react";var r=function(){return r=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},r.apply(this,arguments)};function n(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;var l={pixelButton:"Button-module__pixelButton___8EYeN"},a=function(t){var a=t.children,c=t.className,s=void 0===c?"":c,p=t.bg,h=t.textColor,i=t.shadow,u=t.borderColor,d=t.style,m=n(t,["children","className","bg","textColor","shadow","borderColor","style"]),v=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(u||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[u]),x=r(r({},d),{"--button-custom-bg":p,"--button-custom-text":h,"--button-custom-shadow":i,"--button-custom-border":u,borderImageSource:v});return e.createElement("button",r({className:"".concat(l.pixelButton," ").concat(s),style:x},m),a)},c={pixelCard:"Card-module__pixelCard___RY5ZX"},s=function(t){var l=t.children,a=t.className,s=void 0===a?"":a,p=t.bg,h=t.textColor,i=t.borderColor,u=t.shadowColor,d=t.style,m=n(t,["children","className","bg","textColor","borderColor","shadowColor","style"]),v=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),x=r(r({},d),{"--card-custom-bg":p,"--card-custom-text":h,"--card-custom-border":i,"--card-custom-shadow":u,borderImageSource:v});return e.createElement("div",r({className:"".concat(c.pixelCard," ").concat(s),style:x},m),l)},p={pixelDropdown:"DropdownMenu-module__pixelDropdown___qMDXF",pixelDropdownTrigger:"DropdownMenu-module__pixelDropdownTrigger___TTH5D",pixelDropdownArrow:"DropdownMenu-module__pixelDropdownArrow___C6PFR",pixelDropdownContent:"DropdownMenu-module__pixelDropdownContent___xUGvv",pixelDropdownItem:"DropdownMenu-module__pixelDropdownItem___NbolQ"},h=function(t){var r=t.children,n=t.className,l=void 0===n?"":n,a=t.bg,c=t.textColor,s=t.borderColor,h=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(s||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[s]),i={"--dropdown-custom-bg":a,"--dropdown-custom-text":c,"--dropdown-custom-border":s,borderImageSource:h};return e.createElement("div",{className:"".concat(p.pixelDropdown," ").concat(l),style:i},r)},i=function(o){var t=o.children;return e.createElement("button",{className:"".concat(p.pixelDropdownTrigger," flex items-center justify-between w-full")},t,e.createElement("svg",{className:"".concat(p.pixelDropdownArrow," w-5 h-5 ml-2.5 transition-transform duration-300"),width:"20",height:"30",viewBox:"0 0 300 449",fill:"currentColor"},e.createElement("path",{d:"M514 2258 l1 -1753 248 -3 247 -2 0 250 0 250 244 0 c185 0 247 3\n        253 13 4 6 8 118 8 247 l0 235 240 5 c132 3 246 9 253 13 9 6 12 67 12 248 l0\n        239 238 0 c130 0 243 4 250 8 9 7 12 63 10 248 l-3 239 -247 3 -247 2 -3 244\n        c-2 135 -7 248 -11 253 -5 4 -102 7 -215 5 -114 -1 -224 0 -244 3 l-37 7 1\n        239 c1 131 -2 242 -6 247 -4 4 -118 8 -252 10 l-244 3 0 249 0 250 -248 0\n        -248 0 0 -1752z"})))},u=function(o){var t=o.children;return e.createElement("div",{className:"".concat(p.pixelDropdownContent," absolute min-w-[200px] w-[110%] left-[-10px] z-10")},t)},d=function(o){var t=o.children;return e.createElement("a",{href:"#",className:"".concat(p.pixelDropdownItem," block py-3 px-5 text-base transition-all duration-300 ease-in-out")},t)},m={pixelProgressbarContainer:"ProgressBar-module__pixelProgressbarContainer___eQrfa",pixelProgressbar:"ProgressBar-module__pixelProgressbar___naQch",pixelProgressbarSm:"ProgressBar-module__pixelProgressbarSm___bcfOY",pixelProgressbarMd:"ProgressBar-module__pixelProgressbarMd___EBy8U",pixelProgressbarLg:"ProgressBar-module__pixelProgressbarLg___b2T9x"},v=function(t){var r=t.progress,n=t.className,l=void 0===n?"":n,a=t.size,c=void 0===a?"md":a,s=t.color,p=t.borderColor,h=Math.min(Math.max(r,0),100),i=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(p||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[p]),u="".concat(m.pixelProgressbarContainer," ").concat(m["pixelProgressbar".concat(c.charAt(0).toUpperCase()+c.slice(1))]," ").concat(l).trim(),d={"--progressbar-custom-color":s,"--progressbar-custom-border-color":p,borderImageSource:i};return e.createElement("div",{className:u,style:d},e.createElement("div",{className:m.pixelProgressbar,style:{width:"".concat(h,"%")}}))},x={pixelPopupOverlay:"Popup-module__pixelPopupOverlay___sCrPr",pixelPopup:"Popup-module__pixelPopup___n--zK",pixelPopupInner:"Popup-module__pixelPopupInner___8KoDw",pixelPopupTitle:"Popup-module__pixelPopupTitle___ofGZp",pixelPopupCloseButton:"Popup-module__pixelPopupCloseButton___BiT6T",pixelPopupContent:"Popup-module__pixelPopupContent___ECzm3"},_=function(o){var t=o.isOpen,r=o.onClose,n=o.className,l=void 0===n?"":n,a=o.children,c=o.title,s=o.closeButtonText,p=void 0===s?"X":s,h=o.outerBg,i=o.innerBg,u=o.textColor,d=o.borderColor;if(!t)return null;var m={"--custom-outer-bg":h,"--custom-inner-bg":i,"--custom-text":u,"--custom-border":d};return e.createElement("div",{className:"".concat(x.pixelPopupOverlay," ").concat(l),onClick:r,style:m},e.createElement("div",{className:x.pixelPopup,onClick:function(e){return e.stopPropagation()}},e.createElement("div",{className:x.pixelPopupInner},c&&e.createElement("h2",{className:x.pixelPopupTitle},c),e.createElement("button",{className:x.pixelPopupCloseButton,onClick:r},p),e.createElement("div",{className:x.pixelPopupContent},a))))},g={pixelContainer:"Input-module__pixelContainer___q-uvd",pixelInput:"Input-module__pixelInput___iCtVe",pixelInputIconButton:"Input-module__pixelInputIconButton___RE0AJ"},M=function(t){var l=t.className,a=void 0===l?"":l,c=t.icon,s=t.onIconClick,p=t.bg,h=t.textColor,i=t.borderColor,u=t.style,d=n(t,["className","icon","onIconClick","bg","textColor","borderColor","style"]),m=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),v=r(r({},u),{"--input-custom-bg":p,"--input-custom-text":h,"--input-custom-border":i,borderImageSource:m});return e.createElement("div",{className:"".concat(g.pixelContainer," relative mx-1 my-2 ").concat(a),style:v},e.createElement("input",r({className:"".concat(g.pixelInput," w-full pr-7 font-minecraft")},d)),c&&e.createElement("button",{className:"".concat(g.pixelInputIconButton," absolute right-0 top-0"),onClick:s,type:"button"},e.createElement("img",{src:c,alt:"Input icon",className:"w-5 h-5"})))},b={pixelTextarea:"TextArea-module__pixelTextarea___PfPoJ"},w=t((function(t,l){var a=t.className,c=void 0===a?"":a,s=t.bg,p=t.textColor,h=t.borderColor,i=t.style,u=n(t,["className","bg","textColor","borderColor","style"]),d=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(h||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[h]),m=r(r({},i),{"--textarea-custom-bg":s,"--textarea-custom-text":p,"--textarea-custom-border":h,borderImageSource:d});return e.createElement("textarea",r({ref:l,className:"".concat(b.pixelTextarea," font-minecraft ").concat(c),style:m},u))}));w.displayName="TextArea";var z=void 0;export{a as Button,l as ButtonStyles,s as Card,c as CardStyles,h as DropdownMenu,u as DropdownMenuContent,d as DropdownMenuItem,p as DropdownMenuStyles,i as DropdownMenuTrigger,M as Input,g as InputStyles,_ as Popup,x as PopupStyles,v as ProgressBar,m as ProgressBarStyles,w as TextArea,b as TextAreaStyles,z as globalStyles};
//# sourceMappingURL=index.js.map
