<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        BASiL
      </h1>
    </v-card-title>

    <v-tabs
      bg-color="transparent"
      color="basil"
      grow
      v-model="tab"
    >
      <v-tab value="option-1">
        Abgelaufen
      </v-tab>
      <v-tab value="option-2">
        Bald abgelaufen
      </v-tab>
      <v-tab value="option-3">
       Kontrolliert
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
       value="option-1"
      >
        <v-card>
          <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elie ullam.</v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item
       value="option-2"
      >
        <v-card>
          <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui velitor dolore ullam laboriosam distinctio cum.</v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item
       value="option-3"
      >
        <v-card>
          <v-card-text>Lotio cumr dolore ullam </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
  export default {
    data: () =>({
      tab:'option-1'
    })
  }
</script>
<style>
/* Helper classes */
.bg-basil {
  background-color: #FFFBE6 !important;
}
.text-basil {
  color: #356859 !important;
}
</style>