import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpanadaService } from 'src/app/services/empanada.service';
import { Empanada } from "../../../models/Empanada";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-gestion-empanadas',
    templateUrl: './gestion-empanadas.component.html',
    styleUrls: ['./gestion-empanadas.component.css']
})
export class GestionEmpanadasComponent implements OnInit{

    empanadaForm: FormGroup;
    regexAlfabetico = /^[A-Za-z ]+$/
    tituloFormulario = "Crear empanada"
    txtBoton = "Crear"
    @ViewChild("idEmpanada") idEmpanada!: ElementRef
    listaEmpanadas : Empanada[] = []


    constructor(private fb: FormBuilder, private _empanadaService: EmpanadaService, private router: Router, private idUsuarioRuta: ActivatedRoute) {
        this.empanadaForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            precio: ['', [Validators.required, Validators.min(1000)]],
            sabor: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            tipo: ['', [Validators.required]],
            imagen: ['', [Validators.required]],
        })
    }

    ngOnInit(): void {
        this.obtenerEmpanadas()
    }

    enviarFormulario() {
        if (this.idEmpanada.nativeElement.value == null || this.idEmpanada.nativeElement.value == '') {
            this._empanadaService.postEmpanada(this.empanadaForm.value).subscribe(respuestaApi => {
                Swal.fire({
                    icon: 'success',
                    title: 'Empanada creada',
                    iconColor: '#2ce30b'
                })
                this.obtenerEmpanadas()
                this.idEmpanada.nativeElement.value = ''
                this.empanadaForm.reset()
            })
        } else {
            this._empanadaService.putEmpanada(this.idEmpanada.nativeElement.value, this.empanadaForm.value).subscribe(respuestaApi => {
                Swal.fire({
                    icon: 'success',
                    title: 'Empanada actualizada',
                    iconColor: '#2ce30b'
                })
                this.obtenerEmpanadas()
                this.idEmpanada.nativeElement.value = ''
                this.empanadaForm.reset()
                this.tituloFormulario = "Crear empanada"
            })
        }
    }

    alimentarIdFormulario(id:any) {
        this.idEmpanada.nativeElement.value = id
        this.accionSolicitada()
    }

    accionSolicitada(){
        if (this.idEmpanada.nativeElement.value != null) {
            this.tituloFormulario = "Actualizar empanada"
            this.txtBoton = "Guardar cambios"
            this._empanadaService.getEmpanada(this.idEmpanada.nativeElement.value).subscribe(respuestaApi => {
                this.empanadaForm.setValue({
                    nombre: respuestaApi.nombre,
                    precio: respuestaApi.precio,
                    sabor: respuestaApi.sabor,
                    tipo: respuestaApi.tipo,
                    imagen: respuestaApi.imagen
                })
            }, error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo paso, comuníquese con el administrador',
                    iconColor: '#e61212'
                })
            })
        }
    }

    obtenerEmpanadas() {
        this._empanadaService.getEmpanadas().subscribe(respuestaApi => {
            this.listaEmpanadas = respuestaApi
            console.log(this.listaEmpanadas)
        }, error => {
            console.log(error)
        })
    }

    eliminarEmpanada(id: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar la empanada?',
            text: "Tenga en cuenta que esta acción no sera reversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#11a811',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            iconColor: '#db9a18'
        }).then((result) => {
            if (result.isConfirmed) {
                this._empanadaService.deleteEmpanada(id).subscribe(respuestaApi => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Empanada eliminada',
                        iconColor: '#2ce30b'
                    })
                    this.obtenerEmpanadas()
                }, error => {
                    console.log(error)
                })
            }
        })
    }

}
