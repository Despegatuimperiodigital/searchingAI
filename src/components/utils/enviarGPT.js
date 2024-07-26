import OpenAI from "openai";

const enviarGPT =  async (datos) => {
  
    const mensaje = 'Listame 5 sinónimos de ' + datos

    const completion = await openai.chat.completions.create({
      messages: [{
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
        { 
            role: "user", content: mensaje },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
    });

    var formularioHtml = completion.choices[0].message.content 
    console.log(formularioHtml)
        formularioHtml = JSON.parse(formularioHtml)
    
        return formularioHtml
    }
    
    export default enviarGPT;



