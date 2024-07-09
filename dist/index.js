import e,{useMemo as o,createContext as t,useState as r,useContext as n,forwardRef as l}from"react";var a=function(){return a=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},a.apply(this,arguments)};function s(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;var p={pixelButton:"Button-module__pixelButton___8EYeN"},c=function(t){var r=t.children,n=t.className,l=void 0===n?"":n,c=t.bg,h=t.textColor,i=t.shadow,u=t.borderColor,v=t.style,d=s(t,["children","className","bg","textColor","shadow","borderColor","style"]),m=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(u||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[u]),x=a(a({},v),{"--button-custom-bg":c,"--button-custom-text":h,"--button-custom-shadow":i,"--button-custom-border":u,borderImageSource:m});return e.createElement("button",a({className:"".concat(p.pixelButton," ").concat(l),style:x},d),r)},h={pixelCard:"Card-module__pixelCard___RY5ZX"},i=function(t){var r=t.children,n=t.className,l=void 0===n?"":n,p=t.bg,c=t.textColor,i=t.borderColor,u=t.shadowColor,v=t.style,d=s(t,["children","className","bg","textColor","borderColor","shadowColor","style"]),m=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),x=a(a({},v),{"--card-custom-bg":p,"--card-custom-text":c,"--card-custom-border":i,"--card-custom-shadow":u,borderImageSource:m});return e.createElement("div",a({className:"".concat(h.pixelCard," ").concat(l),style:x},d),r)},u={pixelDropdown:"DropdownMenu-module__pixelDropdown___qMDXF",pixelDropdownTrigger:"DropdownMenu-module__pixelDropdownTrigger___TTH5D",pixelDropdownArrow:"DropdownMenu-module__pixelDropdownArrow___C6PFR",pixelDropdownContent:"DropdownMenu-module__pixelDropdownContent___xUGvv",pixelDropdownItem:"DropdownMenu-module__pixelDropdownItem___NbolQ"},v=t(void 0),d=function(o){var t=o.children,n=o.className,l=void 0===n?"":n,s=o.bg,p=o.textColor,c=r(!1),h=c[0],i=c[1],d=a(a({},s&&{"--custom-bg":s}),p&&{"--custom-text":p});return e.createElement(v.Provider,{value:{isOpen:h,setIsOpen:i,bg:s,textColor:p}},e.createElement("div",{className:"".concat(u.pixelDropdown," ").concat(l),style:d},t))},m=function(o){var t=o.children;if(!n(v))throw new Error("DropdownMenuTrigger must be used within a DropdownMenu");return e.createElement("button",{className:"".concat(u.pixelDropdownTrigger," flex items-center justify-between w-full")},t,e.createElement("span",{className:"".concat(u.pixelDropdownArrow," ml-2.5 font-minecraft")},">"))},x=function(o){var t=o.children;if(!n(v))throw new Error("DropdownMenuContent must be used within a DropdownMenu");return e.createElement("div",{className:"".concat(u.pixelDropdownContent," absolute min-w-[200px] w-[110%] left-[-10px] z-10")},t)},g=function(o){var t=o.children;return e.createElement("a",{href:"#",className:"".concat(u.pixelDropdownItem," block py-3 px-5 text-base transition-all duration-300 ease-in-out")},t)},_={pixelProgressbarContainer:"ProgressBar-module__pixelProgressbarContainer___eQrfa",pixelProgressbar:"ProgressBar-module__pixelProgressbar___naQch",pixelProgressbarSm:"ProgressBar-module__pixelProgressbarSm___bcfOY",pixelProgressbarMd:"ProgressBar-module__pixelProgressbarMd___EBy8U",pixelProgressbarLg:"ProgressBar-module__pixelProgressbarLg___b2T9x"},b=function(t){var r=t.progress,n=t.className,l=void 0===n?"":n,a=t.size,s=void 0===a?"md":a,p=t.color,c=t.borderColor,h=Math.min(Math.max(r,0),100),i=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(c||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[c]),u="".concat(_.pixelProgressbarContainer," ").concat(_["pixelProgressbar".concat(s.charAt(0).toUpperCase()+s.slice(1))]," ").concat(l).trim(),v={"--progressbar-custom-color":p,"--progressbar-custom-border-color":c,borderImageSource:i};return e.createElement("div",{className:u,style:v},e.createElement("div",{className:_.pixelProgressbar,style:{width:"".concat(h,"%")}}))},M={pixelPopupOverlay:"Popup-module__pixelPopupOverlay___sCrPr",pixelPopup:"Popup-module__pixelPopup___n--zK",pixelPopupInner:"Popup-module__pixelPopupInner___8KoDw",pixelPopupTitle:"Popup-module__pixelPopupTitle___ofGZp",pixelPopupCloseButton:"Popup-module__pixelPopupCloseButton___BiT6T",pixelPopupContent:"Popup-module__pixelPopupContent___ECzm3"},w=function(t){var r=t.isOpen,n=t.onClose,l=t.className,a=void 0===l?"":l,s=t.children,p=t.title,c=t.closeButtonText,h=void 0===c?"X":c,i=t.bg,u=t.baseBg,v=t.overlayBg,d=t.textColor,m=t.borderColor;if(!r)return null;var x=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(m||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[m]),g={"--popup-bg":i,"--popup-base-bg":u,"--popup-overlay-bg":v,"--popup-text":d,"--popup-border":m,"--popup-border-svg":x};return e.createElement("div",{className:"".concat(M.pixelPopupOverlay," ").concat(a),onClick:n,style:g},e.createElement("div",{className:M.pixelPopup,onClick:function(e){return e.stopPropagation()}},e.createElement("div",{className:M.pixelPopupInner},p&&e.createElement("h2",{className:M.pixelPopupTitle},p),e.createElement("button",{className:M.pixelPopupCloseButton,onClick:n},h),e.createElement("div",{className:M.pixelPopupContent},s))))},z={pixelContainer:"Input-module__pixelContainer___q-uvd",pixelInput:"Input-module__pixelInput___iCtVe",pixelInputIconButton:"Input-module__pixelInputIconButton___RE0AJ"},C=function(t){var r=t.className,n=void 0===r?"":r,l=t.icon,p=t.onIconClick,c=t.bg,h=t.textColor,i=t.borderColor,u=t.style,v=s(t,["className","icon","onIconClick","bg","textColor","borderColor","style"]),d=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),m=a(a({},u),{"--input-custom-bg":c,"--input-custom-text":h,"--input-custom-border":i,borderImageSource:d});return e.createElement("div",{className:"".concat(z.pixelContainer," relative mx-1 my-2 ").concat(n),style:m},e.createElement("input",a({className:"".concat(z.pixelInput," w-full pr-7 font-minecraft")},v)),l&&e.createElement("button",{className:"".concat(z.pixelInputIconButton," absolute right-0 top-0"),onClick:p,type:"button"},e.createElement("img",{src:l,alt:"Input icon",className:"w-5 h-5"})))},f={pixelTextarea:"TextArea-module__pixelTextarea___PfPoJ"},P=l((function(t,r){var n=t.className,l=void 0===n?"":n,p=t.bg,c=t.textColor,h=t.borderColor,i=t.style,u=s(t,["className","bg","textColor","borderColor","style"]),v=o((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(h||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[h]),d=a(a({},i),{"--textarea-custom-bg":p,"--textarea-custom-text":c,"--textarea-custom-border":h,borderImageSource:v});return e.createElement("textarea",a({ref:r,className:"".concat(f.pixelTextarea," font-minecraft ").concat(l),style:d},u))}));P.displayName="TextArea";var y=void 0;export{c as Button,p as ButtonStyles,i as Card,h as CardStyles,d as DropdownMenu,x as DropdownMenuContent,g as DropdownMenuItem,u as DropdownMenuStyles,m as DropdownMenuTrigger,C as Input,z as InputStyles,w as Popup,M as PopupStyles,b as ProgressBar,_ as ProgressBarStyles,P as TextArea,f as TextAreaStyles,y as globalStyles};
//# sourceMappingURL=index.js.map
