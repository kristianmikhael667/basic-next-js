import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Custome404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Opppsss.....</h1>
      <h1 className="title-not-found">Not Found Your Page</h1>
    </div>
  );
}
