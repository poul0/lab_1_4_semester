class Cargo {
  constructor(name, mass) {
    this.name = name;
    this.mass = mass;
    if (typeof name === "undefined") {
      this.name = "Невідомий товар";
    }
  }
}

global_cargos_list = new Array();

exports.find_Cargo = (name, mass) => {
  for (let cargo of global_cargos_list) {
    if (cargo.name === name && cargo.mass === mass) {
      return cargo;
    }
  }

  return -1;
};

exports.add_Cargo = (name, mass) => {
  let cargo = new Cargo(name, mass);
  global_cargos_list.push(cargo);

  return cargo;
};

exports.remove_Cargo = (name, mass) => {
  for (let i = 0; i < global_cargos_list.length; i++) {
    let cargo = global_cargos_list[i];
    if (cargo.name === name && cargo.mass === mass) {
      global_cargos_list.splice(i, 1);
      return 1;
    }
  }

  return -1;
};

exports.edit_Cargo = (name, mass, new_name, new_mass) => {
  for (let i = 0; i < global_cargos_list.length; i++) {
    let cargo = global_cargos_list[i];
    if (cargo.name === name && cargo.mass === mass) {
      global_cargos_list[i].name = new_name;
      global_cargos_list[i].mass = new_mass;
      return 1;
    }
  }

  return -1;
};

exports.get_Cargos_List = () => {
  console.log("\n" + "Список усіх товарів:");

  for (let i = 0; i < global_cargos_list.length; i++) {
    let cargo = global_cargos_list[i];
    console.log(
      `Ім'я виконавця: ${cargo.name}, маса товару: ${cargo.mass}`
    );
  }

  return global_cargos_list;
};
