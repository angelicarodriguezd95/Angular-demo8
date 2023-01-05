import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {
  nombre = "Juan Perez";
  edad = 16;
  sueldos = ["Home", "Contacto", "Servicios"];
  usuario = "Angular";
  contraseña = '123456';
  resultado = false;
  mensaje = "";

  Validar(user:string){
    if(user == this.usuario && user == this.contraseña){
      this.resultado = true;
      this.mensaje = 'Usuario correcto';
    }else{
      this.resultado = false;
      this.mensaje = 'Usuario incorrecto';
    }
  }
}
