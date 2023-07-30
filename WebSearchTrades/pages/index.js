import Login from "@/src/components/Login/Login";
import Header from "@/src/components/Header/Header";
import StockList from "@/src/components/StockList/StockList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Index() {
  const [accessToken, setAccessToken] = useState("");

  const user = useSelector((state) => state?.user);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("accessToken", user?.getAccessToken());
    setAccessToken(user?.getAccessToken());
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");

      if (token) return setAccessToken(token);

      setAccessToken("");
    }
  }, []);

  //  if (accessToken === null || !user) return <Login />;

  return (
    <>
      <Header />
      <StockList />
    </>
  );
}
