/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// function finds the greatest common divisor of two numbers using Euclid's algorithm
 function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

//function computes the GCD of the lengths of str1 and str2, extracts the common divisor of that length from both strings, and checks if it divides both strings.
var gcdOfStrings = function(str1, str2) {
     const len1 = str1.length;
  const len2 = str2.length;
  const gcdLen = gcd(len1, len2);
  const commonDivisor = str1.substring(0, gcdLen);

  if (commonDivisor.repeat(len1 / gcdLen) === str1 &&
      commonDivisor.repeat(len2 / gcdLen) === str2) {
    return commonDivisor;
  } else {
    return "";
  }
};
