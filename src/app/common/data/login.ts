export class Login {
    constructor(public username : string = "",
                public password : string = "",
                public roles : string = "user"){
    }
    //roles= "user" ou "admin" .
}