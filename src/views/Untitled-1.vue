<template>
  <v-container>
<!-- v-if="group_name == 'Mgmt Innovation'" -->
  <v-card >
        <!-- <LineChart/> -->
    <v-card-title>
      <v-card>Mgmt Innovation System</v-card>
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
      :items="m_innovation"
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

            <v-card @click="show_me_pls(item.name,item.type)">
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
                <span class="ml-4"><img :src="item.img" height="45px" width="45px"></span>
              </v-card-title> 
                         <v-card-actions>
                            <img  v-if="item.type == 'System'" src="https://www.flaticon.com/svg/static/icons/svg/1069/1069715.svg" height="30px" width="30px" class="ma-1" alt="">
                            {{item.type}}
                        </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
      <LineChart/>


  </v-card>



</v-container>
</template>

<script>
  import LineChart from "@/components/charts/LineChart.vue";
  export default {
  components: {
    LineChart
  },
  components: {
    LineChart
  },
  async mounted() {
    this.fillData();
    this.group_name = this.$route.params.sys_name;
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
        headers: [
          {
            text: 'System',
            align: 'start',
            value: 'name',
          },
          { 
            text: 'Useage', 
            align: 'start',
            value: 'hit' },
        ],
        m_innovation: [
          {
            img: 'https://www.flaticon.com/svg/static/icons/svg/1720/1720126.svg',
            name: 'ITAMs',
            link: 'http://107.101.81.9/html/itams/my_asset.asp',
            hit: 159,
          },
          {
            img:'https://www.flaticon.com/svg/static/icons/svg/1674/1674968.svg',
            name: 'IP Address Management',
            link:'http://107.101.81.9/html/it/ipmgmt_list.asp',
            hit: 237,
          },
          {
            img:'https://www.flaticon.com/svg/static/icons/svg/3869/3869686.svg',
            name: 'Innovation Handbook',
            link:'http://107.101.81.9/html/it/it_show_list.asp',
            hit: 203,
          },
          {
            img:'http://107.101.81.9/img/gif/cps.gif',
            name: 'IT Asset Carry Out',
            link:'http://107.101.81.9/html/it/itcarry_list.asp',
            hit: 207,
          },
          {
            img:'http://107.101.2.7/img/gif/Storage.jpg',
            name: 'IT Exception Policy Request',
            link:'http://107.101.81.9/html/it/itcarry_list.asp',
            hit: 203,
          },
          {
            img:'http://107.101.81.9/img/gif/upload.png',
            name: 'Data Sharing',
            link:'http://107.101.81.9/html/it/itcarry_list.asp',
            hit: 203,
          },
          {
            img:'http://107.101.81.12:8888/html/partrol_system/images/Inspection-Icon-1.png',
            name: 'Prompt System',
            link:'http://107.101.81.12:8888/html/partrol_system/partrol_master.asp',
            hit: 203,
          },
          {
            img:'http://107.101.81.9/img/gif/Clock.png',
            name: 'Clock',
            link:'http://107.101.81.9/html/it/tse_date_list.asp',
            hit: 203,
          },
        ],
      }
    },
    methods:{
    show_system(){

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