let API = 'https://free-nba.p.rapidapi.com/'
let API_KEY = '665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093'
const headers = { 'x-rapidapi-key': API_KEY }
const vue = new Vue({
  el: '#app',
  data: {
    players: [],
    metas: {},
    teamShow: [],
    oldItemSelected: null,
    keyPlayer: '',
  },
  methods: {
    async getAllPlayerApi() {
      let res = await axios.get(API + 'players', {
        headers,
      })
      let { data } = res.data

      this.players = data.map(e => {
        e.showDetail = false
        return e
      })
      this.metas = res.data.meta
    },
    async getSpecificTeam(index, id) {
      this.players.map((e, i) => {
        if (i === index) {
          return
        }
        e.showDetail = false
      })
      this.players[index].showDetail = !this.players[index].showDetail
      let res = await axios.get(API + `teams/${id}`, {
        headers,
      })

      this.teamShow = res.data
    },
    async searchPlayer(e) {
      let res = await axios.get(API + 'players', {
        headers,
        params: {
          search: e.target.value,
        },
      })

      this.players = res.data.data
      this.metas = res.data.meta
    },
  },
  created() {
    this.getAllPlayerApi()
  },
})
