(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "0d9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/laporan/view.vue?vue&type=template&id=3a56f939&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Laporan Details")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col comp-grid"},[_c('q-card',{staticClass:" nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',[_c('div',{staticClass:"relative-position",staticStyle:{"min-height":"100px"}},[(!_vm.loading && _vm.item)?[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col"},[_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Nis: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.nisn))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Nama Siswa: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.std_name))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Wali Kelas: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.teacher_name))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Kelas: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.class_name))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Sub Kelas: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.sub_class))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Katagori Pelanggaran: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.violation_name))])],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Tgl/Waktu Kejadian: ")]),_c('q-item-label',{staticClass:"text-bold"},[(_vm.item.reported_on)?_c('q-chip',{attrs:{"dense":"","size":"13px","label":_vm._f("relativeDate")(_vm.item.reported_on)}},[_c('q-tooltip',{attrs:{"content-class":"bg-accent","transition-show":"scale","transition-hide":"scale"}},[_vm._v("\n                                                        "+_vm._s(_vm._f("humanDatetime")(_vm.item.reported_on))+"\n                                                        ")])],1):_vm._e()],1)],1)],1),_c('q-separator'),_c('q-item',[_c('q-item-section',[_c('q-item-label',{attrs:{"caption":""}},[_vm._v("Note: ")]),_c('q-item-label',{staticClass:"text-bold"},[_vm._v(_vm._s(_vm.item.note))])],1)],1),_c('q-separator')],1)])]:_vm._e(),(_vm.loading)?[_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-inner-loading',{attrs:{"showing":_vm.loading}},[_c('q-spinner',{attrs:{"size":40,"color":"primary","indeterminate":""}})],1)],1)]:_vm._e()],2)])])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/laporan/view.vue?vue&type=template&id=3a56f939&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/laporan/view.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'viewLaporanPage',
  components: {},
  mixins: [page["a" /* PageMixin */], viewpage["a" /* ViewPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'laporan'
    },
    idName: {
      type: String,
      default: ''
    },
    routeName: {
      type: String,
      default: 'laporanview'
    },
    pagePath: {
      type: String,
      default: 'laporan/view'
    },
    apiPath: {
      type: String,
      default: 'laporan/view'
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
        return "Laporan Details";
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

  methods: objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])("laporan", ["fetchRecord", "deleteRecord"])),
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
// CONCATENATED MODULE: ./src/pages/laporan/view.vue?vue&type=script&lang=js&
 /* harmony default export */ var laporan_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/laporan/view.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  laporan_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3a56f939",
  null
  
)

/* harmony default export */ var view = __webpack_exports__["default"] = (component.exports);










runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QSeparator: QSeparator["a" /* default */],QChip: QChip["a" /* default */],QTooltip: QTooltip["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=12.d1f92f6e.js.map