const PROGRESS_KEY = "portfolio-progress";
const MAX_PROGRESS = 5;

function getStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage;
}

export function incrementProgress(): number {
  const storage = getStorage();
  if (!storage) return 0;
  
  const stored = storage.getItem(PROGRESS_KEY);
  const currentProgress = stored ? parseInt(stored, 10) : 0;
  
  if (currentProgress < MAX_PROGRESS) {
    const newProgress = currentProgress + 1;
    storage.setItem(PROGRESS_KEY, newProgress.toString());
    return newProgress;
  }
  
  return currentProgress;
}

export function getProgress(): number {
  const storage = getStorage();
  if (!storage) return 0;
  
  const stored = storage.getItem(PROGRESS_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

export function isTipUnlocked(): boolean {
  return getProgress() >= MAX_PROGRESS;
}

