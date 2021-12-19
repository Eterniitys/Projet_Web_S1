<template>
  <a-scene embedded arjs>
    <a-marker preset='hiro'>
      <!-- use your gltf model -->
      <a-plane position="1 0 0" rotation="-90 0 0" width="1" height="10" color="#7BC8A4" static-body></a-plane>
      <a-plane position="0 0 0" rotation="-90 0 0" width="1" height="10" color="#37afb8" static-body></a-plane>
      <a-plane position="-1 0 0" rotation="-90 0 0" width="1" height="10" color="#7BC8A4" static-body></a-plane>
      <a-cylinder position="0 0.2 -10" color="crimson" height="3" radius="0.2" rotation="90 0 90" animation="property: position; dur: 10000; to: 0 0.2 10; loop: true"></a-cylinder>
      <a-cylinder position="0.5 0.2 -15" color="crimson" height="2" radius="0.2" rotation="90 0 90" animation="property: position; dur: 12500; to: 0.5 0.2 10; loop: true"></a-cylinder>
      <a-cylinder position="-0.5 0.2 -20" color="crimson" height="2" radius="0.2" rotation="90 0 90" animation="property: position; dur: 15000; to: -0.5 0.2 10; loop: true"></a-cylinder>
      <a-cylinder position="0 0.2 -25" color="crimson" height="3" radius="0.2" rotation="90 0 90" animation="property: position; dur: 17500; to: 0 0.2 10; loop: true"></a-cylinder>
      <a-cylinder position="0 0.5 0" rotation="0 0 0" height="1" radius="0.2" static-body></a-cylinder>
    </a-marker>
    <a-entity camera ></a-entity>
  </a-scene>
</template>

<script>
</script>

<style>
</style>
