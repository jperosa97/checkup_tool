<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        BASiL
      </h1>
    </v-card-title>

    <v-tabs
      bg-color="transparent"
      grow
      v-model="tab"
    >
      <v-tab value="option-1" color="#e74c3c">
        Abgelaufen
      </v-tab>
      <v-tab value="option-2" color="#f1c40f">
        Bald abgelaufen
      </v-tab>
      <v-tab value="option-3" color="basil">
       Kontrolliert
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="option-1">     
    <v-container fluid > 
          <v-card color="#e74c3c" theme="dark" v-for="person in people" :key="person.id">
            <v-card-title class="text-h5">
             {{person.company}}
            </v-card-title>
            <v-card-subtitle>Abgelaufen: {{person.date_past}}</v-card-subtitle>
            <v-card-subtitle>Verspätet: {{person.date_recent}}</v-card-subtitle>
            <v-card-subtitle>Nächster Checkup:  {{person.date_soon}}</v-card-subtitle>
            <v-card-actions>
              <v-btn variant="text">
               {{person.website}}
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-container>
      </v-window-item>
      <v-window-item value="option-2">
          <v-container class="mx-auto" max-width=400>
      <v-row class="flex-nowrap">
        <v-col cols="4">
          <v-card color="#385F73" theme="dark" >
            <v-card-title class="text-h5">
              aerni-automobile
            </v-card-title>
            <v-card-subtitle>Abgelaufen: 25.09.2022</v-card-subtitle>
            <v-card-subtitle>Verspätet: 25.08.2022</v-card-subtitle>
            <v-card-subtitle>Letzter Checkup: 25.03.2022</v-card-subtitle>
            <v-card-actions>
              <v-btn variant="text">
               www.aerni-automobile.ch
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
         <v-col cols="4">
          <v-card color="#385F73" theme="dark" >
            <v-card-title class="text-h5">
              aerni-automobile
            </v-card-title>
            <v-card-subtitle>Abgelaufen: 25.09.2022</v-card-subtitle>
            <v-card-subtitle>Verspätet: 25.08.2022</v-card-subtitle>
            <v-card-subtitle>Letzter Checkup: 25.03.2022</v-card-subtitle>
            <v-card-actions>
              <v-btn variant="text">
               www.aerni-automobile.ch
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

      </v-window-item>
      <v-window-item
       value="option-3"
      >
        <v-container class="mx-auto" max-width=400>
      <v-row class="flex-nowrap">
        <v-col cols="4">
          <v-card color="#27ae60" theme="dark" >
            <v-card-title class="text-h5">
              aerni-automobile
            </v-card-title>
            <v-card-subtitle>Abgelaufen: 25.09.2022</v-card-subtitle>
            <v-card-subtitle>Verspätet: 25.08.2022</v-card-subtitle>
            <v-card-subtitle>Letzter Checkup: 25.03.2022</v-card-subtitle>
            <v-card-actions>
              <v-btn variant="text">
               www.aerni-automobile.ch
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
         <v-col cols="4">
          <v-card color="#27ae60" theme="dark" >
            <v-card-title class="text-h5">
              aerni-automobile
            </v-card-title>
            <v-card-subtitle>Abgelaufen: 25.09.2022</v-card-subtitle>
            <v-card-subtitle>Verspätet: 25.08.2022</v-card-subtitle>
            <v-card-subtitle>Letzter Checkup: 25.03.2022</v-card-subtitle>
            <v-card-actions>
              <v-btn variant="text">
               www.aerni-automobile.ch
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
  export default {
    data:() =>({
      people: [],
      tab:'option-1',
    }),
    created() {
      fetch("http://localhost:3000/people")
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.people = data;
        });
    }   
  };
</script>
<style>
/* Helper classes */
.bg-basil {
  background-color: #FFFBE6 !important;
}
.text-basil {
  color: #356859 !important;
}
.v-window__container{
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 0.3fr));
    grid-auto-rows: auto;
    grid-gap: 1.5rem;
}
.v-container{
  display: grid;
  margin-top: 50px;
  width: 80vw;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 0.3fr));
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
}
</style>