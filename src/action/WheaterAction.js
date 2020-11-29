export const SAVE_COUNTRY = '[WHEATER] SAVE_COUNTRY';


export const saveCountryAction = (date) =>{
    return{
        type: SAVE_COUNTRY,
        payload: date
    }
}