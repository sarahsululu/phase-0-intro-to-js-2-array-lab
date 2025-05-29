// Write your solution here!
// Start with the initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// 1. Appends a cat to the end of the cats array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// 2. Prepends a cat to the beginning of the cats array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// 3. Removes the last cat in the cats array (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// 4. Removes the first cat from the cats array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}

// 5. Appends a cat to the end of the cats array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 6. Prepends a cat to the beginning of the cats array (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 7. Removes the last cat from the cats array (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 8. Removes the first cat from the cats array (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}
