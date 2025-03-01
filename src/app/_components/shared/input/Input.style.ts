'use client';

import styled from 'styled-components';

interface InputProps {
	label?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

export const InputWrapper = styled.div<InputProps>`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;

	label {
		font-size: 14px;
		font-weight: 600;
		color: #333;
	}

	.input-container {
		display: flex;
		align-items: center;
		border: 2px solid #ccc;
		border-radius: 6px;
		padding: 10px;
		gap: 8px;
		background-color: #fff;
		transition: border-color 0.3s, box-shadow 0.3s;

		&:focus-within {
			border-color: #555555;
		}

		svg {
			color: #555;
			font-size: 10px;
		}
	}
`;

export const StyledInput = styled.input`
	flex: 1;
	border: none;
	outline: none;
	font-size: 16px;
	background: transparent;

	&::placeholder {
		color: #aaa;
	}

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;
