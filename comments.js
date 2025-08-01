const gettCommentsData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  const result0bj = await result.json();
  console.log(result0bj[1].postId);
  console.log(result0bj[1].id);
  console.log(result0bj[1].name);
  console.log(result0bj[1].email);
  console.log(result0bj[1].body);
};
gettCommentsData();
