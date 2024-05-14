import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      setRegisterError("Password should be al least 6 characters on longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have al least one UpperCase character"
      );
      return;
    }

    setRegisterError("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        setSuccess("User Registered Successfully");
        toast.success("User Registered Successfully");
        navigate("/");
      })
      .catch((error) => {
        setRegisterError("This email is Already Used");
      });
  };

  return (
    <div className="max-w-[1200px] lg:mx-auto mx-5 flex justify-center my-20">
      <div className="lg:w-[450px] py-10 px-4 border">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-center text-3xl"
        >
          Register
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleRegister} className="mt-8 mb-2 sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" name="name" label="Name" type="text" required />
            <Input size="lg" name="photo" label="Photo URL" type="url" />
            <Input size="lg" name="email" label="Email" type="email" required />
            <div className="relative flex">
              <Input
                size="lg"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                required
              />
              <span
                className="cursor-pointer absolute right-0 top-0 py-[14px] px-4 rounded-r-md bg-[#eee]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <Checkbox
            name="checkbox"
            required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {registerError && (
            <p className="text-red-500 text-lg py-2">{registerError}</p>
          )}
          {success && <p className="text-green-500 text-lg py-2">{success}</p>}
          <Button type="submit" className="mt-6 bg-[#3BBCA7]" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#3BBCA7]">
              Login
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Register;
