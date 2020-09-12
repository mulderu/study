

## example1

----

```vue
<v-btn text to="/">title</v-btn>
<v-btn text to="/another">page1</v-btn>

<v-stackbar
 v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
 :key="snackbar.text + Math.random()"
 v-model="snackbar.showing"
 :timeout="snackbar.timeout"
 :color="snackbar.color"
 :style="`bottome: ${(index * 60)}px`"
 >
  {{snackbar.text}}
  <v-btn text @click="snackbar.showing = false">
  Close
  </v-btn>
</v-snackbar>
```

