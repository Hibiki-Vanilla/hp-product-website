import Vue from 'vue'
import jsCookie from 'js-cookie'

const ctx = {}

// 路由跳转方法
const push = (params) => {
  if (process.client) {
    const router = window.$nuxt.$router
      // params = '/' + locale + params
    router.push(params)
  }
}

// 下载类型判断
const downloadType = (data,num) => {
  let text = '';
  data.forEach(item=>{
    if(item.typeId === num){
       text = `${item.fileSize} ${item.fileType.toUpperCase()}`
    }

  })
  return text
}

const downloadFile = (path, name = 'name.jpg') => {
  const download = (href) => {
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = href
    a.download = name
    a.target = "view_window"
    document.body.appendChild(a)
    a.dispatchEvent(new MouseEvent('click'))
    document.body.removeChild(a)
  }
   download(path)
  // if (isIE()) {
  //   download(path)
  // } else {
  //   const xhr = new XMLHttpRequest()
  //   xhr.open('get', path)
  //   xhr.responseType = 'blob'
  //   xhr.send()
  //   xhr.onload = (e) => {
  //     const {
  //       status,
  //       response
  //     } = e.target
  //     if (status === 200 || status === 304) {
  //       const fileReader = new FileReader()
  //       fileReader.readAsDataURL(response)
  //       fileReader.onload = (ev) => {
  //         download(ev.target.result)
  //       }
  //     }
  //   }
  // }
}

// const isIE = () => {
//   return /msie|trident/.test(window.navigator.userAgent.toLowerCase())
// }

// 邮箱检验
const emReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/

// 联系我们 rules
const editRules = {
  name: [{
    required: true,
    validator: (rule, value, callback) => {
      if (value === '') {
        callback(new Error(window.$nuxt.$t('QPVDTB')));
      } else if (value.trim().length === 0) {
        callback(new Error(window.$nuxt.$t('QPVDTB')));
      } else if (value.trim().length > 64) {
        callback(new Error(window.$nuxt.$t('FNPJZS')));
      } else {
        callback();
      }
    }
  }],
  email: [{
    validator: (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error(window.$nuxt.$t('OCSQID')))
      } else if (emReg.test(value.trim())) {
        callback()
      } else {
        callback(new Error(window.$nuxt.$t('GTZRQH')))
      }
    },
  }, ],
  phone: [{
    validator: (rule, value, callback) => {
      if (value.trim() === '') {
        callback();
      } else {
        const rep = /\(/g;
        const repright = /\)/g;
        const text = value.trim().replace(/\+/g, "").replace(/-/g, "")
          .replace(/\s/g, "").replace(rep, "").replace(repright, "");

        if (!(/^[0-9]{6,20}$/.test(text))) {
          callback(new Error(window.$nuxt.$t('EXVDGH')))
        } else {
          callback();
        }
      }
    }
  }],
  country: [{
    validator: (rule, value, callback) => {
      if (value === '') {
        callback(new Error(window.$nuxt.$t('BAUMPH')));
      } else {
        callback();
      }
    }
  }],
  subject: [{
    validator: (rule, value, callback) => {
      if (value === '') {
        callback(new Error(window.$nuxt.$t('DOLNEI')));
      } else {
        callback();
      }
    }
  }],
  message: [{
    validator: (rule, value, callback) => {
      if (value === '') {
        callback(new Error(window.$nuxt.$t('QHAIRX')));
      } else if (value.trim().length === 0) {
        callback(new Error(window.$nuxt.$t('QHAIRX')));
      } else if (value.trim().length > 500) {
        callback(new Error(window.$nuxt.$t('HUYKQB')));
      } else {
        callback();
      }
    },
  }]
};
// 联系我们 文件上传校验
const beforeFileUpload = (file) => {
  const isImg = file.type === 'image/jpeg' || file.type === 'image/png' || file.type ===
    'image/jpg' || file.type === 'image/webp' || file.type === 'image/heic';
  if (!isImg) {
    window.$nuxt.$message.error(window.$nuxt.$t('QJTUEB'));
  }
  const isLt5M = file.size < (5 * 1024 * 1024);
  if (!isLt5M) {
    window.$nuxt.$message.error(window.$nuxt.$t('LTHKCX'));
  }
  return isLt5M && isImg;
};

// 联系我们 主题
const subjectList = [
  { id: 0, name: 'CNSUPK' },
  { id: 1, name: 'ETVRZC' },
  { id: 2, name: 'VCEDOY' },
  { id: 3, name: 'QNKHGM' },
];
// 联系我们上传地址
const contactUploadAction = '/u/gabriel/api/common/file/upload?bizPath=api-contactus' 

ctx.push = push
ctx.cookies = jsCookie
ctx.downloadType = downloadType
ctx.downloadFile = downloadFile
ctx.emReg = emReg
ctx.editRules = editRules
ctx.beforeFileUpload = beforeFileUpload
ctx.subjectList = subjectList
ctx.contactUploadAction = contactUploadAction



Vue.prototype.$ctx = ctx