import templateConfig from "./templateConfig.js";
import LimitedOfferTemplate from "./limitedOfferTemplate";
import OfferWallTemplate from "./offerWallTemplate";
import ProductTemplate from "./productTemplate";
import ProductTemplate2 from "./productTemplate2";
import StorageLimitTemplate from "./storageLimitTemplate";
import SubscriptionTemplate from "./subscriptionTemplate";
import TrackTemplate from "./trackTemplate";
import TrackTemplate2 from "./trackTemplate2.js";

const templates = [ProductTemplate, ProductTemplate2, TrackTemplate, TrackTemplate2, OfferWallTemplate, StorageLimitTemplate, SubscriptionTemplate, LimitedOfferTemplate];

const TemplateLoader = ({ templateId, baseUrl, images, text, colors }) => {
	const tempConfig = templateConfig[templateId];

	if (!tempConfig) {
		return null;
	}

	const TemplateComponent = templates[templateId];

	return <TemplateComponent baseUrl={baseUrl} images={images} text={text} mainColors={colors} templateName={templateConfig.name} properties={templateConfig.props} />;
};

export default TemplateLoader;
