const gettPhotosData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/photos");
  const result0bj = await result.json();
  console.log(result0bj[1].albumId);
  console.log(result0bj[1].id);
  console.log(result0bj[1].url);
};
gettPhotosData();
