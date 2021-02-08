export class PropertyDetail {
    id:number = 0;
    address:string = "";
    yearBuilt:number  = 0;
    listPrice:number = 0;
    montlyRent:number = 0;
    grossYield:number = 0;
}
export class PropertyResponse{
    data:PropertyDetail[] = [];
    success:string = "";
    message:string = "";
}