import callImg from "../../../assets/call.png"
import textImg from "../../../assets/text.png"
import videoImg from "../../../assets/video.png"

export const getActionImage = (action) => {
  if (action === "Meetup") {
    return callImg;
  } 
  else if (action === "Text") {
    return textImg;
  } 
  else if (action === "Video") {
    return videoImg;
  } 
  else {
    return null;
  }
}