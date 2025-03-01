"use client";

import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	padding: 10px;
	height: 100vh;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	background: white;
	padding: 20px;
	border-radius: 8px;
	width: 100%;
	max-width: 500px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

