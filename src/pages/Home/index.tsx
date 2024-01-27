const Home = () => {
  const fetchdata = () => {
    fetch("http://localhost:8000/carts")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could Not Fetch Resource...");
        }
        return res.json(); //convert to json
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const postdata = () => {
    const newdata = {
      name: "Papaya",
      price: 20,
    };

    fetch("http://localhost:8000/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newdata),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to post data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Post Data Completed");
      })
      .catch((err) => {
        console.error(err.message);
        alert("Failed to post data");
      });
  };

  const deletedata = (x: string) => {
    fetch("http://localhost:8000/carts/" + x, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could Not Delete Data...");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Sucessfully Deleted....");
      })
      .catch((err) => {
        alert("Unable to Delete....");
        console.log(err.message);
      });
  };

  return (
    <>
      <h3>Start json server with:</h3>
      <p>npx json-server --watch data/carts.json --port 8000</p>
      <p>* Check console log for sample output</p>

      <hr />
      <h3>Sample Fetch Method</h3>

      <button onClick={() => fetchdata()}>Fetch</button>
      <button onClick={() => postdata()}>Post</button>
      <button onClick={() => deletedata("1")}>Delete</button>
    </>
  );
};

export default Home;
