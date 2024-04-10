import { EnvironmentInterface } from "../interfaces/environments.interface";

    // API URL FOR PRODUCTION
    const apiLocalHostURL = 'https://backend.c-pos.co.ke/api';
    const apiProductionURL = 'https://school-managment-backend.vercel.app';
   // export const apiProductionURL = 'https://api.c-pos.co.ke/api';

export const environment: EnvironmentInterface = {


  apiRootUrl: apiProductionURL,
  csrfURL: `${apiProductionURL}/sanctum/csrf-cookie`,

  // apiRootUrl: 'https://backend.c-pos.co.ke/api/',
  production: false,
}
