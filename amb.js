if ( 'AmbientLightSensor' in window ) {
  const sensor = new AmbientLightSensor();
  sensor.onreading = () => {
    console.log('illuminance level :', sensor.illuminance);
      if(sensor.illuminance < 15) {
            document.querySelector('body').classList.add("dark");
      }
      else {
            document.querySelector('body').classList.remove("dark");
      }
  };
  sensor.onerror = (event) => {
    console.log(event.error.name, event.error.message);
  };
  sensor.start();
}