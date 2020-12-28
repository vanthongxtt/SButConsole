const checkEmailAddress = (email) =>{
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEmail.test(email);
}
const isEmpty = (text) =>{
    return text.length === 0 || text === null || text === undefined || text === '';
}
export {checkEmailAddress, isEmpty};