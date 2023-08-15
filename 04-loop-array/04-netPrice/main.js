const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];

  const summary = []
  //// # for...in
  // for(let x in sales) {
  //   const item = {netPrice: sales[x].price * (1 - (sales[x].discount || 0))}
  //   summary.push(item)
  // }

  
  // console.log(summary)
///// # forEach
  // sales.forEach((x , i) => {
  //   const item = {netPrice: sales[i].price * (1 - (sales[i].discount || 0))}
  //   summary.push(item)
  // })

  /////// # for...of
  for(let x of sales) {
    const item = {netPrice: x.price * (1 - (x.discount || 0))}
    summary.push(item)
  }
  console.log(summary)