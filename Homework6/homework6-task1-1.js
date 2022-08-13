// 1.1) Создать абстрактный класс Human
// 	Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
// 	Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.

// class Human {
//     constructor(height, weight, name, date, gender, disability) {
//         this.height = height;
//         this.weight = weight;
//         this.name = name;
//         this.date = date;
//         this.gender = gender;
//         this.disability = disability;
//     }

//     sayHello() {
//         alert('Привет, меня зовут ' + this.name)
//     }

//     changeName(newName) {
//         this.name = newName;
//     }

//     changeDisability(newDisability) {
//         this.disability = Boolean(newDisability);
//     }

//     getInfo() {
//         const allInformation = {
//             height: this.height,
//             weight: this.weight,
//             name: this.name,
//             date: this.date,
//             gender: this.gender,
//             disability: this.disability
//         }
//     }
// } 
// const firstHuman = new Human("199", "89", "Vova", new Date("1995-12-17"), "man", false);
// console.log(firstHuman);
// firstHuman.changeName(`Vasya`)
// firstHuman.changeDisability(true)
// firstHuman.getInfo()
// firstHuman.sayHello()