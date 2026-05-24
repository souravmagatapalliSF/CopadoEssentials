import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //local properties
    fullname = "Sourav Magatapalli"
    title = "Salesforce Engineer"

    a = 10
    b = 20

    @track mydata = {
        Country: 'India',
        Region: 'Asia'
    }

    dataHandler(e){
        this.title = e.target.value;
    }  

    trackDataHandler(e){
        this.mydata.Country = e.target.value;
    }

    get data(){
        return this.a * this.b
    }

}