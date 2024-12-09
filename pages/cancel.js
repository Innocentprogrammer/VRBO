import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Cancel() {
  const router = useRouter();
  useEffect(() => {
    alert("Your payment was canceled!");
    router.push("trips");
  }, []); 

  return <h1></h1>; 
}
