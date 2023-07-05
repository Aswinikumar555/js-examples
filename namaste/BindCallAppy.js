console.log("BindCallAppy start -- ");
const obj = {
  firstName: "aswin",
  lastName: "kumar",
};

function getFullName(state, village) {
  console.log(this.firstName + " " + this.lastName + " ", state, " " + village);
}

const obj_2 = {
  firstName: "kumar",
  lastName: "asw",
};

getFullName.call(obj_2, "Andhra", "pedana");

getFullName.apply(obj_2, ["Andhra", "pedana"]);

const nameBind = getFullName.bind(obj_2, "Andhra", "pedana");
nameBind();

console.log("BindCallAppy end -- ");
