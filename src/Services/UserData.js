function getUserData() {
    const data = localStorage.getItem("userdata");
    return JSON.parse(data);
  }
  
  function setUserData(data) {
    return localStorage.setItem("userdata", JSON.stringify(data));
  }
  
  export {getUserData, setUserData};
