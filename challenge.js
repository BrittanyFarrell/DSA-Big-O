/* eslint-disable strict */
const tinyTower = {
  'A': ['------------', '--------', '----'],
  'B': [],
  'C': []
};

function towerOfHanoi(tower) {
  let newTower = tower;
  const [a, b, c] = [tower.A, tower.B, tower.C];
  
  if (a.length === 0 && b.length === 0) {
    return newTower;
  } if (a.length === 0 && c.length === 0) {
    return newTower;
  }

  let disk = a.length > 0 ? a.pop() :  b.pop() || c.pop();

  if (c[c.length - 1] > disk) {
    c.push(disk);
  } else if (a[a.length - 1] > disk) {
    a.push(disk);
  } else if (b[b.length - 1] > disk) {
    b.push(disk);
  }

  newTower = {
    'A': a,
    'B': b,
    'C': c
  };
  
  return towerOfHanoi(newTower);
}

const logMeBaby = towerOfHanoi(tinyTower);

console.log(logMeBaby);