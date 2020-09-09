const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
/*
console.log(employees);

// create a function that calculates the bonus
function bonusCalculator(employee) {
  console.log('in bonus calculator');
  console.log(employee); // employee.name, employee.annualSalary, employee.reviewRating

  let bonusPercentage = 0;

  if (employee.reviewRating === 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 0.04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage = 0.06;
  } else if (employee.reviewRating === 5) {
    bonusPercentage = 0.10;
  } else if (employee.employeeNumber < 4) {
    bonusPercentage + 0.05;
  } else if (employee.annualSalary >= 65000) {
    bonusPercentage - 0.01;
    return {
      name: employee.name,
      bonusPercentage: ,
      totalBonus: ,
      totalCompensation: 
          }
    console.log(bonusPercentage);
  }
  // create your RETURN OBJECT first, that way its clear
  // let bonusPercentage = {
  //   name: employee.name
  // } // ... fill this out with default values (see instructions)

  // do some logic (modify your return object)

  // return your RETURN OBJECT


}
*/

// do a for-loop that loops over the employees

// test!
//const atticus = employees[0];
//console.log(bonusCalculator(atticus));
/*
  atticus should return what?
  {
    name: 'Atticus',
    bonusPercentage: 0.09,
    totalBonus: 4230,
    totalCompensation: 51230
  }
*/

// const jem = employees[1];
// console.log(bonusCalculator(jem));

// const scout = employees[2];
// console.log(bonusCalculator(scout));

//for (let i = 0; i < employees.length; i++) {
  //let bonus = bonusCalculator(employees[i]);
  //   // print the employee, then print the calculated bonus
  //console.log(employees[i], bonus);
// }

// print out the result of the function call for each employee










function calculateBonus(employee) {





  const bonusObj = {
  name:employee.name,
  bonusPercentage: 0,
  totalCompensation: 0,
  totalBonus: 0
  }
if(employee.reviewRating <=2) {
  bonusObj.bonusPercentage = 0.0;
} else if (employee.reviewRating === 3) {
  bonusObj.employee.bonusPercentage === 0.04
} else if (employee,reviewRating === 4) {
  bonusObj.employee.reviewRating
}

i cant follow along... 


  return bonisObj;
}




const atticus = employees [0]; 

console.log('Currently calculating bonus for Atticus');
console.log(calculateBonus(Atticus)); 