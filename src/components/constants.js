const RENAME = (theName) => {
    let temp = theName.split("_")
    return temp.map(CAPITALIZE).join(" ")
  }
  
  const CAPITALIZE = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  } 

  export {
      RENAME
  }