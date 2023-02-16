(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "775b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_kelas/edit.vue?vue&type=template&id=5efe040f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Tb Kelas")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',[(!_vm.loading)?[_c('div',{staticClass:"row  q-col-gutter-x-md"},[_c('div',{staticClass:"col"},[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Wali Kelas *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/wali_name_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'wali_name'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Wali Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlwali_name",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Wali Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.wali_name),callback:function ($$v) {_vm.$set(_vm.formData, "wali_name", $$v)},expression:"formData.wali_name"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Kelas *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlclass_name",attrs:{"outlined":"","dense":"","label":"Kelas","type":"text","placeholder":"Nama Kelas","list":"class_name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.class_name),callback:function ($$v) {_vm.$set(_vm.formData, "class_name", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.class_name"}}),_c('datalist',{attrs:{"id":"class_name_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Sub Kelas *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/sub_class_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'sub_class'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Sub Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlsub_class",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Sub Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.sub_class),callback:function ($$v) {_vm.$set(_vm.formData, "sub_class", $$v)},expression:"formData.sub_class"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Total Siswa *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Total Siswa"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrltotal_students",attrs:{"outlined":"","dense":"","label":"Total Siswa","type":"number","placeholder":"Enter Total Siswa","step":"any","list":"total_students_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.total_students),callback:function ($$v) {_vm.$set(_vm.formData, "total_students", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.total_students"}}),_c('datalist',{attrs:{"id":"total_students_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Total Poin \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Total Poin"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrltotal_poin",attrs:{"outlined":"","dense":"","label":"Total Poin","type":"number","placeholder":"Enter Total Poin","step":"any","list":"total_poin_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.total_poin),callback:function ($$v) {_vm.$set(_vm.formData, "total_poin", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.total_poin"}}),_c('datalist',{attrs:{"id":"total_poin_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon-right":"fas fa-paper-plane","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                                ")],1)],1):_vm._e()]}}],null,false,3371057776)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])]:[_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}})],1)]],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/tb_kelas/edit.vue?vue&type=template&id=5efe040f&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/page.js
var page = __webpack_require__("c6e7");

// EXTERNAL MODULE: ./src/mixins/editpage.js
var editpage = __webpack_require__("b858");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_kelas/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'editTbkelasPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'tb_kelas'
    },
    idName: {
      type: String,
      default: 'id'
    },
    routeName: {
      type: String,
      default: 'tb_kelasedit'
    },
    pagePath: {
      type: String,
      default: 'tb_kelas/edit'
    },
    apiPath: {
      type: String,
      default: 'tb_kelas/edit'
    }
  },

  data() {
    return {
      formData: {
        wali_name: "",
        class_name: "",
        sub_class: "",
        total_students: "",
        total_poin: ""
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Tb Kelas";
      }
    },
    currentRecord: {
      get: function () {
        return this.$store.getters["tb_kelas/currentRecord"];
      },
      set: function (value) {
        this.$store.commit("tb_kelas/setCurrentRecord", value);
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('tb_kelas', ['updateRecord', 'fetchRecord'])), {}, {
    async startRecordUpdate() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let id = this.id;
        let url = this.apiUrl;
        let payload = this.normalizedFormData();
        let data = {
          id,
          url,
          payload
        };
        this.updateRecord(data).then(response => {
          this.saving = false;
          this.flashMsg(this.msgAfterUpdate);
          this.resetForm();
          this.closeDialogs(); // close page dialog that if opened

          if (this.redirect) this.navigateTo(`/tb_kelas`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    updateFormFields: function () {//update form fields value after load from api
      //e.g convert fieldvalue (value,value2,value2) to array 
    },

    resetForm() {
      //reset form fields value
      this.formData = {
        wali_name: "",
        class_name: "",
        sub_class: "",
        total_students: "",
        total_poin: ""
      };
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      }); //raise event to reset other custom form components

      this.$EventBus.$emit("resetForm");
    }

  }),
  watch: {},

  async mounted() {},

  async created() {}

});
// CONCATENATED MODULE: ./src/pages/tb_kelas/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var tb_kelas_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/tb_kelas/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tb_kelas_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5efe040f",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QSelect: QSelect["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=17.ee56f0d2.js.map