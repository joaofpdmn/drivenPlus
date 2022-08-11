function getUserData() {
    const data = localStorage.getItem("user-data");
    return data;
  }
  
  function setUserData(data) {
    return localStorage.setItem("user-data", JSON.stringify(data));
  }
  
  export {getUserData, setUserData};
