const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];


  const [x, y, z] = users;
  console.log(`Primer lugar para ${x.name} con un tiempo de ${x.time}`);
  console.log(`Primer lugar para ${y.name} con un tiempo de ${y.time}`);
  console.log(`Primer lugar para ${z.name} con un tiempo de ${z.time}`);