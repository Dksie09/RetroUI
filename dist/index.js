import e,{createContext as t,useState as o,useContext as r,useMemo as l,forwardRef as a}from"react";var n=function(){return n=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var l in t=arguments[o])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},n.apply(this,arguments)};function c(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(o[r[l]]=e[r[l]])}return o}"function"==typeof SuppressedError&&SuppressedError;var s={pixelButton:"Button-module__pixelButton___8EYeN",pixelButtonPrimary:"Button-module__pixelButtonPrimary___JGrm8",pixelButtonSecondary:"Button-module__pixelButtonSecondary___0w1qf",pixelButtonOutline:"Button-module__pixelButtonOutline___NNYC-"},i=function(t){var o=t.children,r=t.variant,l=void 0===r?"primary":r,a=t.className,i=void 0===a?"":a,p=t.bg,u=t.textColor,d=t.shadow,m=t.style,_=c(t,["children","variant","className","bg","textColor","shadow","style"]),x=s.pixelButton,h=s["pixelButton".concat(l.charAt(0).toUpperCase()+l.slice(1))],v=n(n(n(n({},m),p&&{"--custom-bg":p}),u&&{"--custom-text":u}),d&&{"--custom-shadow":d});return e.createElement("button",n({className:"".concat(x," ").concat(h," ").concat(i),style:v},_),o)},p={pixelCard:"Card-module__pixelCard___RY5ZX",pixelCardPrimary:"Card-module__pixelCardPrimary___cl8Sz",pixelCardSecondary:"Card-module__pixelCardSecondary___5Uh2-",pixelCardOutline:"Card-module__pixelCardOutline___IUpmJ",pixelCardHeader:"Card-module__pixelCardHeader___Mzbdk",pixelCardTitle:"Card-module__pixelCardTitle___xmeUJ",pixelCardDescription:"Card-module__pixelCardDescription___7KNZn",pixelCardContent:"Card-module__pixelCardContent___pQqRe",pixelCardFooter:"Card-module__pixelCardFooter___oVZm7"},u=function(t){var o=t.children,r=t.className,l=void 0===r?"":r,a=t.variant,s=void 0===a?"primary":a,i=t.bg,u=t.textColor,d=t.shadow,m=t.style,_=c(t,["children","className","variant","bg","textColor","shadow","style"]),x=p.pixelCard,h=p["pixelCard".concat(s.charAt(0).toUpperCase()+s.slice(1))],v=n(n(n(n({},m),i&&{"--custom-bg":i}),u&&{"--custom-text":u}),d&&{"--custom-shadow":d});return e.createElement("div",n({className:"".concat(x," ").concat(h," ").concat(l),style:v},_),o)},d=function(t){var o=t.children,r=t.className,l=void 0===r?"":r,a=t.textColor,s=t.style,i=c(t,["children","className","textColor","style"]),u=n(n({},s),a&&{"--custom-text":a});return e.createElement("div",n({className:"".concat(p.pixelCardHeader," ").concat(l),style:u},i),o)},m=function(t){var o=t.children,r=t.className,l=void 0===r?"":r,a=t.textColor,s=t.style,i=c(t,["children","className","textColor","style"]),u=n(n({},s),a&&{"--custom-text":a});return e.createElement("h3",n({className:"".concat(p.pixelCardTitle," ").concat(l),style:u},i),o)},_=function(t){var o=t.children,r=t.className,l=void 0===r?"":r,a=t.textColor,s=t.style,i=c(t,["children","className","textColor","style"]),u=n(n({},s),a&&{"--custom-text":a});return e.createElement("p",n({className:"".concat(p.pixelCardDescription," ").concat(l),style:u},i),o)},x=function(t){var o=t.children,r=t.className,l=void 0===r?"":r,a=c(t,["children","className"]);return e.createElement("div",n({className:"".concat(p.pixelCardContent," ").concat(l)},a),o)},h=function(t){var o=t.children,r=t.className,l=void 0===r?"":r,a=t.textColor,s=t.style,i=c(t,["children","className","textColor","style"]),u=n(n({},s),a&&{"--custom-text":a});return e.createElement("div",n({className:"".concat(p.pixelCardFooter," ").concat(l),style:u},i),o)},v={pixelDropdown:"DropdownMenu-module__pixelDropdown___qMDXF",pixelDropdownTrigger:"DropdownMenu-module__pixelDropdownTrigger___TTH5D",pixelDropdownArrow:"DropdownMenu-module__pixelDropdownArrow___C6PFR",pixelDropdownContent:"DropdownMenu-module__pixelDropdownContent___xUGvv",pixelDropdownItem:"DropdownMenu-module__pixelDropdownItem___NbolQ"},C=t(void 0),g=function(t){var r=t.children,l=t.className,a=void 0===l?"":l,c=t.bg,s=t.textColor,i=o(!1),p=i[0],u=i[1],d=n(n({},c&&{"--custom-bg":c}),s&&{"--custom-text":s});return e.createElement(C.Provider,{value:{isOpen:p,setIsOpen:u,bg:c,textColor:s}},e.createElement("div",{className:"".concat(v.pixelDropdown," ").concat(a),style:d},r))},b=function(t){var o=t.children;if(!r(C))throw new Error("DropdownMenuTrigger must be used within a DropdownMenu");return e.createElement("button",{className:"".concat(v.pixelDropdownTrigger," flex items-center justify-between w-full")},o,e.createElement("img",{src:"/icons/new_play.png",alt:"Toggle Dropdown",className:"".concat(v.pixelDropdownArrow," w-5 h-5 ml-2.5 transition-transform duration-300")}))},y=function(t){var o=t.children;if(!r(C))throw new Error("DropdownMenuContent must be used within a DropdownMenu");return e.createElement("div",{className:"".concat(v.pixelDropdownContent," absolute min-w-[200px] w-[110%] left-[-10px] z-10")},o)},w=function(t){var o=t.children;return e.createElement("a",{href:"#",className:"".concat(v.pixelDropdownItem," block py-3 px-5 text-base transition-all duration-300 ease-in-out")},o)},P={pixelProgressbarContainer:"ProgressBar-module__pixelProgressbarContainer___eQrfa",pixelProgressbar:"ProgressBar-module__pixelProgressbar___naQch",pixelProgressbarSm:"ProgressBar-module__pixelProgressbarSm___bcfOY",pixelProgressbarMd:"ProgressBar-module__pixelProgressbarMd___EBy8U",pixelProgressbarLg:"ProgressBar-module__pixelProgressbarLg___b2T9x"},f=function(t){var o=t.progress,r=t.className,a=void 0===r?"":r,n=t.size,c=void 0===n?"md":n,s=t.color,i=t.borderColor,p=Math.min(Math.max(o,0),100),u=l((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(i||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[i]),d="".concat(P.pixelProgressbarContainer," ").concat(P["pixelProgressbar".concat(c.charAt(0).toUpperCase()+c.slice(1))]," ").concat(a).trim(),m={"--progressbar-custom-color":s,"--progressbar-custom-border-color":i,borderImageSource:u};return e.createElement("div",{className:d,style:m},e.createElement("div",{className:P.pixelProgressbar,style:{width:"".concat(p,"%")}}))},N={pixelPopupOverlay:"Popup-module__pixelPopupOverlay___sCrPr",pixelPopup:"Popup-module__pixelPopup___n--zK",pixelPopupInner:"Popup-module__pixelPopupInner___8KoDw",pixelPopupTitle:"Popup-module__pixelPopupTitle___ofGZp",pixelPopupCloseButton:"Popup-module__pixelPopupCloseButton___BiT6T",pixelPopupContent:"Popup-module__pixelPopupContent___ECzm3"},M=function(t){var o=t.isOpen,r=t.onClose,l=t.className,a=void 0===l?"":l,n=t.children,c=t.title,s=t.closeButtonText,i=void 0===s?"X":s,p=t.outerBg,u=t.innerBg,d=t.textColor,m=t.borderColor;if(!o)return null;var _={"--custom-outer-bg":p,"--custom-inner-bg":u,"--custom-text":d,"--custom-border":m};return e.createElement("div",{className:"".concat(N.pixelPopupOverlay," ").concat(a),onClick:r,style:_},e.createElement("div",{className:N.pixelPopup,onClick:function(e){return e.stopPropagation()}},e.createElement("div",{className:N.pixelPopupInner},c&&e.createElement("h2",{className:N.pixelPopupTitle},c),e.createElement("button",{className:N.pixelPopupCloseButton,onClick:r},i),e.createElement("div",{className:N.pixelPopupContent},n))))},E={pixelContainer:"Input-module__pixelContainer___q-uvd",pixelInput:"Input-module__pixelInput___iCtVe",pixelInputIconButton:"Input-module__pixelInputIconButton___RE0AJ"},B=function(t){var o=t.className,r=void 0===o?"":o,l=t.icon,a=t.onIconClick,s=t.bg,i=t.textColor,p=t.borderColor,u=t.style,d=c(t,["className","icon","onIconClick","bg","textColor","borderColor","style"]),m=n(n(n(n({},u),s&&{"--custom-bg":s}),i&&{"--custom-text":i}),p&&{"--custom-border":p});return e.createElement("div",{className:"".concat(E.pixelContainer," relative mx-1 my-2 ").concat(r),style:m},e.createElement("input",n({className:"".concat(E.pixelInput," w-full pr-7 font-minecraft")},d)),l&&e.createElement("button",{className:"".concat(E.pixelInputIconButton," absolute right-0 top-0"),onClick:a,type:"button"},e.createElement("img",{src:l,alt:"Input icon",className:"w-5 h-5"})))},D={pixelTextarea:"TextArea-module__pixelTextarea___PfPoJ"},z=a((function(t,o){var r=t.className,a=void 0===r?"":r,s=t.bg,i=t.textColor,p=t.borderColor,u=t.style,d=c(t,["className","bg","textColor","borderColor","style"]),m=l((function(){var e='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="'.concat(p||"currentColor",'"/></svg>');return'url("data:image/svg+xml,'.concat(encodeURIComponent(e),'")')}),[p]),_=n(n({},u),{"--textarea-custom-bg":s,"--textarea-custom-text":i,"--textarea-custom-border":p,borderImageSource:m});return e.createElement("textarea",n({ref:o,className:"".concat(D.pixelTextarea," font-minecraft ").concat(a),style:_},d))}));z.displayName="TextArea";var I=void 0;export{i as Button,s as ButtonStyles,u as Card,x as CardContent,_ as CardDescription,h as CardFooter,d as CardHeader,p as CardStyles,m as CardTitle,g as DropdownMenu,y as DropdownMenuContent,w as DropdownMenuItem,v as DropdownMenuStyles,b as DropdownMenuTrigger,B as Input,E as InputStyles,M as Popup,N as PopupStyles,f as ProgressBar,P as ProgressBarStyles,z as TextArea,D as TextAreaStyles,I as globalStyles};
//# sourceMappingURL=index.js.map
