import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public qtd_likes: number
    public usuario: Usuario
    public tema: Tema
}