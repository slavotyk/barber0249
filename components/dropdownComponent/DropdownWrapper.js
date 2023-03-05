import { useRef } from 'react';
import { useBoolean, useOnClickOutside } from 'usehooks-ts';
import classNames from 'classnames';

const DropdownWrapper = ({
	title,
	children,
	contentClassname = '',
	wrapperClassname = '',
	ParentComponent
}) => {
	const ref = useRef()

	const { value, setFalse, toggle } = useBoolean(false)

	useOnClickOutside( ref, setFalse)
	return (
		<div
			className={classNames({
				'dropdown-wrapper': true,
				[wrapperClassname]: wrapperClassname,
			})}
			ref={ref}
		>

			{title && <div
				className="dropdown-title"
				onClick={toggle}
			>
				<div className='dropdown-icon'>

				</div>
				{title}
			</div>}

			{ParentComponent && <ParentComponent handler={toggle}/>}

			<div className={classNames({
				'dropdown-content': true,
				[contentClassname]: contentClassname,
				'opened': value
			})}>
				{children}
			</div>
		</div>
	);
};

export default DropdownWrapper;