<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-toolbar
      color="cyan"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Inbox</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in jokes">
        <v-list-item
          :key="item.id"
          @click="goView(item)"
        >
          <v-list-item-avatar>
            <v-icon>fas fa-search</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
              <v-list-item-title>
                {{index}}
              </v-list-item-title>
              <v-list-item-subtitle v-html="item.joke"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>


<script>
import { server } from "../service/utils.js";

export default {
  data() {
    return {
      jokes: []
    }
  },
  async created() {
    // $ curl -H "Accept: application/json" https://icanhazdadjoke.com/search
    try {
      const r = await this.$axios.get(`${server.urlPrefix}/search`, server.config)
      console.log(r)
      this.jokes = r.data.results
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    goView(item) {
      console.log('view:', item)
      // this.$router.push({path: '/joke', query: {q: item.id}});
      this.$router.push({path: '/joke/'+ item.id})
    }
  }
};
</script>

<style></style>
