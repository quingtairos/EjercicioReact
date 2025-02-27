export type Categoria = "fiesta" | "boda" | "conciertos";

export interface Producto {
    categoria: Categoria;
    id: string;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen?: string;
    [key: string]: any;
}

