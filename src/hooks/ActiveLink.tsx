import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useActiveLink = () => {
  const [activePath, setActivePath] = useState("");
  const router = usePathname();
  useEffect(() => {
    setActivePath(router);
  }, [router]);

  return activePath;
};

export default useActiveLink;
