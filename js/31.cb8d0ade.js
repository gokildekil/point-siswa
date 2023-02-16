(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "69f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/changepassword.vue?vue&type=template&id=37a1624f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-center"},[_c('div',{staticClass:"col-md-5 col-12"},[_c('div',{staticClass:"text-h5 text-bold q-my-md"},[_vm._v("Change Password")]),_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Old Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"dense":"","outlined":"","label":"Old Password","placeholder":"Your New Password","name":"password","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.oldPassword),callback:function ($$v) {_vm.$set(_vm.formData, "oldPassword", $$v)},expression:"formData.oldPassword"}})]}}],null,true)}),_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"New Password"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"dense":"","outlined":"","hint":"Hints : Not Less Than 6 Characters","label":"New Password","placeholder":"Your New Password","name":"password","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.password),callback:function ($$v) {_vm.$set(_vm.formData, "password", $$v)},expression:"formData.password"}})]}}],null,true)}),_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Password Confirm"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"dense":"","outlined":"","label":"Confirm new password","placeholder":"Confirm Password","name":"cpassword","type":"password","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.confirmPassword),callback:function ($$v) {_vm.$set(_vm.formData, "confirmPassword", $$v)},expression:"formData.confirmPassword"}})]}}],null,true)}),_c('div',{staticClass:"q-mt-md text-center"},[_c('q-btn',{attrs:{"unelevated":"","type":"submit","icon":"send","color":"primary","large":"","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Change Password\n\t\t\t\t\t")],1)],1)]}}])})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/account/changepassword.vue?vue&type=template&id=37a1624f&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/account/changepassword.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var changepasswordvue_type_script_lang_js_ = ({
  props: {
    apiUrl: 'account/change_password/'
  },

  data() {
    return {
      saving: false,
      formData: {
        oldPassword: '',
        password: '',
        confirmPassword: ''
      }
    };
  },

  methods: {
    async startSaveRecord() {
      const isFormValid = await this.$refs.observer.validate();

      if (isFormValid) {
        this.saving = true;
        let payload = this.formData;
        let url = this.apiUrl;
        this.$api.post(url, payload).then(response => {
          this.saving = false;
        }, response => {
          this.saving = false;
          this.$root.$emit('requestError', response);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./src/pages/account/changepassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_changepasswordvue_type_script_lang_js_ = (changepasswordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/account/changepassword.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_changepasswordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var changepassword = __webpack_exports__["default"] = (component.exports);




runtime_auto_import_default()(component, 'components', {QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=31.cb8d0ade.js.map