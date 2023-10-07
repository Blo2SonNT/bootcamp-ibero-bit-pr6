import { inject } from "@angular/core";
import { CanMatchFn } from '@angular/router';
import { UsuarioService } from "src/app/services/usuario.service";

export const autenticacionGuard: CanMatchFn = (route, segments) => {
    const _usuarioService = inject(UsuarioService)
    return _usuarioService.estaLogueado()
};
