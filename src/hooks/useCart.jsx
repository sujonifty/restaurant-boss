import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
const axiosSecure = useAxiosSecure();
//data k destructure kore cart name & default value []
    const {data: cart=[] } = useQuery({
        queryKey: ['repoData'],
        queryFn: async() =>{
            const res= await axiosSecure.get('/carts');
            return res.data;
        }
      })
    return [cart]
};

export default useCart;