export const SAVE_USERSTART = '[USERSTART] USERSTART';


export const saveUserStart = (date) =>{
    return{
        type: SAVE_USERSTART,
        payload: date
    }
}