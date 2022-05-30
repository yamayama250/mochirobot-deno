export interface Embed {
  title: string,
  fields: Field[]
  image: { url: string }
  footer: { text: string }
}
  
interface Field {
  name: string
  value: string
}
