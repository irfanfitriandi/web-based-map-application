import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/notfound.jpg";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-4">
      <img alt="NotFoundPage" src={NotFoundImg} width={320} />
      <div className="text-center">
        <h1 className="font-semibold text-4xl text-primary">404 Not Found</h1>
        <p className="font-medium text-xl mb-8">
          The page you were looking doesn't exist
        </p>
        <Link to="/" className="hover:underline hover:text-primary">
          Please go to this link
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
