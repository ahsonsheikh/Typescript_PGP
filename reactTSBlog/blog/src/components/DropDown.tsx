import React, { useEffect, useState } from 'react';

interface IDropDownProps {
    tags: string[],
    showDropDown: boolean,
    toggleDropDown: Function,
    tagSelection: Function
};

const DropDown: React.FC<IDropDownProps> = ({
    tags,
    tagSelection,
}: IDropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    // Handle passing the tag name
    // back to the parent component

    // @param tag  The selected tagg

    const onClickHandler = (tag: string): void => {
        tagSelection(tag);
        console.log("DD");
        console.log(tag);
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
