//  Higher Order Component
import { useAuth } from "./../customHooks";

const WithAuth = (props) => useAuth(props) && props.children;
//  if user not logged in, we want them to be logged in so they can access this page

export default WithAuth;
