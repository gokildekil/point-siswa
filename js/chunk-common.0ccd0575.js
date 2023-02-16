(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "19a6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPageMixin; });
const ViewPageMixin = {
  props: {
    id: [String, Number],
    fieldName: {
      type: String,
      default: ''
    },
    fieldValue: {
      type: String,
      default: ''
    },
    editButton: {
      type: Boolean,
      default: true
    },
    deleteButton: {
      type: Boolean,
      default: true
    },
    exportButton: {
      type: Boolean,
      default: true
    },
    msgBeforeDelete: {
      type: String,
      default: "Are you sure you want to delete this record?"
    },
    msgAfterDelete: {
      type: String,
      default: "Record deleted successfully"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      filterBy: '',
      filterValue: '',
      ready: false,
      loading: false,
      showError: false,
      errorMsg: ''
    };
  },
  computed: {
    apiUrl: function () {
      if (this.id) {
        let id = encodeURIComponent(this.id);
        let path = `/${this.pagePath}/${id}`;
        let query = this.$route.query;
        let queryParams = this.$utils.serializeQuery(query);

        if (queryParams) {
          path += "?" + queryParams;
        }

        return path;
      }

      return this.apiPath;
    }
  },
  methods: {
    load: function (apiUrl) {
      if (!this.loading) {
        this.loading = true;
        this.ready = false; // hide other components until main page is ready

        this.item = null;
        let url = apiUrl !== null && apiUrl !== void 0 ? apiUrl : this.apiUrl;
        this.$api.get(url).then(response => {
          this.loading = false;
          this.ready = true; // show other components

          this.currentRecord = response.data;
          this.item = this.currentRecord;
        }, response => {
          this.loading = false;
          this.showPageRequestError(response);
        });
      }
    },
    deleteItem: function (id) {
      if (id) {
        let title = "Delete record";
        let prompt = this.msgBeforeDelete;
        this.$q.dialog({
          title: title,
          message: prompt,
          cancel: true,
          persistent: true
        }).onOk(() => {
          let url = this.pageName + '/delete/' + id;
          let data = {
            id,
            url
          };
          this.deleteRecord(data).then(response => {
            if (this.isDialogOpen) {
              this.closeDialogs();
            } else {
              this.$router.back();
            }

            this.flashMsg(this.msgAfterDelete);
          }, response => {
            this.showPageRequestError(response);
          });
        }).onCancel(() => {// console.log('>>>> Cancel')
        }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
        });
      }
    },
    exportRecord: function () {
      this.exportPage(this.$refs.datatable.innerHTML, this.pageTitle);
    },
    moveRecord: function (recid) {
      let id = encodeURIComponent(recid);
      let path = `/${this.pagePath}/${id}`;
      this.load(path);
    },
    moveToNextRecord: function () {
      this.moveRecord(this.item.nextRecordId);
    },
    moveToPreviousRecord: function () {
      this.moveRecord(this.item.previousRecordId);
    }
  },
  watch: {
    apiUrl: function () {
      this.load();
    }
  },
  created: function () {},
  mounted: function () {
    this.filterBy = this.fieldName;
    this.filterValue = this.fieldValue;
    this.load();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
};

/***/ }),

/***/ "8f54":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageMixin; });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);

const AddPageMixin = {
  props: {
    msgAfterSave: {
      type: String,
      default: "Record added successfully"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    redirect: {
      type: Boolean,
      default: true
    },
    modelBind: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  data: function () {
    return {
      record: {},
      inputSearch: "",
      id: "",
      saving: false,
      ready: false,
      isPwd: true,
      isCPwd: true
    };
  },
  computed: {
    apiUrl: function () {
      return this.apiPath;
    }
  },
  watch: {
    modelBind: function () {
      this.updateFormData();
    }
  },
  methods: {
    async submit() {
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
          this.currentRecord = response.data;
          this.record = this.currentRecord;
          this.saving = false;
          this.closeDialogs(); // close page dialog that if opened

          this.$emit("submitted", this.record);
        }, response => {
          this.saving = false;
          this.$emit("error", response);
        });
      }
    },

    updateFormData: function () {
      if (this.formData) {
        for (const key in this.modelBind) {
          this.formData[key] = this.modelBind[key];
        }
      } else if (this.arrFormData) {
        let formdata = this.modelBind;
        this.arrFormData.forEach(function (formData) {
          for (const key in formdata) {
            formData[key] = formdata[key];
          }
        });
      }
    },
    uploadcompleted: function (arg) {
      this.formData[arg.field] = arg.result;
    }
  },
  created: function () {},
  mounted: function () {
    this.updateFormData();
    this.showError = false;
    this.ready = true;
  }
};

/***/ }),

/***/ "9b1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_pelanggaran/add.vue?vue&type=template&id=4069a01a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Form Tambah Pelanggaran")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startSaveRecord()},"reset":_vm.resetForm},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Nis \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Nis"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlnisn",attrs:{"outlined":"","dense":"","label":"Nis","type":"number","placeholder":"Enter Nis","step":"any","list":"nisn_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.nisn),callback:function ($$v) {_vm.$set(_vm.formData, "nisn", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.nisn"}}),_c('datalist',{attrs:{"id":"nisn_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Nama Siswa *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/student_id_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'student_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Nama Siswa"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlstudent_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Nama Siswa","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.student_id),callback:function ($$v) {_vm.$set(_vm.formData, "student_id", $$v)},expression:"formData.student_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Kelas \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/class_id_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'class_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{},"name":"Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlclass_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.class_id),callback:function ($$v) {_vm.$set(_vm.formData, "class_id", $$v)},expression:"formData.class_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Wali Kelas \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/wali_name_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'teacher_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{},"name":"Wali Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlteacher_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Wali Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.teacher_id),callback:function ($$v) {_vm.$set(_vm.formData, "teacher_id", $$v)},expression:"formData.teacher_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Orang Tua \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/parent_name_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'wali_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{},"name":"Orang Tua"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlwali_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Orang Tua","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.wali_id),callback:function ($$v) {_vm.$set(_vm.formData, "wali_id", $$v)},expression:"formData.wali_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Pelanggaran *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/type_id_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Pelanggaran"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrltype_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Pelanggaran","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.type_id),callback:function ($$v) {_vm.$set(_vm.formData, "type_id", $$v)},expression:"formData.type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Note *\n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Note"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlnote",attrs:{"outlined":"","dense":"","rows":"5","placeholder":"Enter Note","type":"textarea","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.note),callback:function ($$v) {_vm.$set(_vm.formData, "note", $$v)},expression:"formData.note"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Tgl/Waktu Kejadian \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Tgl/Waktu Kejadian"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"fas fa-calendar"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.reported_on),callback:function ($$v) {_vm.$set(_vm.formData, "reported_on", $$v)},expression:"formData.reported_on"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"fas fa-clock"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.reported_on),callback:function ($$v) {_vm.$set(_vm.formData, "reported_on", $$v)},expression:"formData.reported_on"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.reported_on),callback:function ($$v) {_vm.$set(_vm.formData, "reported_on", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.reported_on"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                Foto Kejadian \n                                            ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Foto Kejadian"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-mb-sm"},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"max-files":1,"max-file-size":5120,"accept":".jpg,.png,.gif,.jpeg","multiple":false,"square":"","flat":"","bordered":"","label":"Choose files or drop files here","upload-path":"fileuploader/upload/foto_kejadian"},model:{value:(_vm.formData.foto_kejadian),callback:function ($$v) {_vm.$set(_vm.formData, "foto_kejadian", $$v)},expression:"formData.foto_kejadian"}}),(invalid && validated)?_c('small',{staticClass:"q-pa-sm text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e()],1)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"type":"submit","rounded":false,"color":"primary","no-caps":"","unelevated":"","disabled":invalid,"icon-right":"fas fa-paper-plane","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Submit\n                                    ")],1)],1):_vm._e()]}}])}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/add.vue?vue&type=template&id=4069a01a&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_pelanggaran/add.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'addTbpelanggaranPage',
  components: {},
  mixins: [page["a" /* PageMixin */], addpage["a" /* AddPageMixin */]],
  props: {
    pageName: {
      type: String,
      default: 'tb_pelanggaran'
    },
    routeName: {
      type: String,
      default: 'tb_pelanggaranadd'
    },
    apiPath: {
      type: String,
      default: 'tb_pelanggaran/add'
    }
  },

  data() {
    return {
      formData: {
        nisn: "",
        student_id: "",
        class_id: "",
        teacher_id: "",
        wali_id: "",
        type_id: "",
        note: "",
        reported_on: "",
        foto_kejadian: ""
      },
      reported_onPicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Add New Tb Pelanggaran";
      }
    }
  },

  meta() {
    return {
      title: this.pageTitle
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('tb_pelanggaran', ['saveRecord'])), {}, {
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
          if (this.redirect) this.navigateTo(`/tb_pelanggaran`);
        }, response => {
          this.saving = false;
          this.showPageRequestError(response);
        });
      }
    },

    resetForm() {
      this.formData = {
        nisn: "",
        student_id: "",
        class_id: "",
        teacher_id: "",
        wali_id: "",
        type_id: "",
        note: "",
        reported_on: "",
        foto_kejadian: ""
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
// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var tb_pelanggaran_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tb_pelanggaran_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4069a01a",
  null
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);











runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QInput: QInput["a" /* default */],QSelect: QSelect["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QUploader: QUploader["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */]});


/***/ }),

/***/ "b858":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPageMixin; });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);

const EditPageMixin = {
  props: {
    id: [String, Number],
    msgAfterUpdate: {
      type: String,
      default: "Record updated successfully"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    redirect: {
      type: Boolean,
      default: true
    },
    modelBind: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  data: function () {
    return {
      inputSearch: "",
      errorMsg: "",
      loading: false,
      ready: false,
      saving: false,
      isPwd: true,
      isCPwd: true,
      record: {}
    };
  },
  computed: {
    apiUrl: function () {
      if (this.id) {
        return this.apiPath + '/' + encodeURIComponent(this.id);
      }

      return this.apiPath;
    }
  },
  methods: {
    async submit() {
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
          this.record = response.data;
          this.saving = false;
          this.closeDialogs(); // close page dialog that if opened

          this.$emit("submited", this.id);
        }, response => {
          this.saving = false;
          this.$emit("error", response);
        });
      }
    },

    load: function () {
      var url = this.apiUrl;
      this.loading = true;
      this.ready = false; // hide other components until main page is ready

      this.$api.get(url).then(response => {
        this.loading = false;
        this.ready = true;
        this.currentRecord = response.data;
        this.formData = this.currentRecord;
        this.updateFormFields();
      }, response => {
        this.resetForm();
        this.loading = false;
        this.showPageRequestError(response);
      });
    }
  },
  watch: {
    $route(to, from) {
      //only fetch data when navigated to this page
      if (to.name == this.routeName) {
        this.load();
      }
    },

    apiUrl: function () {
      this.load();
    },
    modelBind: function () {
      for (key in this.modelBind) {
        this.formData[key] = this.modelBind[key];
      }
    }
  },
  mounted: function () {
    this.load();
  }
};

/***/ }),

/***/ "c6e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMixin; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2b3d");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_3__);




const PageMixin = {
  props: {
    isSubPage: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      inputSearch: "",
      filters: {},
      filtersLabel: {}
    };
  },
  computed: {
    isDialogOpen: function () {
      return this.$store.getters["pageComponents/isDialogOpen"];
    }
  },
  methods: {
    openPageDialog: function (pageData, dialog) {
      this.$store.commit("pageComponents/setRightDrawer", false);
      this.$store.commit("pageComponents/setDialogProps", dialog);
      this.$store.dispatch('pageComponents/openPageDialog', pageData);
    },
    openPageDrawer: function (pageData, dialog) {
      this.$store.commit("pageComponents/setPageDialog", false);
      this.$store.commit("pageComponents/setDrawerProps", dialog);
      this.$store.dispatch('pageComponents/openPageDrawer', pageData);
    },
    closeDialogs: function () {
      this.$store.commit("pageComponents/setRightDrawer", false);
      this.$store.commit("pageComponents/setPageDialog", false);
    },
    setPageTitle: function (title, pagename) {
      document.title = title;
    },
    flashMsg: function (message, color, position, icon) {
      color = color || "positive";
      position = position || "top";
      icon = icon || "";

      if (message) {
        this.$q.notify({
          message,
          position,
          icon,
          color
        });
      }
    },
    navigateTo: function (path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    showPageRequestError: function (request) {
      let defaultMsg = "Error processing request!";
      let errorMsgs = [defaultMsg];

      if (request.response) {
        let error = request.response.data;

        if (Array.isArray(error)) {
          errorMsgs = error;
        } else if (typeof error === 'object') {
          errorMsgs = Object.values(error);
        } else {
          errorMsgs = [error.toString()];
        }
      }

      this.$store.dispatch('pageComponents/showPageErrors', errorMsgs);
    },
    openExportPage: function () {
      let actions = [];
      this.exportFormats.forEach(format => {
        actions.push(this.$menus.exportFormats[format]);
      });
      let message = "Export";
      this.$q.bottomSheet({
        message,
        grid: false,
        actions
      }).onOk(action => {
        let exportFormat = this.$menus.exportFormats[action.id];
        let url = this.apiUrl;
        let queryParam = {
          export: action.id
        };
        let exportUrl = this.$utils.setApiPath(url, queryParam);
        let fileName = new Date().toISOString().slice(0, 10) + '-' + this.pageName + "-report." + exportFormat.ext;
        this.$api.download(exportUrl).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          link.remove();
        }, response => {
          console.error(response);
          alert("Unable to download file");
        });
      }).onCancel(() => {// console.log('Dismissed')
      }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
      });
    },
    setFilter: function (options, fieldName) {
      if (Array.isArray(options)) {
        let selectedOptions = this.filters[fieldName];

        if (Array.isArray(selectedOptions)) {
          let labels = [];

          for (var i in options) {
            if (selectedOptions.indexOf(options[i].value) > -1) {
              labels.push(options[i].label);
            }
          }

          this.filtersLabel[fieldName] = labels;
        } else if (selectedOptions.label) {
          this.filtersLabel[fieldName] = selectedOptions.label;
        } else {
          let option = options.find(item => item.value === selectedOptions);
          this.filtersLabel[fieldName] = option.label;
        }
      } else if (options.label) {
        this.filters[fieldName] = options.value;
        this.filtersLabel[fieldName] = options.label;
      } else {
        this.filters[fieldName] = options;
        this.filtersLabel[fieldName] = options;
      }
    },
    normalizedFormData: function () {
      let payload = this.formData || this.arrFormData;

      if (Array.isArray(payload)) {
        payload.forEach(function (obj) {
          Object.keys(obj).forEach(function (key) {
            if (Array.isArray(obj[key])) {
              obj[key] = obj[key].toString();
            }
          });
        });
      } else {
        Object.keys(payload).forEach(function (key) {
          if (Array.isArray(payload[key])) {
            payload[key] = payload[key].toString();
          }
        });
      }

      return payload;
    },
    mapOptionField: function (response, fieldname) {
      if (this.formData) {
        var _this$formData$fieldn;

        let currentValue = (_this$formData$fieldn = this.formData[fieldname]) !== null && _this$formData$fieldn !== void 0 ? _this$formData$fieldn : null;

        if (currentValue) {
          if (Array.isArray(currentValue)) {
            let mapSelectedOptions = [];
            let mapSelectedOptionsValue = [];
            currentValue.forEach(val => {
              let option = response.find(v => v.value == val);
              mapSelectedOptions.push(option);
              mapSelectedOptionsValue.push(option.value);
            });
            this.formData[fieldname] = mapSelectedOptions; // update the select label

            this.formData[fieldname] = mapSelectedOptionsValue; // this will emit the value.
          } else {
            let mapSelectedOption = response.find(v => v.value == currentValue);
            this.formData[fieldname] = mapSelectedOption; // update the select label

            this.formData[fieldname] = mapSelectedOption.value; // this will emit the value.
          }
        }
      }
    },
    pageCurrentRecord: function (page, field) {
      let record = this.$store.getters[`${page}/currentRecord`];

      if (field && record) {
        var _record$field;

        return (_record$field = record[field]) !== null && _record$field !== void 0 ? _record$field : null;
      }

      return record;
    }
  }
};

/***/ }),

/***/ "c770":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPageMixin; });
const ListPageMixin = {
  props: {
    paginate: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showBreadcrumbs: {
      type: Boolean,
      default: true
    },
    exportButton: {
      type: Boolean,
      default: true
    },
    importButton: {
      type: Boolean,
      default: false
    },
    listSequence: {
      type: Boolean,
      default: false
    },
    multiCheckbox: {
      type: Boolean,
      default: true
    },
    emptyRecordMsg: {
      type: String,
      default: "No record found"
    },
    msgBeforeDelete: {
      type: String,
      default: "Are you sure you want to delete this record?"
    },
    msgAfterDelete: {
      type: String,
      default: "Record deleted successfully"
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    search: {
      type: String,
      default: ''
    },
    fieldName: null,
    fieldValue: null,
    sortBy: {
      type: String,
      default: ''
    },
    sortType: {
      type: String,
      default: '' //desc or asc

    },
    exportFormats: {
      type: Array,
      default: function () {
        return ['print', 'pdf', 'csv', 'excel'];
      }
    }
  },
  data: function () {
    return {
      totalRecords: 0,
      recordCount: 0,
      loading: false,
      ready: false,
      singleSelect: false,
      selectedItems: [],
      pagination: {
        page: 1,
        rowsPerPage: 20,
        sortBy: '',
        rowsNumber: 10,
        descending: true
      },
      deleting: false,
      includeFilters: true,
      searchText: '',
      errorMsg: ''
    };
  },
  computed: {
    apiUrl: function () {
      var _this$pagination$sort;

      let path = this.apiPath;

      if (this.fieldName) {
        path = path + '/' + encodeURIComponent(this.fieldName) + '/' + encodeURIComponent(this.fieldValue);
      }

      let route = this.$route.query;

      if (this.sortBy) {
        this.pagination.sortBy = this.sortBy;
      } else if (route.sortby) {
        this.pagination.sortBy = route.sortby;
      }

      if (this.sortType) {
        this.pagination.descending = this.sortType.toLowerCase() == 'desc';
      } else if (route.sorttype) {
        this.pagination.descending = route.sorttype.toLowerCase() == 'desc';
      }

      if (route.search) {
        this.searchText = route.search;
      }

      let orderType = this.pagination.descending ? 'desc' : 'asc';
      let query = {
        page: this.pagination.page,
        limit: this.pagination.rowsPerPage,
        orderby: (_this$pagination$sort = this.pagination.sortBy) !== null && _this$pagination$sort !== void 0 ? _this$pagination$sort : '',
        ordertype: orderType
      };

      if (this.searchText) {
        query.search = this.searchText;
      }

      let filters = this.filters;

      for (var key in filters) {
        if (filters[key] && filters[key].toString() != '') {
          query[key] = filters[key];
        }
      }

      const queryParams = this.$utils.serializeQuery(query);
      return path + "?" + queryParams;
    },
    recordsPosition: function () {
      return Math.min(this.pagination.page * this.pagination.rowsPerPage, this.totalRecords);
    },
    totalPages: function () {
      if (this.totalRecords > this.pagination.rowsPerPage) {
        return Math.ceil(this.totalRecords / this.pagination.rowsPerPage);
      }

      return 1;
    },
    finishedLoading: function () {
      if (this.recordCount < this.pagination.rowsPerPage && this.records.length) {
        return true;
      }

      return false;
    },
    canLoadMore: function () {
      if (this.loading || this.finishedLoading) {
        return false;
      }

      return true;
    }
  },
  methods: {
    setPagination: function (props) {
      let {
        page,
        rowsPerPage,
        rowsNumber,
        sortBy,
        descending
      } = props.pagination;
      this.pagination.sortBy = sortBy;
      this.pagination.descending = descending;
    },
    reload: function () {
      this.records = [];
      let query = this.$route.query;

      if (query.limit) {
        this.limit = query.limit;
      }

      if (query.page) {
        this.page = query.page;
      }

      if (query.sortby) {
        this.pagination.sortBy = query.sortby;
      }

      if (query.sorttype) {
        this.pagination.descending = query.sorttype == 'desc';
      }

      if (query.search) {
        this.searchText = query.search;
      }

      this.pagination.rowsPerPage = this.limit;
      this.pagination.page = this.page;
      this.load();
    },
    setCurrentRecord: function (record) {
      this.currentRecord = record;
    },
    isCurrentRecord: function (row) {
      return row == this.currentRecord;
    },
    doSearch: function () {
      this.includeFilters = false;
    },
    deleteItem: function (id) {
      if (Array.isArray(id)) {
        id = id.map(value => value[this.primaryKey]);
      }

      if (id) {
        let title = "Delete record";
        let prompt = this.msgBeforeDelete;
        this.$q.dialog({
          title: title,
          message: prompt,
          cancel: true,
          persistent: true
        }).onOk(() => {
          var url = this.pageName + '/delete/' + id.toString();
          var data = {
            id,
            url
          };
          this.deleteRecord(data).then(response => {
            this.flashMsg(this.msgAfterDelete);
          }, response => {
            this.showPageRequestError(response);
          });
        }).onCancel(() => {// console.log('>>>> Cancel')
        }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
        });
      }
    }
  },
  watch: {
    searchText: function () {
      if (this.searchText) {
        this.pagination.page = 1;
      }
    },
    filters: {
      handler(val) {
        this.pagination.page = 1;
      },

      deep: true
    }
  },
  mounted: function () {
    this.showError = false;
    this.singleSelect = !this.multiCheckbox;
    this.reload();
  },
  created: function () {
    this.$on('RefreshPage', () => {
      this.load();
    });
  }
};

/***/ }),

/***/ "e12b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_pelanggaran/edit.vue?vue&type=template&id=8234ce64&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-page"},[(_vm.showHeader)?[_c('q-card',{staticClass:"page-section q-py-sm q-px-md q-mb-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-between q-col-gutter-md"},[_c('div',{staticClass:"col-12 col-md-auto "},[_c('div',{},[_c('div',{staticClass:"row  items-center q-col-gutter-sm q-px-sm"},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"text-h6 text-primary"},[_vm._v("Edit Tb Pelanggaran")])])])])])])])])]:_vm._e(),_c('section',{staticClass:"page-section q-mb-md"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-md-9 col-12 comp-grid"},[_c('q-card',{staticClass:"q-pa-md nice-shadow-18",attrs:{"flat":_vm.isSubPage}},[_c('div',[(!_vm.loading)?[_c('div',{staticClass:"row  q-col-gutter-x-md"},[_c('div',{staticClass:"col"},[_c('ValidationObserver',{ref:"observer",attrs:{"tag":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.startRecordUpdate()}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('div',{staticClass:"row q-col-gutter-x-md"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Nis \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Nis"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlnisn",attrs:{"outlined":"","dense":"","label":"Nis","type":"number","placeholder":"Enter Nis","step":"any","list":"nisn_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.nisn),callback:function ($$v) {_vm.$set(_vm.formData, "nisn", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.nisn"}}),_c('datalist',{attrs:{"id":"nisn_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Nama Siswa *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/student_id_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'student_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Nama Siswa"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlstudent_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Nama Siswa","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.student_id),callback:function ($$v) {_vm.$set(_vm.formData, "student_id", $$v)},expression:"formData.student_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Kelas \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/class_id_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'class_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{},"name":"Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlclass_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.class_id),callback:function ($$v) {_vm.$set(_vm.formData, "class_id", $$v)},expression:"formData.class_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Wali Kelas \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/wali_name_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'teacher_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{},"name":"Wali Kelas"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlteacher_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Wali Kelas","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.teacher_id),callback:function ($$v) {_vm.$set(_vm.formData, "teacher_id", $$v)},expression:"formData.teacher_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Orang Tua \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/parent_name_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'wali_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{},"name":"Orang Tua"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrlwali_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Orang Tua","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.wali_id),callback:function ($$v) {_vm.$set(_vm.formData, "wali_id", $$v)},expression:"formData.wali_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Pelanggaran *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('api-data-source',{attrs:{"api-path":"components_data/type_id_option_list","query-params":_vm.filters},on:{"loaded":function (response) { return _vm.mapOptionField(response, 'type_id'); }},scopedSlots:_vm._u([{key:"default",fn:function(req){return [_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Pelanggaran"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-select',{ref:"ctrltype_id",attrs:{"loading":req.loading,"outlined":"","dense":"","emit-value":"","map-options":"","options":req.response,"label":"Pelanggaran","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.type_id),callback:function ($$v) {_vm.$set(_vm.formData, "type_id", $$v)},expression:"formData.type_id"}})]}}],null,true)})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Note *\n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{required:true},"name":"Note"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlnote",attrs:{"outlined":"","dense":"","rows":"5","placeholder":"Enter Note","type":"textarea","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.note),callback:function ($$v) {_vm.$set(_vm.formData, "note", $$v)},expression:"formData.note"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Point \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Point"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{ref:"ctrlpoint",attrs:{"outlined":"","dense":"","label":"Point","type":"number","placeholder":"Enter Point","step":"any","list":"point_list","error":invalid && validated,"error-message":errors[0]},model:{value:(_vm.formData.point),callback:function ($$v) {_vm.$set(_vm.formData, "point", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.point"}}),_c('datalist',{attrs:{"id":"point_list"}},_vm._l((_vm.$menus.phone_numberItems),function(menu,index){return _c('option',{key:index,domProps:{"value":menu.value}},[_vm._v(_vm._s(menu.label))])}),0)]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Tgl/Waktu Kejadian \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Tgl/Waktu Kejadian"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('q-input',{attrs:{"outlined":"","dense":"","error":invalid && validated,"error-message":errors[0]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"fas fa-calendar"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.reported_on),callback:function ($$v) {_vm.$set(_vm.formData, "reported_on", $$v)},expression:"formData.reported_on"}})],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"fas fa-clock"}},[_c('q-popup-proxy',{attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"mask":"YYYY-MM-DD HH:mm"},model:{value:(_vm.formData.reported_on),callback:function ($$v) {_vm.$set(_vm.formData, "reported_on", $$v)},expression:"formData.reported_on"}})],1)],1)]},proxy:true}],null,true),model:{value:(_vm.formData.reported_on),callback:function ($$v) {_vm.$set(_vm.formData, "reported_on", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.reported_on"}})]}}],null,true)})],1)])]),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 col-12"},[_vm._v("\n                                                            Foto Kejadian \n                                                        ")]),_c('div',{staticClass:"col-sm-9 col-12"},[_c('ValidationProvider',{attrs:{"rules":{},"name":"Foto Kejadian"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-mb-sm"},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"max-files":1,"max-file-size":5120,"accept":".jpg,.png,.gif,.jpeg","multiple":false,"square":"","flat":"","bordered":"","label":"Choose files or drop files here","upload-path":"fileuploader/upload/foto_kejadian"},model:{value:(_vm.formData.foto_kejadian),callback:function ($$v) {_vm.$set(_vm.formData, "foto_kejadian", $$v)},expression:"formData.foto_kejadian"}}),(invalid && validated)?_c('small',{staticClass:"q-pa-sm text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e(),_c('div',{staticClass:"q-pa-xs"},[_c('file-viewer',{attrs:{"removable":""},model:{value:(_vm.formData.foto_kejadian),callback:function ($$v) {_vm.$set(_vm.formData, "foto_kejadian", $$v)},expression:"formData.foto_kejadian"}})],1)],1)]}}],null,true)})],1)])])]),(_vm.showSubmitButton)?_c('div',{staticClass:"text-center q-my-md"},[_c('q-btn',{attrs:{"rounded":false,"color":"primary","no-caps":"","unelevated":"","type":"submit","disabled":invalid,"icon-right":"fas fa-paper-plane","loading":_vm.saving}},[_c('q-spinner-oval',{attrs:{"slot":"loading"},slot:"loading"}),_vm._v(" Update\n                                                ")],1)],1):_vm._e()]}}],null,false,2787022290)}),_vm._t("default",null,{"submit":_vm.submit,"saving":_vm.saving})],2)])]:[_c('div',{staticClass:"q-pa-sm text-center"},[_c('q-spinner',{attrs:{"size":40,"color":"accent","indeterminate":""}})],1)]],2)])],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/edit.vue?vue&type=template&id=8234ce64&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/tb_pelanggaran/edit.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'editTbpelanggaranPage',
  components: {},
  mixins: [page["a" /* PageMixin */], editpage["a" /* EditPageMixin */]],
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
      default: 'tb_pelanggaranedit'
    },
    pagePath: {
      type: String,
      default: 'tb_pelanggaran/edit'
    },
    apiPath: {
      type: String,
      default: 'tb_pelanggaran/edit'
    }
  },

  data() {
    return {
      formData: {
        nisn: "",
        student_id: "",
        class_id: "",
        teacher_id: "",
        wali_id: "",
        type_id: "",
        note: "",
        point: "",
        reported_on: "",
        foto_kejadian: ""
      },
      reported_onPicker: false
    };
  },

  computed: {
    pageTitle: {
      get: function () {
        return "Edit Tb Pelanggaran";
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
      title: this.pageTitle // set browser page title

    };
  },

  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])('tb_pelanggaran', ['updateRecord', 'fetchRecord'])), {}, {
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

          if (this.redirect) this.navigateTo(`/tb_pelanggaran`);
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
        nisn: "",
        student_id: "",
        class_id: "",
        teacher_id: "",
        wali_id: "",
        type_id: "",
        note: "",
        point: "",
        reported_on: "",
        foto_kejadian: ""
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
// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var tb_pelanggaran_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js
var QSpinnerOval = __webpack_require__("1b41");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/tb_pelanggaran/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tb_pelanggaran_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8234ce64",
  null
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);












runtime_auto_import_default()(component, 'components', {QCard: QCard["a" /* default */],QInput: QInput["a" /* default */],QSelect: QSelect["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QTime: QTime["a" /* default */],QUploader: QUploader["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerOval: QSpinnerOval["a" /* default */],QSpinner: QSpinner["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=chunk-common.0ccd0575.js.map