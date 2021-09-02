export function confirmOrder(obj) {
  return obj;
}

export function generateRecommendation(obj) {
  // const optionalClassic = { lowest: 70, highest: 207, average:  getAverage(70, 207)}
  switch(obj.agecase) {
  case 0:
    return { 
      recommendationlowest: obj.height, recommendationhighest: obj.height, 
      message: "För åldersklasserna 0 - 4 år rekommenderas skidlängden motsvarande barnets längd oavsett om det är klassisk eller fristil.",
      average: getAverage(obj.height, obj.height),
      optionalinterval: departFromRecommendation("free"),
      interval: intervalOrSingleValue((obj.height), (obj.height))
    }
    
  case 1:
    return {
      recommendationlowest: obj.height + 10, 
      recommendationhighest: obj.height + 20,
      message: "Det rekommenderade intervallen för åldersklasserna 5 - 8 år gäller både klassisk och fristil.",
      average: getAverage((obj.height + 10), (obj.height + 20) ),
      optionalinterval: departFromRecommendation("free"),
      interval: intervalOrSingleValue((obj.height + 10), (obj.height + 20))
    }

  case 2:
    if(obj.stylecase === 0) {
      if (obj.height > 187) {
        return { 
          recommendationlowest: 207 , 
          recommendationhighest: 207,
          message:  "Klassiska skidor tillverkas endast upp till längden 207 cm, är du längre än 187 cm rekommenderar vi maxlängden.",
          average: getAverage(207, 207),
          optionalinterval: departFromRecommendation("classic"),
          interval: intervalOrSingleValue(207, 207) 
        };
      } else {
        return {
          recommendationlowest: obj.height + 20, 
          recommendationhighest: obj.height + 20,
          message: "Klassiska skidor tillverkas endast upp till längden 207 cm", 
          average: getAverage((obj.height + 20), (obj.height + 20)),
          optionalinterval: departFromRecommendation("classic"),
          interval: intervalOrSingleValue((obj.height + 20), (obj.height + 20)) 
        };
      }
    }
    if(obj.stylecase === 1) { 
      return { 
        recommendationlowest: obj.height + 10, 
        recommendationhighest: obj.height + 15,
        message: "Ska du tävla i fristil(skate) får skidlängden inte understiga kroppslängden mer än 10 cm, i ditt fall får du som kortast ha " + (obj.height - 10) + " cm långa skidor.",
        average: getAverage((obj.height + 10), (obj.height + 15)),
        optionalinterval: departFromRecommendation("free"),
        interval: intervalOrSingleValue((obj.height + 10), (obj.height + 15)) 
      };
    }
    break;
    
  default:
    return {error: "Något gick fel"}
  }
}


//Helpers
function getAverage(lowest, highest) {
  return Math.floor((highest + lowest) / 2)
}

function intervalOrSingleValue (lowest, highest) {
  if ( lowest ===  highest ) {
    return false
  } else {
    return true
  }
}

  function departFromRecommendation(classicOrFree) { 
    if (classicOrFree === "classic") {
      return {lowest: 70, highest: 207}
    } else if (classicOrFree === "free") {
      return {lowest: 70, highest: 240}
    } 
  }

