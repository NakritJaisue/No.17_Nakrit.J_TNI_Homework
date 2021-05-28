<template>
  <h1>Contact</h1>
  <img src="@/assets/Address.png" height="300" width="300" />

  <ul v-for="Contactdata in Contactdatas" :key="Contactdata.id">
    <li>{{ Contactdata.id }}{{ ":" }}{{ Contactdata.data }}</li>
  </ul>

  <p>
    <button @click="Contact()">
      <img src="@/assets/home.png" height="150" width="150" />
    </button>
  </p>
</template>

<script>
export default {
  data: () => ({
    Contactdatas: [
      { id: "E-mail", data: "ja.nakrit_st@tni.ac.th" },
      { id: "Address", data: "Circle Condominium" },
      { id: "Phone No.", data: "0929326492" },
      { id: "Facebook", data: "Mick Mick" },
    ],
  }),
  methods: {
    Contact() {
      this.$router.push("/");
    },
  },
};
</script>