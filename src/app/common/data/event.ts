export class Event{
    constructor(
                public _id: string="?",
                public title1 : string="", 
                public title2 : string="", 
                public img1 : string="?",
                public img2 : string="?",
                public description : string="?",
                public date : string="?",
                public dateDebut:string="",
                public dateFin:string="",
                public lieu : string="?",
                public city : string="",
                public country : string="",
                public email : string="?",
                public siteWeb : string="",
                public tags : string="?",
                public submitAbstract:string=null,
                public register : string=null,
    ){}
}