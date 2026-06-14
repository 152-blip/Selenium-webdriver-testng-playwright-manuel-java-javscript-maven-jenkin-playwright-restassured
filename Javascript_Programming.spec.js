import { test } from "@playwright/test";
import { describe } from "node:test";

/*
String all methods=
length, charAt(), at(), charCodeAt(), codePointAt(), concat(), 
includes(), indexOf(), lastIndexOf(), startsWith(), endsWith(),
 search(), match(), matchAll(), replace(), replaceAll(), slice(),
substring(), substr(), split(), toUpperCase(), toLowerCase(),
toLocaleUpperCase(), toLocaleLowerCase(), trim(), trimStart(),
trimEnd(), padStart(), padEnd(), repeat(), localeCompare(),
normalize(), valueOf(), toString(), toWellFormed(), isWellFormed(),
String.fromCharCode(), String.fromCodePoint(), String.raw()

JavaScript Array Methods

length, at(), push(), pop(), shift(), unshift(), 
splice(), slice(), concat(), join(), toString(), 
indexOf(), lastIndexOf(), includes(), find(), 
findIndex(), findLast(), findLastIndex(), filter(), 
map(), reduce(), reduceRight(), forEach(), every(), 
some(), sort(), reverse(), flat(), flatMap(), fill(),
copyWithin(), entries(), keys(), values(), Array.isArray(),
 Array.from(), Array.of()

JavaScript Number Methods

toString(), toFixed(), toPrecision(), toExponential(), 
toLocaleString(), valueOf(), Number(), Number.isInteger(), 
Number.isFinite(), Number.isNaN(), Number.isSafeInteger(), 
Number.parseInt(), Number.parseFloat(), Math.abs(), Math.ceil(), 
Math.floor(), Math.round(), Math.trunc(), Math.max(), Math.min(), 
Math.pow(), Math.sqrt(), Math.cbrt(), Math.random(), Math.sign(), 
Math.exp()

Javascript set methods
new Set(), add(), delete(), has(), clear(), 
keys(), values(), entries(), forEach(), size, 

Javascript map methods
new Map(), set(), get(), has(), delete(), 
clear(), keys(), values(), entries(), forEach(), 

*/
describe("all string programmes", ({ }) => {
    test("lowup", async () => {
        let arr = "aPpLe";
        let result = "";

        for (let ch of arr) {
            result += ch >= 'a' && ch <= 'z'
                ? ch.toUpperCase()
                : ch.toLowerCase();
        }

        console.log(result);
    });

    test("skip", async () => {
        let word = "this is js programme";
        let s = "";

        for (let i = 0; i < word.length; i++) {
            s += word.charAt(i);

            if (word.charAt(i) === 'i') {
                i++;
            }
        }

        console.log(s);
    });

    test("rev", async () => {
        let word = "useresu";
        let rev = "";

        for (let i = word.length - 1; i >= 0; i--) {
            rev += word.charAt(i);
        }

        console.log(rev);
    });

    test("palindrome", async () => {
        let word = "useresu";
        let rev = "";

        for (let i = word.length - 1; i >= 0; i--) {
            rev += word.charAt(i);
        }

        let a = rev === word ? "it is palindrome" : "it is not palindrome";
        console.log(a);
    });

    test("reverse without loop", async ({ }) => {
        function reverse(str) {
            if (str.length === 0) {
                return str;
            }
            return reverse(str.substring(1)) + str.charAt(0);
        }
        console.log(reverse("google"));
    });

    test("occurance", async ({ }) => {
        let str = "google";
        let freq = {};

        for (let ch of str) {
            if (freq[ch]) {
                freq[ch]++;
            } else {
                freq[ch] = 1
            }
        }
        console.log(freq);
    });
    test("occurance 2", async ({ }) => {
        let str = "google";
        let freq = {};

        for (let ch of str) {
            freq[ch] = (freq[ch] || 0) + 1;
        }
        for (let key in freq) {
            console.log(key + " = " + freq[key]);
        }
    });

    test("occurance using map", async ({ }) => {
        let str = "google";
        let map = new Map();

        for (let ch of str) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }
        for (let [key, value] of map) {
            console.log(key + " = " + value);
        }

    });
    test("duplicate in a string", async ({ }) => {
        let str = "google";
        let freq = {};

        for (let ch of str) {
            freq[ch] = (freq[ch] || 0) + 1;
        }
        for (let key in freq) {
            if (freq[key] > 1) {
                console.log(key);
            }
        }
    })
    test("remove duplciate ", async ({ }) => {
        let str = "google";
        let result = "";

        for (let ch of str) {
            if (!result.includes(ch)) {
                result += ch;
            }
        }
        console.log(result);
    })
    test("remove duplicate using object", async ({ }) => {
        let str = "google";
        let freq = {};
        let result = "";

        for (let ch of str) {
            if (!freq[ch]) {
                result += ch;
                freq[ch] = true;
            }
        }
        console.log(result);
    })
    test("remove duplicate using set", async ({ }) => {
        let str = "google";
        let result = [...new Set(str)].join("");
        console.log(result);
    })
    test("sum of digits in a string", async ({ }) => {
        let str = "a1b2c3d4";
        let sum = 0;

        for (let ch of str) {
            if (ch >= '0' && ch <= '9') {
                sum += Number(ch);
            }
        }
        console.log(sum);
    })
    test("sum of number using regex", async ({ }) => {
        let str = "ab12cd34ef56";
        let nums = str.match(/\d+/g);

        let sum = 0;

        for (let n of nums) {
            sum += Number(n);
        }
        console.log(sum);   //102   12+34+56 = 102
    })

    test("find number of spec, digit, char", async ({ }) => {
        let str = "Hello@123#";

        let alp = 0;
        let spec = 0;
        let digit = 0;

        for (let ch of str) {
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                alp++;
            } else if (ch >= '0' && ch <= '9') {
                digit++;
            } else {
                spec++;
            }
        }
        console.log(alp, spec, digit);
    })
    test("find number of using regex", async ({ }) => {
        let str = "Hello@123#";

        let alphabets = (str.match(/[a-z]/gi) || []).length;
        let digits = (str.match(/\d/g) || []).length;
        let specials = (str.match(/[^a-z0-9]/gi) || []).length;

        console.log(alphabets, digits, specials);
    });

    test("anagram", async ({ }) => {
        let str1 = "listen";
        let str2 = "silent";

        let s1 = str1.toLowerCase().split("").sort().join("");
        let s2 = str2.toLowerCase().split("").sort().join("");

        if (s1 === s2) {
            console.log("is anagram");
        }
        else {
            console.log("not anagram");
        }
    })
    test("anagram using freq object", async ({ }) => {
        let str1 = "listen";
        let str2 = "silent";

        if (str1.length !== str2.length) {
            console.log("not anagram");
        } else {
            let freq = {};

            for (let ch of str1) {
                freq[ch] = (freq[ch] || 0) + 1;
            }
            for (let ch of str2) {
                if (!freq[ch]) {
                    console.log("not anagram");
                    return;
                }
                freq[ch]--;
            }
            console.log("anagram");
        }
    })
    test("one line anagram", async ({ }) => {
        let str1 = "listen";
        let str2 = "silent";

        let isAnagram = str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
        console.log(isAnagram);
    })
    test("swap 2string", async ({ }) => {
        let a = "Hello";
        let b = "World";

        a = a + b;
        b = a.substring(0, a.length - b.length);
        a = a.substring(b.length);

        console.log("a =", a);
        console.log("b =", b);
    })
    test('swap using destructuring', async ({ }) => {
        let a = "Hello";
        let b = "World";

        [a, b] = [b, a];
        console.log(a);
        console.log(b);
    })
    test("possible substring", async ({ }) => {
        let str = "abc";

        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                console.log(str.substring(i, j));
            }
        }
    })
    test("possible substring using array", async ({ }) => {
        let str = "abc";
        let result = [];

        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                result.push(str.substring(i, j));
            }
        }
        console.log(result);
    })
    test("substring greater than 2", async ({ }) => {
        let str = "abc";

        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                let result = str.substring(i, j);
                if (result.length > 2) {
                    console.log(result);
                }
            }
        }
    })

    test("palindrome substring", async ({ }) => {
        let str = "madam";
        let len = 0;
        let pal = '';
        for (let i = 0; i < str.length - 1; i++) {
            for (let j = i + 1; j < str.length; j++) {
                let sub = str.substring(i, j);
                let rev = sub.split("").reverse().join("");

                if (sub === rev && sub.length > len) {
                    len = sub.length
                    pal = sub;
                }
            }
        }
        console.log(pal);
    })
    test('compress a string', async ({ }) => {
        let s = "aabbacaa";
        let count = 0;

        for (let i = 0; i < s.length - 1; i++) {
            if (s.charAt(i) === s.charAt(i + 1)) {
                count++;
            } else {
                process.stdout.write(s.charAt(i) + "" + count);
                count = 1;
            }
        }
        process.stdout.write(s.charAt(s.length - 1) + " " + count);
    })

    test("compress uging array", async ({ page }) => {
        let str = "aaabbccddd";
        let arr = [];
        let count = 1;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                count++;
            } else {
                arr.push(str[i] + count);
                count = 1;
            }
        }
        console.log(arr.join(""));
    })
    test("expand a String", async ({ }) => {
        let s = "a2b2a1c1a2";

        for (let i = 0; i < s.length; i = i + 2) {
            let ch = s.charAt(i);
            let num = s.charAt(i + 1);

            for (let j = 1; j <= num; j++) {
                process.stdout.write(ch);
            }
        }
    });
    test('expand string', async ({ page }) => {
        let str = "a3b2c2d3";
        let result = "";

        for (let i = 0; i < str.length; i += 2) {
            resutl += str[i].repeat(Number(str[i + 1]));
        }
        console.log(result);
    })
    test('handle expand multiple', async ({ page }) => {
        let str = "a12b3c10";
        let result = "";
        let i = 0;

        while (i < str.length) {
            let ch = str[i++];
            let num = "";

            while (i < str.length && !NaN(str[i]) && str[i] !== " ") {
                num += str[i];
                i++;
            }
            result += ch.repeat(Number(num));
        }
        console.log(result);
    });
    test("balanced String", async ({ page }) => {
        let str = "{[()]}";
        let stack = [];

        let pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        let balance = true;

        for (let ch of str) {
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            } else {
                if (stack.pop() !== pairs[ch]) {
                    balance = false;
                    break;
                }
            }
        }
        if (stack.length !== 0) balance = false;

        console.log(balance ? "balanced" : "not balanced");
    })
    test('reverse sentence', async ({ page }) => {
        let str = "I Love Javascript";
        let rev = "";

        for (let i = str.length - 1; i >= 0; i--) {
            rev += str[i];
        }
        console.log(rev);
    })
    test('reverse word order', async ({ page }) => {
        let str = "I Love JavaScript";
        let result = str.split("").reverse().join("");
        console.log(result);
    })
    test('revers each word and keep sentence order', async ({ page }) => {
        let str = "I Love Javascript";
        let result = str
            .split(" ")
            .map(word => word.split("").reverse().join(""))
            .join(" ");

        console.log(result);
    })
    test('rever word without reverse', async ({ page }) => {
        let str = "I Love Javascript";
        let words = str.split(" ");
        let result = "";

        for (let i = words.length - 1; i >= 0; i--) {
            result += words[i] + " ";
        }
        console.log(result.trim());
    })
    test('inticap', async ({ page }) => {
        let str = "hello world javascript";

        let result = str.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        console.log(result);
    })
    test('using map inticap', async ({ page }) => {
        let str = "hello world javascript";
        let words = str.split(" ");
        let result = "";

        for (let word of words) {
            result += word[0].toUpperCase() +
                word.slice(1).toLowerCase() + " ";
        }
        console.log(result.trim());
    })
    test("repair return claim", async ({ page }) => {
        let str = "repair return claim";
        let words = str.split(" ");
        let result = "";

        for (let i = 0; i < words.length; i++) {
            result += words[i].substring(0, 1).toUpperCase() +
                words[i].substring(1) + " ";
        }
        console.log(result.trim());
    })
    test('character by character', async ({ page }) => {
        let str = "reapir return claim";
        let result = "";
        let capitalize = true;

        for (let ch of str) {
            if (capitalize) {
                result += String.fromCharCode(ch.charCodeAt(0) - 32);//toUpperCase
                capitalize = false;
            } else {
                result += ch;
            }
            if (ch === " ") {
                capitalize = true;
            }
        }
        console.log(result);
        console.log(String.fromCharCode('a'.charCodeAt(0) - 32)); // A 
        console.log(String.fromCharCode('A'.charCodeAt(0) + 32)); // a
    })
    test("swap 1st and last word", async ({ page }) => {
        let str = "I Love Javascript Programming";

        let words = str.split(" ");

        let temp = words[0];
        words[0] = words[words.length - 1];
        words[words.length - 1] = temp;

        console.log(words.join(" "));
    })

    test("swap without variable (Destructuring)", async ({ page }) => {
        let str = "I Love Javascript Programming";
        let words = str.split(" ");

        [words[0], words[words.length - 1]] = [words[words.length - 1], words[0]];

        console.log(words.join(" "));
    })

    test("reverse word without space", async ({ page }) => {
        let str = "ab cd ef";

        let arr = str.split("");
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            if (arr[left] === " ") {
                left++;
            }
            else if (arr[right] === " ") {
                right--;
            }
            else {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        console.log(arr.join(""));
    })
    test("without reverseing spaces", async ({ page }) => {
        let a = 'i am main';
        let s1 = a.replace(" ", "");
        let index = s1.length - 1;

        for (let i = 0; i < a.length - 1; i++) {
            if (a.charAt(i) == ' ') {
                console.log(" ");
            } else {
                console.log(s1.charAt(index--));
            }
        }
    })

    test("panagram", async ({ page }) => {
        let str = "The quick brown fox jumps over the lazy dog";
        str = str.toLowerCase();
        let letters = new Set();

        for (let ch of str) {
            if (ch >= 'a' && ch <= 'z') {
                letters.add(ch);
            }
        }
        console.log(letters.size === 26 ? "Panagram" : "Not Panagram");
    })
    test("panagram using frequency", async ({ page }) => {
        let str = "The quick brown fox jumps over the lazy dog";
        str = str.toLowerCase();
        let freq = {};

        for (let ch of str) {
            if (ch >= 'a' && ch <= 'z') {
                freq[ch] = (freq[ch] || 0) + 1;
            }
        }
        console.log(Object.keys(freq).length === 26 ? "panagram" : "not panagram");
    })
    test('using includes', async ({ page }) => {
        let str = "The quick brown fox jumps over the lazy dog";
        str = str.toLowerCase();
        let isPanagram = true;

        for (let i = 97; i <= 122; i++) {
            let ch = String.fromCharCode(i);

            if (!str.includes(ch)) {
                isPanagram = false;
                break;
            }
        }
        console.log(isPanagram ? "Panagram" : "Not Panagram");
    })

    test("reverse word order & reverse each word", async ({ page }) => {
        let str = "I Love Javascript";
        let result = str
            .split(" ")
            .map(word => word.split("").reverse().join(""))
            .join(" ");

        console.log(result);
    })

    test('without reverse method', async ({ page }) => {
        let str = "I Love Javascript";
        let words = str.split(" ");
        let result = "";

        for (let i = words.length - 1; i >= 0; i--) {
            let revWord = "";

            for (let j = words[i].length - 1; j >= 0; j--) {
                revWord += words[i][j];
            }
            result += revWord + " ";
        }
        console.log(result.trim());
    })
    test("occurance no freq", async ({ page }) => {
        let str = "dielan sequence akfg character";
        let arr = str.split("");
        let visited = new Array(arr.length).fill(false);

        for (let i = 0; i < arr.length; i++) {
            if (!visited[i]) {
                let count = 0;

                for (let j = 0; j < arr.length; j++) {
                    if (arr[i] === arr[j]) {
                        visited[j] = true;
                        count++;
                    }
                }
                if (count === 2) {
                    console.log(arr[i] + " ---> " + count);
                }
            }
        }
    })
});

describe("all array programmes", async ({ }) => {
    test('minimum and maximum array', async ({ page }) => {
        let arr = [10, 5, 25, 3, 18, 40, 7];
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        console.log("Minimum: " + min);
        console.log("Maximum: " + max);
    })

    test("min and max", async ({ page }) => {
        let arr = [10, 5, 25, 3, 18, 40, 7];
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        console.log(min, max);
    })

    test("2min and max2", async ({ page }) => {
        let arr = [10, 5, 25, 3, 18, 40, 7];
        arr.sort((a, b) => a - b);
        console.log(arr[1], arr[arr.length - 2]);
    })
    test("min and max without sorting", async ({ page }) => {
        let arr = [10, 5, 25, 3, 18, 40, 7];
        let min = Infinity;
        let sMin = Infinity;

        let max = -Infinity;
        let sMax = -Infinity;

        for (let num of arr) {
            if (num < min) {
                sMin = min;
                min = num;
            } else if (num < sMin && num !== min) {
                sMin = num;
            }

            if (num > max) {
                sMax = max;
                max = num;
            } else if (num > sMax && num !== max) {
                sMax = num;
            }
        }
        console.log(min, sMin, max, sMax);
    })
    test("left rotation of integer array", async ({ page }) => {
        let arr = [1, 2, 3, 4, 5];
        let first = arr[0];

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = first;
        console.log(arr);
    })
    test("left rotation by k position", async ({ page }) => {
        let arr = [1, 2, 3, 4, 5];
        let k = 2;
        for (let r = 0; r < k; r++) {
            let first = arr[0];

            for (let i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[arr.length - 1] = first;
        }
        console.log(arr);
    })
    test("rotate using slice()", async ({ page }) => {
        let arr = [1, 2, 3, 4, 5];
        let k = 2;

        k = k % arr.length;
        let result = arr.slice(k).concat(arr.slice(0, k));

        console.log(result);
    })

    test("right shift", async ({ page }) => {
        let arr = [1, 2, 3, 4, 5];
        let last = arr[arr.length - 1];

        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = last;
        console.log(arr);
    })
    test("right shift2", async ({ page }) => {
        let arr = [1, 2, 3, 4, 5];
        let k = 2;

        k = k % arr.length;

        let result = arr.slice(-k).concat(arr.slice(0, arr.length - k));

        console.log(result);
    })
    test("zeros to the left & right side", async ({ page }) => {
        let arr = [1, 0, 2, 0, 3, 0, 4, 5];
        let zeros = arr.filter(num => num === 0);
        let nums = arr.filter(num => num !== 0);
        console.log([...zeros, ...nums]);
        console.log([...nums, , ...zeros]);
    })
    test("using array", async ({ page }) => {
        let arr = [1, 0, 2, 0, 3, 0, 4, 5];
        let zeros = [];
        let nums = [];
        for (let num of arr) {
            if (num === 0) {
                zeros.push(num);
            } else {
                nums.push(num);
            }
        }
        let result = zeros.concat(nums);
        console.log(result);
    })
    test("without array", async ({ page }) => {
        let arr = [1, 0, 2, 0, 3, 0, 4, 5];
        let right = arr.length - 1;

        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] !== 0) {
                arr[right] = arr[i];
                right--;
            }
        }
        while (right >= 0) {
            arr[right] = 0;
            right--;
        }
        console.log(arr);
    })
    test("left side rotate", async ({ page }) => {
        let arr = [1, 0, 2, 0, 3, 0, 4, 5];
        let left = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                arr[left] = arr[i];
                left++;
            }
        }
        while (left < arr.length) {
            arr[left] = 0;
            left++;
        }
        console.log(arr);
    })
    test("rotate using sort", async ({ page }) => {
        let arr = [1, 0, 2, 0, 3, 0, 4, 5];
        arr.sort((a, b) => a === 0 ? -1 : b === 0 ? 1 : 0);
        console.log(arr);
    })
    test('sum of 2 arrays', async ({ page }) => {
        let arr1 = [1, 2, 3, 4];
        let arr2 = [5, 6, 7, 8];

        let result = [];
        for (let i = 0; i < arr1.length; i++) {
            result[i] = arr1[i] + arr2[i];
        }
        console.log(result);
    })
    test('sum of array using map', async ({ page }) => {
        let arr1 = [1, 2, 3, 4];
        let arr2 = [5, 6, 7, 8];

        let result = arr1.map((num, index) => num + arr2[index]);
        console.log(result);
    })
    test('sum of even array', async ({ page }) => {
        let arr1 = [1, 2, 3, 4];
        let arr2 = [5, 6, 7, 8];

        let len = arr1.length > arr1.length
            ? arr1.length : arr2.length;

        let result = [];
        for (let i = 0; i < len; i++) {
            let a = i < arr1.length ? arr1[i] : 0;
            let b = i < arr2.length ? arr2[i] : 0;
            result[i] = a + b;
        }
        console.log(result);
    })
    test('sum of arra usin map', async ({ }) => {
        let arr1 = [1, 2, 3, 4, 5];
        let arr2 = [10, 20, 30];

        let result = arr1.map((num, index) => num + (arr2[index] || 0));
        console.log(result);
    })
    test("if second array larger", async ({ }) => {
        let arr1 = [1, 2];
        let arr2 = [10, 20, 30, 40];

        let len = Math.max(arr1.length, arr2.length);
        let result = [];

        for (let i = 0; i < len; i++) {
            result[i] = (arr1[i] || 0) + (arr2[i] || 0);
        }
        console.log(result);
    })
    test('sum of all array', async ({ }) => {
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];

        let sum = 0;

        for (let ar1 of arr1) {
            sum += ar1;
        }
        for (let ar2 of arr2) {
            sum += ar2;
        }
        console.log(sum);
    })
    test('sum using reduce method', async ({ }) => {
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];

        let sum =
            arr1.reduce((a, b) => a + b, 0) +
            arr2.reduce((a, b) => a + b, 0);

        console.log(sum);
    })
    test("position of duplicate element", async ({ }) => {
        let arr = [10, 20, 30, 20, 40, 10, 50, 20];
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) !== i) {
                console.log(`element ${arr[i]} is duplicate at position ${i}`);
            }
        }
    })
    test("position of duplicate without inbuilt", async ({ }) => {
        let arr = [10, 20, 30, 20, 40, 10, 50, 20];
        for (let i = 0; i < arr.length; i++) {
            let duplicate = false;

            for (let j = 0; j < i; j++) {
                if (arr[i] === arr[j]) {
                    duplicate = true;
                    break;
                }
            }
        }
        if (duplicate) {
            console.log(`element ${arr[i]} is duplicate at position ${i}`);
        }
    })
    test('occurance position', async ({ }) => {
        let arr = [10, 20, 30, 20, 40, 10, 50, 20];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    console.log(`Element ${arr[i]} found at position ${i} and ${j}`);
                }
            }
        }
    })
    test('position using map', async ({ }) => {
        let arr = [10, 20, 30, 20, 40, 10, 50, 20];
        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                console.log(`element ${arr[i]} is duplicated at position ${i}`);
            } else {
                map.set(arr[i], i);
            }
        }
    })
    test('position usuing map', async ({ }) => {
        let arr = [10, 20, 30, 20, 40, 10, 50, 20];

        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                console.log(
                    `Element ${arr[i]} found at positions ${map.get(arr[i])} and ${i}`
                );
            } else {
                map.set(arr[i], i);
            }
        }
    })
    test('position of all duplicate', async ({ }) => {
        let arr = [10, 20, 30, 20, 40, 10, 50, 20];

        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                map.get(arr[i]).push(i);
            } else {
                map.set(arr[i], [i]);
            }
        }

        for (let [key, positions] of map) {
            if (positions.length > 1) {
                console.log(`${key} -> ${positions}`);
            }
        }
    })
    test('target sum', async ({ }) => {
        let arr = [2, 7, 11, 15];
        let target = 9;

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    console.log(`pair : ${arr[i]}, ${arr[j]}`);
                    console.log(`Indices :${i},${j}`);
                }
            }
        }
    })

    test("target using map", async ({ }) => {
        let arr = [2, 7, 11, 15];
        let target = 9;

        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            let complete = target - arr[i];

            if (map.has(complete)) {
                console.log(`Pair :${complete},${arr[i]} `);
                console.log(`Indices : ${map.get(complete)},${i}`);
                break;
            }
            map.set(arr[i], i);
        }
    })
    test("target using includes", async ({ }) => {
        let arr = [2, 7, 11, 15];
        let target = 9;

        for (let i = 0; i < arr.length; i++) {
            let complete = target - arr[i];

            if (arr.includes(complete, i + 1)) {
                console.log(arr[i], complete);
            }
        }
    })
});

describe("all pattern programmesds", ({ }) => {

    test("square patern", async ({ }) => {
        let n = 5;

        for (let i = 1; i <= n; i++) {
            let row = "";
            for (let j = 1; j <= n; j++) {
                row += "* ";
            }
            console.log(row);
        }
    })

    test('right triangle', async ({ }) => {
        let n = 5;
        for (let i = 1; i <= n; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
            console.log(row);
        }
    })
    test('inverted right triagle', async ({ }) => {
        let n = 5;
        for (let i = n; i >= 1; i--) {
            let row = " ";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
            console.log(row);
        }
    })
    test('left triangle', async ({ }) => {
        let n = 5;
        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= n - i; j++) {
                row += " ";
            }
            for (let k = 1; k <= i; k++) {
                row += "*";
            }
            console.log(row);
        }
    })
    test("pyramid", async ({ }) => {
        let n = 5;

        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= n - i; j++) {
                row += " ";
            }
            for (let k = 1; k <= (2 * i - 1); k++) {
                row += "*";
            }
            console.log(row);
        }
    })
    test("number triangle", async ({ }) => {
        let n = 5;

        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                row += j + " ";
            }

            console.log(row);
        }
    })
})

describe('numbers programme', ({ }) => {

    test('prime number check', async ({ }) => {

        let num = 17;
        let isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        console.log(isPrime ? "prime number" : "not");
    })
    test("prime number using array", async ({ }) => {
        let num = 13;
        let prime =
            num > 1 && [...Array(num - 2)].every((_, i) => num % (i + 2) !== 0);
        console.log(prime)
    })

    test('fibannoci', async ({ }) => {
        let n = 10;
        let a = 0;
        let b = 1;

        for (let i = 3; i <= n; i++) {
            let c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    })
    test('fibanoci using array', async ({ }) => {
        let n = 10;
        let arr = [0, 1];

        for (let i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        console.log(arr);
    })

    test('fibannoci using while', async ({ }) => {
        let a = 0;
        let b = 1;

        while (a <= 50) {
            console.log(a);

            let c = a + b;
            a = b;
            b = c;
        }
    })

    test("factorial", async ({ }) => {
        let n = 5;
        let fact = 1;

        for (let i = 2; i <= n; i++) {
            fact = fact * i;
        }
        console.log(fact);
    })

    test('factorial recursive approach', async ({ }) => {
        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * factorial(n - 1);
        }
        console.log(factorial(5));
    })
    test("power of number", async ({ }) => {
        function power(base, exponent) {
            let result = 1;

            for (let i = 1; i <= exponent; i++) {
                console.log(result *= base);
            }
            return result;
        }
        console.log(power(2, 5));
    })
    test('power using power method', async ({ }) => {
        console.log(Math.pow(2, 5));
        console.log(2 ** 5);
    })

    test('swap number without using 3rd variable', async ({ }) => {
        let a = 10;
        let b = 20;

        a = a + b;
        b = a - b;
        a = a - b;
        console.log(a, b);

        let c = 10;
        let d = 20;
        let temp = d;
        d = c;
        c = temp;
        console.log(c, d);

        let e = 10;
        let f = 20;
        [e, f] = [f, e];
        console.log(e, f)
    })
    test('palindrome number', async ({ }) => {
        function isPali(num) {
            let original = num;
            let reverse = 0;

            while (num > 0) {
                let digit = num % 10;
                reverse = reverse * 10 + digit;
                num = Math.floor(num / 10);
            }
            return original === reverse;
        }
        console.log(isPali(121));
        console.log(isPali(123));
    })
    test('palindrome conv to string', async ({ }) => {
        function isPali(num) {
            let str = num.toString();
            return str === str.split("").reverse().join("");
        }
        console.log(isPali(121));
        console.log(isPali(123));
    })
    test('denomination of the currency programme', async ({ }) => {
        function denomination(amount) {
            let notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

            for (let note of notes) {
                let count = Math.floor(amount / note);
                if (count > 0) {
                    console.log(`${note} x ${count} = ${note * count}`);
                    amount = amount % note;
                }
            }
        }
        console.log(denomination(7868));
    })
    test("denomination friedlyWay", async ({ }) => {
        let amount = 7868;
        let notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

        for (let i = 0; i < notes.length; i++) {
            while (amount >= notes[i]) {
                console.log(notes[i]);
                amount -= notes[i];
            }
        }
    })
    test('number divisibility', async ({ }) => {
        let num = 21;

        if (num % 5 == 0 && num % 3 == 0) {
            console.log('hai bye');
        } else if (num % 5 == 0) {
            console.log('hai');
        } else if (num % 3 == 0) {
            console.log('bye');
        }
    })

})
describe('extra', async ({ }) => {

    test('reverse only given word in sentence', async ({ }) => {
        let str = "I Love Java";
        let target = "Love";
        let reversed = "";

        for (let i = target.length - 1; i >= 0; i--) {
            reversed += target[i];
        }
        let result = str.replace(target, reversed);
        console.log(result);
    })
    test('using rev', async ({ }) => {
        function reverseWords() {
            let str = "representational state transfer restful";
            let arr = str.split(" ");

            for (let i = 0; i < arr.length; i++) {
                if (
                    arr[i].toLowerCase() === "state" ||
                    arr[i].toLowerCase() === "restful"
                ) {
                    arr[i] = arr[i].split("").reverse().join("");
                }
            }

            console.log(arr.join(" "));
        }
        reverseWords();
    })
    test('longest word', async ({ }) => {
        let str = "represntation state transfter restfull";

        let words = str.split(" ");
        let longest = "";

        for (let word of words) {
            if (word.length > longest.length) {
                longest = word;
            }
        }
        console.log(longest);
    })
    test('long using reduce()', async ({ }) => {
        let str = "represntation state transfter restfull";
        let longest =
            str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
        console.log(longest);
    })
    test('using sorting longest', async ({ }) => {
        let str = "represntation state transfter restfull";

        let longest = str
            .split(" ")
            .sort((a, b) => b.length - a.length)[0];
        console.log(longest);
    })
    test('remove duplicate', async ({ }) => {
        let str = "hi hello hi hello how ar ehoasfd who";
        let arr = str.split(" ");
        let result = "";

        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
                result += arr[i] + " ";
            }
        }
        console.log(result.trim());

        let mr = "hi hello hi hello how ar ehoasfd who";

        let result1 = [...new Set(mr.split(" "))];

        console.log(result1.join(" "));
    })
    test('till sorted array', async ({ }) => {
        let arr = [9, 8, 7, 6, 5, 1, 2];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                console.log(i);
                break;
            }
        }
    })
    test('merge and sort the array', async ({ }) => {
        let arr1 = [5, 2, 8];
        let arr2 = [1, 9, 3];

        let result = [...arr1, ...arr2].sort((a, b) => a - b);

        console.log(result);
    })
    test('without using sort', async ({ }) => {
        let arr1 = [5, 2, 8];
        let arr2 = [1, 9, 3];

        let arr = [...arr1, ...arr2];

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log(arr);
    })
    test('without spreaad', ({ }) => {
        let arr1 = [5, 2, 8];
        let arr2 = [1, 9, 3];

        let merged = [];

        for (let i = 0; i < arr1.length; i++) {
            merged.push(arr1[i]);
        }

        for (let i = 0; i < arr2.length; i++) {
            merged.push(arr2[i]);
        }

        merged.sort((a, b) => a - b);

        console.log(merged);
    })
    test('reverse part of the word', async ({ }) => {
        let str = "goodhello";

        let firstPart = str.substring(0, 4); // good
        let secondPart = str.substring(4);   // hello

        let result = firstPart.split("").reverse().join("") + secondPart;

        console.log(result); // dooghello

        //for loop from half to 0
    })
    test('last half in descending order', async ({ }) => {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];

        let mid = Math.floor(a.length / 2);

        let firstHalf = a.slice(0, mid);
        let second = a.slice(mid).sort((a, b) => b - a);

        let result = [...firstHalf, ...second];
        console.log(result);
    })

    test('happy number', async ({ }) => {
        let n = 34912375;
        while (n > 9) {
            let sum = 0;
            while (n > 0) {
                sum += n % 10;
                n = Math.floor(n / 10);
            }
            n = sum;
        }
        console.log(n);
    })
    test('happy number1', async ({ }) => {
        let num = 1265;
        let sum = 0;

        while (num > 0) {
            let d = num % 10;
            num = Math.floor(num / 10);
            sum += d;
        }

        if (sum > 9) {
            let nu = sum % 10;
            let v = Math.floor(sum / 10);
            sum = v + nu;
        }

        console.log(sum); // 5
    })
    test('reverse only characters in a string', async ({ }) => {
        let a = "kjf35&^%abc354";
        let b = a.replace(/[^a-zA-Z]/g, "");
        let index = b.length - 1;

        let result = "";

        for (let ch of a) {
            if (!/[a-zA-Z]/.test(ch)) {
                result += ch;
            } else {
                result += b[index--];
            }
        }
        console.log(result);
    })
    test('reverse character using match and shift', async ({ }) => {
        let str = "kjf35&^%abc354";

        let chars = str.match(/[a-zA-z]/g).reverse();
        let result = "";

        for (let ch of str) {
            result += /[a-zA-Z]/.test(ch) ? chars.shift() : ch;
        }
        console.log(result);
    })
    test('reverse using 2 pointer', async ({ }) => {
        let arr = "kjf35&^%abc354".split("");
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            if (!/[a-zA-Z]/.test(arr[left])) {
                left++;
            } else if (!/[a-zA-Z]/.test(arr[right])) {
                right--;
            } else {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
        }
        console.log(arr.join(" "))
    })
    test('unique or duplcate', async ({ }) => {
        let str = "programming";

        for (let ch of str) {
            if (str.indexOf(ch) === str.lastIndexOf(ch)) {
                console.log(ch);
            }
        }
    })
    test('repaeated word in string using split', async ({ }) => {
        let input = "javaseleniumjavapython";
        let val = "java";

        let count = input.split(val).length - 1;
        console.log(`${val} repeated ${count}`);
    })
    test('repeacted using match', async ({ }) => {
        let input = "javaseleniumjavapython";
        let val = "java";

        let count = (input.match(new RegExp(val, "g")) || []).length;
        console.log(`${val} repeated ${count}`);
    })
    test('repeated using substring', async ({ }) => {
        let input = "javaseleniumjavapython";
        let val = "java";
        let count = 0;

        for (let i = 0; i <= input.length - val.length; i++) {
            if (input.substring(i, i + val.length) === val)
                count++;
        }
        console.log(`${val} repeated ${count}`);
    })
    test('triplet', async ({ }) => {
        let a = [1, 2, 2, 2, 3, 6, 6, 6, 4, 5, 6, 6, 6, 7];
        let count = 0;

        for (let i = 0; i < a.length - 3; i++) {
            if (a[i] === a[i + 1] && a[i] === a[i + 2] && a[i] !== a[i + 3]) {
                count++;
            }
        }
        console.log(count);
    })
    test('check sorted', async ({ }) => {
        let a = [1, 2, 3, 4, 5];
        let came = true;

        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                came = false;
                break;
            }
        }
        console.log(came ? "sorted" : "not");
    })
    test("arrays of anagram", async ({ }) => {
        let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

        let map = new Map();

        for (let str of arr) {
            let sorted = str.split("").sort().join("");

            if (!map.has(sorted)) {
                map.set(sorted, []);
            }
            map.get(sorted).push(str);
        }
        for (let group of map.values()) {
            console.log(group);
        }
    })
    test('arry sort using plain object', async ({ }) => {
        let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
        let obj = {};

        for (let str of arr) {
            let sorted = str.split("").sort().join();

            if (!obj[sorted]) {
                obj[sorted] = [];
            }
            obj[sorted].push(str);
        }
        console.log(Object.values(obj));
    })
    test('triplets and qudruplicets', async ({ }) => {
        let arr = [0, 2, 1, 1, 1, 1, 2, 0, 2, 2, 2, 2, 5, 2, 6, 6, 6];

        let triplets = 0;
        let quadruplets = 0;

        let count = 1;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                count++;
            } else {
                if (count === 3) triplets++;
                if (count === 4) quadruplets++;

                count = 1;
            }
        }

        // Handle the last group
        if (count === 3) triplets++;
        if (count === 4) quadruplets++;

        console.log("Triplets:", triplets);
        console.log("Quadruplets:", quadruplets);
    })
    test('all to uppercase', async ({ }) => {
        let s = ["java", "selenium", "sql", "restAssured", "pm"];
        let p = s.map(a => a.toUpperCase());
        console.log(s, p);
    })
    test('remove duplicated sorted and even', async ({ }) => {
        let a = [5, 4, 3, 7, 8, 9, 6];
        let j = [...new Set(a)].sort((a, b) => a - b)
            .filter(i => i % 2 === 0);

        console.log(j);
    })
    test('find the missing number', async ({ }) => {
        function missingNumber(arr, n) {
            let expectSum = (n * (n + 1)) / 2;
            let actualSum = arr.reduce((sum, num) => sum + num, 0);

            return expectSum - actualSum;
        }
        let arr = [1, 2, 3, 5];
        console.log(missingNumber(arr, 5));
    })
    test('missing number sorted', async ({ }) => {
        let arr = [1, 2, 3, 5, 6];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] - arr[i] !== 1) {
                console.log(arr[i] + 1);
            }
        }
    })
    test('unique and duplicate string array', ({ }) => {
        let s1 = ["emma", "ella", "ravi", "nadeen"];
        let s2 = ["meera", "shali", "emma", "raveesh", "ella"];

        let set1 = new Set(s1);
        let duplicate = [];
        let unique = [];

        for (let name of s2) {
            if (set1.has(name)) {
                duplicate.push(name);
            } else {
                unique.push(name);
            }
        }
        for (let name of s1) {
            if (!s2.includes(name)) {
                unique.push(name);
            }
        }
        console.log(duplicate, "\n", unique);
    })
    test('unique duplicate using filter', ({ }) => {
        let s1 = ["emma", "ella", "ravi", "nadeen"];
        let s2 = ["meera", "shali", "emma", "raveesh", "ella"];

        let duplicate = s1.filter(name => s2.includes(name));
        let unique = [...s1, ...s2].filter(name => !duplicate.includes(name));
        console.log(duplicate, "\n", unique);
    })
})
describe('collections', async ({ }) => {
    test('map and object occurance', async ({ }) => {
        let arr = ["emma", "ella", "ravi", "nadeen", "emma", "ella", "emma"];

        let map = new Map();
        for (let name of arr) {
            map.set(name, (map.get(name) || 0) + 1);
        }
        for (let [key, value] of map) {
            console.log(key + " -> " + value);
        }

        let arr1 = ["emma", "ella", "ravi", "nadeen", "emma", "ella", "emma"];

        let obj = {};

        for (let name of arr1) {
            obj[name] = (obj[name] || 0) + 1;
        }

        console.log(obj);
    })
    test('merge and sort array', ({ }) => {
        let arr1 = [5, 2, 8, 1];
        let arr2 = [9, 3, 7, 4];

        let merged = [...arr1, ...arr2];

        merged.sort((a, b) => a - b);

        console.log(merged);
        //====================================\

        let merged1 = arr1.concat(arr2);

        merged1.sort((a, b) => a - b);

        console.log(merged1);
    })
    test('frequency', async ({ }) => {
        let a = [1, 2, 3, 4];
        let b = [6, 7, 8, 9, 1];
        let list = [];

        for (let aa of a) {
            list.push(aa);
        }
        for (let bb of b) {
            list.push(bb);
        }
        let frequency = list.filter(num => num === 1).length;
        console.log(frequency);
    })
    test('frequency normal way', ({ }) => {
        let a = [1, 2, 3, 4];
        let b = [6, 7, 8, 9, 1];

        let list = [];

        for (let aa of a) {
            list.push(aa);
        }

        for (let bb of b) {
            list.push(bb);
        }

        let count = 0;

        for (let num of list) {
            if (num === 1) {
                count++;
            }
        }

        console.log(count); // 2
        //==============\
        let count1 = [...a, ...b].filter(x => x === 1).length;
        console.log(count1);
    })
    test('maximum consecutive occurance', ({ }) => {
        let a = [1, 1, 0, 1, 0, 0, 1, 1, 1];

        let maxCount = 1;
        let count = 1;

        for (let i = 1; i < a.length; i++) {
            if (a[i] === a[i - 1]) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 1;
            }
        }
        maxCount = Math.max(maxCount, count)
        console.log(maxCount);
    })
    test("string array", ({ }) => {
        let s = ["Apple", "ant", "bat", "ball", "bannana", "cat", "apple", "", null];

        let list = [];
        for (let sa of s) {
            if (sa !== null && sa !== "") {
                list.push(sa.trim());
            }
        }
        list.sort();

        let map = new Map();
        for (let li of list) {
            let key = li.charAt(0).toLowerCase();

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(li);
        }
        console.log(Object.fromEntries(map));
    })
    test('string array fle', ({ }) => {
        let s = ["Apple", "ant", "bat", "ball", "bannana", "cat", "apple", "", null];

        let list = s
            .filter(str => str !== null && str !== "")
            .map(str => str.trim())
            .sort();

        let obj = {};

        for (let item of list) {
            let key = item[0].toLowerCase();

            if (!obj[key]) {
                obj[key] = [];
            }

            obj[key].push(item);
        }

        console.log(obj);
    })
    test('fromCharCOde', async ({ }) => {
        let word = "hello";
        let result = "";

        for (let i = 0; i < word.length; i++) {
            let ch = word[i];

            if (ch >= 'a' && ch <= 'z') {
                ch = String.fromCharCode(ch.charCodeAt(0) - 32);
            }
            result += ch;
        }
        console.log(result);
    })
    test('ascii vaules', async ({ }) => {
        let word = "hello";
        let result = "";

        for (let ch of word) {
            let ascii = ch.charCodeAt(0);

            if (ascii >= 97 && ascii <= 122) {
                result += String.fromCharCode(ascii - 32);
            } else {
                result += ch;
            }
        }

        console.log(result); // HELLO
    })
    test('using set missing number', ({ }) => {
        let a = [5, 4, 6, 8, 1];

        let set = new Set(a);

        let max = Math.max(...set);
        let min = Math.min(...set);

        for (let i = min; i < max; i++) {
            if (!set.has(i)) {
                console.log(i);
            }
        }
    })
    test('reverse only character', ({ }) => {
        let s = "My#Name$is.king";

        let letters = s.replace(/[^a-zA-Z]/g, "");
        let index = letters.length - 1;

        let result = "";

        for (let ch of s) {
            if (/[^a-zA-Z]/.test(ch)) {
                result += ch;
            } else {
                result += letters[index--];
            }
        }

        console.log(result);
    })
    test('reverse only number', ({ }) => {
        let s = "ab12#34cd56";

        let nums = s.replace(/[^0-9]/g, "");
        let index = nums.length - 1;

        let result = "";

        for (let ch of s) {
            if (/[0-9]/.test(ch)) {
                result += nums[index--];
            } else {
                result += ch;
            }
        }

        console.log(result);
    })
    test('reverse only special characters', ({ }) => {
        let s = "ab@12#cd$56";

        let specials = s.match(/[^a-zA-Z0-9]/g)?.join("") || "";
        let index = specials.length - 1;

        let result = "";

        for (let ch of s) {
            if (/[^a-zA-Z0-9]/.test(ch)) {
                result += specials[index--];
            } else {
                result += ch;
            }
        }

        console.log(result);
    })

})



