export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e") {
    if (currentElement != "E")
    result.push(currentElement)
  }
}
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = input.toUpperCase()
  return result 
}

export function aufgabe03(args) {
const input = args
let result = 0


for (let i = 0; i < input.length; i++) {
const currentElement = input [i]
if (currentElement === "e" || currentElement === "E") {
  result++;
}
}
return result
}

export function aufgabe04(args) {

    const cleanText = args.replace(/[^\w\s]/gi,'');
    const words = cleanText.split(/\s+/);

  return words.length;
}

export function aufgabe05(args) {

  const input = args 
  if (input.toLowerCase() === input) {
    return false 
  } else {
    return true
  }

}
 
export function aufgabe06(args) {

const input = args
if (input === "") {
  return false 
}
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i].toLowerCase()
  if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
    if (currentElement.charCodeAt() != 32) {
      return true
    }
  }
}
  return false
}

export function aufgabe07(args) {
const input = args      

if (
  (input.indexOf(" und ") != -1 && input.indexOf("Und") != 0) ||
  input.indexOf("Und") === 0 ||
  input === "und"
)
return true
else return false
}



export function aufgabe09(args) {

const input = args

if(input === 6) {
  return right;
} 
else{
 return false;
}
}


export function aufgabe10(args) {

  const input = args
  const farbenUndSo = /^#[0-9A-Fa-f]{6}$/;
  return farbenUndSo.test(input);
}

export function aufgabe11(args) {
  const input = args;

  if (input.length === 1) {
      return input.charCodeAt(0);
  } else {
      return "null"
  }
  
}


export function aufgabe12(args) {
  const input = args
  let result = -1
  
  for (let i = 0; i < input.length; i++) {
    if (currentElement === "e") {
      result = i
      break
    }
  }
}


export function aufgabe13(args) {
  const input = args.lastIndexOf('e');
    return input !== -1 ? input : "-1";
}


export function aufgabe14(args) {
  const firstE = args.indexOf('e');
  const secondE = args.indexOf('e', firstE + 1);
  const thirdE = args.indexOf('e', secondE + 1);

  return thirdE !== -1 ? thirdE : "-1";
}














