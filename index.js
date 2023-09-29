const names = ["Jose", "Jesse", "John", "Sarah"];
const price = [15, 25, 30, 41];
const occupation = ["programmer", "lawyer", "designer", "model"];
const maxlength = 8;
const freeLancers = [
  {
    name: "Jose",
    price: 15,
    occupation: "programmer",
  },
  {
    name: "Jesse",
    price: 25,
    occupation: "lawyer",
  },
  {
    name: "John",
    price: 30,
    occupation: "designer",
  },
  {
    name: "Sarah",
    price: 41,
    occupation: "model",
  },
];

const addLancerIntervalId = setInterval(addRandom, 1000);

render();

function render() {
  //Render the freelancers

  const freelancers = document.querySelector("#freelancers");
  const freelancerElements = freeLancers.map((key) => {
    const element = document.createElement("li");
    element.textContent = `Freelancer: ${key.name}, Price: $${key.price}, Occupation: ${key.occupation}`;
    return element;
  });
  freelancers.replaceChildren(...freelancerElements);
}

//add a random person

function addRandom() {
  const person = names[Math.floor(Math.random() * names.length)];
  const nPrice = price[Math.floor(Math.random() * price.length)];
  const nOccupation = occupation[Math.floor(Math.random() * occupation.length)];
  freeLancers.push({ name: person, price: nPrice, occupation: nOccupation });

  render();

  if (freeLancers.length >= maxlength) {
    clearInterval(addLancerIntervalId);
  }
}

function average() {
  const sum = freeLancers.reduce(
    (acc, freelancer) => acc + freelancer.price,
    0
  );
  return sum / freeLancers.length;
}
