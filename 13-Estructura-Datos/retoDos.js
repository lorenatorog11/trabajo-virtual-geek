const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];


  const [x,y,z] = users;
  const {name:namex, time:timex} = x;
  const {name:namey, time:timey} = y;
  const {name:namez, time:timez} = z;
  console.log(`Primer lugar para ${namex} con un tiempo de ${timex}`);
  console.log(`Primer lugar para ${namey} con un tiempo de ${timey}`);
  console.log(`Primer lugar para ${namez} con un tiempo de ${timez}`);