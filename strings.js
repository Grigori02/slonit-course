const capitalizeFirstLetter = (text) => {
    return text ? text[0].toUpperCase()+ text.slice(1) : text;
}


const truncateString = (s, maxLength) => {
    if (s.length <= maxLength) {
        return s;
    }
    
    let truncated = s.slice(0, maxLength).trim();
    let match = truncated.match(/[ ,.!?:;)](?=[^ ,.!?:;)]+$)/);
    if (match) {
        truncated = truncated.slice(0, match.index);
    }
    
    return truncated + '...';
}

const isSubstring = (s1, s2) => {
    return s1.includes(s2) || s2.includes(s1);
}


console.log(capitalizeFirstLetter("test text"));
console.log(truncateString("My name is Grigori and I am a developer", 25));
console.log(isSubstring("dev", "developer"));
