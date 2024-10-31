class User {
  constructor(name, email,password) {
    this.id = this.generateId();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  generateId() {
    return Math.floor(Math.random() * 999) + 1;
  }
}

export default User;
