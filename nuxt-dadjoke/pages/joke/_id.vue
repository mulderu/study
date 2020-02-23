<template>
  <div>
    <v-alert
      border="top"
      color="red lighten-2"
      dark
    >
      <h2>
        {{ joke.id }}
      </h2>
      <p>
        {{ joke.joke }}
      </p>
    </v-alert>

    <v-btn color="primary" @click="moveList">
    List
    </v-btn>

  </div>
</template>



<script>
import { server } from "@/service/utils.js";

export default {
  data() {
    return {
      joke: {}
    }
  },
  methods: {
    moveList() {
      this.$router.push({path: '/list'})
    }
  },
  async created() {
    // $ curl -H "Accept: application/json" https://icanhazdadjoke.com/j/R7UfaahVfFd
    try {
      const r = await this.$axios.get(`${server.urlPrefix}/j/${this.$route.params.id}`, server.config)
      console.log(r.data)
      this.joke = r.data
    } catch (error) {
      console.error(error)
    }
  },

}
</script>

<style>

</style>