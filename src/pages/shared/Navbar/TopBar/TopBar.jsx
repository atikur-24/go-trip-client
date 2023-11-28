import { Call, Login, Person } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className="bg-blue-3 text-white text-sm flex items-center justify-between font-light py-3 px-10">
      <div>
        <Call className="text-lg mr-2" />
        <span>Any Questions? Call Us: 1-223-355-2214</span>
      </div>
      <div className="flex gap-4">
        <div>
          <Login className="text-lg mr-1" />
          <span>Login</span>
        </div>
        |
        <div>
          <Person className="text-lg mr-1" />
          <span>Register Now</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
