// 1.4) Класс Строитель:
// 	Добавить доп. свойства:
// 		- локация строительного объекта(строка)
// 		- набор инструментов (массив строк ['кирка', 'топор'])
// 		- скорость выполнения работы на один квадратный метр (количество минут - number)
// 	Добавить доп. методы:
// 		- метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
// 		если меньше одного дня - показать количество часов
// 		если больше одного дня - показать количество дней и часов
// 		если больше недели - показать количество недель дней и часов
// 		если больше месяца - показать количество месяцев недель дней и часов
// 		если больше года - показать количество лет месяцев недель дней и часов
class Human {
    constructor(height, weight, name, date, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = disability;
    }

    sayHello() {
        alert('Привет, меня зовут ' + this.name)
    }

    changeName(newName) {
        this.name = newName;
    }

    changeDisability(newDisability) {
        this.disability = Boolean(newDisability);
    }

} 

class Builder extends Human {
    constructor(height, weight, name, date, gender, disability, country, item, speedOfWork) {
        super(height, weight, name, date, gender, disability)

        this.country = country;
        this.item = item;
        this.speedOfWork = speedOfWork;
    }

    buildTower(squareMeters) {
        let hour = (squareMeters * this.speedOfWork) / 60;
        let day = hour / 24;
        let week = day / 7;
        let month = week / 4.5;
        let year = month / 12;

        if (day < 1) {
            return `${Math.floor(hour)} hours.`;
        } else if (day > 1 && week < 1) {
            return `${Math.floor(day)} days ` + `${Math.floor(hour - (Math.floor(day) * 24))} hours.`;
        } else if (week > 1 && month < 1) {
            return `${Math.floor(week)} weeks ` + `${MAth.floor(day - (Math.floor(week) * 7))} days.` + `${Math.floor(hour - (Math.floor(day) * 24))} hours.`;
        } else if (month > 1 && year < 1) {
            return `${Math.floor(month)} months` + `${Math.floor(week - (Math.floor(month) * 4.5))} weeks` + `${Math.floor(day - (Math.floor(week) * 7))} days` + `${Math.floor(hour - (Math.floor(day) * 24))} hours.`;
        } else if (year > 1) {
            return `${Math.floor(year)} years` + `${Math.floor(month - (Math.floor(year) * 12))} months` + `${Math.floor(week - (Math.floor(month) * 4.5))} weeks` + `${Math.floor(day - (Math.floor(week) * 7))} days` + `${Math.floor(hour - (Math.floor(day) * 24))} hours.`;
        }

    }
}

const builderMan = new Builder(155, 100, `Sidron`, new Date(1991,11,11), `man`, true, `Ukraine`,[`axe`,`hammer`,`picker`], 30);
console.log(builderMan);
console.log(builderMan.buildTower(144444));