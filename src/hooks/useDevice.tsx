import useResize from "./useResize";

type Device = "mobile";
export default function useDevice(type: Device) {
  const [width] = useResize();

  if (type === "mobile") {
    return width < 750;
  }
}
