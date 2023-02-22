/* Task-1
 alert("Я JavaScript")

 Task-2

 let admin
let name

 name = "Джон";
 admin = name;
 alert( admin )

 let World 
let user

 Task-3

 let name = prompt('Ваше имя ')
alert(name)

 Task-4 

 "" + 1 + 0 = 10
 "" - 1 + 0 = -1
 true + false = 1
 6 / "3" = 2
 "2" * "3" = 6
 4 + 5 + "px" 9px
 "$" + 4 + 5 = $45
 "4" - 2 = 2
 "4px" - 2 = NaN
 "  -9  " + 5 = -9 5
 "  -9  " - 5 = -14
 null + 1 = 1
 undefined + 1 = NaN
 " \t \n" - 2 = -2

 let a = prompt("Первое число?", 1);
 let b = prompt("Второе число?", 2);

 alert(Number(a) + Number(b));

 Task 5 

 const number = prompt('Введите число');

 if(number > 0) alert (1)
 if (number < 0) alert(-1);
 if (number == 0) alert (0)

 let = result;
 result = (a + b < 4) ? 'Мало' : 'Много'

 let message = (login == 'Сотрудник') ? 'Привет' :
   (login == 'Директор') ? 'Здравствуйте' :
   (login == '') ? 'Нет логина' :
  ''; 
  
  Task 6 

   let age 
  if(age >=14 && age <=90)


  let age 

if(age <14 || age >90)

if(!(age >=14 && age <= 90))


let login = prompt('You login')
 if(login === 'Админ') {
     let pass = prompt('Пароль')
     if(pass == 'Я главный')alert ('Здравствуйте')
     else if (pass === ''){
      alert('Отмена')
     }
     else if (login === ''){
      alert('Я таких не знаю')
     }
}


 Task 7 
 for(let i = 2; i <= 10; i++) { if
    (i % 2 === 0) alert(i)
 }

 let = 0
while(i < 3){
alert(`number ${i}!`)
i++
}


let num
do{
   num = prompt("Введите число")
}while (num <= 100 && num)

Task 8

let browser = prompt('Choose your browser')
if(browser == 'Edge')
{alert("You've got the Edge!")}
else if
(browser == 'Chrome', 'Mozzila')
{alert('Okay we support these browsers too')}


let = a

switch(a){
   case 0: alert("Вы ввели число 0")
   case 1: alert("Вы ввели число 1")
   case 2:
      case 3: alert ("Вы ввели 2, а может и 3")
}

Task 9 

  function checkAge(age){
  (age > 18) ? true: confirm('Гуд')}

function chekAge(age){
   return (age > 18) || confirm('Гуд')}
}

function min(a,b){
   if(a<b){return a}else{
      return b   }
 }

 function pow(x,n){
   let result = x**n
   return result
 } 

Task 10

  let ask = (question, yes, no) =>{
     if (confirm(question)) yes()
     else no();
   }
   ask('Вы согласны?',
   () =>{alert('Вы согласились')},
   () => {alert('Вы отменили выполнение')}
  )
  */
