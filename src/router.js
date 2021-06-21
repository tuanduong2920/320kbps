import { lazy } from "react";
import { ImSoundcloud, ImMusic, ImYoutube } from "react-icons/im";
const router = [
  {
    path: "/",
    component: lazy(() => import("./Page/ZingMp3/ZingMp3")),
    exact: true,
    name: "Mp3",
    icon: <ImMusic fontSize={25} style={{color:`#fff`}} />,
  },
  {
    path: "/you-tube",
    component: lazy(() => import("./Page/YouTube/YouTube")),
    exact: true,
    name: "YouTube",
    icon: <ImYoutube fontSize={25} style={{color:`#fff`}} />,
  }

];

export default router;
