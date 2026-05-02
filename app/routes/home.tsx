import { useContext, useEffect } from "react";
import type { Route } from "./+types/home";
import { Cube } from "~/cube/cube";
import { useNavigate } from "react-router";
import useAuthenticationStore from "~/store";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Three.js Demo" },
    {
      name: "Three.js demo featuring a cube and several options",
      content: "Three.js demo",
    },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const userEmail = useAuthenticationStore((state) => state.userEmail);

  useEffect(() => {
    if (!userEmail) {
      navigate("/login");
    }
  }, []);

  return <Cube />;
}
