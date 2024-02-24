class PasswordCheck{
    #upperletter
    #lowerletter
    #symbolsletter
    #numbersletter
    #password
    #passwordsize

    constructor(size){
        this.#upperletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.#lowerletter = "abcdefghijklmnopqrstuvwxyz";
        this.#symbolsletter = "!@#$%&*()_+=";
        this.#numbersletter = "1234567890";
        this.#password = '';
        this.#passwordsize = size;
    }

    getUpperLetter(){
        return this.#upperletter[this.getRandom(this.#upperletter.length)];
    }

    getLowerLetter(){
         return this.#lowerletter[this.getRandom(this.#lowerletter.length)];
    }

    getRandom(max){
        return Math.floor(Math.random() * max);
    }

    getSymbolsLetter(){
        return this.#symbolsletter[this.getRandom(this.#symbolsletter.length)];
    }

    getNumberLetter(){
        return this.#numbersletter[this.getRandom(this.#numbersletter.length)];
    }



    getPassword(){
        let upper = document.getElementById("upper");
        let lower = document.getElementById("lower");
        let numbers = document.getElementById("numbers");
        let symbols = document.getElementById("symbols");

        if (upper.checked){
            this.#password += this.getUpperLetter();
        }
        if (lower.checked){
            this.#password += this.getLowerLetter();
        }
        if (numbers.checked){
            this.#password += this.getNumberLetter();
        }
        if (symbols.checked){
            this.#password += this.getSymbolsLetter();
        }

        if (upper.checked || lower.checked || numbers.checked || symbols.checked){
            return this.createpassword();
            
        }
    }

    createpassword(){
        while(this.#password.length < parseInt(this.#passwordsize)){
            const randomize = this.getRamdomPass()
            if (upper.checked && randomize === 0){
                this.#password += this.getUpperLetter();
            }
            if (lower.checked && randomize === 1){
                this.#password += this.getLowerLetter();
            }
            if (numbers.checked && randomize === 2){
                this.#password += this.getNumberLetter();
            }
            if (symbols.checked && randomize === 3){
                this.#password += this.getSymbolsLetter();
            }
        }
        return this.#password
    }


    getRamdomPass(){
        return Math.floor(Math.random() * 4);

    }


    setStrength(){
        let i = 0;
        if (this.#password.length >= 6) {
            i += 1;
        }
        if (this.#password.length >= 8) {
            i += 1;
        }
    
        const symbolsinclude = /[!@#$%&*()_+=]/;
        if (symbolsinclude.test(this.#password)) {
            i += 1;
        }
    
        const lowerinclude = /[a-z]/;
        if (lowerinclude.test(this.#password)) {
            i += 1;
        }
        const upperinclude = /[A-Z]/;
        if (upperinclude.test(this.#password)) {
            i += 1;
        }

        const numbersinclude = /[0-9]/;
        if (numbersinclude.test(this.#password)) {
            i += 1;
        }
    
        let strength = '';
        let mark = document.getElementById('level')
        let all = document.querySelectorAll('div.icons')
           
        if (i <= 2) {
            all[0].classList.add('very-weak');
            mark.textContent = 'VERY WEAK';
            strength = 'very-weak';
        } else if (i <= 4) {
            all[0].classList.add('weak');
            all[1].classList.add('weak');
            mark.textContent = 'WEAK';
            strength = 'weak';
        } else if (i <= 5) {
            all[0].classList.add('medium');
            all[1].classList.add('medium');
            all[2].classList.add('medium');
            mark.textContent = 'MEDIUM';
            strength = 'medium';
        }else {
            all[0].classList.add('strong');
            all[1].classList.add('strong');
            all[2].classList.add('strong');
            all[3].classList.add('strong');
            mark.textContent = 'STRONG';
            strength = 'strong';
        }
    
        return strength;
    }


    cleanBar(){
        let all = document.querySelectorAll('div.icons');
        all.forEach((elemento)=>{
            elemento.classList.remove('strong','medium','weak','very-weak');
        })

    }
}

export default PasswordCheck;