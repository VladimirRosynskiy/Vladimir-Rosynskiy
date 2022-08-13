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

    getInfo() {
        const allInformation = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            date: this.date,
            gender: this.gender,
            disability: this.disability
        }
    }
} 

class Builder extends Human {
    constructor(height, weight, name, date, gender, disability, country, item, speed_of_work ) {
        super(height, weight, name, date, gender, disability)

        this.country = country;
        this.item = item;
        this.speed_of_work = speed_of_work;
    }

    
    
}

const builderMan = new Builder(155, 100, `Sidron`, new Date(1991,11,11), `man`, true, `Ukraine`,[`axe`,`hammer`,`picker`], 30);
console.log(builderMan);