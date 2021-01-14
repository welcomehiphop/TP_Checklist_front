<template>
  <v-container grid-list-xs>

      <v-card class="mb-2">
      <v-row>
        <v-col class="d-flex" xl="9" lg="8" md="7" sm="12" cols="12">
          <h1 class="ml-6">
            <v-icon large class="mb-2">mdi-file-account-outline</v-icon
            >Dashboard
          </h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <!-- <v-btn class="ma-5" @click="$router.go(-1)">
          Back
          <v-icon right dark>mdi-file-document</v-icon>
        </v-btn> -->
      </v-row>
    </v-card>

      <v-card>
      <v-card-title class="headline">
        <!-- {{profile_data}} -->
        <v-row>
          <v-col class="d-flex" xl="1" lg="1" md="12" sm="12" cols="12">
            <v-card class="mx-auto" width="111px" height="111px">
              <img src="../assets/fortest/w620301-099.jpg" width="111px" height="111px" > 
            </v-card>
          </v-col>

          <v-col class="d-flex" xl="3" lg="3" md="12" sm="12" cols="12">
            <v-card width="100%" max-height="300px">
              <v-card-title>
                <v-icon large left color="black">
                  mdi-badge-account-horizontal-outline
                </v-icon>
                <h3>Profile</h3>

              </v-card-title>
              <hr>
              <v-card-text class="headline font-weight-bold">

                <v-text-field
                  value="19528493"
                  label="Emp No"
                  prepend-icon="event"
                  readonly
                >
                </v-text-field>

                <v-text-field
                  value="Hatsanai Sungnark"
                  label="Name ENG"
                  prepend-icon="mdi-rename-box"
                  readonly
                >
                </v-text-field>



                <v-text-field
                  value="MIS"
                  label="Department"
                  prepend-icon="mdi-medal"
                  readonly
                >
                </v-text-field>

              </v-card-text>
            </v-card>
          </v-col>

          <v-col class="d-flex" xl="8" lg="8" md="12" sm="12" cols="12">
            <v-card width="100%">
              <v-card-title>
                <v-icon large left color="black">
                  mdi-chart-arc
                </v-icon>
                <h3>Report Status</h3>
              </v-card-title>
              <hr>

              <v-card-text class="headline font-weight-bold">
                <v-row>
                  <v-col>
                   <Pie style="height: 250px;"/>
                  </v-col>
                  <v-col>
          <v-text-field
            placeholder="Approval : 100"
            filled
            rounded
            dense
            readonly
          ></v-text-field>
          
          <v-text-field
            placeholder="Padding : 50"
            filled
            rounded
            dense
            readonly
          ></v-text-field>

          <v-text-field
            placeholder="Project : 20"
            filled
            rounded
            dense
            readonly
          ></v-text-field>

          <v-text-field
            placeholder="7 day report : 20"
            filled
            rounded
            dense
            readonly
          ></v-text-field>


                </v-col>
                </v-row>
              </v-card-text>

            </v-card>
          </v-col>

          <!-- <v-col class="d-flex d-xl-none" lg="3" md="12" sm="12" cols="12">
          </v-col> -->

         <!-- <v-col class="d-flex" xl="3" lg="3" md="12" sm="12" cols="12">
            <v-card width="100%">
              <v-card-title>
                <v-icon large left color="black">
                  mdi-format-list-checks
                </v-icon>
                <h3>Approval Report</h3>
              </v-card-title>
              <hr>
              <v-card-text class="headline font-weight-bold">

                  <v-text-field
                  value="56 task"
                  label="Task list"
                  prepend-icon="event"
                  outlined
                  dense
                  readonly
                >
                </v-text-field>

                  <v-text-field
                  value="3 meeting"
                  label="Meeting to day"
                  prepend-icon="mdi-form-select"
                  outlined
                  dense
                  readonly
                >
                </v-text-field>
              </v-card-text>
            </v-card>
          </v-col> -->

          <v-col class="d-flex" xl="3" lg="3" md="12" sm="12" cols="12">
            <v-card width="100%" max-height="300px">
              <v-card-title>
                <v-icon large left color="black">
                  mdi-format-columns
                </v-icon>
                <h3>Task & Meeting & TSD</h3>
              </v-card-title>
              <hr>
              <v-card-text class="headline font-weight-bold">

                  <v-text-field
                  value="56 task"
                  label="Task list"
                  prepend-icon="event"
                  outlined
                  dense
                  readonly
                >
                </v-text-field>

                  <v-text-field
                  value="3 meeting"
                  label="Meeting to day"
                  prepend-icon="mdi-form-select"
                  outlined
                  dense
                  readonly
                >
                </v-text-field>

                  <v-text-field
                  value="3 file"
                  label="TSD System"
                  prepend-icon="mdi-file-cabinet"
                  outlined
                  dense
                  readonly
                >
                </v-text-field>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col class="d-flex" xl="3" lg="4" md="12" sm="12" cols="12">
            <v-card width="100%">
              <v-card-title>
                <v-icon large left color="black">
                  mdi-database
                </v-icon>
                <h3> Favorite System</h3>
              </v-card-title>
              <hr>
              <v-card-text class="headline font-weight-bold">
          
          <v-autocomplete
            class="ma-2"
            v-model="values"
            :items="items"
            outlined
            dense
            small-chips
            label="Favorite  System"
            multiple
          ></v-autocomplete>
  
  <v-card
    max-width="300"
    tile
  >
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            System Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  </v-card>
  </v-card-text>
</v-card>
</v-col>



        <v-col class="d-flex" xl="3" lg="4" md="12" sm="12" cols="12">
            <v-card width="100%">
              <v-card-title>
                <v-icon large left color="black">
                  mdi-chart-donut-variant
                </v-icon>
                <h3>Request System</h3>
              </v-card-title>
              <hr>
              <v-card-text class="headline font-weight-bold">
              <div>

<!-- 
            <v-btn
                  class="mx-2"
                  dark
                  color="teal"
                >
              <v-icon dark>
                    mdi-format-list-bulleted-square
              </v-icon>
                New Request
                </v-btn> -->

  <v-row justify="start">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn
          class="ma-1"
          color="teal"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon class="mr-2" >mdi-folder-multiple-plus</v-icon>
          New Request
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Request System</span>
        </v-card-title>
        <v-card-text>
                  <v-simple-table
    fixed-header
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Systems
          </th>
          <th class="text-left">
            Request
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.request }}</td>
          <td>
     <v-btn
      class="ma-2"
      outlined
      fab
      color="primary"
      small
    >
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn> -->
          <v-btn
            color="success"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div>
    </div>
  </v-row>
        <v-simple-table
    fixed-header
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Systems
          </th>
          <th class="text-left">
            Request
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.request }}</td>
          <td> 
     <v-btn
      class="ma-2"
      outlined
      fab
      color="primary"
      small
    >
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

              </div>
              </v-card-text>
            </v-card>
          </v-col>



          <v-col class="d-flex" xl="3" lg="4" md="12" sm="12" cols="12">
            <v-card width="100%">
              <v-card-title>
                <v-icon large left color="black">
                  mdi-calendar
                </v-icon>
                <h3>Calendar</h3>
              </v-card-title>
              <hr>
              <v-card-text class="headline font-weight-bold">
                      <!-- <v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        v-model="mode"
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet> -->
    <v-sheet height="200">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>
              </v-card-text>
            </v-card>
          </v-col>


        </v-row>
      </v-card-title>

    </v-card>





    
  </v-container>
</template>

<script>
import Pie  from "@/components/charts/PieChart.vue";
 export default {
  mounted() {
    this.fillData();
  },
  components: {
    Pie
  },
  data: () => ({
    dialog: false,
    items: ['E-meeting', 'Ip management', 'Hr'],
    desserts: [
          {
            name: 'E-meeting',
            request:'1'
          },
          {
            name: 'IP Management',
            request:'30'
          }
        ],
        
  }),
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch((err) => {});
    },
    fillData(){
            this.datacollection_LineChart = {
          //Data to be represented on x-axis
          labels: ['January', 'February'],
          datasets: [
            {
              label: '2020',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [32,1],
              borderColor: [
                '#4CAF50'
               ],
               borderWidth: 2,
               backgroundColor: [
                'rgba(255,177,193,0.2)',
            ],
            }
          ]};
    }
  },
};
</script>

<style></style>
