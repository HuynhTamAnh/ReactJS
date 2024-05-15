const phoneBook = [];
class Contact {
  constructor(name, phoneNum, email) {
    this.name = name;
    this.phoneNum = phoneNum;
    this.email = email;
  }
}

let addContact = (name, phoneNum, email) => {
  const newContact = new Contact(name, phoneNum, email);
  phoneBook.push(newContact);
};

let displayContact = () => {
  phoneBook.forEach((contact, index) => {
    console.log(
      `${index + 1}. Name: ${contact.name} | Number: ${
        contact.phoneNum
      } | Email: ${contact.email}`
    );
  });
};

addContact("Hung", "9900000", "ghghgh");
displayContact();
