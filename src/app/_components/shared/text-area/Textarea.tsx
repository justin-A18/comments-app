import { InputWrapper, StyledTextarea } from './Textarea.style';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
}

export const TextArea = ({ label, error, ...props }: InputProps) => {
	return (
		<InputWrapper>
			{label && <label>{label}</label>}
			<div className='input-container'>
				<StyledTextarea {...props} />
			</div>
			{error && <span>{error}</span>}
		</InputWrapper>
	);
};
