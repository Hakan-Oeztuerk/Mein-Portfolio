const temperaturen = [10, 25, 5, 30, -2];

for (let i = 0; i < temperaturen.length; i++) {
  const temp = temperaturen[i];

  if (temp >= 25) {
    console.log("Es ist heiß");
  } else if (temp >= 10 && temp < 25) {
    console.log("Es ist warm");
  } else if (temp >= 0 && temp < 10) {
    console.log("Es ist kühl");
  } else {
    console.log("Es ist sehr kalt");
  }
}
