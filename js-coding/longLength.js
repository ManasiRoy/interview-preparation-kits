let getLength = function (str) {
    let xyz = [];
    let finalLength = 0;

    for (let i = 0; i < str.length; i++) {
        const abc = xyz.indexOf(str[i]);

        if (abc !== -1) {
            xyz.splice(0, abc + 1);
        }

        xyz.push(str[i]);
        finalLength = Math.max(finalLength, xyz.length);
    }

    return finalLength;
};

const str = "abbbcabcdefef";

console.log(getLength(str));