class person{
    constructor(num){
        console.log(`The details of the person No: ${num} `);
        this.details();
    }
details(){
  let p={Name:'Ramesh Krishnan',
  ContactNo:'8220080388',
  Address:{
  CrAd:'Chennai',
  PrAd:'Trichy'
  },
  HighestDegree: 'PGDM (Marketing)',
  Project: 'Effect of IOT in Coimbatore SMART City',
  Internship:'Brand Management for Aura Illumination',
  WorkExper: '2 year',
  Currentemp:'Sundaram home finance ltd',
  Currentrole:'Assitant Manager-Marketing',
  Certification:'Google digital Unlocked, Google Analytics, Hubspot, SM Study',
  Tools:'Excel, SPSS, Tableau, R',
  Specialization:'Inbound Marketing, Marketing Analytics, Brand Management,Content Marketing, Market Research',
  Hobbies:'Doing Sports, Culinary practices, playing with pets'};
  console.log(JSON.stringify(p));
  }
  };
const det=new person(1);

//Class to Calculate Uber Price

class UberPrice{
    constructor(TotalKM)
    {
        console.log("Uberprice for",TotalKM,'Km');
    }
    Travelbill(TotalKM)
    {
        
        if(TotalKM>50 && TotalKM<100){
            let IncrementAmount=(150+(TotalKM*20)+(150*0.1));
            console.log("Total Uberprice = Rs",IncrementAmount);
         }
     else if(TotalKM>100){
         let IncrementAmount=(150+(TotalKM*15)+(150*0.2));
         console.log("Total Uberprice = Rs",IncrementAmount);
    } 
   }
};
   let TotalKM;
   const Uberbill=new UberPrice(70); 
   Uberbill.Travelbill('70');
   