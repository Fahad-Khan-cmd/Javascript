const time = new Date()
console.log(time);
console.log(time.toString());
console.log(time.toDateString());
console.log(time.toLocaleString());
console.log(time.toLocaleDateString());

const newTimeCreater = new Date('1 , 23 ,2023');
console.log(newTimeCreater);
console.log(newTimeCreater.toLocaleString('default',{
    timeStyle:'long'
}));