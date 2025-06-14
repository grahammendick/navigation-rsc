type Person = {
  id: number;
  name: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  email: string;
  phone: string;
};

var people: Person[] = [
  {
    id: 1,
    name: "Bell Halvorson",
    gender: "female",
    dateOfBirth: "01/01/1980",
    email: "bell@navigation.com",
    phone: "555 0001",
  },
  {
    id: 2,
    name: "Aditya Larson",
    gender: "male",
    dateOfBirth: "01/02/1980",
    email: "aditya@navigation.com",
    phone: "555 0002",
  },
  {
    id: 3,
    name: "Rashawn Schamberger",
    gender: "male",
    dateOfBirth: "01/03/1980",
    email: "rashawn@navigation.com",
    phone: "555 0003",
  },
  {
    id: 4,
    name: "Rupert Grant",
    gender: "male",
    dateOfBirth: "01/04/1980",
    email: "rupert@navigation.com",
    phone: "555 0004",
  },
  {
    id: 5,
    name: "Opal Carter",
    gender: "female",
    dateOfBirth: "01/05/1980",
    email: "opal@navigation.com",
    phone: "555 0005",
  },
  {
    id: 6,
    name: "Candida Christiansen",
    gender: "female",
    dateOfBirth: "01/06/1980",
    email: "candida@navigation.com",
    phone: "555 0006",
  },
  {
    id: 7,
    name: "Haven Stroman",
    gender: "other",
    dateOfBirth: "01/07/1980",
    email: "haven@navigation.com",
    phone: "555 0007",
  },
  {
    id: 8,
    name: "Celine Leannon",
    gender: "female",
    dateOfBirth: "01/08/1980",
    email: "celine@navigation.com",
    phone: "555 0008",
  },
  {
    id: 9,
    name: "Ryan Ruecker",
    gender: "male",
    dateOfBirth: "01/09/1980",
    email: "ryan@navigation.com",
    phone: "555 0009",
  },
  {
    id: 10,
    name: "Kaci Hoppe",
    gender: "other",
    dateOfBirth: "01/10/1980",
    email: "kaci@navigation.com",
    phone: "555 0010",
  },
  {
    id: 11,
    name: "Fernando Dietrich",
    gender: "male",
    dateOfBirth: "01/11/1980",
    email: "fernando@navigation.com",
    phone: "555 0011",
  },
  {
    id: 12,
    name: "Emelie Lueilwitz",
    gender: "female",
    dateOfBirth: "01/12/1980",
    email: "emelie@navigation.com",
    phone: "555 0012",
  },
];

const getPeople = async () => {
  return new Promise((res: (people: Person[]) => void) => {
    setTimeout(() => {
      res(people);
    }, 10);
  });
};

const getPerson = async (id: number) => {
  return new Promise((res: (person: Person) => void) => {
    const person = people.find(({ id: personId }) => personId === id)!;
    setTimeout(() => {
      res(person);
    }, 10);
  });
};

export { getPeople, getPerson };
