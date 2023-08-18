const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];

const calcScore = scores.reduce((acc,x) => acc + x.score * x.weight, 0)
const calcWeight = scores.reduce((acc,x) => acc + x.weight,0)
const calculated = calcScore / calcWeight;
console.log(calculated)