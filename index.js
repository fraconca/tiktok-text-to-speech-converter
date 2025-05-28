const { config, createAudioFromText } = require('tiktok-tts')

// Use Cookie Editor to extract the sectionid value
//
// 1 - Instalar https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm
// 2 - Login no TikTok
// 3 - Abrir o Cookie Editor e localizar a tab sectionid e copiar o valor
//     Ex: 339c8f6c40bbff11677a2a7067525268

config('339c8f6c40bbff11677a2a7067525268');

const geraTokenDataAgora = Date.now();

async function tiktokTTS(){

    const valorTTS = 'Parabéns! Você acabou de converter um texto em fala.';
    const caminhoArquivo = `./tts_output/${geraTokenDataAgora}`;
    const speaker = 'pt_male_bueno';
    
    await createAudioFromText(valorTTS, caminhoArquivo, speaker);
    console.log(`${geraTokenDataAgora} gerado com sucesso!`); 

}

tiktokTTS();