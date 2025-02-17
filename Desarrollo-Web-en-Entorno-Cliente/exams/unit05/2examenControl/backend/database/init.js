db.createUser({
  user: "WittCode",
  pwd: "MySecurePassword",
  roles: [{ role: "readWrite", db: "mydb" }],
});

db.createCollection("users");
db.users.insertOne({
  username: "David",
  password: "A123",
  email: "mi@correo.com",
  token: "", // Deja vacío para que Mongoose lo genere
  verified: false,
  admin: false,
});
