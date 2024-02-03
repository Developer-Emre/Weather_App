export const getCurrentData = () => {
    const currentData = new Date().toLocaleDateString
    ('en-EN',{
        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric",

    });
    return currentData;
}