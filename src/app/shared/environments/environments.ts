import { EnvironmentInterface } from "../interfaces/environments.interface";

    // API URL FOR PRODUCTION
    const apiLocalHostURL = 'https://backend.c-pos.co.ke/api';
    const apiProductionURL = 'http://localhost:3000';
   // export const apiProductionURL = 'https://api.c-pos.co.ke/api';

export const environment: EnvironmentInterface = {


  apiRootUrl: apiProductionURL,
  csrfURL: `${apiProductionURL}/sanctum/csrf-cookie`,

  // apiRootUrl: 'https://backend.c-pos.co.ke/api/',
  production: false,
}
