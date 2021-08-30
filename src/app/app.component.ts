import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AulaSabreLuz';

  ligaSabre: boolean = false;

  mudaCorSabre(cor: any) {

    if(this.ligaSabre)
    {
      var elem = document.getElementById("luz-sabre");
      elem?.classList.remove("verde")
      elem?.classList.remove("azul")
      elem?.classList.remove("amarelo")
      elem?.classList.remove("roxo")
      elem?.classList.remove("vermelho")
      elem?.classList.remove("preto")

      elem?.classList.add(cor);     

    }

  }

  ligaSabreDefault() {
    if (!this.ligaSabre) {

      var elem = document.getElementById("luz-sabre");
      this.ligaSabre = true;

      var element = document.getElementsByName("color");

      element.forEach(item => {
        var isChecked = item as HTMLInputElement;
        if(isChecked.checked)
        {
          elem?.classList.add(isChecked.value);
        }
        
      });

    }
    else
    {

      var elem = document.getElementById("luz-sabre");
      elem?.classList.remove("verde")
      elem?.classList.remove("azul")
      elem?.classList.remove("amarelo")
      elem?.classList.remove("roxo")
      elem?.classList.remove("vermelho")
      elem?.classList.remove("preto")

      this.ligaSabre = false;

    }
  }


}
