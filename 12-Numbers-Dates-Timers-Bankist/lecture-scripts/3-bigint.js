// MAX SAFE INTEGER is 2^53 - 1
/**
 * Number.MAX_SAFE_INTEGER is the largest number that can be safely represented
 * Everything larger than this has to be represented using a bigint
 */

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// Unsafe
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// BigInt
console.log(434358349234902344293n);
console.log(BigInt(4234534224354323232));

// Operations
console.log(10000n + 10000n);
console.log(1334543534324312131232131n * 23243324234324n);
