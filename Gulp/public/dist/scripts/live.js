"use strict";var components=[{name:"James",desc:"Something awesome"}];console.log(components);
"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),Person=function(){function e(a){_classCallCheck(this,e),this.name=a}return _createClass(e,[{key:"whatName",value:function(){return"string"==typeof this.name?"This is the name:"+this.name+"!":"Give me a name!"}}]),e}(),james=new Person("James"),cardHTML=templates.card({message:james.whatName()});document.write(cardHTML);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiLCJzaXRlLmpzIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJuYW1lIiwiZGVzYyIsImNvbnNvbGUiLCJsb2ciLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIlBlcnNvbiIsInRoaXMiLCJ2YWx1ZSIsImphbWVzIiwiY2FyZEhUTUwiLCJ0ZW1wbGF0ZXMiLCJtZXNzYWdlIiwid2hhdE5hbWUiLCJkb2N1bWVudCIsIndyaXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFBLElBQUlBLGNBQWVDLEtBQU0sUUFBU0MsS0FBTSxxQkFFeENDLFNBQVFDLElBQUlKO0FDRlosWUFJQSxTQUFTSyxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFjLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGMWhCa0IsT0FNTyxXQUxYLFFBQUFBLEdBQWF4QixHQUFNSSxnQkFBQXFCLEtBQUFELEdBQ2pCQyxLQUFLekIsS0FBT0EsRUFzQmQsTUFYQVEsY0FBYWdCLElBQ1hKLElBQUssV0FDTE0sTUFBTyxXQVZQLE1BQXdCLGdCQUFkRCxNQUFLekIsS0FDTixvQkFBc0J5QixLQUFLekIsS0FBTyxJQUVsQyxzQkFnQkp3QixLQVhIRyxNQUFRLEdBQUlILFFBQU8sU0FDckJJLFNBQVdDLFVBQUEsTUFDYkMsUUFBU0gsTUFBTUksWUFHakJDLFVBQVNDLE1BQU1MIiwiZmlsZSI6ImxpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tcG9uZW50cyA9IFt7bmFtZTogJ0phbWVzJywgZGVzYzogJ1NvbWV0aGluZyBhd2Vzb21lJ31dO1xyXG5cclxuY29uc29sZS5sb2coY29tcG9uZW50cyk7XHJcbiIsImNsYXNzIFBlcnNvbiB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG4gIHdoYXROYW1lKCkge1xyXG4gICAgaWYodHlwZW9mIHRoaXMubmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuICdUaGlzIGlzIHRoZSBuYW1lOicgKyB0aGlzLm5hbWUgKyAnISc7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcmV0dXJuICdHaXZlIG1lIGEgbmFtZSEnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgamFtZXMgPSBuZXcgUGVyc29uKCdKYW1lcycpO1xyXG52YXIgY2FyZEhUTUwgPSB0ZW1wbGF0ZXNbJ2NhcmQnXSh7XHJcbiAgbWVzc2FnZTogamFtZXMud2hhdE5hbWUoKVxyXG59KVxyXG5cclxuZG9jdW1lbnQud3JpdGUoY2FyZEhUTUwpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
