webpackJsonp([3],{166:function(e,t,a){function n(e){a(180)}var i=a(129)(a(170),a(184),n,null,null);e.exports=i.exports},170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(124);a.n(n);t.default={watch:{pagination:function(e){if(!e)return this.oldPagination=n.Utils.clone(this.config.pagination),void(this.config.pagination=!1);this.config.pagination=this.oldPagination},rowHeight:function(e){this.config.rowHeight=e+"px"},bodyHeight:function(e){var t={};"auto"!==this.bodyHeightProp&&(t[this.bodyHeightProp]=e+"px"),this.config.bodyStyle=t},bodyHeightProp:function(e){var t={};"auto"!==e&&(t[e]=this.bodyHeight+"px"),this.config.bodyStyle=t}},beforeMount:function(){this.$store.dispatch("getComponents",{component:this.$route.params.id+".json"})},methods:{changeMessage:function(e){e.rows.forEach(function(e){e.data.message="Quasar Framework rocks!"}),n.Toast.create('Changed "Message" field for selected row(s).')},deleteRow:function(e){var t=this;e.rows.forEach(function(e){t.table.splice(e.index,1)})},refresh:function(e){this.timeout=setTimeout(function(){e()},5e3)}},data:function(){return{table:[],config:{title:"Data Table",refresh:!0,columnPicker:!0,leftStickyColumns:1,rightStickyColumns:2,bodyStyle:{maxHeight:n.Platform.is.mobile?"50vh":"500px"},rowHeight:"50px",responsive:!0,pagination:{rowsPerPage:15,options:[5,10,15,30,50,500]},selection:"multiple",messages:{noData:"<i>warning</i> No data available to show.",noDataAfterFiltering:"<i>warning</i> No results. Please refine your search terms."}},columns:[{label:"Date",field:"isodate",width:"120px",filter:!0,sort:"date",format:function(e){return new Date(e).toLocaleString()}},{label:"Service",field:"serviceable",format:function(e){return"Informational"===e?'<i class="text-positive">info</i>':e},width:"80px"},{label:"Message",field:"message",sort:!0,filter:!0,width:"500px"},{label:"Source",field:"source",sort:!0,filter:!0,width:"120px"},{label:"Log Number",field:"log_number",sort:!0,width:"100px"}],pagination:!0,rowHeight:50,bodyHeightProp:"maxHeight",bodyHeight:500,components:[{name:"Dropdown"},{name:"Button"},{name:"Input"},{name:"Navbar"},{name:"Breadcrumbs"},{name:"Pagination"},{name:"Labels"},{name:"Badges"},{name:"Jumbotron"},{name:"Page Header"},{name:"Thumbnails"},{name:"Alerts"},{name:"Progressbar"},{name:"List"},{name:"Well"},{name:"Cascader"},{name:"Slider"},{name:"Color Picker"},{name:"Daterange Picker"},{name:"Datetime Picker"},{name:"Date Picker"},{name:"Time Picker"},{name:"Switch"},{name:"Select"},{name:"Dropdown"},{name:"Rate"},{name:"Form"},{name:"Datatable"},{name:"Tags"},{name:"Tree"},{name:"Pagination"},{name:"Badges"},{name:"Loading"},{name:"Message"},{name:"MessageBox"},{name:"Notification"},{name:"Tabs"},{name:"Dialog"},{name:"Tooltip"},{name:"Popover"},{name:"Card"},{name:"Carousel"},{name:"Collapse"}]}}}},176:function(e,t,a){t=e.exports=a(164)(void 0),t.push([e.i,".sidebar:40px 28px;width:180px;.sidebar.list.item:96%;.sidebar:90%;overflow:auto;",""])},180:function(e,t,a){var n=a(176);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(165)("5d0934a0",n,!0)},184:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fx appContainer",attrs:{id:"Components"}},[a("div",{staticClass:"sidebar"},[a("p",{staticClass:"caption"},[e._v("Components")]),e._v(" "),a("div",{staticClass:"fh list no-border item"},e._l(e.components,function(t){return a("div",{key:t.name,staticClass:"item-content"},[e._v("\n            "+e._s(t.name)+"\n          ")])}))]),e._v(" "),a("q-data-table",{attrs:{data:e.table,config:e.config,columns:e.columns},on:{refresh:e.refresh},scopedSlots:e._u([{key:"col-message",fn:function(t){return[a("span",{staticClass:"light-paragraph"},[e._v(e._s(t.data))])]}},{key:"col-source",fn:function(t){return["Audit"===t.data?a("span",{staticClass:"label text-white bg-primary"},[e._v("\n          Audit\n          "),a("q-tooltip",[e._v("Some data")])],1):a("span",{staticClass:"label text-white bg-negative"},[e._v(e._s(t.data))])]}},{key:"selection",fn:function(t){return[a("button",{staticClass:"primary clear",on:{click:function(a){e.changeMessage(t)}}},[a("i",[e._v("edit")])]),e._v(" "),a("button",{staticClass:"primary clear",on:{click:function(a){e.deleteRow(t)}}},[a("i",[e._v("delete")])])]}}])})],1)},staticRenderFns:[]}}});