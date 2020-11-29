export const SAVE_NEWS = '[NEWS] NEWS';


export const saveNews = (date) =>{
    return{
        type: SAVE_NEWS,
        payload: date
    }
}