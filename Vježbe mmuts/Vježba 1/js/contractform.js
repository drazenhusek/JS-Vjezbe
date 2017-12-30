 function novi(){
    class Contract {
        constructor(name, last, email){
            this._name=name;
            this._last=last;
            this._email=email;
        }
        get name() {
        return this._name;
        }
        get last() {
    	return this._last;
        }
        get email() {
    	return this._email;
  	    }
    }

    class Client extends Contract{
        constructor(name,last,email){
        super(name, last, email);
        }
    }

    class Partner extends Contract{
        constructor(name,last,email, companyname){
            super(name, last, email);
            this._companyname = companyname;
            }
        
    }
    var ime = document.getElementById('firstname').value;
    var prezime = document.getElementById('lastname').value;
    var e_mail = document.getElementById('email').value;
    var tvrtka = document.getElementById("companyname").value;
    var partnercheck = document.getElementById("partner").checked;
    var klijentcheck = document.getElementById("klijent").checked;
   
  

        if(klijentcheck === true && partnercheck === true){
            const irskiklijent = new Client(ime,prezime,e_mail);
            const novipartner = new Partner(ime,prezime,e_mail,tvrtka); 
            document.getElementById("textbox2").value = "Upisali ste se u bazu kao klijent i partner vaši podaci su:"
            +irskiklijent._name+" "+irskiklijent._last+" a mail adresa je "+irskiklijent._email;
            console.log(irskiklijent);
            console.log(novipartner);
        } else if(klijentcheck === true) {
            const irskiklijent = new Client(ime,prezime,e_mail);
            document.getElementById("textbox2").value = "Upisali ste se u bazu kao klijent vaši podaci su:"
            +irskiklijent._name+" "+irskiklijent._last+" a mail adresa je "+irskiklijent._email;
            //console.log(irskiklijent);
        } else if(partnercheck === true){
            const novipartner = new Partner(ime,prezime,e_mail,tvrtka);
            document.getElementById("textbox2").value = `Upisali ste se u bazu kao partner vaši podaci su:ime ${novipartner._name} prezime ${novipartner._last} s email adresom ${novipartner._email} iz tvrtke ${novipartner._companyname}`;
            console.log(novipartner);
        } 
 
    console.log(klijentcheck);
    console.log(partnercheck);
    

    }
    function checkname(){
        var partnercheck = document.getElementById("partner").checked;
        var klijentcheck = document.getElementById("klijent").checked;
        if(klijentcheck === true && partnercheck === true){
            document.getElementById("textbox2").value = "Označen je klijent i partner.";
            document.getElementById("companyname").disabled = false;
        } else if(klijentcheck === true) {
            document.getElementById("companyname").disabled = true;
            document.getElementById("textbox2").value = "Označen je klijent.";

        } else if(partnercheck === true){
            document.getElementById("textbox2").value = "Označen je partner.";
            document.getElementById("companyname").disabled = false;
        } else {
            document.getElementById("textbox2").value = "Pick one Purpose of contracting my.";
            document.getElementById("companyname").disabled = false; 
        }
    }
