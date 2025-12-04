import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-9xl font-extrabold tracking-widest text-primary">
        404
      </h1>

      <div className="bg-destructive px-2 text-sm rounded rotate-12 absolute text-destructive-foreground">
        Page Not Found
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl font-medium mb-4">
          Oops! The page you're looking for doesn't exist.
        </p>

        <NavLink to="/">
          <Button size="lg" className="mt-4">
            Go Back Home
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
