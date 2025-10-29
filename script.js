//fetch du json
const app = Vue.createApp({
  data() {
    return {
      cat: '',
      projetsArr: {}
    }
  },
  mounted() {
    fetch("/data.json") 
      .then(data => data.json()) 
      .then(arr => { 
        console.log(arr);
        this.projetsArr = arr

        const params = new URLSearchParams(window.location.search)
        const cat = params.get('cat')
        console.log(cat)
        this.cat = cat
        console.log(this.cat)

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