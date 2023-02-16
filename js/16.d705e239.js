(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "a5f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_kelas/add.vue?vue&type=template&id=4e590fb4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Form Input  Kelas")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Wali Kelas *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/wali_name_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'wali_name'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Wali Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlwali_name",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Wali Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.wali_name),callback:function ($$v) {_vm.$set(_vm.formData, "wali_name", $$v)},expression:"formData.wali_name"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Kelas *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlclass_name",attrs:{"outlined":"","dense":"","label":"Kelas","type":"text","placeholder":"Nama Kelas","list":"class_name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.class_name),callback:function ($$v) {_vm.$set(_vm.formData, "class_name", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.class_name"}}),_c('datalist',{attrs:{"id":"class_name_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Sub Kelas *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/sub_class_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'sub_class'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Sub Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlsub_class",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Sub Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.sub_class),callback:function ($$v) {_vm.$set(_vm.formData, "sub_class", $$v)},expression:"formData.sub_class"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Total Siswa *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Total Siswa"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrltotal_students",attrs:{"outlined":"","dense":"","label":"Total Siswa","type":"number","placeholder":"Enter Total Siswa","step":"any","list":"total_students_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.total_students),callback:function ($$v) {_vm.$set(_vm.formData, "total_students", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.total_students"}}),_c('datalist',{attrs:{"id":"total_students_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"type":"submit","rounded":false,"color":"primary","no-caps":"","unelevated":"","disabled":invalid,"icon-right":"fas fa-paper-plane","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                    ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/tb_kelas/add.vue?vue&type=template&id=4e590fb4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/addpage.js
var addpage = __webpack_require__("8f54");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_kelas/add.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var addvue_type_script_lang_js_ = ({
  name: 'addTbkelasPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'tb_kelas'
    },
    routeName: {
      type: String,
      default: 'tb_kelasadd'
    },
    apiPath: {
      type: String,
      default: 'tb_kelas/add'
    }
  },

  data() {
    return {
      formData: {
        wali_name: "",
        class_name: "",
        sub_class: "",
        total_students: ""
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Tb Kelas";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('tb_kelas', ['saveRecord'])), {}, {
    async startSaveRecord() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let payload = this.normalizedFormData();
        let url = this.apiUrl;
        let data = {
          url,
          payload
        };
        this.saveRecord(data).then(response => {
          var _response$data, _this$record$id;

          this.record = (_response$data = response.data) !== null && _response$data !== void 0 ? _response$data : {};
          this.id = (_this$record$id = this.record['id']) !== null && _this$record$id !== void 0 ? _this$record$id : null;
          this.saving = false;
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          this.flashMsg(this.msgAfterSave);
          this.$emit("submitted", this.record);
          if (this.redirect) this.navigateTo(`/tb_kelas`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        wali_name: "",
        class_name: "",
        sub_class: "",
        total_students: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
      this.updateFormData();
      this.$EventBus.$emit("resetForm");
    }

  }),
  watch: {},

  async mounted() {},

  async created() {}

});
// CONCATENATED MODULE: ./src/pages/tb_kelas/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var tb_kelas_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/tb_kelas/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tb_kelas_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4e590fb4",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);






runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=16.d705e239.js.map