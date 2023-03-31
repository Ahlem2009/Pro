import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
  registerForm:any = FormGroup;
  submitted = false;
  selectedValue: string = '';
  tags: string[]=[];
  
  constructor( private formBuilder: FormBuilder){}
  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
    }
   
  }
    ngOnInit() {
      //Add form validations
       this.registerForm = this.formBuilder.group({
        ffrom: ['', [Validators.required]],
        fto: ['', [Validators.required]],
        dparting: ['', [Validators.required]],
        returning: ['', [Validators.required]],
        adults: ['', [Validators.required]],
        children: ['', [Validators.required]],
        travel: ['', [Validators.required]],
        roundtripopt: ['', [Validators.required]],
             
        });
    }
    onSelectedValueChange(event: any) {
      this.selectedValue = event.target.value; // Mise à jour de la valeur sélectionnée à chaque changement de sélection
      console.log(this.selectedValue);
      this.tags.push(this.selectedValue); 
      console.log(this.tags);
      // Affichage de la valeur sélectionnée dans la console du navigateur
    }
    supprimerLi(){
     
    }

}
