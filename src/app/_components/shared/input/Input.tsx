import { InputWrapper, StyledInput } from './Input.style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

export const Input = ({ label, leftIcon, rightIcon, ...props }: InputProps) => {
	return (
		<InputWrapper>
			{label && <label>{label}</label>}
			<div className='input-container'>
				{leftIcon && leftIcon}
				<StyledInput {...props} />
				{rightIcon && rightIcon}
			</div>
		</InputWrapper>
	);
};
