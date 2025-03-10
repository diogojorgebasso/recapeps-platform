import { getSpecifyOral } from "@/api/getSpecifyOral";
import { useParams } from "react-router";
import { useState, useRef, useEffect } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useAuth } from "@/hooks/useAuth";

export default function Subject() {
    const [title, setTitle] = useState("");
    const router = useParams();
    const { subjectId } = router;

    // Recording and timer states
    const [isRecording, setIsRecording] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180);
    const [showPopup, setShowPopup] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef([]);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (subjectId) {
            getSpecifyOral(subjectId).then(data => {
                console.log(data);
                setTitle(data.title);
            });
        }
    }, [subjectId]);

    // Timer countdown effect
    useEffect(() => {
        if (isRecording && timeLeft > 0) {
            timerRef.current = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (isRecording && timeLeft === 0) {
            stopRecording();
            setShowPopup(true);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [timeLeft, isRecording]);

    const startRecording = async () => {
        audioChunksRef.current = [];
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    audioChunksRef.current.push(e.data);
                }
            };

            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
            setIsRecording(true);
            setTimeLeft(180); // Reset timer to 3 minutes
        } catch (err) {
            console.error("Error accessing microphone:", err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();

            // Stop all audio tracks
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());

            setIsRecording(false);
        }
    };

    const uploadRecording = async () => {
        if (audioChunksRef.current.length === 0) return;

        try {

            const { currentUser } = useAuth()

            const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            const storage = getStorage();
            const fileName = `oral_${subjectId}_${new Date().toISOString()}.webm`;
            const storageRef = ref(storage, `user/${currentUser.uid}/recordings/${fileName}`);

            await uploadBytes(storageRef, blob);
            alert("Recording uploaded successfully!");
            setShowPopup(false);
        } catch (error) {
            console.error("Error uploading recording:", error);
            alert("Failed to upload recording");
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h1>{title}</h1>

            <div className="recording-section">
                <div className="timer">{formatTime(timeLeft)}</div>

                <button
                    className={`record-button ${isRecording ? 'recording' : ''}`}
                    onClick={isRecording ? stopRecording : startRecording}
                >
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                </button>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Recording Complete</h3>
                        <p>Your 3-minute recording has finished. What would you like to do?</p>
                        <div className="popup-buttons">
                            <button onClick={uploadRecording}>Upload Recording</button>
                            <button onClick={() => setShowPopup(false)}>Continue</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}