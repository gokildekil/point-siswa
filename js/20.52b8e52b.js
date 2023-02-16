(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "5b55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_siswa/add.vue?vue&type=template&id=355e73d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Form Input Data Siswa")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Nis *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Nis"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlnisn",attrs:{"outlined":"","dense":"","label":"Nis","type":"number","placeholder":"Nis Siswa","step":"any","list":"nisn_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.nisn),callback:function ($$v) {_vm.$set(_vm.formData, "nisn", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.nisn"}}),_c('datalist',{attrs:{"id":"nisn_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Nama Siswa *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Nama Siswa"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlstd_name",attrs:{"outlined":"","dense":"","label":"Nama Siswa","type":"text","placeholder":"Nama Siswa","list":"std_name_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.std_name),callback:function ($$v) {_vm.$set(_vm.formData, "std_name", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.std_name"}}),_c('datalist',{attrs:{"id":"std_name_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Kelas *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/class_id_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'class_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlclass_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.class_id),callback:function ($$v) {_vm.$set(_vm.formData, "class_id", $$v)},expression:"formData.class_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Alamat \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Alamat"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrladdress",attrs:{"outlined":"","dense":"","rows":"5","placeholder":"Alamat","type":"textarea","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.address),callback:function ($$v) {_vm.$set(_vm.formData, "address", $$v)},expression:"formData.address"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                No Telp \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"No Telp"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlphone_number",attrs:{"outlined":"","dense":"","label":"No Telp","type":"number","placeholder":"No Telp","step":"0.1","list":"phone_number_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.phone_number),callback:function ($$v) {_vm.$set(_vm.formData, "phone_number", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.phone_number"}}),_c('datalist',{attrs:{"id":"phone_number_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Foto Siswa \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Foto Siswa"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-mb-sm"},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"max-files":1,"max-file-size":5120,"accept":".jpg,.png,.gif,.jpeg","multiple":false,"square":"","flat":"","bordered":"","label":"Choose files or drop files here","upload-path":"fileuploader/upload/foto_siswa"},model:{value:(_vm.formData.foto_siswa),callback:function ($$v) {_vm.$set(_vm.formData, "foto_siswa", $$v)},expression:"formData.foto_siswa"}}),(invalid && validated)?_c('small',{staticClass:"q-pa-sm text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e()],1)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"type":"submit","rounded":false,"color":"primary","no-caps":"","unelevated":"","disabled":invalid,"icon-right":"fas fa-paper-plane","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                    ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/tb_siswa/add.vue?vue&type=template&id=355e73d6&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_siswa/add.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'addTbsiswaPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'tb_siswa'
    },
    routeName: {
      type: String,
      default: 'tb_siswaadd'
    },
    apiPath: {
      type: String,
      default: 'tb_siswa/add'
    }
  },

  data() {
    return {
      formData: {
        nisn: "",
        std_name: "",
        class_id: "",
        address: "",
        phone_number: "",
        foto_siswa: ""
      }
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Tb Siswa";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('tb_siswa', ['saveRecord'])), {}, {
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
          if (this.redirect) this.navigateTo(`/tb_siswa`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        nisn: "",
        std_name: "",
        class_id: "",
        address: "",
        phone_number: "",
        foto_siswa: ""
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
// CONCATENATED MODULE: ./src/pages/tb_siswa/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var tb_siswa_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/tb_siswa/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tb_siswa_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "355e73d6",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);







runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QInput: QInput["a" /* default */],QSelect: QSelect["a" /* default */],QUploader: QUploader["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=20.52b8e52b.js.map