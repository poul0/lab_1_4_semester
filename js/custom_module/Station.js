class Station {
  constructor(name, planet) {
    this.name = name;
    this.planet = planet;
    if (typeof name === "undefined") {
      this.name = "Невідома станція";
    }
  }
}

global_stations_list = new Array();

exports.find_Station = (name, planet) => {
  for (let station of global_stations_list) {
    if (
      station.name === name &&
      station.planet === planet 
    ) {
      return station;
    }
  }

  return -1;
};

exports.add_Station = (name, planet) => {
  let station = new Station(name, planet);
  global_stations_list.push(station);

  return station;
};

exports.remove_Station = (name, planet) => {
  for (let i = 0; i < global_stations_list.length; i++) {
    let station = global_stations_list[i];
    if (
      station.name === name &&
      station.planet === planet
    ) {
      global_stations_list.splice(i, 1);
      return 1;
    }
  }

  return -1;
};

exports.edit_Station = (
  name,
  planet,
  new_name,
  new_planet
  ) => {
  for (let i = 0; i < global_stations_list.length; i++) {
    let station = global_stations_list[i];
    if (
      station.name === name &&
      station.planet === planet 
    ) {
      global_stations_list[i].name = new_name;
      global_stations_list[i].planet = new_planet;
      return 1;
    }
  }

  return -1;
};

exports.get_Stations_List = () => {
  console.log("\n" + "Список усіх станцій:");

  for (let i = 0; i < global_stations_list.length; i++) {
    let station = global_stations_list[i];
    console.log(
      `Станція: ${station.name}, планета: ${station.planet.name}`
    );
  }

  return global_stations_list;
};

exports.get_User_Stations_List = (userName) => {
  console.log(`\nСписок усіх проєктів, які має ${userName}:`);

  for (let i = 0; i < global_stations_list.length; i++) {
    if (
      global_stations_list[i].planet === userName) {
      let station = global_stations_list[i];
      console.log(
        `Станція: ${station.name}, планета: ${station.planet}`
      );
    }
  }

  return global_stations_list;
};
