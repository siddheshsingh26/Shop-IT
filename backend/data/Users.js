const bcrypt = require("bcryptjs");

const Users=[
    {
        name:'admin',
        email:'admin@admin.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,   
    },
    {
        name:'siddhesh',
        email:'siddheshsingh@sid.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'animesh',
        email:'animesh@sid.com',
        password:bcrypt.hashSync('123456',10),
    },
];

module.exports=Users;

