/* function composition
  it's when you create a new function by stringing together other functions
  p: f o g
    function p(x) {
      return f(g(x))
    }
*/

// exercise: write proof cases for the composed functions
//  base your test cases on the known behavior of each function individually


const string_number_tests = [

  ];
function string_number(x) { // or number_string ?
  return Number(String(x));
}
run_tests(string_number, string_number_tests)


const number_string_tests = [

  ];
function number_string(x) { // or string_number ?
  return String(Number(x));
}
run_tests(number_string, number_string_tests)

