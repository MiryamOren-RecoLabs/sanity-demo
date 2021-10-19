import imageUrlBuilder from "@sanity/image-url";
import config from './config'
const builder = imageUrlBuilder(config)

export function imageUrlFor(source) {
    return builder.image(source);
}
  
export function buildImageObj(source) {
    const imageObj = {
      asset: { _ref: source.asset._ref || source.asset._id }
    };
  
    if (source.crop) imageObj.crop = source.crop;
    if (source.hotspot) imageObj.hotspot = source.hotspot;
  
    return imageObj;
}
