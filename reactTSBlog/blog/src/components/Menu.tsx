import React, { useState } from "react";
import DropDown from "./DropDown";
import './Menu.css';
import { Blog } from '../models/blog.models';
import data from '../db.json';

interface IMenuProps {
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
};

// function Menu(): JSX.Element {
const Menu: React.FC<IMenuProps> = ({
  setBlogs,
}: IMenuProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectTag, setSelectTag] = useState<string>("");

  const tags = () => {
    return ["ALL", "AMERICAN", "FRENCH", "LOVE", "CRIME", "HISTORY"];
  };

  // Toggle the drop down menu
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  // Hide the drop down menu if click occurs
  // outside of the drop-down element.
  // @param event  The mouse event

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  // Callback function to consume the
  // tag name from the child component
  // @param tag  The selected tag

  const tagSelection = (tag: string): void => {
    setSelectTag(tag);
    tag === "ALL" ? setBlogs(data) : setBlogs(data.filter((dta) => dta.tags.includes(tag.toLowerCase())));

  };

  return (
    <>
      <div className="announcement">
        <div>
          Filter by blog tag:&nbsp;&nbsp;
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="dd-placement">Choose...</div>
        {showDropDown && (
          <DropDown
            tags={tags()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            tagSelection={tagSelection}
          />
        )}
      </button>
      <div>
        &nbsp;&nbsp;{selectTag ? selectTag + " Blogs" : "ALL Blogs"}
      </div>
    </>
  );
};

export default Menu;
