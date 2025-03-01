import { StyledButton } from './Button.styles';
import { VariantsButton } from '@/infrastructure/types/button.type';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: VariantsButton;
}

export const Button = ({
	children,
	variant = 'primary',
	...props
}: ButtonProps) => {
	return (
		<StyledButton
			variant={variant}
			{...props}>
			{children}
		</StyledButton>
	);
};
