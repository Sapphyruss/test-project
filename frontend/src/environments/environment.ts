import { HttpHeaders } from "@angular/common/http";

export class CustomEnvironment {
  production?: boolean = false;
  LEARNXCEL_API_URL: string = 'http://{HOST}:{PORT}/{ROUTE_BASE}';
  headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('learnxcel_access_tk'),
  });
}

export const environment: CustomEnvironment = {
  LEARNXCEL_API_URL: 'http://{HOST}:{PORT}/{ROUTE_BASE}',
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('learnxcel_access_tk'),
  }),
};
