export const get_entry = (data , entry) => {

    if(data[entry] !== null){

        return data[entry];
    
    }else{

        return null;
    }


}


export const convert_date = (date) => {

    var date1 = new Date(date);
    var date = date1.getDate();
    var month = date1.getMonth() + 1; 
    var year = date1.getFullYear();
    var dateStr = date + "/" + month + "/" + year;
    return dateStr;

}                   