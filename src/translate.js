const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: process.env.REACT_APP_OPEN_AI_K,
});

const openai = new OpenAIApi(config);

export async function runPrompt(_text) {
    const prompt = `
        Translate in macedonian: ${_text}
        
        Output: {only translation}`;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0.5,
    });

    const text = response.data.choices[0].text;
    console.log(text);

    return(text);
}