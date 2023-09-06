import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'
import VueDOMPurifyHTML from 'vue-dompurify-html'

import {
  Image,
  Dialog,
  Form,
  FormItem,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Option,
  Upload,
  Button,
  Collapse,
  CollapseItem,
  Carousel,
  CarouselItem,
  Message
} from 'element-ui'

const components = [
  Image,
  Dialog,
  Form,
  FormItem,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Option,
  Upload,
  Button,
  Collapse,
  CollapseItem,
  Carousel,
  CarouselItem,
  Message
]
Vue.prototype.$message = Message;
const Element = {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

Vue.use(Element, { locale })
Vue.use(VueDOMPurifyHTML)
