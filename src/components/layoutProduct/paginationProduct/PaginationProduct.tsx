import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationProduct() {
  return (
    <>
      <div className="flex justify-center items-center pb-[30px]">
        <Stack spacing={2}>
          <Pagination
            sx={{ backgroundColor: "#fff" }}
            count={2}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </>
  );
}
