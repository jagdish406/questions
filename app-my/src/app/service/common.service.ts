import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
uers:any="https://dummyjson.com/products/search?q";
isVisible = new Subject<boolean>()

    mocksD:any = [
        {
            questionsName: 'what is your age?',
            questiontypeId: 1,
            options: [
                {   age:13,
                    id: 1
                },
                {   age:29,
                    id: 2
                },
                {   age:30,
                    id: 3
                },
                {   age:20,
                    id: 4
                }
            ]

        },
        {
            questionsName: 'what is your technology?',
            questiontypeId: 2,
            options: [
                {   tech:'javascript',
                },
                {   tech:'java',

                },
                {   tech:'.net',
                },
                {   tech:'pythons'
                }
            ]

        },
        {
            questionsName: 'select gender?',
            questiontypeId: 3,


        },
        {
            questionsName: 'select multiple city is your technology?',
            questiontypeId: 4,
            options: [
                {   tech:'pune',
                },
                {   tech:'mumbai',

                },
                {   tech:'us',
                },
                {   tech:'ca'
                },
                {   tech:'bal',
                },
                {   tech:'del',

                },
                {   tech:'chennai',
                },
                {   tech:'hyd'
                }
            ]

        },
    ]
    constructor(private http: HttpClient) { }

    getServices(){
        return this.http.get(this.mocksD)
    }
    getServicesList(data:any):Observable<any>{
        return this.http.get(this.uers + '=' +data)
    }

}
