function LoginPage() {
  return (
    <div className="m-auto w-1/2 flex flex-col items-center bg-gray-200 rounded-xl gap-5 p-10 mt-20">
      <div className="text-2xl font-semibold">Login</div>
      <input type="text" className="rounded-lg p-2" placeholder="e-mail" />
      <input
        type="password"
        className="rounded-lg p-2"
        placeholder="password"
      />
      <input
        type="button"
        value="로그인"
        className="bg-gray-400 text-white rounded-xl p-2 w-40 cursor-pointer hover:scale-105"
      />
    </div>
  );
}

export default LoginPage;
