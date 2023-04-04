const mod = require("./4-term_web_lab1/js/custom_module/module")

//////////////////////////////////////////////////////////////////////////////

let p1 = mod.add_Planet("Марс");
let p2 = mod.add_Planet("Земля");
let p3 = mod.add_Planet("Юпітер");

mod.get_Planets_List();

console.log();

// Видалення планет
console.log("Видалення планети: Земля");
mod.remove_Planet("Земля");

// Список планет
mod.get_Planets_List();

console.log();

// Зміна планет
console.log("Зміна планети: Юпітер");
mod.edit_Planet("Юпітер", "Сонце");

// Список планет
mod.get_Planets_List();

console.log();

// Пошук планет
console.log("Пошук планет:");
let plant1 = mod.find_Planet("Марс");
console.log(`Пошук планети Марс: ${ plant1 !== -1 ? "знайдено" : "не знайдено"}`);
let plant2 = mod.find_Planet("Planet_7", "Test address 7");
console.log(`Пошук планети Planet_7: ${ plant2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

mod.add_Cargo("Стас", 197);
mod.add_Cargo("Басейн", 3400);
mod.add_Cargo("Їжа", 2);

console.log("\nВидалення товару: Стас");
mod.remove_Cargo("Стас", 197);

mod.get_Cargos_List();

console.log("\Редагування товару: Їжа");
mod.edit_Cargo("Їжа", 2, "Бігова доріжка", 54);

mod.get_Cargos_List();

let carg1 = mod.find_Cargo("Басейн", 3400);
console.log(`\nПошук товару Басейн: ${carg1 !== -1 ? "знайдено" : "не знайдено"}`);
let carg2 = mod.find_Cargo("Розетка", 54);
console.log(`Пошук товару Розетка: ${carg2 !== -1 ? "знайдено" : "не знайдено"}`);

console.log("\n");
// //////////////////////////////////////////////////////////////////////////////

mod.add_Station("Софія", p1);
mod.add_Station("Назар", p2);
mod.add_Station("Андрій", p3);

mod.get_Stations_List();

console.log("\nВидалення станції: Назар");
mod.remove_Station("Назар", p2);

mod.get_Stations_List();

mod.edit_Station("Софія", p1, "Степан", p3);

mod.get_Stations_List();

let stat1 = mod.find_Station("Степан", p3);
console.log(`\nПошук станції Степан: ${stat1 !== -1 ? "знайдено" : "не знайдено"}`);
let stat2 = mod.find_Station("Софія", p1);
console.log(`Пошук станції Софія: ${stat2 !== -1 ? "знайдено" : "не знайдено"}`);

console.log("\n");
// //////////////////////////////////////////////////////////////////////////////

// mod.add_Project("Amazon", "Іван Петрович", "Софія Кириченко");
// mod.add_Project("Rozetka", "Роман Владиславович", "Степан Андрійович");
// mod.add_Project("Tesla", "Роман Владиславович", "Софія Кириченко");
// mod.add_Project("ChatGPT", "Роман Владиславович", "Софія Кириченко");
// mod.add_Project("SpaceX", "Роман Владиславович", "Софія Кириченко");

// mod.get_Projects_List();

// console.log("\nВидалення проєкта: SpaceX");
// mod.remove_Project("SpaceX", "Софія Кириченко", "Роман Владиславович");

// mod.get_Projects_List();

// mod.edit_Project("Андрій Олегович", 23, "Степан Андрійович", 16);

// mod.get_Projects_List();

// let project1 = mod.find_Project("Rozetka", "Роман Владиславович", "Степан Андрійович");
// console.log(`\nПошук проєкта Rozetka: ${project1 !== -1 ? "знайдено" : "не знайдено"}`);
// let project2 = mod.find_Project("Prom", "Роман Владиславович", "Степан Андрійович");
// console.log(`Пошук проєкта Prom: ${project2 !== -1 ? "знайдено" : "не знайдено"}`);

// /////////////////////////////////////////////////////////////////////////////

// mod.get_User_Projects_List("Роман Владиславович");
// mod.get_User_Projects_List("Софія Кириченко");