<template>
  <a-scene embedded arjs>
    <a-marker preset='hiro'>
      <!-- use your gltf model -->
      <a-cylinder position="0 0.5 -10" color="crimson" height="3" radius="0.2" rotation="90 0 90" animation="property: position; dur: 10000; to: 0 0.5 10; loop: true"></a-cylinder>
      <a-plane position="0 0 0" rotation="-90 0 0" width="1" height="10" color="#7BC8A4" static-body></a-plane>
      <a-cylinder position="0 0.5 0" rotation="0 0 0" height="1" radius="0.2" static-body></a-cylinder>
    </a-marker>
    <a-entity camera ></a-entity>
  </a-scene>
</template>

<script>
</script>

<style>
</style>
