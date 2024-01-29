import { useDispatch, useSelector } from "react-redux";
import {
  addCarts,
  axiosDelete,
  axiosGet,
  axiosPost,
  deleteCarts,
  getCarts,
  sagaDelete,
  sagaGet,
  sagaPost,
} from "../../redux/action";

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

  const dispatch = useDispatch();
  const carts = useSelector((state: any) => state.cartsReducer);
  console.log(carts);

  const samplenewdata = {
    id: 2,
    name: "Orange",
    price: 30,
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

      <hr />
      <h3>Sample Redux</h3>
      <button onClick={() => dispatch(getCarts())}>reduxget</button>
      <button onClick={() => dispatch(addCarts(samplenewdata))}>
        reduxadd
      </button>
      <button onClick={() => dispatch(deleteCarts(1))}>reduxdelete</button>

      <hr />
      <h3>Sample Saga </h3>
      <button onClick={() => dispatch(sagaGet())}>sagaGet</button>
      <button onClick={() => dispatch(sagaPost(samplenewdata))}>
        sagaPost
      </button>
      <button onClick={() => dispatch(sagaDelete(2))}>sagaDelete</button>

      <hr />
      <h3>Sample Axios</h3>
      <button onClick={() => dispatch(axiosGet())}>axiosGet</button>
      <button onClick={() => dispatch(axiosPost(samplenewdata))}>
        axiosPost
      </button>
      <button onClick={() => dispatch(axiosDelete(2))}>axiosaDelete</button>
    </>
  );
};

export default Home;
