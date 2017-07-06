
///https://maps.googleapis.com/maps/api/geocode/json?address=204%20San%20Carlos%20Tlaquepaque
var getUser  = (id, callback)=>{
  var user = {
    id:id,
    name:'Vikram'
  };
  setTimeout(()=>{
    callback(user);
  },3000);
};

getUser(31,(userObject)=>{
  console.log(userObject);
});
