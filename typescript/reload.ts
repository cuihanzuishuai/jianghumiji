function reload(x: number): void
function reload(x: number, y: number): void
function reload(x: string): void
function reload(x: string, y: string): void
function reload(x: number | string, y?: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
  return x + '+' + y
}

// console.log(reload('1','1'))