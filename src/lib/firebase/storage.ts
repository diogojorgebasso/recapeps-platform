import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "@/lib/firebase/clientApp";

export async function uploadUserAvatar(
    uid: string,
    blob: Blob
): Promise<string> {
    const avatarRef = ref(storage, `user/${uid}/profile.jpg`);
    await uploadBytes(avatarRef, blob);
    return getDownloadURL(avatarRef);
}
