'use client';

import { VariantsButton } from '@/infrastructure/types/button.type';
import styled from 'styled-components';

interface ButtonProps {
	variant: VariantsButton;
}

export const StyledButton = styled.button<ButtonProps>`
	display: ${({ variant }) => (
		variant === 'withIcon' || variant === 'icon' ? 'flex' : 'inline-block'
	)};
   background-color: ${({ variant }) => (
		variant === 'icon' ? 'transparent' : '#000000'
	)};
  color: ${({ variant }) => (
		variant === 'icon' ? '#555555' : '#ffffff'
	)};
  border: ${({ variant }) => (
		variant === 'icon' ? '2px solid #555555' : 'none'
	)};
	padding: ${({ variant }) => (
		variant === 'icon' ? '8px' : '15px 15px'
	)};
	gap: ${({ variant }) => (variant === 'withIcon' ? '8px' : '0')};
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
	align-items: center;
	justify-content: center;
	font-weight: 600;transition: all 0.3s ease;

	&:hover {
		background-color: ${({ variant }) => (
		variant === 'icon' ? '#f5f5f5' : '#222222'
	)};
	}

	@media (max-width: 768px) {
		font-size: 14px;
		padding: ${({ variant }) => (variant === 'icon' ? '6px' : '12px 12px')};
	}

	@media (max-width: 480px) {
		font-size: 12px;
		padding: ${({ variant }) => (variant === 'icon' ? '4px' : '10px 10px')};
		border-radius: 4px;
	}
`;
