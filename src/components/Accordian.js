import React, { useState } from 'react';

const Accordian = ({ header, content, footer }) => {
	const [open, setOpen] = useState(false);
	const toggleOpen = (e) => {
		e.preventDefault();
		setOpen(!open);
	};

    const footerWrapper = footer ? <div className='accordian-footer'>{footer}</div> : null

    const contentWrapper = (
        <>
            <div className='accordian-content'>
                <div className='accordian-body'>{content}</div>
                {footerWrapper}
            </div>
        </>
    )
	return (
		<div className='accordian-container'>
			<div className='accordian-header' onClick={toggleOpen}>
				{header}
			</div>
			{open && contentWrapper}
		</div>
	);
};

Accordian.defaultPropTypes = {
    header: "",
    content: "",
}

export default Accordian;
