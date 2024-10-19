import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modalSlice";
import s from "./Header.module.css";
import { Button } from "@mui/material";

import {
  closeIsOpen,
  setIsOpen,
  sortByCount,
  sortByName,
} from "../../redux/filerSlice";
import { selectIsOpenSort } from "../../redux/selectors";

const Header = () => {
  const dispatch = useDispatch();
  const IsOpenSort = useSelector(selectIsOpenSort);

  const handleClick = () => {
    dispatch(openModal());
  };

  const handleSortByName = () => {
    dispatch(sortByName());
    dispatch(closeIsOpen());
  };
  const handleSortByCount = () => {
    dispatch(sortByCount());
    dispatch(closeIsOpen());
  };

  const handleOpenSort = () => {
    dispatch(setIsOpen());
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <h2>Welcome to Products Manager</h2>

        {IsOpenSort ? (
          <ul className={s.sortList}>
            <Button onClick={handleSortByName} variant="contained">
              Sort by alphabet
            </Button>
            <Button onClick={handleSortByCount} variant="contained">
              Sort by count
            </Button>
          </ul>
        ) : (
          <Button onClick={handleOpenSort} variant="contained">
            Open Modal
          </Button>
        )}
        <Button onClick={handleClick} variant="contained">
          Add product
        </Button>
      </div>
    </header>
  );
};

export default Header;
