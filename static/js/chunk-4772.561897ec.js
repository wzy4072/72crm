(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4772"],{"/Ark":function(e,t,a){"use strict";var i=a("6H6b");a.n(i).a},"6H6b":function(e,t,a){},"6M2U":function(e,t,a){},Ew9n:function(e,t,a){"use strict";var i=a("7Qib"),n={name:"slide-view",components:{},computed:{},watch:{},data:function(){return{zIndex:Object(i.g)()}},props:{bodyStyle:{type:Object,default:{padding:0}},listenerIDs:{type:Array,default:function(){return[]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return[]}},appendToBody:{type:Boolean,default:!1}},mounted:function(){var e=this;this.appendToBody&&document.body.appendChild(this.$el),this.listenerIDs.forEach(function(t){document.getElementById(t)&&document.getElementById(t).addEventListener("click",e.handleDocumentClick,!1)})},methods:{handleDocumentClick:function(e){var t=!0;this.noListenerIDs.forEach(function(a){document.getElementById(a)&&document.getElementById(a).contains(e.target)&&(t=!1)}),this.noListenerClass.forEach(function(a){var i=document.getElementsByClassName(a);if(i&&t)for(var n=0;n<i.length;n++){if(i[n].contains(e.target)){t=!1;break}}}),document.getElementById("slide")&&document.getElementById("slide").contains(e.target)&&(t=!1),t&&this.$emit("side-close")},afterEnter:function(){this.$emit("afterEnter")}},beforeDestroy:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},s=(a("nhiu"),a("KHd+")),o=Object(s.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"slide-fade"},on:{"after-enter":this.afterEnter}},[t("el-card",{ref:"slide",staticClass:"slide-detail-card-container",style:{"z-index":this.zIndex},attrs:{id:"slide","body-style":this.bodyStyle}},[this._t("default")],2)],1)},[],!1,null,"20831c94",null);o.options.__file="SlideView.vue";t.a=o.exports},HJld:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"d",function(){return s}),a.d(t,"e",function(){return o}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return r});var i=a("t3Un");function n(e){return Object(i.a)({url:"oa/examine/category",method:"post",data:e})}function s(e){return Object(i.a)({url:"oa/examine/categorySave",method:"post",data:e})}function o(e){return Object(i.a)({url:"oa/examine/categoryUpdate",method:"post",data:e})}function l(e){return Object(i.a)({url:"oa/examine/categoryDelete",method:"post",data:e})}function r(e){return Object(i.a)({url:"oa/examine/categoryEnables",method:"post",data:e})}},IPtX:function(e,t,a){"use strict";var i=a("OHqg");a.n(i).a},OHqg:function(e,t,a){},SfBd:function(e,t,a){"use strict";var i=a("jOSx");a.n(i).a},XQLA:function(e,t,a){},bP1c:function(e,t,a){"use strict";var i=a("XQLA");a.n(i).a},ejzQ:function(e,t,a){},hsbp:function(e,t,a){"use strict";var i=a("6M2U");a.n(i).a},iNuc:function(e,t,a){"use strict";a.r(t);var i=a("HJld"),n=a("ViDN"),s=a("8GhS"),o=a("Ktth"),l=a.n(o),r={name:"create-examine-category",components:{CreateView:n.a,XhInput:s.g,XhTextarea:s.o,XhSelect:s.l,XhUserCell:s.p,XhStrucUserCell:s.m},computed:{title:function(){return"save"===this.handle.action?"新建审批类型":"update"===this.handle.action?"编辑审批类型":void 0}},data:function(){return{loading:!1,crmRules:{},crmForm:{crmFields:[]},currentPage:1,examineType:1,examineList:[{type:1,value:[],show:!1,options:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3}]}]}},filters:{typeToComponentName:function(e){return"text"==e?"XhInput":"textarea"==e?"XhTextarea":"select"==e?"XhSelect":"structure"==e?"XhStrucUserCell":void 0},numberToZh:function(e){return l.a.encodeS(e)}},props:{handle:{type:Object,default:function(){return{type:"examineflow",action:"save",id:"",data:null}}}},mounted:function(){if(document.body.appendChild(this.$el),this.getField(),this.handle.data)if(this.handle.data.config&&1===this.handle.data.config){this.examineList=[];for(var e=0;e<this.handle.data.stepList.length;e++){var t=this.handle.data.stepList[e],a={};a.type=t.status,2===t.status||3===t.status?(a.show=!0,a.value=t.user_id_info):(a.show=!1,a.value=[]),a.options=0===e?[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3}]:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3},{name:"上一级审批人主管",value:4}],this.examineList.push(a)}}else this.examineType=0},methods:{fieldValueChange:function(e){this.crmForm.crmFields[e.index].value=e.value},getField:function(){var e=[];e.push({field:"title",form_type:"text",is_null:1,name:"审批类型名称",setting:[],input_tips:"",value:this.handle.data?this.handle.data.title:""}),e.push({field:"structure",form_type:"structure",is_null:0,name:"可视范围",setting:[],input_tips:"默认全公司",value:{users:this.handle.data?this.handle.data.user_ids_info:[],strucs:this.handle.data?this.handle.data.structure_ids_info:[]}}),e.push({field:"remark",form_type:"textarea",is_null:0,name:"审批类型说明",setting:[],input_tips:"",value:this.handle.data?this.handle.data.remark:""}),this.getcrmRulesAndModel(e)},getcrmRulesAndModel:function(e){for(var t=0;t<e.length;t++){var a=e[t],i=[];1==a.is_null&&i.push({required:!0,message:a.name+"不能为空",trigger:["blur","change"]}),this.crmRules[a.field]=i;var n={};n.value=a.value,n.key=a.field,n.data=a,"textarea"==a.form_type&&(n.showblock=!0),this.crmForm.crmFields.push(n)}},saveField:function(){var e=this;this.$refs.crmForm.validate(function(t){if(!t)return e.$message.error("请完善必填信息"),!1;e.validStepsInfo()&&e.submiteParams(e.crmForm.crmFields)})},validStepsInfo:function(){for(var e=0;e<this.examineList.length;e++){var t=this.examineList[e];if((2===t.type||3===t.type)&&0===t.value.length)return this.$message.error("请添加员工"),!1}return!0},submiteParams:function(e){var t=this;this.loading=!0;var a=this.getSubmiteParams(e);"update"==this.handle.action&&(a.id=this.handle.id),this.getRequest()(a).then(function(e){t.loading=!1,t.$emit("save"),"save"==t.handle.action?t.$confirm("您将继续完成审批表单的创建","创建成功",{showCancelButton:!1,confirmButtonText:"确定",type:"warning"}).then(function(){t.hidenView(),t.$router.push({name:"handlefield",params:{type:"oa_examine",id:e.data.category_id}})}).catch(function(){}):(t.$message.success(e.data),t.hidenView())}).catch(function(){t.loading=!1})},getRequest:function(){return"update"===this.handle.action?i.e:i.d},getSubmiteParams:function(e){for(var t={},a=0;a<e.length;a++){var i=e[a];"structure"===i.key?(t.user_ids=i.value.users.map(function(e){return e.id}),t.structure_ids=i.value.strucs.map(function(e){return e.id})):t[i.key]=i.value}for(var n=[],s=0;s<this.examineList.length;s++){var o=this.examineList[s];n.push({status:o.type,user_id:o.value.map(function(e){return e.id})})}return t.config=this.examineType,t.step=n,t},nextPage:function(){var e=this;this.$refs.crmForm.validate(function(t){t&&(e.currentPage=2)})},selectOptionsChange:function(e){2==e.type||3==e.type?e.show=!0:e.show=!1},selectOptionsFocus:function(e,t){if(this.examineList.length>1){var a=t>0?this.examineList[t-1]:null,i=null;if(t<this.examineList.length-1)i=this.examineList[t+1];var n=!1,s=!1,o=!1;!a||2!==a.type&&3!==a.type||(o=!0),i&&4===i.type&&(n=!0,s=!0);var l=[{name:"负责人主管",value:1}];n||l.push({name:"指定用户（任意一人）",value:2}),s||l.push({name:"指定用户（多人会签）",value:3}),o||l.push({name:"上一级审批人主管",value:4}),e.options=l}},examineItemsAdd:function(){this.examineList.push({type:1,value:[],show:!1,options:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3},{name:"上一级审批人主管",value:4}]})},flowUserSelect:function(e){this.examineList[e.index].value=e.value},deleteExamineItems:function(e){this.examineList.splice(e,1)},hidenView:function(){this.$emit("hiden-view")},getPaddingLeft:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"0":"25px"},getPaddingRight:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"25px":"0"}},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},c=(a("IPtX"),a("KHd+")),d=Object(c.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("create-view",{attrs:{loading:e.loading,"body-style":{height:"100%"}}},[i("flexbox",{staticClass:"crm-create-container",attrs:{direction:"column",align:"stretch"}},[i("flexbox",{staticClass:"crm-create-header"},[i("div",{staticStyle:{flex:"1","font-size":"17px",color:"#333"}},[e._v(e._s(e.title))]),e._v(" "),i("img",{staticClass:"close",attrs:{src:a("cjwK")},on:{click:e.hidenView}})]),e._v(" "),i("flexbox",{staticClass:"crm-create-flex",attrs:{direction:"column",align:"stretch"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.currentPage,expression:"currentPage == 1"}],staticClass:"crm-create-body"},[i("div",{staticClass:"create-name"},[e._v("基本信息")]),e._v(" "),i("el-form",{ref:"crmForm",staticClass:"crm-create-box",attrs:{model:e.crmForm,"label-position":"top"}},e._l(this.crmForm.crmFields,function(t,a){return i("el-form-item",{key:t.key,class:{"crm-create-block-item":t.showblock,"crm-create-item":!t.showblock},style:{"padding-left":e.getPaddingLeft(t,a),"padding-right":e.getPaddingRight(t,a)},attrs:{prop:"crmFields."+a+".value",rules:e.crmRules[t.key]}},[i("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[i("div",{staticStyle:{margin:"5px 0","font-size":"12px","word-wrap":"break-word","word-break":"break-all"}},[e._v("\n                "+e._s(t.data.name)+"\n                "),i("span",{staticStyle:{color:"#999"}},[e._v("\n                  "+e._s(t.data.input_tips?"（"+t.data.input_tips+"）":"")+"\n                ")])])]),e._v(" "),i(e._f("typeToComponentName")(t.data.form_type),{tag:"component",attrs:{value:t.value,index:a,item:t,radio:!1},on:{"value-change":e.fieldValueChange}})],1)}))],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.currentPage,expression:"currentPage == 2"}],staticClass:"crm-create-body"},[i("div",{staticStyle:{padding:"0 20px","font-size":"12px"}},[i("el-radio",{attrs:{label:1},model:{value:e.examineType,callback:function(t){e.examineType=t},expression:"examineType"}},[e._v("固定审批流")]),e._v(" "),i("div",{staticClass:"examine-items"},e._l(e.examineList,function(t,a){return i("flexbox",{key:a,staticClass:"examine-item"},[i("div",{staticClass:"examine-item-name"},[e._v("第"+e._s(e._f("numberToZh")(a+1))+"级")]),e._v(" "),i("el-select",{staticClass:"examine-item-select",attrs:{placeholder:"请选择"},on:{focus:function(i){e.selectOptionsFocus(t,a)},change:function(a){e.selectOptionsChange(t)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}},e._l(t.options,function(e){return i("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),e._v(" "),t.show?i("xh-user-cell",{staticClass:"examine-item-user",attrs:{radio:!1,index:a,value:t.value},on:{"value-change":e.flowUserSelect}}):e._e(),e._v(" "),i("i",{staticClass:"el-icon-remove examine-item-delete",on:{click:function(t){e.deleteExamineItems(a)}}})],1)})),e._v(" "),i("div",{staticClass:"examine-items-add"},[i("span",{on:{click:e.examineItemsAdd}},[e._v("+ 添加审批层级")])]),e._v(" "),i("div",{staticClass:"examine-add-des"},[i("p",[i("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择“负责人主管”审批时。系统仅会通知负责人主管，但负责人所有上级（主管、主管的主管）均可审批。")]),e._v(" "),i("p",[i("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择多个“指定用户”审批时。如果指定用户没有权限查看对应的合同，系统不会通知其审批。 ")]),e._v(" "),i("p",[i("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择“指定用户（任意一人）”表示指定用户中任意一人审批即可。当选择“指定用户（多人会签）”表示 指定用户中所有人都要审批。")])]),e._v(" "),i("el-radio",{attrs:{label:0},model:{value:e.examineType,callback:function(t){e.examineType=t},expression:"examineType"}},[e._v("授权审批人")])],1)])]),e._v(" "),1==e.currentPage?i("div",{staticClass:"handle-bar"},[i("el-button",{staticClass:"handle-button",nativeOn:{click:function(t){return e.hidenView(t)}}},[e._v("取消")]),e._v(" "),i("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){return e.nextPage(t)}}},[e._v("下一页")])],1):e._e(),e._v(" "),2==e.currentPage?i("div",{staticClass:"handle-bar"},[i("el-button",{staticClass:"handle-button",nativeOn:{click:function(t){return e.hidenView(t)}}},[e._v("取消")]),e._v(" "),i("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){return e.saveField(t)}}},[e._v("保存")]),e._v(" "),i("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){e.currentPage=1}}},[e._v("上一页")])],1):e._e()],1)],1)},[],!1,null,"c16e3d3e",null);d.options.__file="CreateExamineCategory.vue";var u=d.exports,h=a("P2sY"),m=a.n(h),f=a("Ew9n"),p=a("EP+0"),v=a("oP74"),g={name:"examine-category-detail",components:{SlideView:f.a,CreateSections:p.a,PreviewFieldView:v.a},props:{data:Object},filters:{formatedScopeInfo:function(e){for(var t="",a=e.structure_ids_info?e.structure_ids_info:[],i=0;i<a.length;i++){t=t+a[i].name+"、"}for(var n=e.user_ids_info?e.user_ids_info:[],s=0;s<n.length;s++){t=t+n[s].realname+(s===n.length-1?"":"、")}return t||"全公司"},toRowName:function(e){return"第"+l.a.encodeS(e)+"级"},toRowNameDes:function(e){return 1==e.status?"负责人主管":2==e.status?e.user_id_info.length+"人或签":3==e.status?e.user_id_info.length+"人会签":4==e.status?"上一级审批人主管":""}},watch:{data:function(e){this.getShowData()}},data:function(){return{showData:{},examineStatus:!1,tablePreviewData:{types:"",types_id:""},showTablePreview:!1}},computed:{},mounted:function(){this.getShowData()},methods:{handlePreview:function(){this.tablePreviewData.types="oa_examine",this.tablePreviewData.types_id=this.data.category_id,this.showTablePreview=!0},deleteClick:function(){var e=this;this.$confirm("您确定要删除该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.b)({id:e.data.category_id}).then(function(t){e.$emit("refresh"),e.hideView(),e.$message({type:"success",message:t.data})}).catch(function(){})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},getShowData:function(){this.showData=m()({},this.data),this.examineStatus=0!=this.showData.status},examineStatusChange:function(){var e=this;this.showData.status=this.examineStatus?1:0,this.$confirm("您确定要"+(0===this.examineStatus?"启用":"停用")+"该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.c)({id:e.data.category_id,status:0===e.examineStatus?1:0}).then(function(t){e.$emit("refresh"),e.$message({type:"success",message:t.data})}).catch(function(){e.cancelStatusChange()})}).catch(function(){e.cancelStatusChange(),e.$message({type:"info",message:"已取消删除"})})},cancelStatusChange:function(){this.examineStatus=!this.examineStatus,this.showData.status=this.examineStatus?1:0},hideView:function(){this.$emit("hide-view")}}},_=(a("SfBd"),Object(c.a)(g,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{staticClass:"d-view",attrs:{listenerIDs:["manager-main-container"],noListenerIDs:["examine-table"],appendToBody:!0,"body-style":{padding:"10px 30px",height:"100%"}},on:{"side-close":e.hideView}},[i("flexbox",{staticStyle:{height:"100%"},attrs:{orient:"vertical"}},[i("div",{staticClass:"header"},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-name"},[e._v(e._s(e.showData.title)),1!=e.showData.is_sys?i("i",{staticClass:"el-icon-delete delete",on:{click:e.deleteClick}}):e._e()]),e._v(" "),i("img",{staticClass:"header-close",attrs:{src:a("cjwK")},on:{click:e.hideView}})]),e._v(" "),i("div",{staticClass:"detail-header-des"},[i("div",{staticClass:"status"},[e._v("状态："+e._s(0==e.showData.status?"停用":"启用"))]),e._v(" "),i("div",{staticClass:"status-handle"},[e._v("\n          启用\n          "),i("el-switch",{on:{change:e.examineStatusChange},model:{value:e.examineStatus,callback:function(t){e.examineStatus=t},expression:"examineStatus"}})],1)])],1),e._v(" "),i("div",{staticClass:"detail-body"},[i("create-sections",{staticClass:"create-sections",attrs:{title:"基本信息"}},[i("div",{staticClass:"create-sections-content"},[i("div",{staticClass:"dialog-content"},[i("flexbox",{staticClass:"content-items"},[i("div",{staticClass:"content-items-name"},[e._v("审批名称")]),e._v(" "),i("div",{staticClass:"content-items-value"},[e._v(e._s(e.showData.title))])]),e._v(" "),i("flexbox",{staticClass:"content-items"},[i("div",{staticClass:"content-items-name"},[e._v("适用范围")]),e._v(" "),i("div",{staticClass:"content-items-value"},[e._v(e._s(e._f("formatedScopeInfo")(e.showData)))])]),e._v(" "),i("flexbox",{staticClass:"content-items"},[i("div",{staticClass:"content-items-name"},[e._v("审批说明")]),e._v(" "),i("div",{staticClass:"content-items-value"},[e._v(e._s(e.showData.remark))])])],1)])]),e._v(" "),i("create-sections",{staticClass:"create-sections",attrs:{title:"表单"}},[i("div",{staticClass:"preview-section",attrs:{slot:"header"},slot:"header"},[i("el-button",{attrs:{type:"text"},on:{click:e.handlePreview}},[e._v("预览")])],1)]),e._v(" "),i("create-sections",{staticClass:"create-sections",attrs:{title:"流程"}},[1==e.showData.config?i("div",{staticClass:"create-sections-content"},e._l(e.showData.stepList,function(t,a){return i("flexbox",{key:a,staticClass:"examine-flow",attrs:{align:"stretch"}},[i("div",{staticClass:"examine-flow-header"},[i("div",{staticClass:"mark-circle"}),e._v(" "),0!=a?i("div",{staticClass:"mark-top-line"}):e._e(),e._v(" "),a<e.showData.stepList.length-1?i("div",{staticClass:"mark-bottom-line"}):e._e()]),e._v(" "),i("div",{staticClass:"examine-flow-body"},[i("div",{staticClass:"body-header"},[i("span",{staticClass:"body-header-name"},[e._v(e._s(e._f("toRowName")(a+1)))]),i("span",{staticClass:"body-header-des"},[e._v("（"+e._s(e._f("toRowNameDes")(t))+"）")])]),e._v(" "),t.user_id_info.length>0?i("flexbox",{staticClass:"examine-users"},e._l(t.user_id_info,function(t,a){return i("div",{key:a,staticClass:"examine-users-item"},[i("div",{directives:[{name:"photo",rawName:"v-photo",value:t,expression:"userItem"},{name:"lazy",rawName:"v-lazy:background-image",value:e.$options.filters.filterUserLazyImg(t.thumb_img),expression:"$options.filters.filterUserLazyImg(userItem.thumb_img)",arg:"background-image"}],key:t.thumb_img,staticClass:"div-photo"}),e._v(" "),i("div",{staticClass:"name"},[e._v(e._s(t.realname))])])})):e._e()],1)])})):i("div",{staticClass:"create-sections-content"},[e._v("授权审批人")])])],1)]),e._v(" "),e.showTablePreview?i("preview-field-view",{attrs:{types:e.tablePreviewData.types,types_id:e.tablePreviewData.types_id},on:{"hiden-view":function(t){e.showTablePreview=!1}}}):e._e()],1)},[],!1,null,"5d010a13",null));_.options.__file="examineCategoryDetail.vue";var y=_.exports,b=(a("7Qib"),{name:"examine-manager",components:{CreateExamineCategory:u,ExamineCategoryDetail:y},data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-240,list:[],fieldList:[{prop:"title",label:"审批名称",width:150},{prop:"config",label:"流程类型",width:150},{prop:"user_ids",label:"可见范围",width:150},{prop:"remark",label:"审批说明",width:150},{prop:"update_time",label:"最后修改时间",width:150},{prop:"status",label:"状态",width:150}],currentPage:1,pageSize:10,pageSizes:[10,20,30,40],total:0,showHandleView:!1,createHandleInfo:{action:"save",type:"examine",id:""},showDetail:!1,detailData:{}}},watch:{},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-240},this.getList()},methods:{saveSuccess:function(){this.currentPage=1,this.getList()},getList:function(){var e=this;this.loading=!0,Object(i.a)({page:this.currentPage,limit:this.pageSize}).then(function(t){e.list=t.data.list,e.total=t.data.dataCount,e.loading=!1}).catch(function(){e.loading=!1})},fieldFormatter:function(e,t){if("config"===t.property)return 1===e[t.property]?"固定审批流":0===e[t.property]?"授权审批人":"";if("user_ids"===t.property){for(var a="",i=e.structure_ids_info,n=0;n<i.length;n++){a=a+i[n].name+"、"}for(var s=e.user_ids_info,o=0;o<s.length;o++){a=a+s[o].realname+(o===s.length-1?"":"、")}return a||"全公司"}return"status"===t.property?0===e[t.property]?"停用":"启用":e[t.property]},addExamine:function(){this.createHandleInfo={action:"save",type:"examine",id:""},this.showHandleView=!0},handleRowClick:function(e,t,a){t.property&&(this.detailData=e,this.showDetail=!0)},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleClick:function(e,t){var a=this;"edit-table"===e?this.$router.push({name:"handlefield",params:{type:"oa_examine",id:t.row.category_id}}):"edit"===e?(this.createHandleInfo.action="update",this.createHandleInfo.id=t.row.category_id,this.createHandleInfo.data=t.row,this.showHandleView=!0):"delete"===e?this.$confirm("您确定要删除该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0,Object(i.b)({id:t.row.category_id}).then(function(e){a.list.splice(t.$index,1),a.getList(),a.$message({type:"success",message:e.data}),a.loading=!1}).catch(function(){a.loading=!1})}).catch(function(){a.$message({type:"info",message:"已取消删除"})}):"change"===e&&this.$confirm("您确定要"+(0===t.row.status?"启用":"停用")+"该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.c)({id:t.row.category_id,status:0===t.row.status?1:0}).then(function(e){t.row.status=0===t.row.status?1:0,a.$message({type:"success",message:e.data})}).catch(function(){})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})}}}),x=(a("hsbp"),Object(c.a)(b,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"se-table-header"},[a("el-button",{staticClass:"se-table-header-button",attrs:{type:"primary"},on:{click:e.addExamine}},[e._v("添加审批流程")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-table",staticStyle:{width:"100%"},attrs:{id:"examine-table",data:e.list,height:e.tableHeight,stripe:"","highlight-current-row":""},on:{"row-click":e.handleRowClick}},[e._l(e.fieldList,function(t,i){return a("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",formatter:e.fieldFormatter,prop:t.prop,width:t.width,label:t.label},scopedSlots:e._u([{key:"header",fn:function(t){return[a("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),a("el-table-column"),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("edit-table",t)}}},[e._v("编辑表单")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("edit",t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{disabled:1===t.row.is_sys,type:"text",size:"small"},on:{click:function(a){e.handleClick("delete",t)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("change",t)}}},[e._v(e._s(0===t.row.status?"启用":"停用"))])]}}])})],2),e._v(" "),a("div",{staticClass:"p-contianer"},[a("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:pageSize":function(t){e.pageSize=t}}})],1),e._v(" "),e.showHandleView?a("create-examine-category",{attrs:{handle:e.createHandleInfo},on:{save:e.saveSuccess,"hiden-view":function(t){e.showHandleView=!1}}}):e._e(),e._v(" "),e.showDetail?a("examine-category-detail",{attrs:{data:e.detailData},on:{refresh:e.getList,"hide-view":function(t){e.showDetail=!1}}}):e._e()],1)},[],!1,null,"11ef5673",null));x.options.__file="ExamineManager.vue";var w={components:{ExamineManager:x.exports},data:function(){return{leftType:"ExamineManager",leftSides:[{name:"审批类型管理",type:"ExamineManager"}]}},methods:{},mounted:function(){}},C=(a("/Ark"),Object(c.a)(w,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticStyle:{height:"100%"},attrs:{direction:"column",align:"stretch"}},[a("div",{staticClass:"sw-header"},[e._v("\n    工作台\n  ")]),e._v(" "),a("div",{staticClass:"sw-body"},[a("flexbox",{staticClass:"sw-box",attrs:{align:"stretch"}},[a("div",{staticClass:"sw-body-side"},e._l(e.leftSides,function(t,i){return a("div",{key:i,staticClass:"side-item",class:e.leftType==t.type?"side-item-select":"side-item-default",on:{click:function(a){e.sideClick(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])})),e._v(" "),a("div",{staticClass:"sw-body-content"},[a(e.leftType,{tag:"component"})],1)])],1)])},[],!1,null,"39efac0c",null));C.options.__file="index.vue";t.default=C.exports},jOSx:function(e,t,a){},nhiu:function(e,t,a){"use strict";var i=a("ejzQ");a.n(i).a},oP74:function(e,t,a){"use strict";var i=a("ViDN"),n=a("EP+0"),s=a("conU"),o=a("8GhS"),l={name:"preview-field-view",components:{CreateView:i.a,CreateSections:n.a,XhInput:o.g,XhTextarea:o.o,XhSelect:o.l,XhMultipleSelect:o.h,XhDate:o.d,XhDateTime:o.e,XhUserCell:o.p,XhStructureCell:o.n,XhFiles:o.f,CrmRelativeCell:o.a,XhProuctCate:o.j,XhProduct:o.i,XhBusinessStatus:o.b,XhCustomerAddress:o.c,XhReceivablesPlan:o.k},computed:{},watch:{types:function(e){this.crmForm={crmFields:[]},this.getField()}},data:function(){return{title:"预览",loading:!1,crmForm:{crmFields:[]}}},filters:{typeToComponentName:function(e){return"text"==e||"number"==e||"floatnumber"==e||"mobile"==e||"email"==e?"XhInput":"textarea"==e?"XhTextarea":"select"==e||"business_status"==e?"XhSelect":"checkbox"==e?"XhMultipleSelect":"date"==e?"XhDate":"datetime"==e?"XhDateTime":"user"==e?"XhUserCell":"structure"==e?"XhStructureCell":"file"==e?"XhFiles":"contacts"==e||"customer"==e||"contract"==e||"business"==e?"CrmRelativeCell":"category"==e?"XhProuctCate":"business_type"==e?"XhBusinessStatus":"product"==e?"XhProduct":"map_address"==e?"XhCustomerAddress":"receivables_plan"==e?"XhReceivablesPlan":void 0}},props:{types:{type:String,default:""},types_id:{type:[String,Number],default:""}},mounted:function(){document.body.appendChild(this.$el),this.getField()},methods:{getField:function(){var e=this;this.loading=!0;var t={};t.types=this.types,"oa_examine"==this.types&&(t.types_id=this.types_id),Object(s.m)(t).then(function(t){e.getcrmRulesAndModel(t.data),e.loading=!1}).catch(function(){e.loading=!1})},getcrmRulesAndModel:function(e){for(var t=0;t<e.length;t++){var a=e[t],i={};i.value=a.value,i.key=a.field,i.data=a,i.disabled=!0,this.crmForm.crmFields.push(i)}},hidenView:function(){this.$emit("hiden-view")},getPaddingLeft:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"0":"25px"},getPaddingRight:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"25px":"0"}},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},r=(a("bP1c"),a("KHd+")),c=Object(r.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("create-view",{attrs:{loading:e.loading,"body-style":{height:"100%"}}},[i("flexbox",{staticClass:"crm-create-container",attrs:{direction:"column",align:"stretch"}},[i("flexbox",{staticClass:"crm-create-header"},[i("div",{staticStyle:{flex:"1","font-size":"17px",color:"#333"}},[e._v(e._s(e.title))]),e._v(" "),i("img",{staticClass:"close",attrs:{src:a("cjwK")},on:{click:e.hidenView}})]),e._v(" "),i("div",{staticClass:"crm-create-flex"},[i("create-sections",{attrs:{title:"基本信息"}},[i("flexbox",{attrs:{direction:"column",align:"stretch"}},[i("div",{staticClass:"crm-create-body"},[i("el-form",{ref:"crmForm",staticClass:"crm-create-box",attrs:{model:e.crmForm,"label-position":"top"}},e._l(this.crmForm.crmFields,function(t,a){return i("el-form-item",{key:t.key,class:{"crm-create-block-item":t.showblock,"crm-create-item":!t.showblock},style:{"padding-left":e.getPaddingLeft(t,a),"padding-right":e.getPaddingRight(t,a)},attrs:{prop:"crmFields."+a+".value"}},[i("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[i("div",{staticStyle:{margin:"5px 0","font-size":"12px","word-wrap":"break-word","word-break":"break-all"}},[e._v("\n                    "+e._s(t.data.name)+"\n                    "),i("span",{staticStyle:{color:"#999"}},[e._v("\n                      "+e._s(t.data.input_tips?"（"+t.data.input_tips+"）":"")+"\n                    ")])])]),e._v(" "),i(e._f("typeToComponentName")(t.data.form_type),{tag:"component",attrs:{radio:!1,disabled:t.disabled}})],1)}))],1)])],1)],1)],1)],1)},[],!1,null,"1b56027a",null);c.options.__file="previewFieldView.vue";t.a=c.exports}}]);