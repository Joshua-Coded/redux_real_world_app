export const toDisplayableDateFormat = (dateString) => {
let date = new Date(dateString);
return `${date.getDate()}
    ${date.toLocaleDateString("en-US", {month: 'short'})}
    ${date.getFullYear()}
    ${date.toLocaleString("en-US", {hour: 'numeric',minute:
    'numeric', hour12: 'true'})}
    `
}