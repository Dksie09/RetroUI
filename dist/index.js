import e,{createContext as t,useState as a,useContext as n,forwardRef as r}from"react";var c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};function o(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}"function"==typeof SuppressedError&&SuppressedError;var l=void 0,i=function(t){var a=t.children,n=t.variant,r=void 0===n?"primary":n,i=t.className,s=void 0===i?"":i,p=t.style,m=o(t,["children","variant","className","style"]),d="primary"===r?l.pixelButtonPrimary:"secondary"===r?l.pixelButtonSecondary:l.pixelButtonOutline;return e.createElement("button",c({className:"".concat("font-minecraft pixel-button px-2 my-2 mx-3"," ").concat(d," ").concat(s),style:p},m),a)},s=void 0,p=function(t){var a=t.children,n=t.className,r=void 0===n?"":n,l=t.style,i=t.variant,p=void 0===i?"default":i,m=o(t,["children","className","style","variant"]),d="".concat(s.pixelCard," ").concat(s.fontMinecraft),u="outline"===p?s.pixelCardOutline:s.pixelCardDefault;return e.createElement("div",c({className:"".concat(d," ").concat(u," ").concat(r),style:l},m),a)},m=function(t){var a=t.children,n=t.className,r=void 0===n?"":n,l=o(t,["children","className"]);return e.createElement("div",c({className:"".concat(s.pixelCardHeader," ").concat(r)},l),a)},d=function(t){var a=t.children,n=t.className,r=void 0===n?"":n,l=o(t,["children","className"]);return e.createElement("h3",c({className:"".concat(s.pixelCardTitle," ").concat(r)},l),a)},u=function(t){var a=t.children,n=t.className,r=void 0===n?"":n,l=o(t,["children","className"]);return e.createElement("p",c({className:"".concat(s.pixelCardDescription," ").concat(r)},l),a)},v=function(t){var a=t.children,n=t.className,r=void 0===n?"":n,l=o(t,["children","className"]);return e.createElement("div",c({className:"".concat(s.pixelCardContent," ").concat(r)},l),a)},N=function(t){var a=t.children,n=t.className,r=void 0===n?"":n,l=o(t,["children","className"]);return e.createElement("div",c({className:"".concat(s.pixelCardFooter," ").concat(r)},l),a)},f=void 0,x=t(void 0),h=function(t){var n=t.children,r=t.className,c=void 0===r?"":r,o=a(!1),l=o[0],i=o[1];return e.createElement(x.Provider,{value:{isOpen:l,setIsOpen:i}},e.createElement("div",{className:"".concat(f.pixelDropdown," ").concat(c)},n))},y=function(t){var a=t.children;if(!n(x))throw new Error("DropdownMenuTrigger must be used within a DropdownMenu");return e.createElement("button",{className:f.pixelDropdownTrigger},a,e.createElement("img",{src:"/icons/new_play.png",alt:"Toggle Dropdown",className:f.pixelDropdownArrow}))},E=function(t){var a=t.children;if(!n(x))throw new Error("DropdownMenuContent must be used within a DropdownMenu");return e.createElement("div",{className:f.pixelDropdownContent},a)},g=function(t){var a=t.children;return e.createElement("a",{href:"#",className:f.pixelDropdownItem},a)},w=void 0,C=function(t){var a=t.progress,n=t.className,r=void 0===n?"":n,c=t.showPercentage,o=void 0===c||c,l=t.color,i=void 0===l?"primary":l,s=t.size,p=void 0===s?"md":s,m=Math.min(Math.max(a,0),100),d="".concat(w.pixelProgressbarContainer," ").concat(w["pixelProgressbar".concat(p.charAt(0).toUpperCase()+p.slice(1))]," ").concat(r).trim(),u="".concat(w.pixelProgressbar," ").concat(w["pixelProgressbar".concat(i.charAt(0).toUpperCase()+i.slice(1))]);return e.createElement("div",{className:d},e.createElement("div",{className:u,style:{width:"".concat(m,"%")}}),o&&e.createElement("div",{className:w.pixelProgressbarPercentage},m,"%"))},b=void 0,P=function(t){var a=t.isOpen,n=t.onClose,r=t.className,c=void 0===r?"":r,o=t.children,l=t.title,i=t.closeButtonText,s=void 0===i?"X":i;return a?e.createElement("div",{className:"".concat(b.pixelPopupOverlay," ").concat(c),onClick:n},e.createElement("div",{className:b.pixelPopup,onClick:function(e){return e.stopPropagation()}},e.createElement("div",{className:b.pixelPopupInner},l&&e.createElement("h2",{className:b.pixelPopupTitle},l),e.createElement("button",{className:b.pixelPopupCloseButton,onClick:n},s),e.createElement("div",{className:b.pixelPopupContent},o)))):null},O=void 0,D=function(t){var a=t.className,n=void 0===a?"":a,r=t.icon,l=t.onIconClick,i=o(t,["className","icon","onIconClick"]);return e.createElement("div",{className:"mx-1 ".concat(O.pixelContainer," m-2 relative ").concat(n)},e.createElement("input",c({className:"w-full pr-7 ".concat(O.plainInput," ").concat(O.pixelInput," font-minecraft")},i)),r&&e.createElement("button",{className:O.pixelInputIconButton,onClick:l},e.createElement("img",{src:r,alt:"Input icon",className:"right-0 top-0 absolute"})))},S=void 0,I=r((function(t,a){var n=t.className,r=void 0===n?"":n,l=o(t,["className"]);return e.createElement("textarea",c({ref:a,className:"".concat(S.pixelTextarea," m-2 font-minecraft ").concat(r)},l))}));I.displayName="TextArea";var T=void 0;export{i as Button,l as ButtonStyles,p as Card,v as CardContent,u as CardDescription,N as CardFooter,m as CardHeader,s as CardStyles,d as CardTitle,h as DropdownMenu,E as DropdownMenuContent,g as DropdownMenuItem,f as DropdownMenuStyles,y as DropdownMenuTrigger,D as Input,O as InputStyles,P as Popup,b as PopupStyles,C as ProgressBar,w as ProgressBarStyles,I as TextArea,S as TextAreaStyles,T as globalStyles};
//# sourceMappingURL=index.js.map
