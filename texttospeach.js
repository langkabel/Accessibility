let textToSpeach = new SpeechSynthesisUtterance()
let voices = window.speechSynthesis.getVoices()
textToSpeach.voice = voices[4]
textToSpeach.rate = 1.1
textToSpeach.pitch = 1

function speak(text) {
    textToSpeach.text = text
    window.speechSynthesis.speak(textToSpeach)
}
