//  Higher Order Component
import { useAuth } from "./../customHooks";
import { withRouter } from "react-router-dom";
const WithAuth = (props) => useAuth(props) && props.children;
//  if user not logged in, we want them to be logged in so they can access this page
export default withRouter(WithAuth);
