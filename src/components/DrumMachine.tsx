import { useState } from "react";
const audioFiles = [
    { key: "Q", name: "Cev_H2" },
    { key: "W", name: "Dsc_Oh" },
    { key: "E", name: "Heater-1" },
    { key: "A", name: "Heater-2" },
    { key: "S", name: "Heater-3" },
    { key: "D", name: "Heater-4_1" },
    { key: "Z", name: "Heater-6" },
    { key: "X", name: "Kick_n_Hat" },
    { key: "C", name: "RP4_KICK_1" },
];

const DrumMachine = () => {
    const [displayText, setDisplayText] = useState("");

    const playAudio = (key: string) => {
        const audioElement = document.getElementById(key) as HTMLAudioElement;
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
            setDisplayText(key);
        }
    };


    const handleKeyPress = (event: any) => {
        const key = event.key.toUpperCase();
        if (audioFiles.some((audio) => audio.key === key)) {
            playAudio(key);
        }
    };

    window.addEventListener("keydown", handleKeyPress);

    return (
        <div id="drum-machine" className="container mx-auto mt-10">
            <div id="display" className="text-center mb-4 text-xl">
                {displayText}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {audioFiles.map((audio) => (
                    <button
                        id={`id-${audio.key}`}
                        key={audio.key}
                        className="drum-pad bg-gray-500 p-4 rounded-md text-white"
                        onClick={() => playAudio(audio.key)}
                    >
                        {audio.key}
                        <audio className="clip" id={audio.key} src={`/${audio.name}.mp3`} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DrumMachine