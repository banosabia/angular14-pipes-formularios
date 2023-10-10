import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoComponent } from './formulario-reactivo.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('FormularioReactivoComponent', () => {
  let component: FormularioReactivoComponent;
  let fixture: ComponentFixture<FormularioReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReactivoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe crear un formulario válido', () => {
    expect(component.usuarioForm).toBeDefined();
    expect(component.usuarioForm instanceof FormGroup).toBeTruthy();
    expect(component.usuarioForm.get('usuario')).toBeDefined();
    expect(component.usuarioForm.get('clave')).toBeDefined();
    expect(component.usuarioForm.get('nombre')).toBeDefined();
    expect(component.usuarioForm.get('email')).toBeDefined();
  });

  it('debe marcar los campos como inválidos cuando estén vacios', () => {
    const usuarioControl = component.usuarioForm.get('usuario');
    const claveControl = component.usuarioForm.get('clave');
    const nombreControl = component.usuarioForm.get('nombre');
    const emailControl = component.usuarioForm.get('email');

    expect(usuarioControl?.invalid).toBeTruthy();
    expect(claveControl?.invalid).toBeTruthy();
    expect(nombreControl?.invalid).toBeTruthy();
    expect(emailControl?.invalid).toBeTruthy();
  });

  it('debe marcar el email como válido con una dirección correcta', () => {
    const emailControl = component.usuarioForm.get('email');
    emailControl?.setValue('test@correo.es');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('debe marcar el email como inválido con una dirección correcta', () => {
    const emailControl = component.usuarioForm.get('email');
    emailControl?.setValue('test@correo');
    expect(emailControl?.invalid).toBeTruthy();
  });  

  it('debe marcar la clave como válida con una longitud de al menos 8', () => {
    const claveControl = component.usuarioForm.get('clave');
    claveControl?.setValue('12345678');
    expect(claveControl?.valid).toBeTruthy();
  });

  it('debe marcar la clave como inválida con una longitud de al menos 8', () => {
    const claveControl = component.usuarioForm.get('clave');
    claveControl?.setValue('1234567');
    expect(claveControl?.invalid).toBeTruthy();
  });

  it('debe llamar a la función enviarFormulario cuando el formulario tiene todos los datos válidos', () => {
    spyOn(component, 'enviarFormulario');

    component.usuarioForm.get('usuario')?.setValue('oscar');
    component.usuarioForm.get('clave')?.setValue('12345678');
    component.usuarioForm.get('nombre')?.setValue('Oscar');
    component.usuarioForm.get('email')?.setValue('oscar@correo.es'); 

    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.enviarFormulario).toHaveBeenCalled();
  });
});
