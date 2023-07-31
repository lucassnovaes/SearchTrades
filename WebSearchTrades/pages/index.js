import Login from "@/src/components/Login/Login";
import Header from "@/src/components/Header/Header";
import StockList from "@/src/components/StockList/StockList";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function Index() {
  const token = new Cookies().get("accessToken");
  const [accessToken, setAccessToken] = useState(token);

  if (!accessToken)
    return <Login accessToken={accessToken} setAccessToken={setAccessToken} />;

  return (
    <>
      <Header />
      <StockList />
    </>
  );
}
