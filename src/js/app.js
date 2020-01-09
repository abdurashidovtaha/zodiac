const day = 26;
const month = 8;

let sign;

const CAPRICORN = "capricorn";
const AQUARIUS = "aquarius";
const PISCES = "pisces";
const ARIES = "aries";
const TAURUS = "taurus";
const GEMINI = "gemini";
const LEO = "leo";
const VIRGO = "virgo";
const LIBRA = "libra";
const SCORPIO = "scorpio";
const SAGGITARIUS = "saggitarius";

if (month === 1) {
  if (day <= 20) {
    sign = CAPRICORN;
  } else {
    sign = AQUARIUS;
  }
} else if (month === 2) {
  if (day <= 20) {
    sign = AQUARIUS;
  } else {
    sign = PISCES;
  }
} else if (month === 3) {
  if (day <= 18) {
    sign = PISCES;
  } else {
    sign = ARIES;
  }
} else if (month === 4) {
  if (day <= 18) {
    sign = ARIES;
  } else {
    sign = TAURUS;
  }
} else if (month === 5) {
  if (day <= 18) {
    sign = TAURUS;
  } else {
    sign = GEMINI;
  }
} else if (month === 6) {
  if (day <= 18) {
    sign = GEMINI;
  } else {
    sign = LEO;
  }
} else if (month === 7) {
  if (day <= 18) {
    sign = LEO;
  } else {
    sign = VIRGO;
  }
} else if (month === 8) {
  if (day <= 18) {
    sign = VIRGO;
  } else {
    sign = LIBRA;
  }
} else if (month === 9) {
  if (day <= 18) {
    sign = LIBRA;
  } else {
    sign = SCORPIO;
  }
} else if (month === 10) {
  if (day <= 18) {
    sign = SCORPIO;
  } else {
    sign = SAGGITARIUS;
  }
} else if (month === 11) {
  if (day <= 18) {
    sign = SAGGITARIUS;
  } else {
    sign = PISCES;
  }
} else if (month === 12) {
  if (day <= 18) {
    sign = AQUARIUS;
  } else {
    sign = CAPRICORN;
  }
}
console.log(sign);