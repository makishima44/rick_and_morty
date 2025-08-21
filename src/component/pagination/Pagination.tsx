import { Button } from "../button";
import s from "./Pagination.module.css";

type PaginationProps = {
  totalCount: number;
  currentPage: number;
  setPageChange: (page: number) => void;
};

export const Pagination = ({ totalCount, currentPage, setPageChange }: PaginationProps) => {
  const visiblePages = 3;

  let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let end = start + visiblePages - 1;

  if (end > totalCount) {
    end = totalCount;
    start = Math.max(1, end - visiblePages + 1);
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className={s.paginationBlock}>
      <Button onClick={() => setPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </Button>

      {pages.map((page) => {
        return (
          <Button onClick={() => setPageChange(page)} key={page} variant={"pagination"} className={page === currentPage ? s.activePage : ""}>
            {page}
          </Button>
        );
      })}

      <Button onClick={() => setPageChange(currentPage + 1)} disabled={currentPage === totalCount}>
        Next
      </Button>
    </div>
  );
};
