import { CircularProgress } from "@mui/material";
import { memo } from "react";

function LoadingModal() {
  return (
    <>
      <div className="w-full h-full bg-black/[0.3] flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-[99]">
        <CircularProgress color="primary"/>
      </div>
    </>
  );
}
export default memo(LoadingModal); 




