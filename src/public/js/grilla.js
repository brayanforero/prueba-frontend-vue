let API = 'https://free-nba.p.rapidapi.com/players'
let API_KEY = '665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093'

const vue = new Vue({
  el: '#app',
  data: {
    players: [],
    metas: {},
  },
  methods: {
    async getAllPlayerApi() {
      const headers = { 'x-rapidapi-key': API_KEY }
      let res = await axios.get(API, {
        headers,
      })

      this.players = res.data.data
      this.metas = res.data.meta
    },
  },
  created() {
    this.getAllPlayerApi()
  },
})
