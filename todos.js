const gettTodosData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result0bj = await result.json();
  console.log(result0bj[1].title);
  console.log(result0bj[1].completed);
};
gettTodosData();
