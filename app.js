const app = Vue.createApp({
    data() {
      return {
        newTemperature: "", 
        temperatures: [] 
      };
    },
    methods: {
        addTemperature() {
            if (this.newTemperature !== "" && !isNaN(this.newTemperature)) {
              this.temperatures.push(parseFloat(this.newTemperature));
              this.newTemperature = ""; 
            }
          },
      convertToFahrenheit(celsius) {
        return (celsius * 9 / 5 + 32).toFixed(2);
      },
      removeTemperature(index) {
        this.temperatures.splice(index, 1);
      }
    }
  });
  app.mount("#app");
  