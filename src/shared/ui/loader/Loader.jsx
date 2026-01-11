import { SyncLoader } from "react-spinners";

export default function Loader({ size, color, cssOverride }) {
  return (
    <SyncLoader
      size={size}
      color={color}
      cssOverride={{
        ...cssOverride,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}
