import { VariantsText } from '@/infrastructure/types/typography.type';
import { StyledText } from './Typography.styles';

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
	variant?: VariantsText;
	isBold?: boolean;
}

export const Typography = ({
	children,
	variant = 'h1',
	isBold,
	...props
}: TypographyProps) => {
	return (
		<StyledText
			variant={variant}
			isBold={isBold}
			{...props}>
			{children}
		</StyledText>
	);
};
