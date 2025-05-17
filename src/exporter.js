
function deepMerge(target, source) {
    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null && target[key]) {
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

if (!globalThis.java) {
    globalThis.java = java;
} else {
    deepMerge(globalThis.java, java)
}

if (!globalThis.sun) {
    globalThis.sun = sun;
} else {
    deepMerge(globalThis.sun, sun)
}
