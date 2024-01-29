
import { useGetMeQuery , 
  // userApi
} from "../redux/apis/UserApi";
// import { useDispatch, useSelector } from "react-redux";

const Dashbord = () => {
  // const dispatch = useDispatch();
    const { isLoading, data } =useGetMeQuery();
     
    console.log(isLoading,data);

    // useEffect(() => {
    //   if (data && !user) dispatch(userApi.util.resetApiState());
    // }, [data, user, dispatch]);

  return (
    <div>Hello user {data?.name}</div>
  )
}

export default Dashbord