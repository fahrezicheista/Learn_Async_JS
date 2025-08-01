const gettUsersData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const result0bj = await result.json();
  console.log(result0bj[1].username);
  console.log(result0bj[1].address);
};
gettUsersData();
