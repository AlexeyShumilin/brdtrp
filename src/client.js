
import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "id-client", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
});
