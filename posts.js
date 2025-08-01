const gettPostsData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result0bj = await result.json();
  console.log(result0bj[1].userId);
  console.log(result0bj[1].id);
  console.log(result0bj[1].title);
  console.log(result0bj[1].body);
};
gettPostsData();
