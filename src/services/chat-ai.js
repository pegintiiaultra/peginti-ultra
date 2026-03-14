const { HfInference } = require('@huggingface/inference');
const hf = new HfInference('YOUR_HF_TOKEN');
module.exports.chat = async (message) => {
  return await hf.conversation({
    messages: [{ role: 'user', content: message }],
    model: 'microsoft/DialoGPT-medium'
  });
};
