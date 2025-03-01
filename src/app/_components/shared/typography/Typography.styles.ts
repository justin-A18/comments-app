'use client';

import { VariantsText } from '@/infrastructure/types/typography.type';
import styled from 'styled-components';

interface TextProps {
	variant: VariantsText;
	isBold?: boolean;
}

export const StyledText = styled.p.attrs<TextProps>(({ variant }) => ({
	as: variant,
})) <TextProps>`
	font-size: ${({ variant }) => {
		switch (variant) {
			case 'h1':
				return '32px';
			case 'h2':
				return '28px';
			case 'h3':
				return '24px';
			case 'h4':
				return '20px';
			case 'p':
				return '16px';
			default:
				return '16px';
		}
	}};

	font-weight: ${({ variant, isBold }) => (
		variant === 'p' && !isBold ? 'normal' : 'bold'
	)};
	color: ${({ variant }) => (variant === 'p' ? '#8E8E8E' : '#000000')};
	margin: 8px 0;
	line-height: 1.5;

	/* 📌 Responsividad */
	@media (max-width: 768px) {
		font-size: ${({ variant }) => {
		switch (variant) {
			case 'h1':
				return '28px';
			case 'h2':
				return '24px';
			case 'h3':
				return '20px';
			case 'h4':
				return '18px';
			case 'p':
				return '14px';
			default:
				return '14px';
		}
	}};
	}

	@media (max-width: 480px) {
		font-size: ${({ variant }) => {
		switch (variant) {
			case 'h1':
				return '24px';
			case 'h2':
				return '20px';
			case 'h3':
				return '18px';
			case 'h4':
				return '16px';
			case 'p':
				return '12px';
			default:
				return '12px';
		}
	}};
	}
`;
