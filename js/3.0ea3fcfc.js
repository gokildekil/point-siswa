(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "e1c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/laporan/list.vue?vue&type=template&id=48b1440c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Laporan Pelanggaran Siswa")])])])])]),_c('div',{staticClass:"col-md-auto col-12 "},[_c('q-input',{attrs:{"debounce":"1000","outlined":"","dense":"","placeholder":"Cari Siswa"},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{attrs:{"name":"fas fa-search"}})]},proxy:true}],null,false,3240966890),model:{value:(_vm.searchText),callback:function ($$v) {_vm.searchText=$$v},expression:"searchText"}})],1)])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col comp-grid"},[_c('div',[(_vm.searchText)?_c('q-chip',{attrs:{"icon":"fas fa-search","removable":""},on:{"remove":function($event){_vm.searchText='';_vm.$route.query.search=''}}},[_vm._v("\n                        Search: "),_c('strong',{staticClass:"q-ml-sm"},[_vm._v(" "+_vm._s(_vm.searchText)+" ")])]):_vm._e()],1),_c('div',{},[_c('div',[(_vm.showBreadcrumbs && _vm.$route.query.tag)?[_c('q-breadcrumbs',{staticClass:"q-pa-md"},[_c('q-breadcrumbs-el',{staticClass:"text-capitalize",attrs:{"icon":"fas fa-angle-left","label":_vm.$route.query.tag,"to":"/laporan"}}),_c('q-breadcrumbs-el',{attrs:{"label":_vm.$route.query.label}})],1)]:_vm._e(),_c('div',{staticClass:"relative-position"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col"},[[_c('q-table',{attrs:{"grid":_vm.$q.screen.lt.md,"flat":_vm.$q.screen.gt.md,"table-header-class":"text-h4 ","bordered":false,"columns":_vm.$menus.LaporanTableHeaderItems,"data":_vm.records,"binary-state-sort":"","separator":"horizontal","dense":true,"row-key":"note","pagination":_vm.pagination,"hide-bottom":"","loading":_vm.loading},on:{"update:pagination":function($event){_vm.pagination=$event},"request":_vm.setPagination},scopedSlots:_vm._u([{key:"body",fn:function(props){return [_c('q-tr',{class:{selected: _vm.isCurrentRecord(props.row)},attrs:{"props":props}},[_c('q-td',{key:"nisn",attrs:{"props":props}},[_vm._v("\n                                                        "+_vm._s(props.row.nisn)+"\n                                                    ")]),_c('q-td',{key:"std_name",attrs:{"props":props}},[_vm._v("\n                                                        "+_vm._s(props.row.std_name)+"\n                                                    ")]),_c('q-td',{key:"teacher_name",attrs:{"props":props}},[_vm._v("\n                                                        "+_vm._s(props.row.teacher_name)+"\n                                                    ")]),_c('q-td',{key:"class_name",attrs:{"props":props}},[_vm._v("\n                                                        "+_vm._s(props.row.class_name)+"\n                                                    ")]),_c('q-td',{key:"sub_class",attrs:{"props":props}},[_vm._v("\n                                                        "+_vm._s(props.row.sub_class)+"\n                                                    ")]),_c('q-td',{key:"violation_name",attrs:{"props":props}},[_vm._v("\n                                                        "+_vm._s(props.row.violation_name)+"\n                                                    ")]),_c('q-td',{key:"reported_on",attrs:{"props":props}},[(props.row.reported_on)?_c('q-chip',{attrs:{"dense":"","size":"13px","label":_vm._f("relativeDate")(props.row.reported_on)}},[_c('q-tooltip',{attrs:{"content-class":"bg-accent","transition-show":"scale","transition-hide":"scale"}},[_vm._v("\n                                                        "+_vm._s(_vm._f("humanDatetime")(props.row.reported_on))+"\n                                                        ")])],1):_vm._e()],1),_c('q-td',{key:"note",attrs:{"props":props}},[_vm._v("\n                                                        "+_vm._s(props.row.note)+"\n                                                    ")]),_c('q-td',{key:"btnactions",attrs:{"props":props}},[_c('div',{staticClass:"row q-col-gutter-xs justify-end"},[_c('q-btn',{attrs:{"icon":"fas fa-bars","padding":"xs","round":"","flat":"","color":"grey"}},[_c('q-menu',{attrs:{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left","self":"center middle","anchor":"center middle"}},[_c('q-list',{attrs:{"dense":"","rounded":"","nav":""}},[_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"link":"","clickable":"","to":("/laporan/view/" + (props.row.note))}},[_c('q-item-section',[_c('q-icon',{attrs:{"color":"primary","size":"sm","name":"fas fa-eye"}})],1),_c('q-item-section',[_vm._v("View")])],1)],1)],1)],1)],1)])],1)]}},{key:"item",fn:function(props){return [_c('div',{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(props.selected ? 'transform: scale(0.95);' : '')},[_c('q-card',{staticClass:"nice-shadow-18 nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('q-card-section',[_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Nis\n                                                                ")]),_c('div',{staticClass:"col text-right"},[_vm._v("\n                                                                    "+_vm._s(props.row.nisn)+"\n                                                                ")])]),_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Nama Siswa\n                                                                ")]),_c('div',{staticClass:"col text-right"},[_vm._v("\n                                                                    "+_vm._s(props.row.std_name)+"\n                                                                ")])]),_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Wali Kelas\n                                                                ")]),_c('div',{staticClass:"col text-right"},[_vm._v("\n                                                                    "+_vm._s(props.row.teacher_name)+"\n                                                                ")])]),_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Kelas\n                                                                ")]),_c('div',{staticClass:"col text-right"},[_vm._v("\n                                                                    "+_vm._s(props.row.class_name)+"\n                                                                ")])]),_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Sub Kelas\n                                                                ")]),_c('div',{staticClass:"col text-right"},[_vm._v("\n                                                                    "+_vm._s(props.row.sub_class)+"\n                                                                ")])]),_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Pelanggaran\n                                                                ")]),_c('div',{staticClass:"col text-right"},[_vm._v("\n                                                                    "+_vm._s(props.row.violation_name)+"\n                                                                ")])]),_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Tgl/Waktu Kejadian\n                                                                ")]),_c('div',{staticClass:"col text-right"},[(props.row.reported_on)?_c('q-chip',{attrs:{"dense":"","size":"13px","label":_vm._f("relativeDate")(props.row.reported_on)}},[_c('q-tooltip',{attrs:{"content-class":"bg-accent","transition-show":"scale","transition-hide":"scale"}},[_vm._v("\n                                                                    "+_vm._s(_vm._f("humanDatetime")(props.row.reported_on))+"\n                                                                    ")])],1):_vm._e()],1)]),_c('div',{staticClass:"row q-py-sm q-col-gutter-md justify-content-between"},[_c('div',{staticClass:"col-auto text-caption"},[_vm._v("\n                                                                    Note\n                                                                ")]),_c('div',{staticClass:"col text-right"},[_vm._v("\n                                                                    "+_vm._s(props.row.note)+"\n                                                                ")])])]),_c('q-separator'),_c('div',{staticClass:"row justify-between"},[_c('q-card-actions',[_c('div',{staticClass:"row q-col-gutter-xs justify-end"},[_c('q-btn',{attrs:{"icon":"fas fa-bars","padding":"xs","round":"","flat":"","color":"grey"}},[_c('q-menu',{attrs:{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left","self":"center middle","anchor":"center middle"}},[_c('q-list',{attrs:{"dense":"","rounded":"","nav":""}},[_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"link":"","clickable":"","to":("/laporan/view/" + (props.row.note))}},[_c('q-item-section',[_c('q-icon',{attrs:{"color":"primary","size":"sm","name":"fas fa-eye"}})],1),_c('q-item-section',[_vm._v("View")])],1)],1)],1)],1)],1)])],1)],1)],1)]}}])})],(_vm.loading)?[_c('q-inner-loading',{attrs:{"showing":_vm.loading}},[_c('q-spinner',{attrs:{"color":"primary","size":"30px"}})],1)]:_vm._e(),(!_vm.loading && !_vm.records.length)?[_c('q-card',{attrs:{"flat":_vm.$q.screen.gt.md}},[_c('q-card-section',[_c('div',{staticClass:"text-grey text-h6 text-center"},[_vm._v("\n                                                        No record found\n                                                    ")])])],1)]:_vm._e(),(_vm.showFooter)?[_c('div',{},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading),expression:"!loading"}],staticClass:"q-pa-sm"},[_c('div',{staticClass:"row justify-between"},[_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',[(_vm.exportButton)?_c('q-btn',{staticClass:"q-my-xs",attrs:{"rounded":false,"no-caps":"","unelevated":"","color":"accent","padding":"xs","label":"Export","title":"Export","icon":"fas fa-print"},on:{"click":function($event){return _vm.openExportPage()}}}):_vm._e()],1)]),(_vm.paginate && _vm.totalRecords > 0)?_c('div',{staticClass:"row q-col-gutter-md justify-center"},[_c('div',{staticClass:"col-auto"},[_c('q-chip',[_vm._v("Records "+_vm._s(_vm.recordsPosition)+" of "+_vm._s(_vm.totalRecords))])],1),(_vm.totalPages > 1)?_c('div',[_c('q-pagination',{attrs:{"color":"primary","flat":"","glossy":"","input":"","direction-links":true,"boundary-links":true,"max-pages":5,"boundary-numbers":true,"max":_vm.totalPages},model:{value:(_vm.pagination.page),callback:function ($$v) {_vm.$set(_vm.pagination, "page", $$v)},expression:"pagination.page"}})],1):_vm._e()]):_vm._e()])])])]:_vm._e()],2)])])],2)])])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/laporan/list.vue?vue&type=template&id=48b1440c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/listpage.js
var listpage = __webpack_require__("c770");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/laporan/list.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var listvue_type_script_lang_js_ = ({
  name: 'listLaporanPage',
  components: {},
  mixins: [page["a" /* PageMixin */], listpage["a" /* ListPageMixin */]],
  props: {
    primaryKey: {
      type: String,
      default: ''
    },
    pageName: {
      type: String,
      default: 'laporan'
    },
    routeName: {
      type: String,
      default: 'laporanlist'
    },
    apiPath: {
      type: String,
      default: 'laporan/index'
    },
    multiCheckbox: {
      type: Boolean,
      default: false
    },
    msgBeforeDelete: {
      type: String,
      default: "Are you sure you want to delete this record?"
    },
    exportFormats: {
      type: Array,
      default: function () {
        return ['pdf', 'excel', 'csv'];
      }
    }
  },

  data() {
    return {};
  },

  computed: {
    pageTitle: {
      get: function () {
        //set browser page title
        return "Laporan";
      }
    },
    records: {
      get: function () {
        return this.$store.getters["laporan/records"];
      },
      set: function (value) {
        this.$store.commit("laporan/setRecords", value);
      }
    },
    currentRecord: {
      get: function () {
        return this.$store.getters["laporan/currentRecord"];
      },
      set: function (value) {
        this.$store.commit("laporan/setCurrentRecord", value);
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  watch: {
    apiUrl: function () {
      this.load();
    },

    $route(to, from) {
      //only fetch data when navigated to this page
      if (to.name == this.routeName) {
        this.load();
      }
    }

  },
  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])("laporan", ["fetchRecords", "deleteRecord"])), {}, {
    load: function () {
      if (!this.loading) {
        this.loading = true;
        this.currentRecord = null;
        let url = this.apiUrl;
        let payload = {
          url,
          merge: false
        };
        this.fetchRecords(payload).then(response => {
          this.loading = false;
          this.ready = true;
          this.totalRecords = response.total_records;
          this.recordCount = response.record_count;
          this.pagination.rowsNumber = this.totalRecords;
          window.scrollTo(0, 0);
        }, response => {
          this.loading = false;
          this.showPageRequestError(response);
        });
      }
    }
  }),

  async mounted() {},

  async created() {}

});
// CONCATENATED MODULE: ./src/pages/laporan/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var laporan_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbs.js
var QBreadcrumbs = __webpack_require__("ead5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbsEl.js
var QBreadcrumbsEl = __webpack_require__("079e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 17 modules
var QTable = __webpack_require__("eaac");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__("bd08");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__("db86");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 2 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/pagination/QPagination.js
var QPagination = __webpack_require__("3b16");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/laporan/list.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  laporan_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "48b1440c",
  null
  
)

/* harmony default export */ var list = __webpack_exports__["default"] = (component.exports);






















runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QChip: QChip["a" /* default */],QBreadcrumbs: QBreadcrumbs["a" /* default */],QBreadcrumbsEl: QBreadcrumbsEl["a" /* default */],QTable: QTable["a" /* default */],QTr: QTr["a" /* default */],QTd: QTd["a" /* default */],QTooltip: QTooltip["a" /* default */],QBtn: QBtn["a" /* default */],QMenu: QMenu["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QCardSection: QCardSection["a" /* default */],QSeparator: QSeparator["a" /* default */],QCardActions: QCardActions["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinner: QSpinner["a" /* default */],QPagination: QPagination["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=3.0ea3fcfc.js.map