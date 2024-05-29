import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users');
                return res.data;
        }
    })
    return (
        <div>
            <div className="flex justify-between my-4 p-5">
                <h2>All user</h2>
                <h2>Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index)=><tr key={user._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                    <div className="font-bold">{user.name}</div>
                    </td>
                    <td>
                    <div className="font-bold">{user.email}</div>
                    </td>
                    <td>
                    <div className="font-bold">
                        <button className="btn btn-ghost bg-orange-300">
                            <FaUsers></FaUsers>
                        </button>
                    </div>
                    </td>
                    <th>
                      <button  className="btn btn-ghost">
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

export default AllUsers;