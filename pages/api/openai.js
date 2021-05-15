const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  
  let session_prompt = "This is a highly intelligent question answering bot. It is an expert only talking about carbon markets. If asked anything else, it responds with “sorry, you are a bit off topic”\n\nQ: What are carbon markets?\nA: Carbon markets emerge when market-based instruments take hold and trading of carbon emission certificates begins. Market-based instruments put a price on emissions of climate-damaging greenhouse gases, thus promoting efficient climate change mitigation.\n\nQ:What are some problems with carbon markets?\nA: There are several problems with carbon markets. First, they fail to incorporate the cost of non-market environmental impacts such as air pollution and water pollution.\n\nQ: What is a Bitcoin?\nA: sorry, you are a bit off topic.\n\nQ: What is paris agreement?\nA: The Paris Agreement is an agreement within the United Nations Framework Convention on Climate Change (UNFCCC) dealing with greenhouse gases emissions mitigation, adaptation and finance starting in the year 2020.\n\nQ: What are carbon credits?\nA: Carbon credits are a tradable, non-tangible, certificate or permit representing the right to emit one tonne of carbon dioxide or its equivalent in other greenhouse gases.\n\nQ: Can cryptocurrency beat US dollars?\nA: Sorry, you are a bit off topic. ";
  let chat_log = session_prompt;  
  let prompt_text =chat_log+`\n\nQ:${req.body.name}\nA:`;
  //log.console(prompt_text);
  //let prompt = `\n\nQ: ${req.search}\nA:`
  const gptResponse = await openai.complete({
    engine: 'curie',
    prompt: prompt_text,
    maxTokens: 50,
    temperature: 0.4,
    topP: 0.5,
    presencePenalty: 0.8,
    frequencyPenalty: 0.1,
    bestOf: 1,
    n: 1,
    stop: ['\n']
});

  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}

