<template>
  <a-scene>
    <a-entity camera look-controls></a-entity>
    <a-sphere position="0 -0.75 -5" :radius="radius" color="#EF2D5E"></a-sphere>
    <a-box
      position="-1 -1 -3"
      rotation="0 45 0"
      width="1"
      height="1"
      depth="1"
      color="#4CC3D9"
    ></a-box>
    <a-cylinder
      position="1 -0.75 -3"
      radius="0.5"
      height="1.5"
      color="#FFC65D"
    ></a-cylinder>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
</template>

<script>
export default {
  components: {
    // empty
  },
  data(){
    return {
      timestamp : 0,
      radius : 1.0,
  }},
  computed: {
    
  },
  mounted: function(){
        console.log('mounted, started app loop');
        // app loop calling gameMod.update
        var viewport = this;
        var ts = this.timestamp;
        var loop = function(){
            var now = new Date().getMilliseconds();
            //secs = (now - this.timestamp) / 1000;
            setTimeout(loop, 33);
            ts = now;
            viewport.radius = ts / 1000 + 1 ;
        };
        loop();
    }
};
</script>

<style>
</style>
