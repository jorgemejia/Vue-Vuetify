<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          class="elevation-1"
      ></v-data-table>


    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { userService } from '@/services/user.service';
import { UserInterface } from '@/types/User.interface'

export default Vue.extend({
  name: "HelloWorld",

  async mounted() {
    this.$data.users = await userService.getUsuarios();
    console.log(this.$data.users);
  },

  data: () => ({
    headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Apellido Paterno', value: 'lastnameFather' },
        { text: 'Apellido Materno', value: 'lastnameMother' },
        { text: 'Email', value: 'email' },

    ],
    users: UserInterface,
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
});
</script>
