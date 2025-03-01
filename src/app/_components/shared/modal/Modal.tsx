import { X } from 'lucide-react';
import { Button } from '../button';
import { ModalContent, Overlay } from './Modal.style';

interface ModalProps {
	isOpen: boolean;
	onClose?: () => void;
	children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<Overlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<div className='w-full flex justify-end'>
					<Button
						variant='icon'
						onClick={onClose}>
						<X size={20} />
					</Button>
				</div>

				{children}
			</ModalContent>
		</Overlay>
	);
};
