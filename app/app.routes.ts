import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
    //{path:"/", component:Componente}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);