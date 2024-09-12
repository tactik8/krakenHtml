import { krakenHtml as k } from "./src/index.js";
import { htmlStarRating } from "./src/krakenHtml/src/components/htmlStarRating.js";
import { KrakenWebsite } from "./src/krakenHtml/src/website/krakenWebsite.js";

function test1() {
    let websiteRecord = {
        hasPart: [
            {
                "@type": "WPHeader",
                name: "ConformIT",
                hasPart: [
                    {
                        "@type": "WebPage",
                        name: "Home",
                        url: "/",
                    },
                    {
                        "@type": "WebPage",
                        name: "Products",
                        url: "/products",
                    },
                    {
                        "@type": "WebPage",
                        name: "Services",
                        url: "/services",
                    },
                    {
                        "@type": "WebPage",
                        name: "About Us",
                        url: "/about_us",
                    },
                    {
                        "@type": "WebPage",
                        name: "Contact Us",
                        url: "/contact_us",
                    },
                ],
            },
            {
                "@type": "WPFooter",
                name: "ConformIT",
                hasPart: [
                    {
                        "@type": "WebPage",
                        name: "Privacy",
                        url: "/privacy",
                    },
                    {
                        "@type": "WebPage",
                        name: "Confidentiality",
                        url: "/confidentiality",
                    },
                ],
            },
        ],
        name: "ConformIT",
        organization: {
            legalName: "1000-2000 Inc.",
            brand: {
                logo: {
                    "@type": "ImageObject",
                    contentUrl: "https://placehold.co/600x400",
                },
            },
        },
    };

    let w = new k.Website();
    w.record = websiteRecord;

    if (1 == 0) {
        w.addHeader("Home", "/");
        w.addHeader("Products", "/products");
        w.addHeader("Services", "/services");
        w.addHeader("About Us", "/about_us");
        w.addHeader("Contact Us", "/contact_us");

        w.addFooter("Privacy", "/privacy");
        w.addFooter("Confidentiality", "/confidentiality");

        w.name = "ConformIT";
        w.legalName = "1000-2000 Inc.";
        w.logo = "https://placehold.co/600x400";
    }

    let page = w.newPage("/", "ConformIT");

    let record = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        _heading1: "Heading1",
        _heading2: "Heading2",
        _headingDescription: "Heading Description",
        _headingDate: "2022-02-03",
        name: "thing1",
        headline: "ok, not the best",
        text: "Has better",
        datePublished: "2022-02-02",
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400",
        },
    };

    let webpage = {
        "@type": "WebPage",
        "@id": "abc123",
        name: "Main",
        url: "/",
        hasPart: [],
    };

    let jsonSchema = {
        title: "Person",
        type: "object",
        properties: {
            givenName: {
                type: "array",
                items: {
                    type: "string",
                    tags: ["text"],
                },
            },
            familyName: {
                type: "array",
                items: {
                    type: "string",
                    tags: ["text"],
                },
            },
            jobTitle: {
                type: "array",
                items: {
                    title: "DefinedTerm",
                    type: "object",
                    properties: {
                        name: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                        url: {
                            type: "array",
                            items: {
                                type: "string",
                            },
                        },
                    },
                },
            },
            worksFor: {
                type: "array",
                items: {
                    title: "Organization",
                    type: "object",
                    properties: {
                        name: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                        address: {
                            type: "array",
                            items: {
                                title: "PostalAddress",
                                type: "object",
                                properties: {
                                    "@id": "string",
                                },
                            },
                        },
                        telephone: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                        email: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                        url: {
                            type: "array",
                            items: {
                                type: "string",
                            },
                        },
                    },
                },
            },
            address: {
                type: "array",
                items: {
                    title: "PostalAddress",
                    type: "object",
                    properties: {
                        streetAddress: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                        addressLocality: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                        addressRegion: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                        addressCountry: {
                            type: "array",
                            items: {
                                title: "Country",
                                type: "object",
                                properties: {
                                    "@id": "string",
                                },
                            },
                        },
                        postalCode: {
                            type: "array",
                            items: {
                                type: "string",
                                tags: ["text"],
                            },
                        },
                    },
                },
            },
            email: {
                type: "array",
                items: {
                    type: "string",
                    tags: ["text"],
                },
            },
            telephone: {
                type: "array",
                items: {
                    type: "string",
                    tags: ["text"],
                },
            },
        },
    };

    //webpage.hasPart.push(getTestRecord(0, 0, true, true, true))
    //webpage.hasPart.push(getTestRecord(0, 0, true, true, true))

    let e = document.getElementById("test1");

    let partContent;

    let itemNo = 0;
    let classes = "";
    let block = "";
    page.add(k.form.form(jsonSchema, record));
    for (let p of webpage.hasPart) {
        // Set color
        if (itemNo == 0) {
            //classes = 'bg-dark text-white'
            block = "auto";
        } else if (itemNo % 2 == 1) {
            //classes = 'bg-light'
            block = "auto";
        } else {
            //classes = 'bg-light'
            block = "auto";
        }

        itemNo += 1;

        page.addPart(p, block, classes);

        //content = `<section class="bg-dark text-white"> ${partContent} </section>`
    }

    e.innerHTML = page.content;
    console.log(page.record);
}

function test2() {

    

    
    let record = {
             "@type": "Person",
             "@id": "person_1",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222",
             "hasOccupation": {
                 "@type": "Occupation",
                 "@id": "occupation_1",
                 "name": "occupation_1"
                 },
             "worksFor": {
                 "@type": "Organization",
                 "@id": "organization_1",
                 "name": "test_org_1",
                 "url": "https://www.test.com"
                 }
         }
    //record = null
    let e = document.getElementById("test1");
    let w = new k.Website();
    let page = w.newPage("/", "ConformIT");
    
    let url = 'https://www.test.com'
    let record_type = 'Person'
    let locale = 'en-CA'
    let light = true
    page.add(
        k.form.generic(url, record_type, record, locale, light)
    );

    e.innerHTML = page.content;




    
    
    
}

//test1();
test2();

function getTestRecord(
    recordNo,
    noItems,
    heading = true,
    text = true,
    image = true,
) {
    let record = {
        "@type": "CreativeWork",
        "@id": "id-" + String(recordNo),
        name: "id-" + String(recordNo),
        headline: `Headline ${String(recordNo)} - Example of an headline`,
        text: `Text ${String(recordNo)} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": `Image ${String(recordNo)}`,
            name: `Image ${String(recordNo)}`,
            contentUrl: "https://placehold.co/600x400",
        },
        hasPart: [],
        potentialAction: [
            {
                "@type": "Action",
                "@id": `Action ${String(recordNo)}`,
                name: `Action ${String(recordNo)}`,
                url: "#",
            },
        ],
    };

    for (let i = 0; i < noItems; i++) {
        let rNo = String(recordNo) + "." + String(i);
        let r = getTestRecord(rNo, 0, true, true, true);
        record.hasPart.push(r);
    }

    if (heading == false) {
        record.headline = null;
    }
    if (text == false) {
        record.text = null;
    }
    if (image == false) {
        record.image = null;
    }

    record["_heading1"] = record?.headline;
    record["_headingDecription"] = record?.text;

    return record;
}
