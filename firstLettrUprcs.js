function capitalFirst(str) {
  if (str.length === 0) return ""; // Handle empty string
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalFirst("akash"));
