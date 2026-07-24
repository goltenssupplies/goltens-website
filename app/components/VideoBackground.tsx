import fs from "node:fs";
import path from "node:path";
import VideoBackgroundClient from "./VideoBackgroundClient";

const VIDEO_EXTENSION = ".mp4";

function discoverVideos(): string[] {
  const videosDir = path.join(process.cwd(), "public", "videos");

  try {
    return fs
      .readdirSync(videosDir)
      .filter((file) => file.toLowerCase().endsWith(VIDEO_EXTENSION))
      .sort()
      .map((file) => `/videos/${file}`);
  } catch {
    return [];
  }
}

export default function VideoBackground() {
  const videos = discoverVideos();
  return <VideoBackgroundClient videos={videos} />;
}
