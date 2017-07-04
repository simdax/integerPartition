function swap(a, i, j) {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
}

function reverseSuffix(a, start) {
    if (start === 0) {
        a.reverse();
    }
    else {
        let left = start;
        let right = a.length - 1;

        while (left < right)
            swap(a, left++, right--);
    }
}

function nextPermutation(a) {
    // 1. find the largest index `i` such that a[i] < a[i + 1].
    // 2. find the largest `j` (> i) such that a[i] < a[j].
    // 3. swap a[i] with a[j].
    // 4. reverse the suffix of `a` starting at index (i + 1).
    //
    // For a more intuitive description of this algorithm, see:
    //   https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
    const reversedIndices = [...Array(a.length).keys()].reverse();

    // Step #1; (note: `.slice(1)` maybe not necessary in JS?)
    const i = reversedIndices.slice(1).find(i => a[i] < a[i + 1]);

    if (i === undefined) {
        a.reverse();
        return false;
    } 

    // Steps #2-4
    const j = reversedIndices.find(j => a[i] < a[j]);
    swap(a, i, j);
    reverseSuffix(a, i + 1);
    return true;
}

function* uniquePermutations(a) {
    const b = a.slice().sort();

    do {
        yield b.slice();
    } while (nextPermutation(b));
}

export default uniquePermutations;

// usage

// let a = ['^','^','>','>','+','<','<'];
// let ps = Array.from(uniquePermutations(a));
// let qs = ps.map(p => p.join(""));

// console.log(ps.length);
// console.log(new Set(qs).size);