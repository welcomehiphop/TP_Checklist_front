<template>
  <!-- <div> -->
  <v-container>
    <v-card color="primary" dark>
      <v-row>
        <v-col class="d-flex" xl="12" lg="12" md="12" sm="12" cols="12">
          <div><h1>Theme Patrol List</h1></div>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-card>

    <v-row>
      <v-col cols="1">
        <v-subheader>
          <v-radio-group v-model="picked" class="Radio">
            <v-radio :value="1"></v-radio>
          </v-radio-group>
          <!-- <input class="Radio" type="radio" id="1" value="1" v-model="picked" /> -->
          <div class="search">Emp No</div>
        </v-subheader>
      </v-col>

      <v-col cols="2">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="1">
        <v-subheader>
          <v-radio-group v-model="picked" class="Radio">
            <v-radio :value="2"></v-radio>
          </v-radio-group>
          <!-- <input class="Radio" type="radio" id="2" value="2" v-model="picked" /> -->
          <div class="search">Week</div>
        </v-subheader>
      </v-col>
      <v-col cols="1">
        <v-select
          @change="onChange()"
          v-model="selectWeek"
          :items="number"
          item-text="week"
          item-value="value"
          label="Select Week"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>

      <v-col cols="1">
        <v-subheader>
          <div class="search">Status</div>
        </v-subheader>
      </v-col>
      <v-col cols="2">
        <v-select
          @change="onChange()"
          v-model="selectStatus"
          :items="status"
          item-text="status"
          label="Select Status"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>

      <v-col cols="2">
        <div class="text-right">
          <v-btn
            elevation="3"
            medium
            outlined
            single-line
            @click="onClickSearch()"
            >Search</v-btn
          >
        </div>
      </v-col>
      <v-col cols="1">
        <div class="text-right">
          <v-btn elevation="3" outlined single-line @click="onClickReset()"
            >Reset</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        <h4>All : {{ all }}</h4>
      </v-col>
      <v-col cols="2">
        <h4>Pending : {{ pending }}</h4>
      </v-col>
      <v-col cols="1">
        <h4>Finish : {{ finish }}</h4>
      </v-col>

      <v-col cols="6"></v-col>

      <v-btn elevation="3" outlined single-line @click="onExport"
        >Export to excel</v-btn
      >
    </v-row>
    <v-card elevation="2">
      <v-data-table
        dense
        :headers="headers"
        :items="data_set"
        item-key="name"
        class="elevation-2"
        :footer-props="{
          'items-per-page-options': [10, 20, 30, 40],
        }"
        :items-per-page="20"
      >
        <template v-slot:item="{ item }">
          <tr class="mx-2">
            <td>{{ item.week_number }}</td>
            <td>{{ item.plant }}</td>
            <td>{{ item.line }}</td>
            <td>{{ item.machine_name }}</td>
            <!-- <td>{{item.content_name}}</td> -->
            <td>
              <div v-if="item.check_status === 'Pending'">
                <a href="" @click="shareData(item.idx)">{{
                  item.content_name
                }}</a>
              </div>
              <div v-else>
                {{ item.content_name }}
              </div>
            </td>
            <td>
              <img
                :src="item.picture_before"
                alt="Image not found"
                width="100"
                height="100"
              />
            </td>

            <td>{{ item.before_comment }}</td>
            <td>
              {{
                  item.before_reg_date.substring(8, 10) +
                  item.before_reg_date.substring(4, 5) +
                  item.before_reg_date.substring(5, 7) +
                  item.before_reg_date.substring(4, 5) +
                  item.before_reg_date.substring(0, 4) +
                  item.before_reg_date.substring(10)
              }}
            </td>
            <td>
              <img
                :src="item.picture_after"
                alt="Image not found"
                width="100"
                height="100"
              />
            </td>
            <!-- <td>{{ item.after_empno }}</td> -->
            <!-- <td>{{ item.after_comment }}</td>  -->
            <td>
              {{
                item.after_reg_date.substring(8, 10) +
                  item.after_reg_date.substring(4, 5) +
                  item.after_reg_date.substring(5, 7) +
                  item.after_reg_date.substring(4, 5) +
                  item.after_reg_date.substring(0, 4) +
                  item.after_reg_date.substring(10)
              }}
            </td>
            <td>{{ item.before_empno }}</td>
            <td>{{ item.check_status }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    <!-- </div> -->
  </v-container>
</template>

<script>
import moment from "moment";
import XLSX from "xlsx";
import api from "@/services/api";
export default {
  async mounted() {
    let result = await api.getAtpData();
    this.data_set = result;
    for (let i = 0; i < this.data_set.length; i++) {
      if (this.data_set[i].check_status == "Pending") {
        this.pending++;
      } else {
        this.finish++;
      }
      this.all++;
    }
  },

  data: () => ({
    all: "",
    pending: "",
    finish: "",
    picked: "",
    search: "",
    selectWeek: { week: "Select Week", value: "undefined" },
    number: [
      { week: "Select Week", value: "undefined" },
      { week: "1", value: "1" },
      { week: "2", value: "2" },
      { week: "3", value: "3" },
      { week: "4", value: "4" },
      { week: "5", value: "5" },
      { week: "6", value: "6" },
      { week: "7", value: "7" },
      { week: "8", value: "8" },
      { week: "9", value: "9" },
      { week: "10", value: "10" },
      { week: "11", value: "11" },
      { week: "12", value: "12" },
      { week: "13", value: "13" },
      { week: "14", value: "14" },
      { week: "15", value: "15" },
      { week: "16", value: "16" },
      { week: "17", value: "17" },
      { week: "18", value: "18" },
      { week: "19", value: "19" },
      { week: "20", value: "20" },
      { week: "21", value: "21" },
      { week: "22", value: "22" },
      { week: "23", value: "23" },
      { week: "24", value: "24" },
      { week: "25", value: "25" },
      { week: "26", value: "26" },
      { week: "27", value: "27" },
      { week: "28", value: "28" },
      { week: "29", value: "29" },
      { week: "30", value: "30" },
      { week: "31", value: "31" },
      { week: "32", value: "32" },
      { week: "33", value: "33" },
      { week: "34", value: "34" },
      { week: "35", value: "35" },
      { week: "36", value: "36" },
      { week: "37", value: "37" },
      { week: "38", value: "38" },
      { week: "39", value: "39" },
      { week: "40", value: "40" },
      { week: "41", value: "41" },
      { week: "42", value: "42" },
      { week: "43", value: "43" },
      { week: "44", value: "44" },
      { week: "45", value: "45" },
      { week: "46", value: "46" },
      { week: "47", value: "47" },
      { week: "48", value: "48" },
      { week: "49", value: "49" },
      { week: "50", value: "50" },
      { week: "51", value: "51" },
      { week: "52", value: "52" },
    ],
    selectStatus: { status: "All", value: "all" },
    status: [
      { status: "All", value: "all" },
      { status: "Pending", value: "pending" },
      { status: "Finish", value: "finish" },
    ],
    headers: [
      { text: "Week", value: "week_number", sortable: false },
      { text: "Plant", value: "plant", sortable: false },
      { text: "Line", value: "line", sortable: false },
      { text: "MachineName", value: "machine_name", sortable: false },
      { text: "Content", value: "content_name", sortable: false },
      { text: "Reg_Img", value: "picture_before", sortable: false },
     
      { text: "Reg_Action", value: "before_comment", sortable: false },
      { text: "Reg_Date", value: "before_reg_date", sortable: false },
      { text: "Improve_Img", value: "picture_after", sortable: false },
      // { text: "Improve_Emp", value: "after_empno", sortable: false },
      // { text: "Improve_Action", value: "after_comment", sortable: false },
      { text: "Improve_Date", value: "after_reg_date", sortable: false },
      
      { text: "Status", value: "check_status", sortable: false },
    ],
    data_set: [],
  }),

  methods: {
    onExport() {
      let wb = XLSX.utils.book_new();
      XLSX.utils.sheet_add_json(wb, this.data_set, {
        skipHeader: true,
        origin: "A2",
      });
      let dataWS = XLSX.utils.json_to_sheet(this.data_set);

      XLSX.utils.book_append_sheet(wb, dataWS, "Summary");

      XLSX.writeFile(wb, "Summary.xlsx");
    },
    onChange() {
      // console.log(this.selectWeek.value)
      // console.log(this.selectStatus.value)
    },
    async onClickSearch() {
      console.log(this.picked);
      let result;
      if (this.picked == 2) {
        result = await api.getAtpDataByWeek(
          this.selectStatus.value,
          this.selectWeek.value
        );
      } else {
        result = await api.getAtpDataByEmp(
          this.search,
          this.selectStatus.value
        );
      }
      this.data_set = result;
      this.all = this.data_set.length;
      this.pending = 0;
      this.finish = 0;
      for (let i = 0; i < this.data_set.length; i++) {
        if (this.data_set[i].check_status == "Pending") {
          this.pending++;
        } else {
          this.finish++;
        }
      }
    },
    shareData(id) {
      // this.$router.push({name: "add",params:this.data_set })
      this.$router.push(`/add/${id}`);
    },
    onClickReset() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.search {
  margin-top: 20px;
}
.text-right {
  margin-top: 15px;
}
.Radio {
  margin: 40px 10px 0 auto;
}
h4 {
  text-align: center;
  margin-bottom: 10px;
}
.button {
  margin-bottom: 10px;
}
td {
  font-size: 14px !important;
}
</style>
