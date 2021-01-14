<template>
  <v-card flat>
    <v-toolbar color="primary" dark extended flat>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    </v-toolbar>

    <v-card class="mx-auto" max-width="700" style="margin-top: -64px">
      <v-toolbar flat>
          <v-text-field label="TSE-PORTAL" hide-details="auto" v-model="search"  ></v-text-field>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="toggle_view">
          <v-icon>mdi-apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-divider> </v-divider>
    </v-card>
      
     <transition name="slide-fade"> 

    <DataCard 
      v-if="show"
      :search_data="search"
      :show_data="show"
    />
    </transition>



  </v-card>

  
</template>

<script>
 import DataCard  from "@/components/cards/Data_card.vue";
export default {
  components: {
    DataCard
  },
  mounted() {
  },
  data() {
    return {
      search:"",
      show: true,
      main_system: [
        { text: "Login ( เข้าสู่ระบบ ) ",  icon: "mdi-account-circle-outline" ,link: "/login" },
        { text: "Register ( สมัครงาน )", icon: "mdi-account-cog-outline",link: "/job" }
      ],   
    };
  },
  methods: {
    toggle_view(){
      this.show = !this.show
    }
  }
};
</script>

<style>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
