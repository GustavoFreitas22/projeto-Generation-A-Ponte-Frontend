import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../models/Postagem';
import { Tema } from '../models/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  listaPostagem: Postagem[]
  postagem: Postagem = new Postagem()

  listaTemas: Tema[]
  idTema: number
  tema: Tema = new Tema()

  constructor(private router: Router, private postagemService: PostagemService, private temaService: TemaService) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }
    this.getAllPostagens()
    this.getAllTemas()
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
    })
  }
  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTemas(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }
}
