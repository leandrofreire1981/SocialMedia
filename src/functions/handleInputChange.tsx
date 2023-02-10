export default async function handleFileInputChange(e:any) {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0]) 
    reader.onloadend =  () => {
      return reader.result
    }
    return reader.onloadend
  }