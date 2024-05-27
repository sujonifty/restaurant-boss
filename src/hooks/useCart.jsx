import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";


const useCart = () => {
const axiosSecure = useAxiosSecure();
const {user}=useContext(authContext);
//data k destructure kore cart name & default value []
    const {refetch, data: cart=[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() =>{
            const res= await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
      })
    return [cart, refetch]
};

export default useCart;