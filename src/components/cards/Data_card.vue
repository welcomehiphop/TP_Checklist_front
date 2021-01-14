
<template>
  <v-container >
    
      <!-- {{show}} -->
      <transition
      name="slide-fade" 
  >
    <v-card
    v-if="!show"
    >
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search_data"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
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

            <v-card @click="show_me_pls(item.zip_name,item.type)">
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
                <span v-if="item.type == 'Group'" class="ml-3"><v-icon class="mdi-48px" color="black">{{item.icon}}</v-icon></span>
                <span v-if="item.type == 'System'" class="ml-4"><img :src="item.img" height="70px" width="70px"></span>
              </v-card-title> 
              <hr color="blue">
                                <!-- <v-card-subtitle v-if="item.type == 'System'"> 
                                1,000 miles of wonder
                                </v-card-subtitle> -->

                         <v-card-actions>

                            <!-- <img  v-if="item.type == 'department'" src="https://www.flaticon.com/svg/static/icons/svg/1642/1642357.svg" height="30px" width="30px" class="ma-1"> -->
                            <img  v-if="item.type == 'System'" src="https://www.flaticon.com/svg/static/icons/svg/1069/1069715.svg" height="30px" width="30px" class="ma-1" alt="">
                            {{item.type}}
                        </v-card-actions>

            </v-card>


          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    </v-card>
    </transition>

    <div>
  </div>


  </v-container>
</template>


<script>

  export default {
    props: ["search_data",'show_data'],  
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
        show: false,
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 9,
        sortBy: 'index',
        items: [
          {
            index: '1',
            name: 'Material Mgmt',
            zip_name: 'MM',
            icon: 'mdi-view-day-outline',
            type: 'Group', 
            link_data: ''
          },
          {
            index: '2',
            name: 'HR Mgmt',
            zip_name: 'HRM',
            type: 'Group',
            icon: 'mdi-account-convert-outline'
          },
          {
            index: '3',
            name: 'GA & GHS ',
            zip_name:'GAGHS',
            type: 'Group',
            icon: 'mdi-hospital-box-outline'
          },
          {
            index: '4',
            name: 'Mgmt Innovation',
            zip_name : 'MI',
            type : 'Group',
            icon: 'mdi-server'
          },
          {
            index: '5',
            name: 'Quality Mgmt',
            zip_name: 'QM',  
            type: 'Group',
            icon: 'mdi-checkbox-multiple-marked-circle-outline'
          },
          {
            index: '6',
            name: 'Production Mgmt',
            zip_name : 'PM',
            type: 'Group',
            icon: 'mdi-cog-transfer'
          },
          {
            index: '7',
            name: 'Finance',
            zip_name : 'FI',
            type: 'Group',
            icon: 'mdi-finance'
          },
          {
            index: '8',
            name: 'Logistics',
            zip_name : 'LOGIS',
            type: 'Group',
            icon: 'mdi-car-cog'
          },
          {
            index: '9',
            name: 'IT VOC',
            zip_name : 'VOC',
            type: 'Group',
            icon: 'mdi-help-box'
          },
          // {
          //   index: '10',
          //   name: 'Exit Interview',
          //   type: 'System',
          //   img : 'https://www.flaticon.com/svg/static/icons/svg/3135/3135714.svg'
          // },
          // {
          //   index: '11',
          //   name: 'Welfare Expense',
          //   type: 'System',
          //   img : 'https://www.flaticon.com/svg/static/icons/svg/2917/2917764.svg'
          // },
          // {
          //    index: '12',
          //    name: 'Probation',
          //    type: 'System',
          //    img : 'https://www.flaticon.com/svg/static/icons/svg/885/885430.svg'
          // },
          // {
          //    index: '13',
          //    name: 'TSE Postal (GHS)',
          //    type: 'System',
          //    img : 'https://www.flaticon.com/svg/static/icons/svg/3867/3867505.svg'
          // },
          // {
          //    index: '14',
          //    name: 'Canteen Report',
          //    type: 'System',
          //    img : 'https://www.flaticon.com/svg/static/icons/svg/857/857755.svg'
          // },
          // {
          //    index: '15',
          //    name: 'IP Management',
          //    type: 'System',
          //    img : 'https://www.flaticon.com/svg/static/icons/svg/1674/1674968.svg'
          // },
          // {
          //    index: '16',
          //    name: 'ITAMs',
          //    type: 'System',
          //    img : 'https://www.flaticon.com/svg/static/icons/svg/1720/1720126.svg'
          // },
          // {
          //     index: '17',
          //     name: 'E-meeting',
          //     type: 'System',
          //     img : 'https://www.flaticon.com/svg/static/icons/svg/3050/3050525.svg'
          // }
        ],
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      async show_me_pls(sys_name,sys_type) {
        if(sys_type == 'Group')
        {
        this.$router.push(`/department_card/${sys_name}`);
        }else{
        alert('wait system')
        }
        
     }
      
    },
  }
</script>

<style  scoped>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>