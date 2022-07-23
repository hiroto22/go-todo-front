import { useEffect, useState } from "react";

//tokenを取得してくる
export const useGetStorageToken = () => {
  const [strage, setStrage] = useState<string | null>();
  useEffect(() => {
    setStrage(sessionStorage.getItem("token"));
  }, []);

  return "Bearer " + strage;
};
