class Planet {
	constructor(name) {
		this.name = name;
		this.Stations_list = [];
		this.Cargos_list = [];
		if (typeof name === "undefined") {
			this.name = "Невідома планета";
		}
	}
}

global_planets_list = new Array();

exports.find_Planet = (name) => {
	for (let planet of global_planets_list) {
		if (planet.name === name) { return planet; }
	}

	return -1;
};

exports.add_Planet = (name) => {
	let planet = new Planet(name);
	global_planets_list.push(planet);

	return planet;
};

exports.remove_Planet = (name) => {

	for (let i = 0; i < global_planets_list.length; i++) {
		let planet = global_planets_list[i];
		if (planet.name === name) {
			global_planets_list.splice(i, 1);
			return 1;
		}
	}

	return -1;

};

exports.edit_Planet = (name, new_name) => {
	for (let i = 0; i < global_planets_list.length; i++) {
		let planet = global_planets_list[i];
		if (planet.name === name) {
			global_planets_list[i].name = new_name;
			return 1;
		}
	}

	return -1;
};

exports.get_Planets_List = () => {

	console.log("\n" + "Список усіх планет:");

	for (let i = 0; i < global_planets_list.length; i++) {
		let planet = global_planets_list[i];
		console.log(`Ім'я планети: ${planet.name}`);
	}

	return global_planets_list;

};
