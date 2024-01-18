import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_API } from "../service/auth";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const login = () => {
    AUTH_API.signIn(email, password).then((userCredentials) => {
      console.log(userCredentials);
      //TODO 유저 정보 저장하기
      navigate("/");
    });
  };

  return (
    <div className="m-auto w-1/2 flex flex-col items-center bg-gray-200 rounded-xl gap-5 p-10 mt-20">
      <div className="text-2xl font-semibold">Login</div>
      <input
        type="text"
        className="rounded-lg p-2"
        placeholder="e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="rounded-lg p-2"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="button"
        value="로그인"
        className="bg-gray-400 text-white rounded-xl p-2 w-40 cursor-pointer hover:scale-105"
        onClick={() => login()}
      />
    </div>
  );
}

export default LoginPage;
