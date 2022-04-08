const header = require("../pageobjects/headers.js");

describe("Header of webpage", () => {

    it("Go to the webpage", async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

    it("Sign-in as a user", async () => {
        await header.signIn("grantales", "FoCCaCia_Br3ad");
        await browser.pause(2000);
    });

    it("Go to campaign-react webpage", async () => {
        await browser.navigateTo(header.cpageUrl);
    });

    it("Test all links in family tree tab", async () => {
        await header.goToLinkInTreeTab(0);
        await expect(browser).toHaveUrl('https://www.familysearch.org/tree/overview');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInTreeTab(1);
        await expect(browser).toHaveUrl('https://www.familysearch.org/tree/pedigree/landscape/KWNV-3TT');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInTreeTab(2);
        await expect(browser).toHaveUrl('https://www.familysearch.org/tree/person/details/KWNV-3TT');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInTreeTab(3);
        await expect(browser).toHaveUrl('https://www.familysearch.org/search/tree/name');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInTreeTab(4);
        await expect(browser).toHaveUrl('https://www.familysearch.org/tree/following/');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInTreeTab(5);
        await expect(browser).toHaveUrl('https://www.familysearch.org/tree/contributions/changes');
        await browser.navigateTo(header.cpageUrl);
    });

    it("Test all links in the search tab", async () => {
        await header.goToLinkInSearchTab(0);
        await expect(browser).toHaveUrl('https://www.familysearch.org/search/');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInSearchTab(1);
        await expect(browser).toHaveUrl('https://www.familysearch.org/records/images/');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInSearchTab(2);
        await expect(browser).toHaveUrl('https://www.familysearch.org/search/tree/name');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInSearchTab(3);
        await expect(browser).toHaveUrl('https://www.familysearch.org/search/genealogies');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInSearchTab(4);
        await expect(browser).toHaveUrl('https://www.familysearch.org/search/catalog');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInSearchTab(5);
        await expect(browser).toHaveUrl('https://www.familysearch.org/library/books/');
       await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInSearchTab(6);
        await expect(browser).toHaveUrl('https://www.familysearch.org/en/wiki/Main_Page');
        await browser.navigateTo(header.cpageUrl);
    });

    it("Test all of the links in the memories tab", async () => {
        await header.goToLinkInMemoriesTab(0);
        await expect(browser).toHaveUrl('https://www.familysearch.org/memories/');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInMemoriesTab(1);
        await expect(browser).toHaveUrl('https://www.familysearch.org/photos/gallery');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInMemoriesTab(2);
        await expect(browser).toHaveUrl('https://www.familysearch.org/photos/people');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInMemoriesTab(3);
        await expect(browser).toHaveUrl('https://www.familysearch.org/photos/find');
        await browser.navigateTo(header.cpageUrl);
    });

    it("Test links in get involved tab", async () => {
        await header.goToLinkInGetInvolvedTab(0);
        await expect(browser).toHaveUrl('https://www.familysearch.org/getinvolved/');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInGetInvolvedTab(1);
        await expect(browser).toHaveUrl('https://www.familysearch.org/getinvolved/my-opportunities');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInGetInvolvedTab(2);
        await expect(browser).toHaveUrl('https://www.familysearch.org/indexing/my-indexing');
        await browser.navigateTo(header.cpageUrl);
    });

    it("Test links in Activites tab", async () => {
        await header.goToLinkInActivitiesTab(0);
        await expect(browser).toHaveUrl('https://www.familysearch.org/discovery/');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInActivitiesTab(1);
        await expect(browser).toHaveUrl('https://www.familysearch.org/discovery/explore/generations');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInActivitiesTab(2);
        await expect(browser).toHaveUrl('https://www.familysearch.org/en/surname');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInActivitiesTab(3);
        await expect(browser).toHaveUrl('https://www.familysearch.org/discovery/about/year');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInActivitiesTab(4);
        await expect(browser).toHaveUrl('https://www.familysearch.org/discovery/compareme/start');
                await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInActivitiesTab(5);
        await expect(browser).toHaveUrl('https://www.familysearch.org/discovery/recordme/categories');
        await browser.navigateTo(header.cpageUrl);


        await header.goToLinkInActivitiesTab(6);
        await expect(browser).toHaveUrl('https://www.familysearch.org/discovery/picture/select');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInActivitiesTab(7);
        await expect(browser).toHaveUrl('https://www.familysearch.org/discovery/activities/');
        await browser.navigateTo(header.cpageUrl);
    });

    it("Test links in Temple Tab", async () => {
        await header.goToLinkInTempleTab(0)
        await expect(browser).toHaveUrl('https://www.familysearch.org/temple/reservations');
        await browser.navigateTo(header.cpageUrl);
        
        await header.goToLinkInTempleTab(1);
        await expect(browser).toHaveUrl('https://www.familysearch.org/groups/family');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInTempleTab(2);
        await expect(browser).toHaveUrl('https://www.familysearch.org/temple/shared');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInTempleTab(3);
        await expect(browser).toHaveUrl('https://www.familysearch.org/temple/completed');
        await browser.navigateTo(header.cpageUrl);

        await header.goToLinkInTempleTab(4);
        await expect(browser).toHaveUrl('https://www.familysearch.org/temple/ordinances-ready');
        await browser.navigateTo(header.cpageUrl);
    });
});