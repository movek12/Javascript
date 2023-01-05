const Object = {
    Name : "Mobek",
    Address : "Kathmandu",
    Post : "HOD",
}

const {Name,Address,Post}=Object;
function Des({Name,Address,Post}){
    console.log(Name,Address,Post);
}
Des(Object);