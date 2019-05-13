class Data {
constructor(){
console.log('dd')
}
 sendPersonalData(){
    let item = [{
        'key': 'Name',
        'value': 'Vishal'
    },
    {
        'key': 'Birthday',
        'value': '11 February 1998'
    },
    {
        'key': 'Relationship',
        'value': 'Single'
    },
    {
        'key': 'Nationality',
        'value': 'Indian'
    },
    {
        'key': 'Language',
        'value': 'Hindi, English'
    },
    ]
    return item;
}
 sendContactDetail(){
     let item = [
         '+91-7023894950',
         'vishaljangid2@outlook.com',
         'Plot No 215, Behind Krishna Timber, Manpur, Aburoad Dist. Sirohi Pin code 307026',
         'vishaljangid2'
     ]
     return item;
 }

}
const instance = new Data()
Object.freeze(instance);
export default instance;