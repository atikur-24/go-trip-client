import { Call, Login, Person } from "@mui/icons-material";

const Navbar = () => {
  return (
    <header className="container pt-20">
      {/* top navbar */}
      <div className="bg-blue-3 text-white text-sm flex items-center justify-between font-light">
        <div>
          <Call className="text-lg" />
          <span>Any Questions? Call Us: 1-223-355-2214</span>
        </div>
        <div className="flex gap-4">
          <div>
            <Login className="text-lg" />
            <span>Login</span>
          </div>
          |
          <div>
            <Person className="text-lg" />
            <span>Register Now</span>
          </div>
        </div>
      </div>
      {/* menu navbar */}
      <div></div>
    </header>
  );
};

export default Navbar;
