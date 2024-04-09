import { useState } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
  /* Challenge 

Form çalışmıyor. Göreviniz, kullanıcı "Gönder "e tıkladığında gönderiye bir yorum ekleyen kontrollü bir form yapmaktır.

    1. Yorum, yorum dizisinin alt kısmında, girilen kullanıcı adı ve yorum metni önceki yorumlar gibi görüntülenecek şekilde görünmelidir. 
       
    2. Yorum, önceki yorumların verilerini içeren array'e eklenmelidir. 
    
    3. Girilen kullanıcı adı kaydedilmeli, ancak kullanıcı onay kutusunu işaretlerse "AnonimKullanıcı" olarak görünmelidir.
    
    4. Kullanıcı formu göndermek için text input elemanına ve comment box elemanına metin girmek zorunda olmalı ve kullanıcı bir yorum gönderdikten sonra elemanlar ve onay kutusu temizlenmelidir. Sayfa yüklendiğinde de boş olmalıdırlar.   
        
    5. Kodunuz tamamen bu dosyanın içinde yer alabilir, ancak isterseniz bazı kısımları taşıyabilirsiniz. 

*/

  const [comments, setComments] = useState(postData.comments)
  const [input, setInput] = useState("")
  const [text, setText] = useState("")
  const [anonim, setAnonim] = useState(false)


const handleInputChange = (e) => {
  setInput(e.target.value)
}
const handleTextChange = (e) => {
  setText(e.target.value)
}
const handleAnonimChange = (e) => {
  setAnonim(e.target.checked)
}

const handleSubmit = (e) => {
  e.preventDefault()

setComments((pre) => (
  [...pre,
{ id: crypto.randomUUID(),
  userName: input,
   isAnonymous: anonim,
  commentText: text }
]))
  setInput("")
  setText("")
  setAnonim(false)
}

  return (
    <div className='post-container'>
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
          className='text-input'
          type='text'
          name='userName'
          required
          onChange={handleInputChange}
          value={input}
          placeholder='Kullanıcı adı girin.'
        />
        <textarea 
        name='comment' 
        onChange={handleTextChange} 
        value={text} 
        required 
        placeholder='Ne düşünüyorsunuz?'
         />
        <label>
          <input 
          checked={anonim} 
          onChange={handleAnonimChange} 
          name='checkbox' 
          className='checkbox' 
          type='checkbox' 
          /> 
          İsimsiz mi göndereyim?
        </label>
        <button>Gönder</button>
      </form>
    </div>
  )
}
