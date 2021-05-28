<template>
  <h1>PortFolio</h1>
  <img src="@/assets/Maddaifuku.png" height="300" width="300" />
  <ul v-for="ProfileData in ProfileDatas" :key="ProfileData.id">
    <li>{{ ProfileData.id }} {{ ":" }} {{ ProfileData.data }}</li>
  </ul>

  <p>
    Contact:
    <button @click="Contact()">
      <img src="@/assets/contactimage.png" height="150" width="150" />
    </button>
  </p>
</template>

<script>
export default {
  data: () => ({
    ProfileDatas: [
      { id: "Name", data: "Nakrit Jaisue" },
      { id: "Age", data: "20" },
      { id: "Major", data: "Computer Engineer" },
      { id: "Skill", data: "C,C++,Java,Essembly,PL/SQL" },
      { id: "Bio", data: "An ordinary man who chasing his dream and money" },
    ],
  }),
  methods: {
    Contact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>