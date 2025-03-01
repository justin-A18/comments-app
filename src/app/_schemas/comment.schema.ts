import { z } from "zod";

export const commentSchema = z.object({
	name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
	email: z.string().email("El email es invalido"),
	body: z.string().min(5, "El comentario debe tener al menos 5 caracteres"),
});