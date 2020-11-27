import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const history = useHistory();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
    // return () => {
    //   cleanup;
    // };
  }, [currentUser]);
  return currentUser;
};

export default useAuth;
