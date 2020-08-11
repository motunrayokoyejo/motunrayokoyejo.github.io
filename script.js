let confessions = [
'I am a new creature in Christ: old things have passed away, behold, all things are new',
'I have died and have been raised with Christ and am now seated in heavenly places.',
'I prosper in everything I put my hand to. I have prosperity in all areas of my life–spiritually, financially, mentally, and socially.',
'As a man thinks in his heart, so is he; therefore, all of my thoughts are positive. I do not allow Satan to use my spirit as a garbage dump by meditating on negative things that he offers me',
'I am purposed that my mouth shall not transgress. I will speak forth the righteousness of God all the day long.',
'I am slow to speak, quick to hear, and slow to anger.',
'I am a doer of the Word. I meditate on the Word all the day long.',
'I don’t have a spirit of fear, but of power and love and a sound mind.',
'I do not judge my brothers and sisters in Christ Jesus after the flesh. I am a spiritual man and am judged by no one.',
'I have compassion and understanding for all people',
'I do all my work excellently and with great prudence–making the most of all of my time.',
'I am creative because the Holy Spirit lives in me.',
'Pain cannot successfully come against my body because Jesus bore all my pain.',
'I do what I say I will do, and I get where I am going on time.',
'All my household are blessed in their deeds: we’re blessed when we come in and when we go out.'
];

function displayConfessions(){
    let index = Math.floor(Math.random() *confessions.length);
    let div = document.querySelector('#quote')
    let quote = `<div class = "card">
     <img src = "icons/favicon.png">
     <p> ${confessions[index]} </p>
     <img src = "icons/favicon.png">
     </div>
     `;
div.innerHTML = quote;
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', displayConfessions);
