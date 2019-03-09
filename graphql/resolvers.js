const nicolas = {
  name: "Nicolas",
  age: 18,
  gender: "female"
}

const resolvers = {
  Query: {
    person: () => nicolas
  }
};

// 화살표함수 () => nicolas
// function() {return nicolas}와 같음

export default resolvers;