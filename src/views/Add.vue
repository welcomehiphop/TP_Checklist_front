<template>
  <div>
    <h1>Improve</h1>
    <h2>Date and Time : {{ timestamp }}</h2>
    <form>
      <div v-for="(list, i) in data_set" :key="i">
        <v-text-field v-model="list.idx" :key="i + 1" label="ID" readonly />
        <v-text-field
          v-model="list.plant"
          :key="i + 4"
          label="Plant"
          readonly
        />
        <v-text-field v-model="list.line" :key="i + 2" label="Line" readonly />
        <v-text-field
          v-model="list.content_name"
          :key="i + 3"
          label="Content Check"
          readonly
        />
      </div>
      <v-text-field v-model="form.empNo" label="Emp No"></v-text-field>
      <v-text-field v-model="form.action" label="Action"></v-text-field>
      <input type="file" @change="onFileSelected" />
      <!-- <button @click="onUpload">Test Upload</button> -->
      <v-col class="text-right">
        <v-btn class="submit" @click="submit">
          submit
        </v-btn>
      </v-col>
    </form>
  </div>
</template>

<script>
import ImageUpload from "../components/imageUpload.vue";
import api from "@/services/api";
import axios from "axios";

export default {
  async mounted() {
    let result = await api.getAtpDataByID(this.$route.params.id);
    this.data_set = result;
  },
  components: {
    ImageUpload,
  },

  data() {
    return {
      selectedFile: null,
      timestamp: "",
      form: {
        empNo: "",
        action: "",
      },
      data_set: [],
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(event);
    },
    getNow: function() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const date = today.getFullYear() + "-" + month + "-" +  day
      // const date = day + "-" + month + "-" + today.getFullYear();
      const time =
        String(today.getHours()).padStart(2, "0") +
        ":" +
        String(today.getMinutes()).padStart(2, "0") +
        ":" + 
        String(today.getSeconds()).padStart(2, "0")
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
    async submit(event) {
      let self = this;
      event.preventDefault();
      console.log(this.form.empNo);
      console.log(this.form.action);
      console.log(this.selectedFile);
      if (this.form.empNo == "") {
        console.log(1);
        alert("Please input all field.");
      } else if (this.form.action == "") {
        console.log(2);
        alert("Please input all field.");
      } else if (this.selectedFile == null) {
        console.log(3);
        alert("Please upload image.");
      } else {
        let bodyFormData = new FormData();
        bodyFormData.append("empNo", this.form.empNo);
        bodyFormData.append("action", this.form.action);
        bodyFormData.append("dateAndTime", this.timestamp);
        bodyFormData.append("status", "Finish");
        bodyFormData.append("file", this.selectedFile, this.selectedFile.name)

        await axios
        .put(
          "http://localhost:3000/atp_get_list/" + `${this.$route.params.id}`,
          bodyFormData,
          // empNo: this.form.empNo,
          // action: this.form.action,
          // dateAndTime: this.timestamp,
          // status: "Finish"
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((resp) => {
          if (resp.status == "200") {
            alert("SUCCESS");
            this.$router.push({ name: "option_job" });
          }
        });

      }

      
      // .catch(function(){
      //   this.$router.push({ name: 'option_job' })
      // });
    },
  },
};
</script>

<style scoped>
form {
  margin: 50px 400px;
  border-radius: 20px;
  border: 1px solid;
  padding: 50px;
  width: auto;
  height: auto;
}
h2 {
  margin-top: 10px;
  text-align: center;
}
h1 {
  text-align: center;
  margin-top: 20px;
}
.submit {
  margin-top: 30px;
}
</style>
