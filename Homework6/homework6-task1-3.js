// 1.3) Класс Фронтенд разработчик:
// 	Добавить доп. свойства:
// 		- начало карьеры(формат Date),
// 		- предыдущие компании(массив объектов
// 			{
// 				start: new Date(),
// 				end: new Date(),
// 				salaryPerMonth: number,
// 				position: 'middle' или 'junior' или 'senior',
// 				companyName: 'Oracle',
// 			})
// 	Добавить доп. методы:
// 		- изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// 		- добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
// 		высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
// 		в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// 		- добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// 		- возможность добавить компанию в массив предыдущих компаний по примеру объекта выше

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

// class FrontendDeveloper extends Human {

//     constructor(height, weight, name, date, gender, disability, carierStart, previousCompanies) {
//         super(height, weight, name, date, gender, disability);

//         this.carierStart = carierStart;
//         this.previousCompanies = previousCompanies;

//     }

//     sayWhoIAM() {
//         alert(`Привет, меня зовут ` + this.name + `, я Фронтенд разработчик. Работаю с `+ this.carierStart)
//     }

//     salaryPerAllTime() {
//         let numberOfMonth = 0;
//         let totalCash = 0;

//         for (let i = 0; i < this.previousCompanies.length; i++) {
//             numberOfMonth = Math.ceil((this.previousCompanies[i].end - this.previousCompanies[i].start) / 2678400000);
//             totalCash += numberOfMonth * this.previousCompanies[i].salaryPerMonth;
//         }
//         return totalCash
//     } 

    
//     companyPrevius(company) {
//         for (let i = 0; i < this.previousCompanies.length; i++) {
//             if (company === this.previousCompanies[i].companyName) {
//                 console.log(this.previousCompanies[i])
//             }
//         }

//     }

//     newCompany(prevCompany) {
//         this.previousCompanies.push(prevCompany);
//         return this.previousCompanies;
//     }

// }

// const frontendDev = new FrontendDeveloper(177, 88, `Vlad`, new Date(1999,11,10), `man`, false, 1999, [
//     {
//         start: new Date(`1999,11,12`),
// 		end: new Date(`2005,11,10`),
// 	    salaryPerMonth: 350,
//         position: `Junior`,
// 		companyName: 'EPAM',
//     },

//     {
//         start: new Date(`2005,11,12`),
// 		end: new Date(`2008,11,10`),
// 	    salaryPerMonth: 1500,
//         position: `Middle`,
// 		companyName: 'Global Logic',
//     },

//     {
//         start: new Date(`2008,11,12`),
// 		end: new Date(`2019,11,10`),
// 	    salaryPerMonth: 5000,
//         position: `Senior`,
// 		companyName: 'Sigma',
//     }
// ]);
// console.log(frontendDev);

// console.log(frontendDev.salaryPerAllTime());

// console.log(frontendDev.companyPrevius(`Sigma`));

// console.log(frontendDev.newCompany(
//     {
//         start: new Date(`2019,11,12`),
// 		end: new Date(`2022,11,10`),
// 	    salaryPerMonth: 4300,
//         position: `Senior`,
// 		companyName: 'EPAM-USA',
//     }
// ))



// class Builder extends Human {
//     constructor(height, weight, name, date, gender, disability, ) {
//         super(height, weight, name, date, gender, disability)
//     }
    
// }

// const builderMan = new Builder(155, 100, `Sidron`, new Date(1991,11,11), `man`, true);
// console.log(builderMan);

