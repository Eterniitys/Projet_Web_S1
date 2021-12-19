<template>
  <a-scene embedded arjs>
    <!-- Load Fox Model -->
    <!--a-assets>
      <a-asset-item id="model" src="https://cdn.aframe.io/test-models/models/glTF-2.0/virtualcity/VC.gltf"></a-asset-item>
    </a-assets-->
    <a-marker preset='hiro'>
      <!-- use your gltf model -->
      <a-box position='5 0.5 0'></a-box>
      <a-entity gltf-model="#model" scale="0.01 0.01 0.01" position='0 0.5 0'></a-entity>
      <a-entity gltf-model="https://cdn.aframe.io/test-models/models/glTF-2.0/virtualcity/VC.gltf" scale="0.01 0.01 0.01" position='0 0.5 0'></a-entity>
    </a-marker>
    <a-entity camera ></a-entity>
  </a-scene>
</template>

<script>
//import model from "./assets/fox.gltf";
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
            viewport.radius += (now / 1000);
        };
        // starting loop here
        loop();
    }
};
</script>

<style>
</style>
