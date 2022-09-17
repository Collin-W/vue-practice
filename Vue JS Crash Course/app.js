const app = Vue.createApp({
  data() {
    return {
      firstName: "Spider",
      lastName: "Guy",
      email: "spiderguy@gmail.com",
      gender: "plant",
      picture: "https://randomuser.me/api/portraits/men/0.jpg",
      i: 0,
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);
      this.i++;
      (this.firstName = results[i].name.first),
        (this.lastName = results[i].name.last),
        (this.email = results[i].email),
        (this.gender = results[i].gender),
        (this.picture = results[i].picture.medium);

      //  let a =  this.i++-

      // return   this.picture = `https://randomuser.me/api/portraits/men/${a}.jpg`
    },
  },
});

app.mount("#app");
