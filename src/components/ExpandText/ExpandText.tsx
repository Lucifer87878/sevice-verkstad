import React, { useState, useEffect } from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { TbWindowMinimize } from 'react-icons/tb';
import ExpendText from './ExpandText.scss';

const ExpandedText: React.FC<{ text: string; onSave: (text: string) => void; onClose?: () => void }> = ({ text, onSave, onClose }) => {
    const [inputText, setInputText] = useState<string>(text);
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    useEffect(() => {
        // Save text when component unmounts
        return () => {
            onSave(inputText);
        };
    }, [onSave, inputText]);

    // Prevent closing when clicking inside textarea
    const handleTextAreaClick = (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
        e.stopPropagation();
    };

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleMinimize = () => {
        setExpanded(false);
        onClose && onClose();
    };

    return (
        <div className="expanded-text-container" onClick={(e) => e.stopPropagation()}>
            {!expanded ? (
                <div className="expand-icon" onClick={handleExpand}>
                    <RxOpenInNewWindow />
                </div>
            ) : (
                <React.Fragment>
                    <textarea
                        value={inputText}
                        onChange={handleInputChange}
                        onClick={handleTextAreaClick}
                        maxLength={200}
                    />
                    {onClose && <TbWindowMinimize className="expand-icon" onClick={handleMinimize} />}
                </React.Fragment>
            )}
        </div>
    );
};

export default ExpandedText;
