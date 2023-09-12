import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456789', 10),
        isAdmin: true,
    },
    {
        name: 'Hamza Nejib',
        email: 'hamza@email.com',
        password: bcrypt.hashSync('123456789', 10),
        isAdmin: false,
    },
    {
        name: 'Tom Cruse',
        email: 'tom@email.com',
        password: bcrypt.hashSync('123456789', 10),
        isAdmin: false,
    },
];

export default users;