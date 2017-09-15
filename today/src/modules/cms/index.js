import Cosmic from 'cosmicjs'

const config = {
    bucket: {
        slug: 'today-app',
    },
}

/* GET BUCKET */
export const cmsGetBucket = () =>
    Cosmic.getBucket(config, (err, res) => {
        // console.log(res)
    })

/* GET OBJECTS */
export const cmsGetObjects = () =>
    Cosmic.getObjects(config, (err, res) => {
        // console.log(res)
    })

/* GET OBJECTS BY TYPES */
export const cmsGetObjectsByTypes = (type, limit = 5) =>
    Cosmic.getObjectsByType(config, { type_slug: type, limit }, (err, res) => {
        // console.log(response);
    })

/* GET OBJECTS BY SEARCH */
export const cmsGetObjectsBySeatch = value =>
    Cosmic.getObjectsBySearch(
        config,
        { metafield_has_value: value },
        (err, res) => {
            // console.log(response);
        },
    )
