import { LightningElement } from 'lwc';

export default class QuizAppDeneme extends LightningElement {
  secilenSik={}

  Sorular=[
    {
    id:"Soru1",
    question:"Turkiye'nin baskenti hangisidir?",
    answers:{
    a:"Trabzona",
    b:"Adana",
    c:"Ankara"
    },
    correctAnswer:"c"
    },
    {
    id:"Soru2",
    question:"2021-2022 sezonu sampiyon takimi hangisidir?",
    answers:{
    a:"Trabzonspor",
    b:"Giresunspor",
    c:"Samsunspor"
    },
    correctAnswer:"a"
    },
    {
    id:"Soru3",
    question:"Asagidakilerden hangisi karadeniz bolgesindedir?",
    answers:{
    a:"Istanbul",
    b:"Izmir",
    c:"Trabzon"
    },
    correctAnswer:"c"
    }
    ]
  

    handleChange(event){
      const {name, value} = event.target
      this.secilenSik = {...this.secilenSik, [name]:value}
    }

    submitHandler(event){
      event.preventDefault()
      let correct = this.Sorular.filter(item=>this.secilenSik[item.id] ===
      item.correctAnswer)
      this.correctAnswers = correct.length
      this.isSubmitted = true
      }

      resetHandler(){
      this.secilenSik ={}
      this.correctAnswers=0
      this.isSubmitted = false
      }

}