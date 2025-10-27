//fetch du json
const app = Vue.createApp({
  data() {
    return {
      projetsArr: {}
    }
  },
  mounted() {
    fetch("/data.json") 
      .then(data => data.json()) 
      .then(arr => { 
        console.log(arr.projets);
        this.projetsArr = arr.projets
      })
      .catch(err => console.error("Erreur:", err));
  }
})

app.mount('#app')

//scroll on horizontal
gsap.registerPlugin(ScrollTrigger);
const totalWidth = 8000 - window.innerWidth;

gsap.to("#page", {
  x: -totalWidth,
  ease: "none",
  scrollTrigger: {
    trigger: "#page",
    pin: true,
    scrub: 1,
    end: "+=" + totalWidth,
}
});

// récupérer un paramètre d'url cat, s'il existe générer avec vue tous les projet avec v-for et v-if