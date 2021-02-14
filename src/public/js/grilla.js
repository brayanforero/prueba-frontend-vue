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
    orderColumn(tab) {
      if (tab === 'ID') {
        this.players.sort(function (a, b) {
          return a.id - b.id
        })
        return
      }
      if (tab === 'name') {
        this.players.sort(function (a, b) {
          return a.first_name - b.first_name
        })
        return
      }

      if (tab === 'last_name') {
        this.players.sort(function (a, b) {
          return a.last_name - b.last_name
        })
        return
      }

      if (tab === 'feet') {
        this.players.sort(function (a, b) {
          return a.height_feet - b.height_feet
        })
        return
      }

      if (tab === 'feet') {
        this.players.sort(function (a, b) {
          return a.height_inches - b.height_inches
        })
        return
      }
      if (tab === 'pounds') {
        this.players.sort(function (a, b) {
          return a.weight_pounds - b.weight_pounds
        })
        return
      }
    },

    async getAllPlayerApi(params = null) {
      let res = await axios.get(API + 'players', {
        headers,
        params,
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
    paginate(e) {
      const params = {
        per_page: e.target.value,
      }

      this.getAllPlayerApi(params)
    },
  },
  created() {
    this.getAllPlayerApi()
  },
})
