import data from "./data.js";
console.log(data);

let res = data;

let main = document.querySelector("main");
let main_div = document.createElement("div");
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

document.querySelector("select").addEventListener("change", listener);
document.querySelector("input").addEventListener("input", listener);
// let val = this.value.toLocaleLowerCase();
// if (val != "") {
//   res = data.filter((elem) => {
//     return elem.house.toLocaleLowerCase().includes(val);
//   });
//   output(res);
// } else output(data);

function listener() {
  let val = this.value.trim().toLocaleLowerCase();
  let house = "";
  let name = "";
  if (
    val == "gryffindor" ||
    val == "slytherin" ||
    val == "hufflepuf" ||
    val == "ravenclaw"
  ) {
    house = val;
  } else {
    name = val;
  }
  console.log(house);
  if (val != " " && val.length > 1) {
    res = data.filter((elem) => {
      if (
        elem.house.toLocaleLowerCase().includes(house) &&
        elem.name.toLocaleLowerCase().includes(name)
      )
        return this;
    });
  } else output(data);

  output(res);
}
