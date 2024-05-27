import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const [cart,refetch] = useCart();
    // syntax of reduce 
    //array.reduce(callbackFunction, initialValue)
    //callbackFunction contain (accumulator, currentValue) thake
    //accumulator: The accumulated value previously returned in the last invocation of the callback, or the initialValue, if supplied.
    //currentValue: The current element being processed in the array.
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
const handleDelete=(id)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
          .then(res=>{
            if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your food item has been deleted.",
                    icon: "success"
                  });
                  refetch();
            }
          })
        }
      });
}
    return (
       <div>
         <div className="flex justify-evenly">
            <h2 className="text-4xl">Food items: {cart.length}</h2>
            <h2 className="text-4xl">Total prices: {totalPrice}</h2>
            <button className="btn ">Pay bill</button>
        </div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,index)=><tr key={item._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                    </td>
                    <td>
                    <div className="font-bold">{item.name}</div>
                    </td>
                    <td>
                    <div className="font-bold">{item.price}</div>
                    </td>
                    <th>
                      <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost">
                        <FaTrashAlt className="text-red-700"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
       </div>
    );
};

export default Cart;