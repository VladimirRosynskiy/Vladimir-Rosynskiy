// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

const first = ['a', 'b', 'c'];
const second = [1, 2, 3];
const third = [...first, ...second];
console.log(third);
