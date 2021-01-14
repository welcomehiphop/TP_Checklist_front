<template>
  <v-container>
<!-- v-if="group_name == 'Mgmt Innovation'" -->
  <v-card >
        <!-- <LineChart/> -->
    <v-card-title>
      <v-card></v-card>
      <v-spacer></v-spacer>
      <v-btn @click="onClickMenu" small>Back</v-btn>
      <!-- <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field> -->
    </v-card-title>
          <v-text-field
            v-model="search_data"
            clearable
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          
 <v-data-iterator
      :items="system_data"
      :search="search_data"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <v-card @click="show_system()" class="ma-1">
              <v-card-title class="subheading font-weight-bold">
                {{ item.system_name }}
                <span class="ml-4"><img :src="item.img_system | imageUrl" height="50px" width="50px"></span>
              </v-card-title> 
                         <v-card-actions>
                            <!-- {{item.type}} -->
                        </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
     <!-- <LineChart  style="height: 200px;" :chartData="datacollection_LineChart" /> -->
  </v-card>




</v-container>
</template>

<script>
  import api from "@/services/api";
  import LineChart from "@/components/charts/LineChart.vue";
  export default {
  components: {
    LineChart
  },
  components: {
    LineChart
  },
  async mounted() {
    // this.fillData();
    //this.group_name = this.$route.params.sys_name;
    //alert(this.$route.params.group)
    let result = await api.getSystemGroup(this.$route.params.group);
    this.system_data  = result
   

  },
    data () {
      return {
        search_data:'',
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me 2',
          },
        ],
        select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
        search:'',
        group_name: '',
        datacollection_LineChart: { labels:[], datasets: [] },
        system_data:[]
      }
    },
    methods:{
    show_system(){
    alert("wait to show system")
    },
     onClickMenu() {
        this.$router.go(-1)
     },
    async fillData () {
      this.datacollection_LineChart = {
          //Data to be represented on x-axis
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: '2020',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [40,20,30,40,50,99,13,85,90,99,80,90],
              borderColor: [
                '#4CAF50'
               ],
               borderWidth: 2,
               backgroundColor: [
                'rgba(255,177,193,0.2)',
            ],
            }
          ]};
      },
    }
  }
</script>


<style lang="sass" scoped>

</style>