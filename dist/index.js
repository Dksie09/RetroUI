import e,{useMemo as o,createContext as t,useState as r,useContext as n,forwardRef as l}from"react";var a=function(){return a=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},a.apply(this,arguments)};function s(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;var c={pixelButton:"Button-module__pixelButton___8EYeN"},p=function(t){var r=t.children,n=t.className,l=void 0===n?"":n,p=t.bg,i=t.textColor,u=t.shadow,h=t.borderColor,d=t.style,m=s(t,["children","className","bg","textColor","shadow","borderColor","style"]),v=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(h||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[h]),x=a(a({},d),{"--button-custom-bg":p,"--button-custom-text":i,"--button-custom-shadow":u,"--button-custom-border":h,borderImageSource:v});return e.createElement("button",a({className:"".concat(c.pixelButton," ").concat(l),style:x},m),r)},i={pixelCard:"Card-module__pixelCard___RY5ZX"},u=function(t){var r=t.children,n=t.className,l=void 0===n?"":n,c=t.bg,p=t.textColor,u=t.borderColor,h=t.shadowColor,d=t.style,m=s(t,["children","className","bg","textColor","borderColor","shadowColor","style"]),v=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(u||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[u]),x=a(a({},d),{"--card-custom-bg":c,"--card-custom-text":p,"--card-custom-border":u,"--card-custom-shadow":h,borderImageSource:v});return e.createElement("div",a({className:"".concat(i.pixelCard," ").concat(l),style:x},m),r)},h={pixelDropdown:"DropdownMenu-module__pixelDropdown___qMDXF",pixelDropdownTrigger:"DropdownMenu-module__pixelDropdownTrigger___TTH5D",pixelDropdownArrow:"DropdownMenu-module__pixelDropdownArrow___C6PFR",pixelDropdownContent:"DropdownMenu-module__pixelDropdownContent___xUGvv",pixelDropdownItem:"DropdownMenu-module__pixelDropdownItem___NbolQ"},d=t(void 0),m=function(o){var t=o.children,n=o.className,l=void 0===n?"":n,s=o.bg,c=o.textColor,p=r(!1),i=p[0],u=p[1],m=a(a({},s&&{"--custom-bg":s}),c&&{"--custom-text":c});return e.createElement(d.Provider,{value:{isOpen:i,setIsOpen:u,bg:s,textColor:c}},e.createElement("div",{className:"".concat(h.pixelDropdown," ").concat(l),style:m},t))},v=function(o){var t=o.children;if(!n(d))throw new Error("DropdownMenuTrigger must be used within a DropdownMenu");return e.createElement("button",{className:"".concat(h.pixelDropdownTrigger," flex items-center justify-between w-full")},t,e.createElement("span",{className:"".concat(h.pixelDropdownArrow," ml-2.5")},"✦"))},x=function(o){var t=o.children;if(!n(d))throw new Error("DropdownMenuContent must be used within a DropdownMenu");return e.createElement("div",{className:"".concat(h.pixelDropdownContent," absolute min-w-[200px] w-[110%] left-[-10px] z-10")},t)},_=function(o){var t=o.children;return e.createElement("a",{href:"#",className:"".concat(h.pixelDropdownItem," block py-3 px-5 text-base transition-all duration-300 ease-in-out")},t)},g={pixelProgressbarContainer:"ProgressBar-module__pixelProgressbarContainer___eQrfa",pixelProgressbar:"ProgressBar-module__pixelProgressbar___naQch",pixelProgressbarSm:"ProgressBar-module__pixelProgressbarSm___bcfOY",pixelProgressbarMd:"ProgressBar-module__pixelProgressbarMd___EBy8U",pixelProgressbarLg:"ProgressBar-module__pixelProgressbarLg___b2T9x"},b=function(t){var r=t.progress,n=t.className,l=void 0===n?"":n,a=t.size,s=void 0===a?"md":a,c=t.color,p=t.borderColor,i=Math.min(Math.max(r,0),100),u=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(p||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[p]),h="".concat(g.pixelProgressbarContainer," ").concat(g["pixelProgressbar".concat(s.charAt(0).toUpperCase()+s.slice(1))]," ").concat(l).trim(),d={"--progressbar-custom-color":c,"--progressbar-custom-border-color":p,borderImageSource:u};return e.createElement("div",{className:h,style:d},e.createElement("div",{className:g.pixelProgressbar,style:{width:"".concat(i,"%")}}))},w={pixelPopupOverlay:"Popup-module__pixelPopupOverlay___sCrPr",pixelPopup:"Popup-module__pixelPopup___n--zK",pixelPopupInner:"Popup-module__pixelPopupInner___8KoDw",pixelPopupTitle:"Popup-module__pixelPopupTitle___ofGZp",pixelPopupCloseButton:"Popup-module__pixelPopupCloseButton___BiT6T",pixelPopupContent:"Popup-module__pixelPopupContent___ECzm3"},M=function(o){var t=o.isOpen,r=o.onClose,n=o.className,l=void 0===n?"":n,a=o.children,s=o.title,c=o.closeButtonText,p=void 0===c?"X":c,i=o.outerBg,u=o.innerBg,h=o.textColor,d=o.borderColor;if(!t)return null;var m={"--custom-outer-bg":i,"--custom-inner-bg":u,"--custom-text":h,"--custom-border":d};return e.createElement("div",{className:"".concat(w.pixelPopupOverlay," ").concat(l),onClick:r,style:m},e.createElement("div",{className:w.pixelPopup,onClick:function(e){return e.stopPropagation()}},e.createElement("div",{className:w.pixelPopupInner},s&&e.createElement("h2",{className:w.pixelPopupTitle},s),e.createElement("button",{className:w.pixelPopupCloseButton,onClick:r},p),e.createElement("div",{className:w.pixelPopupContent},a))))},C={pixelContainer:"Input-module__pixelContainer___q-uvd",pixelInput:"Input-module__pixelInput___iCtVe",pixelInputIconButton:"Input-module__pixelInputIconButton___RE0AJ"},z=function(t){var r=t.className,n=void 0===r?"":r,l=t.icon,c=t.onIconClick,p=t.bg,i=t.textColor,u=t.borderColor,h=t.style,d=s(t,["className","icon","onIconClick","bg","textColor","borderColor","style"]),m=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(u||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[u]),v=a(a({},h),{"--input-custom-bg":p,"--input-custom-text":i,"--input-custom-border":u,borderImageSource:m});return e.createElement("div",{className:"".concat(C.pixelContainer," relative mx-1 my-2 ").concat(n),style:v},e.createElement("input",a({className:"".concat(C.pixelInput," w-full pr-7 font-minecraft")},d)),l&&e.createElement("button",{className:"".concat(C.pixelInputIconButton," absolute right-0 top-0"),onClick:c,type:"button"},e.createElement("img",{src:l,alt:"Input icon",className:"w-5 h-5"})))},f={pixelTextarea:"TextArea-module__pixelTextarea___PfPoJ"},P=l((function(t,r){var n=t.className,l=void 0===n?"":n,c=t.bg,p=t.textColor,i=t.borderColor,u=t.style,h=s(t,["className","bg","textColor","borderColor","style"]),d=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),m=a(a({},u),{"--textarea-custom-bg":c,"--textarea-custom-text":p,"--textarea-custom-border":i,borderImageSource:d});return e.createElement("textarea",a({ref:r,className:"".concat(f.pixelTextarea," font-minecraft ").concat(l),style:m},h))}));P.displayName="TextArea";var y=void 0;export{p as Button,c as ButtonStyles,u as Card,i as CardStyles,m as DropdownMenu,x as DropdownMenuContent,_ as DropdownMenuItem,h as DropdownMenuStyles,v as DropdownMenuTrigger,z as Input,C as InputStyles,M as Popup,w as PopupStyles,b as ProgressBar,g as ProgressBarStyles,P as TextArea,f as TextAreaStyles,y as globalStyles};
//# sourceMappingURL=index.js.map
