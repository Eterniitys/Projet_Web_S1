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
      radius : 1.0,
  }},
  computed: {
    
  },
  mounted: function(){
        console.log('mounted, started app loop');
        var viewport = this;
        // defining loop here
        var loop = function(){
            var now = new Date().getMilliseconds();
            setTimeout(loop, 33);
            viewport.radius = now / 1000 + 1 ;
        };
        // starting loop here
        loop();
    }
};
</script>

<style>
</style>
