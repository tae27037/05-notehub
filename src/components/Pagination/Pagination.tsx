import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  page: number; // 1-based
  totalPages: number;
  onPageChange: (page: number) => void; // 1-based
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      containerClassName={css.pagination}
      activeClassName={css.active}
      pageClassName={css.page}
      previousClassName={css.prev}
      nextClassName={css.next}
      disabledClassName={css.disabled}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
    />
  );
}
