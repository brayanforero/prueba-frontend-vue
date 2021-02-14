const vue = new Vue({
  el: '#app',
  data: {
    user: '',
    password: '',
    labelUser: '',
    validUser: false,
    labelPassword: '',
    validPassword: false,
    labelPolicies: '',
    policies: false,
  },
  methods: {
    checkFieldUser(e) {
      let field = e.target
      if (!field.value) {
        field.classList.add('is-invalid')
        this.labelUser = 'This field is required'
        this.validUser = false
        return
      }

      if (!field.value.match(/^[a-z-ñ]+$/)) {
        field.classList.add('is-invalid')
        this.labelUser = 'Only letter lowercase'
        this.validUser = false
        return
      }

      this.labelUser = ''
      field.classList.remove('is-invalid')
      this.validUser = true
      return true
    },
    checkFieldPassword(e) {
      let field = e.target
      if (!field.value) {
        field.classList.add('is-invalid')
        this.labelPassword = 'This field is required'
        this.validPassword = false
        return
      }

      if (!field.value.match(/^[A-Z-0-9\.#*%]+$/)) {
        field.classList.add('is-invalid')
        this.labelPassword =
          'This field only supports uppercase letters, numbers and the following characters: (. * #%)'
        this.validPassword = false
        return
      }

      this.labelPassword = ''
      field.classList.remove('is-invalid')
      this.validPassword = true
      return true
    },
    sendData() {
      if (!this.validUser || !this.validUser)
        return alert('Please check fields')

      if (!this.policies) {
        this.labelPolicies = 'Please accept the security policies'
        return
      }
      this.labelPolicies = ''
      this.user = ''
      this.password = ''
      this.policies = false
      alert('LOGIN')
    },
  },
})
