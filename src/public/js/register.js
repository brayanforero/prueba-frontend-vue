const getAge = dateString => {
  let today = new Date()
  let birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  let m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

const vue = new Vue({
  el: '#app',
  data: {
    current_step: 2,
    labelErr: '',
    stepOne: {
      name: false,
      last_name: false,
      position: '',
      date_birth: '',
    },
  },
  methods: {
    validNames(e) {
      let field = e.target
      if (!field.value.match(/^[a-zA-Z-ñ]{3,20}$/)) {
        field.classList.add('is-invalid')
        this.labelErr = 'This field should only contain letters min 3, max 20'
        return
      }

      this.labelErr = ''
      field.value = field.value.toUpperCase()
      field.classList.remove('is-invalid')
      this.stepOne.name = true
    },
    validLastNames(e) {
      let field = e.target
      if (!field.value.match(/^[a-zA-Z-ñ]{3,20}$/)) {
        field.classList.add('is-invalid')
        this.labelErr = 'This field should only contain letters min 3, max 20'
        return
      }

      this.labelErr = ''
      field.value = field.value.toUpperCase()
      field.classList.remove('is-invalid')
      this.stepOne.last_name = true
    },
    validHeight(e) {
      let field = e.target
      if (!field.value.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
        field.classList.add('is-invalid')
        this.labelErr =
          'This field must meet the following for meter: 2 digits and optionally 2 decimal places separated by (.)'
        return
      }
      this.labelErr = ''
      field.classList.remove('is-invalid')
    },
    validAbb(e) {
      let field = e.target
      if (!field.value.match(/^[a-zA-Z-ñ]{3}$/)) {
        field.classList.add('is-invalid')
        this.labelErr = 'This must have 3 letters'
        return
      }

      this.labelErr = ''
      field.value = field.value.toUpperCase()
      field.classList.remove('is-invalid')
    },
  },
  computed: {
    age() {
      return getAge(this.stepOne.date_birth) || 0
    },
  },
})
