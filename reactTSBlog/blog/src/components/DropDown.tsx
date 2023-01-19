import React, { useEffect, useState } from 'react';
import { Blog } from '../models/blog.models';

interface IDropDownProps {
    blogs: Blog[],
    setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
};
type DropDownProps = {
    tags: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    tagSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
    tags,
    tagSelection,
}: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    /**
     * Handle passing the tag name
     * back to the parent component
     *
     * @param tag  The selected tagg
     */
    const onClickHandler = (tag: string): void => {
        tagSelection(tag);
        // <div>
        //     {/* {blogs.map(blog => <div><h2> {blog.id}</h2><h3> {blog.title}</h3><p>{blog.body}</p></div>)} */}
        //     {blogs.map(blog => <Blogs key={blog.id} blog={blog} />)}

        // </div>

    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {tags.map(
                    (tag: string, index: number): JSX.Element => {
                        return (
                            <p
                                key={index}
                                onClick={(): void => {
                                    onClickHandler(tag);
                                }}
                            >
                                {tag}
                            </p>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default DropDown;
