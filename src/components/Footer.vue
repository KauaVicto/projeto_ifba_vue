<template>
    <footer id="footer">
      <p>IReal Calçados &copy; 2022</p>
    </footer>
  </template>
  
  <script>
  export default {
      name: "Footer"
  };
  </script>
  
  <style scoped>
  #footer {
    height: 200px;
    background-color: #0e0e0e;
    color: #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
  #footer p {
    font-size: 1.1rem;
  }
  </style>