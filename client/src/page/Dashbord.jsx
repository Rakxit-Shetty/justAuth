
import { useGetMeQuery } from "../redux/apis/UserApi";

const Dashbord = () => {
    const { isLoading, data } =useGetMeQuery();
     
    console.log(isLoading,data)
  return (
    <div>Dashbord</div>
  )
}

export default Dashbord