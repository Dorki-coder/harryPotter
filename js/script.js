import data from "./data.js";

let school = "",
  name = "",
  filterName = [],
  filterHouse = [],
  main_div = document.createElement("div"),
  main = document.querySelector("main"),
  res = data;

main_div.className = "list";
output(data);
function output(array) {
  main_div.innerHTML = " ";
  for (let index = 0; index < array.length; index++) {
    let grid_div = document.createElement("div");
    grid_div.insertAdjacentHTML(
      "afterbegin",
      `
              <img src="${array[index].image}"></img>
              <div class="description">        
              <h3>${array[index].name}</h3>
              <p>Actor: ${array[index].actor}</p>
              <p>Gender: ${array[index].gender}</p>
              <p>House: ${array[index].house}</p>
              <p>Wand core: ${array[index].wand.core}</p>
              <p>Alive: ${trueToYes(array[index].alive)}</p>
              </div>
      `
    );
    main_div.append(grid_div);
    main.append(main_div);
    grid_div.className = "block";
  }
}

function trueToYes(params) {
  if (params == true) return "yes";
  else {
    return "no";
  }
}

document.querySelector("select").addEventListener("change", filterByHouse);
document.querySelector("input").addEventListener("input", filterByName);

function filterByName() {
  name = this.value.trim().toLocaleLowerCase();
  if (school == "") {
    res = data;
    filterHouse = [];
  }
  if (filterHouse.length > 0) res = filterHouse;
  console.log(name);
  filterName = res.filter((elem) => {
    return elem.name.toLocaleLowerCase().includes(name);
  });
  output(filterName);
}

function filterByHouse() {
  school = this.value.trim().toLocaleLowerCase();
  if (name == "") {
    res = data;
    filterName = [];
  }
  if (filterName.length > 0) res = filterName;
  filterHouse = res.filter((elem) => {
    return elem.house.toLocaleLowerCase().includes(school);
  });
  output(filterHouse);
}
