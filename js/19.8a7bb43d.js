(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "9c2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_pelanggaran/view.vue?vue&type=template&id=2e8fd030&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Tb Pelanggaran Details")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col comp-grid"},[_c('q-card',{staticClass:" nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',[_c('div',{staticClass:"relative-position",staticStyle:{"min-height":"100px"}},[(!_vm.loading && _vm.item)?[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col"},[_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Nis: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.nisn))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Nama Siswa: ")]),_c('q-item-label',{staticClass:"text-bold"},[(_vm.item.student_id)?_c('q-btn',{attrs:{"to":("/tb_siswa/view/" + (_vm.item.student_id)),"padding":"xs","color":"blue-1","unelevated":"","text-color":"blue","no-caps":""}},[_c('q-icon',{staticClass:"q-mr-xs",attrs:{"name":"fas fa-eye","size":"xs"}}),_vm._v("  "+_vm._s(_vm.item.tb_siswa_std_name)+"\n                                                        ")],1):_vm._e()],1)],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Kelas: ")]),_c('q-item-label',{staticClass:"text-bold"},[(_vm.item.class_id)?_c('q-btn',{attrs:{"to":("/tb_kelas/view/" + (_vm.item.class_id)),"padding":"xs","color":"blue-1","unelevated":"","text-color":"blue","no-caps":""}},[_c('q-icon',{staticClass:"q-mr-xs",attrs:{"name":"fas fa-eye","size":"xs"}}),_vm._v("  "+_vm._s(_vm.item.tb_kelas_class_name)+"\n                                                        ")],1):_vm._e()],1)],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Wali Kelas: ")]),_c('q-item-label',{staticClass:"text-bold"},[(_vm.item.teacher_id)?_c('q-btn',{attrs:{"to":("/tb_guru/view/" + (_vm.item.teacher_id)),"padding":"xs","color":"blue-1","unelevated":"","text-color":"blue","no-caps":""}},[_c('q-icon',{staticClass:"q-mr-xs",attrs:{"name":"fas fa-eye","size":"xs"}}),_vm._v("  "+_vm._s(_vm.item.tb_guru_teacher_name)+"\n                                                        ")],1):_vm._e()],1)],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Orang Tua: ")]),_c('q-item-label',{staticClass:"text-bold"},[(_vm.item.wali_id)?_c('q-btn',{attrs:{"to":("/tb_wali/view/" + (_vm.item.wali_id)),"padding":"xs","color":"blue-1","unelevated":"","text-color":"blue","no-caps":""}},[_c('q-icon',{staticClass:"q-mr-xs",attrs:{"name":"fas fa-eye","size":"xs"}}),_vm._v("  "+_vm._s(_vm.item.tb_wali_parent_name)+"\n                                                        ")],1):_vm._e()],1)],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Katagori Pelanggaran: ")]),_c('q-item-label',{staticClass:"text-bold"},[(_vm.item.type_id)?_c('q-btn',{attrs:{"to":("/tb_tipe_pelanggaran/view/" + (_vm.item.type_id)),"padding":"xs","color":"blue-1","unelevated":"","text-color":"blue","no-caps":""}},[_c('q-icon',{staticClass:"q-mr-xs",attrs:{"name":"fas fa-eye","size":"xs"}}),_vm._v("  "+_vm._s(_vm.item.tb_tipe_pelanggaran_violation_name)+"\n                                                        ")],1):_vm._e()],1)],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Note: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.note))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Tgl/Waktu Kejadian: ")]),_c('q-item-label',{staticClass:"text-bold"},[(_vm.item.reported_on)?_c('q-chip',{attrs:{"dense":"","size":"13px","label":_vm._f("relativeDate")(_vm.item.reported_on)}},[_c('q-tooltip',{attrs:{"content-class":"bg-accent","transition-show":"scale","transition-hide":"scale"}},[_vm._v("\n                                                        "+_vm._s(_vm._f("humanDatetime")(_vm.item.reported_on))+"\n                                                        ")])],1):_vm._e()],1)],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Foto Kejadian: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.foto_kejadian))])],1)],1),_c('q-separator'),_c('q-card-actions',{staticClass:"row q-col-gutter-xs justify-end"},[_c('q-btn',{attrs:{"icon":"fas fa-bars","padding":"xs","round":"","flat":"","color":"grey"}},[_c('q-menu',{attrs:{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left","self":"center middle","anchor":"center middle"}},[_c('q-list',{attrs:{"dense":"","rounded":"","nav":""}},[_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"link":"","clickable":"","to":("/tb_pelanggaran/edit/" + (_vm.item.id))}},[_c('q-item-section',[_c('q-icon',{attrs:{"color":"positive","size":"sm","name":"fas fa-edit"}})],1),_c('q-item-section',[_vm._v("Edit")])],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"link":"","clickable":""},on:{"click":function($event){return _vm.deleteItem(_vm.item.id)}}},[_c('q-item-section',[_c('q-icon',{attrs:{"color":"negative","size":"sm","name":"fas fa-times"}})],1),_c('q-item-section',[_vm._v("Delete")])],1)],1)],1)],1)],1)],1)])]:_vm._e(),(_vm.loading)?[_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-inner-loading',{attrs:{"showing":_vm.loading}},[_c('q-spinner',{attrs:{"size":40,"color":"primary","indeterminate":""}})],1)],1)]:_vm._e()],2)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/view.vue?vue&type=template&id=2e8fd030&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/viewpage.js
var viewpage = __webpack_require__("19a6");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_pelanggaran/view.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'viewTbpelanggaranPage',
  components: {},
  mixins: [page["a" /* PageMixin */], viewpage["a" /* ViewPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'tb_pelanggaran'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'tb_pelanggaranview'
    },
    pagePath: {
      type: String,
      default: 'tb_pelanggaran/view'
    },
    apiPath: {
      type: String,
      default: 'tb_pelanggaran/view'
    }
  },

  data() {
    return {
      item: {
        default: {}
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Tb Pelanggaran Details";
      }
    },
    currentRecord: {
      get: function () {
        return this.$store.getters["tb_pelanggaran/currentRecord"];
      },
      set: function (value) {
        this.$store.commit("tb_pelanggaran/setCurrentRecord", value);
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])("tb_pelanggaran", ["fetchRecord", "deleteRecord"])),
  watch: {
    $route(to, from) {
      //only fetch data when navigated to this page
      if (to.name == this.routeName) {
        this.load();
      }
    }

  },

  async mounted() {},

  async created() {}

});
// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/view.vue?vue&type=script&lang=js&
 /* harmony default export */ var tb_pelanggaran_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 2 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/view.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tb_pelanggaran_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2e8fd030",
  null
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);















runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QSeparator: QSeparator["a" /* default */],QBtn: QBtn["a" /* default */],QIcon: QIcon["a" /* default */],QChip: QChip["a" /* default */],QTooltip: QTooltip["a" /* default */],QCardActions: QCardActions["a" /* default */],QMenu: QMenu["a" /* default */],QList: QList["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinner: QSpinner["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=19.8a7bb43d.js.map