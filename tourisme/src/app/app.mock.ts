import {createServer} from 'miragejs'

  createServer({
    routes() {
      this.get(
        "/getTourism",
        () => require('mock.tourisme.json') ({
      }))
    },
  })

