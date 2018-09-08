import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {


  public lista_filmes = new Array<any>();

  public nome_usuario : string = "Nome vindo de variável";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLastesMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = response;
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno.results);
      },error =>{
        console.log(error);
      }
    )
  }
}
