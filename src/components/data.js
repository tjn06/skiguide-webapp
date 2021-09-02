  export const populateAgeData = [
    {
      titlequestion: "Vilket ålderspann tillhör du?", case: "agecase",
      id: "childsmall", 
      iconText: "0 - 4 år", 
      caseinfo: "Barn mellan 0-4 år rekommenderas att ha lika långa skidor som barnets längd. Detta gäller för både klassisk och fristil.", 
      width: "100px"
    },
    {
      id: "childbig", 
      iconText: "5 - 8 år", 
      caseinfo: "Barn mellan 5-8 år rekommenderas ha skidor som är 10-20 cm längre än sin längd. Detta gäller för både klassisk och fristil.", 
      width: "100px"
    },
    {
      id: "adult",  
      iconText: "9 år >> ", 
      caseinfo: "Barn äldre än 9 år och vuxna utgår ifrån samma rekommendationer. Klicka vidare så ska vi hjälpa dig att hitta en bra längd på skidorna :)", 
      width: "100px"}
  ];

  export const populateStyleData = [
    {
      id: "classic",
      iconText: "Klassisk", 
      caseinfo: "Klassisk skidor tillverkas endast upp till 207 cm.", 
      width: "100px",
      titlequestion: "Vilken skidstil väljer du?", case: "stylecase"
    },
    {
      id: "freestyle", 
      iconText: "Fristil", 
      caseinfo: "Ska du tävla i fristil får dina skidor vara max 10 cm kortare än din kroppslängd.", 
      width: "100px"
    }
  ];

  export const populateRecommendationComp = 
    {
      recommendmessage: "Välj rekommenderad skidlängd(intervall eller fast värde)",
      intervalmessage: "*Du kan ändra längden inom det rekommenderade intervallet",
      intervalmessagenorec: "*Du kan ändra längden inom intervallet",
      notrecommendedmessage: "Du har frångott våra rekommendationer. Längdintervallet som du kan välja från tar inte hänsyn till våra rekommedationer.",
      deviatemessage: "Välj skidlängd utan rekommenadationer",
      btnmessdeviate: "Frångå rekommendationer",
      btnmessrecommended : "Tillbaka till rekommendationer",
      min: "Min:",
      max: "Max:",
      cm: "cm"
    }
  ;

  export const populateConfirmedComp = 
  {
    confirmedstatement: "Du valde skidlängden",
    notrecommended: "Ej enligt våra rekommendatioer",
    recommended: "Enligt våra rekommendationer"
  }
;