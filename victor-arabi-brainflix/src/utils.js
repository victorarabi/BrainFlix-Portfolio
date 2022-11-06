// in miliseconds credits to 
let units = {
    year  : 24 * 60 * 60 * 1000 * 365,
    month : 24 * 60 * 60 * 1000 * 365/12,
    day   : 24 * 60 * 60 * 1000,
    hour  : 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  }
  
  let rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  
  export let convertTimeSimple = (d1, d2 = new Date()) => {
    let elapsed = d1 - d2
  
    // "Math.abs" accounts for both "past" & "future" scenarios
    for (let u in units) 
      if (Math.abs(elapsed) > units[u] || u === 'second') 
        return rtf.format(Math.round(elapsed/units[u]), u)
  }