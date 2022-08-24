import { configure, extend } from 'vee-validate'
import { required, email, min, length, confirmed } from 'vee-validate/dist/rules'
import { i18n } from './i18n'

extend('email', email)
extend('min', min)
extend('required', required)
extend('length', length)
extend('confirmed', confirmed)

configure({
  // this will be used to generate messages.
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`)
    return i18n.t(`validations.messages.${values._rule_}`, values)
  }
})
