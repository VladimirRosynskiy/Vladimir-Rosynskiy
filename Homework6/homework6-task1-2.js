//  1.2) Создать два класса(которые должны зависеть от абстракции):
// 	- Фронтенд разработчик
// 	- Строитель


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
//     constructor(height, weight, name, date, gender, disability,experience, programming_Language) {
//         super(height, weight, name, date, gender, disability);

//         this.experience = experience;
//         this.programming_Language = programming_Language;
//     }
// }

// const frontendDev = new FrontendDeveloper(177,88,`Vlad`, new Date(1999-17-10),`man`,false, 15, `English`);
// console.log(frontendDev);

// class Builder extends Human {
//     constructor(height, weight, name, date, gender, disability, experience, speciality) {
//         super(height, weight, name, date, gender, disability)

//         this.experience = experience;
//         this.speciality = speciality;
//     }
// }

// const builderMan = new Builder(155, 100, `Sidron`, new Date(1991 - 11 - 11), `man`, true, 22, `Spanish`);
// console.log(builderMan);
