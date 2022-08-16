// INDEX PAGE VALIDATION
function validateForm() {
  let uname = document.forms["login-form"]["username"].value;
  let upass = document.forms["login-form"]["password"].value;
  if (uname === "" || upass === "") {
    document.getElementById("ebox").innerHTML =
      "*Username/Password must be Filled";
    return false;
  }
  if(uname.length < 8 || upass.length<8){
    document.getElementById("ebox").innerHTML =
      "*Username/Password length must be greater than 8";
    return false;
  }
  if (
    uname.charAt(0) === uname.charAt(0).toLowerCase() ||
    upass.charAt(0) === upass.charAt(0).toLowerCase()
  ) {
    document.getElementById("ebox").innerHTML =
      "*Username/Password must start with Uppercase";
    return false;
  } else [(location.href = "home.html")];
}

//   HOME PAGE FUNCTIONS

function dataSet() {
  var filteredData = sessionStorage.getItem("copyDisplayData");
  function set(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
      element.setAttribute(attr, attributes[attr]);
    });
  }
  if(JSON.parse(filteredData).length === 0){
    document.getElementById('content-body').innerHTML='No item found'
  }
  JSON.parse(filteredData).map((item) => {
    const divCard = document.createElement("div")
    const bgImage = document.createElement("img");
    const card = document.createElement("div");
    card.innerHTML = item.name;
    document.getElementById(''+item.category+'-head').innerHTML=item.category
    const attributesImg = {
      src: item.image,
      onerror:"this.onerror=null;this.src='https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg';",
      style:
        "width:250px;height:150px;border-radius: 14px;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);",
    };
    const attributesBody = {
      style:
        "position:absolute;background-color:beige;padding:5px;box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);border-radius:14px 0px 0px",
    };
    if (item.category === "News Videos") {
      document
        .getElementById("vCard")
        .appendChild(divCard)
        .setAttribute("id", item.name);
    }
    if (item.category === "Songs") {
      document
        .getElementById("sCard")
        .appendChild(divCard)
        .setAttribute("id", item.name);
    }
    if (item.category === "Animals") {
      document
        .getElementById("aCard")
        .appendChild(divCard)
        .setAttribute("id", item.name);
    }
    document.getElementById(item.name).appendChild(card);
    set(card, attributesBody);
    document.getElementById(item.name).appendChild(bgImage);
    set(bgImage, attributesImg);
  });
}

//ADD DATA FUNCTION

function add() {
  let name = document.forms["add-form"]["name"].value;
  let image = document.forms["add-form"]["image"].value;
  let category = document.forms["add-form"]["category"].value;
  var retrivedData = sessionStorage.getItem("copyDisplayData");
  const newData = {
    category: category,
    name: name,
    image: image,
  };
  updatedData = [...JSON.parse(retrivedData), newData];
  location.href = "home.html";
  sessionStorage.setItem("displayData", JSON.stringify(updatedData));
  sessionStorage.setItem("copyDisplayData", JSON.stringify(updatedData));
}

//SIGN OUT FUNCTION

function signOut() {
  sessionStorage.clear();
  location.href = "index.html";
}
// SEARCH FUNCTION
function searchFunc(event) {
  sessionStorage.setItem("copyDisplayData", sessionStorage.getItem("displayData"));
  var searchItem = document.getElementById("search_input").value;
  var Data = sessionStorage.getItem("copyDisplayData");
  var newData = JSON.parse(Data).filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  sessionStorage.setItem("copyDisplayData", JSON.stringify(newData));
  location.href = "home.html";
}
