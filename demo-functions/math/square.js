(n) => {
  let multiply = ff('./demo-functions/math/multiply.js')
  return await multiply(n, n) + 1
}
