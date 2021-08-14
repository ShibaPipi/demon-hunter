import type { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import { ElAlert, ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'

const components = [ElAlert, ElButton, ElForm, ElFormItem, ElInput]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
