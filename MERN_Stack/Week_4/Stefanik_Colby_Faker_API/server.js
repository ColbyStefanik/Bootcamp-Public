const express = require("express");
const app = express();
const faker = require("faker");
const port = 8000;

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

const createUser = () => ({
    _id: faker.datatype.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
});

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const combinedObject = {
        user: newUser,
        company: newCompany,
    };
    res.json(combinedObject);
});

app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );