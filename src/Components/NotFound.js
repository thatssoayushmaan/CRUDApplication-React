import { useLocation } from "react-router-dom";
import Navigate from "./Navigate";
export default function NotFound() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <h1>
      <Navigate />
      No Match found for '{pathname}'
    </h1>
  );
}
