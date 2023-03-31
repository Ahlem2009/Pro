export class Tag{  
  id!: number;
  name!: string;
  }
export class Article{
  
    id?: number ;
    titre:string='';
    ref: string='';
    date_publication : string='';
    abstract:string='';
    tags !:number[];


  }