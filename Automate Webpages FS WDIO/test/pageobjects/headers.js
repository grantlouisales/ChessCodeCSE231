const Page = require('./page');
const fs = require("fs");
const readline = require("readline"); // https://nodejs.org/api/readline.html <- Url for the library on it

class Header extends Page {

    // Others
    get url() {
        return "https://www.familysearch.org/";
    }
    get cpageUrl() {
        return "https://www.familysearch.org/campaign/temple-ord-ready";
    }
    get signInLink() {
        return $("#signInLink");
    }
    get username() {
        return $("#userName");
    }
    get password() {
        return $("#password");
    }
    get login() {
        return $("#login");
    }

    // helper info
    get helperButton() {
        return $("#fs-subnav--helper-container > button:nth-child(1)");
    }
    get helperUsername() {
        return $("#userName");
    }
    get helperPid() {
        return $("#helperPin");
    }
    get helperSubmitButton() {
        return $("div.sign-in-buttons:nth-child(7) > button:nth-child(2)");
    }

    // Tabs
    get familyTreeButton() {
        return $("#primaryNav > div:nth-child(1) > button");
    }
    get searchButton() {
        return $("#primaryNav > div:nth-child(2) > button");
    }
    get memories() {
        return $("#primaryNav > div:nth-child(3) > button");
    }
    get involved() {
        return $("#primaryNav > div:nth-child(4) > button");
    }
    get activities() {
        return $("#primaryNav > div:nth-child(5) > button");
    }
    get temple() {
        return $("#primaryNav > div.primary-nav-item.nav-menu-parent.nav-temple-link > button");
    }
    get footer() {
        return $("#global-footer > section.footer-left > nav > ul.footer-links-row1");
    }

    async signIn(username, password) {
        await browser.waitUntil(() => this.signInLink.isClickable());
        await this.signInLink.click();

        await browser.waitUntil(() => this.username.isExisting());
        await this.username.setValue(username);

        await browser.waitUntil(() => this.password.isExisting());
        await this.password.setValue(password);

        await browser.waitUntil(() => this.login.isClickable());
        await this.login.click();
    }

    async helperSignIn(username, pid) {
        await browser.waitUntil(() => this.helperButton.isClickable());
        await this.helperButton.click();

        await browser.waitUntil(() => this.helperUsername.isExisting());
        await this.helperUsername.setValue(username);

        await browser.waitUntil(() => this.helperPid.isExisting());
        await this.helperPid.setValue(pid);

        await browser.waitUntil(() => this.helperSubmitButton.isClickable());
        await this.helperSubmitButton.click();
    }

    async goToLinkInTreeTab(linkNum) {
        const links = $("#frontier-tree").$$("li a"); // Make sure you select the correct parent to call a $$ tag on in.

        await browser.waitUntil(() => this.familyTreeButton.isClickable());
        await this.familyTreeButton.click();

        // 0 -> Overview
        // 1 -> Tree
        // 2 -> Person
        // 3 -> Find
        // 4 -> Following
        // 5 -> My contributions

        switch (linkNum) {
            case 0:
                // Pick first link
                await browser.waitUntil(() => links[0].isClickable());
                await links[0].click();
                break;

            case 1:
                // Pick second link
                await browser.waitUntil(() => links[1].isClickable());
                await links[1].click();
                break;

            case 2:
                // Pick third link
                await browser.waitUntil(() => links[2].isClickable());
                await links[2].click();
                break;

            case 3:
                // Pick fourth link
                await browser.waitUntil(() => links[3].isClickable());
                await links[3].click();
                break;

            case 4:
                // Pick fourth link
                await browser.waitUntil(() => links[4].isClickable());
                await links[4].click();
                break;

            case 5:
                // Pick fifth link
                await browser.waitUntil(() => links[5].isClickable());
                await links[5].click();
                break;

            default:
                // Just console an error
                console.log("You did not pick a viable option");
        }
    }

    async goToLinkInSearchTab(linkNum) {
        const links = $("#search").$$("li a"); // Make sure you select the correct parent to call a $$ tag on in.

        await browser.waitUntil(() => this.searchButton.isClickable());
        await this.searchButton.click();

        // 0 -> Records
        // 1 -> Images
        // 2 -> Family Tree
        // 3 -> Genealogies
        // 4 -> Catalog
        // 5 -> Books
        // 6 -> Research Wiki

        switch (linkNum) {
            case 0:
                // Pick first link
                await browser.waitUntil(() => links[0].isClickable());
                await links[0].click();
                break;

            case 1:
                // Pick second link
                await browser.waitUntil(() => links[1].isClickable());
                await links[1].click();
                break;

            case 2:
                // Pick third link
                await browser.waitUntil(() => links[2].isClickable());
                await links[2].click();
                break;

            case 3:
                // Pick fourth link
                await browser.waitUntil(() => links[3].isClickable());
                await links[3].click();
                break;

            case 4:
                // Pick fourth link
                await browser.waitUntil(() => links[4].isClickable());
                await links[4].click();
                break;

            case 5:
                // Pick fifth link
                await browser.waitUntil(() => links[5].isClickable());
                await links[5].click();
                break;

            case 6:
                // Pick sixth link
                await browser.waitUntil(() => links[6].isClickable());
                await links[6].click();
                break;

            default:
                // Just console an error
                console.log("You did not pick a viable option");
        }
    }

    async goToLinkInMemoriesTab(linkNum) {
        const links = $("#memories").$$("li a"); // Make sure you select the correct parent to call a $$ tag on in.

        await browser.waitUntil(() => this.memories.isClickable());
        await this.memories.click();

        // 0 -> Overview
        // 1 -> Gallery
        // 2 -> People
        // 3 -> Find

        switch (linkNum) {
            case 0:
                // Pick first link
                await browser.waitUntil(() => links[0].isClickable());
                await links[0].click();
                break;

            case 1:
                // Pick second link
                await browser.waitUntil(() => links[1].isClickable());
                await links[1].click();
                break;

            case 2:
                // Pick third link
                await browser.waitUntil(() => links[2].isClickable());
                await links[2].click();
                break;

            case 3:
                // Pick fourth link
                await browser.waitUntil(() => links[3].isClickable());
                await links[3].click();
                break;

            default:
                // Just console an error
                console.log("You did not pick a viable option");
        }
    }

    async goToLinkInGetInvolvedTab(linkNum) {
        const links = $("#get-involved").$$("li a"); // Make sure you select the correct parent to call a $$ tag on in.

        await browser.waitUntil(() => this.involved.isClickable());
        await this.involved.click();

        // 0 -> Overview
        // 1 -> Web Indexing
        // 2 -> Find a Project
        // 3 -> Help Center

        switch (linkNum) {
            case 0:
                // Pick first link
                await browser.waitUntil(() => links[0].isClickable());
                await links[0].click();
                break;

            case 1:
                // Pick second link
                await browser.waitUntil(() => links[1].isClickable());
                await links[1].click();
                break;

            case 2:
                // Pick third link
                await browser.waitUntil(() => links[2].isClickable());
                await links[2].click();
                break;

            case 3:
                // Pick fourth link
                await browser.waitUntil(() => links[3].isClickable());
                await links[3].click();
                break;

            default:
                // Just console an error
                console.log("You did not pick a viable option");
        }
    }

    async goToLinkInActivitiesTab(linkNum) {
        const links = $("#activities").$$("li a"); // Make sure you select the correct parent to call a $$ tag on in.

        await browser.waitUntil(() => this.activities.isClickable());
        await this.activities.click();

        // 0 -> All Activites
        // 1 -> Where Am I From?
        // 2 -> Surname Origins
        // 3 -> All About Me
        // 4 -> Compare-a-Face
        // 5 -> Record My Story
        // 6 -> Picture My Heritage
        // 7 -> In-Home Activites

        switch (linkNum) {
            case 0:
                // Pick first link
                await browser.waitUntil(() => links[0].isClickable());
                await links[0].click();
                break;

            case 1:
                // Pick second link
                await browser.waitUntil(() => links[1].isClickable());
                await links[1].click();
                break;

            case 2:
                // Pick third link
                await browser.waitUntil(() => links[2].isClickable());
                await links[2].click();
                break;

            case 3:
                // Pick fourth link
                await browser.waitUntil(() => links[3].isClickable());
                await links[3].click();
                break;

            case 4:
                // Pick fourth link
                await browser.waitUntil(() => links[4].isClickable());
                await links[4].click();
                break;

            case 5:
                // Pick fifth link
                await browser.waitUntil(() => links[5].isClickable());
                await links[5].click();
                break;

            case 6:
                // Pick sixth link
                await browser.waitUntil(() => links[6].isClickable());
                await links[6].click();
                break;

            case 7:
                // Pick seventh link
                await browser.waitUntil(() => links[7].isClickable());
                await links[7].click();
                break;

            default:
                // Just console an error
                console.log("You did not pick a viable option");
        }
    }

    async goToLinkInTempleTab(linkNum) {
        // Only works if you are signed in 
        const links = $("#temple").$$("li a");

        await browser.waitUntil(() => this.temple.isClickable());
        await this.temple.click();

        // 0 -> My Reservations
        // 1 -> Family Groups
        // 2 -> Shared
        // 3 -> Completed
        // 4 -> Ordinances Ready

        switch (linkNum) {
            case 0:
                // Pick first link
                await browser.waitUntil(() => links[0].isClickable());
                await links[0].click();
                break;

            case 1:
                // Pick second link
                await browser.waitUntil(() => links[1].isClickable());
                await links[1].click();
                break;

            case 2:
                // Pick third link
                await browser.waitUntil(() => links[2].isClickable());
                await links[2].click();
                break;

            case 3:
                // Pick fourth link
                await browser.waitUntil(() => links[3].isClickable());
                await links[3].click();
                break;

            case 4:
                // Pick fourth link
                await browser.waitUntil(() => links[4].isClickable());
                await links[4].click();
                break;

            default:
                // Just console an error
                console.log("You did not pick a viable option");
        }
    }

    async goToLinkInFooter(linkNum) {
        const links = $("#global-footer > section.footer-left > nav > ul.footer-links-row1").$$("li a");

        await browser.waitUntil(() => this.footer.isExisting());

        // 0 -> About
        // 1 -> Volunteer
        // 2 -> Blog
        // 3 -> Find Ancestors
        // 4 -> Site Map
        // 5 -> DNA
        // 6 -> Solutions Gallery

        switch (linkNum) {
            case 0:
                // Pick first link
                await browser.waitUntil(() => links[0].isClickable());
                await links[0].click();
                break;

            case 1:
                // Pick second link
                await browser.waitUntil(() => links[0].isClickable());
                await links[1].click();
                break;

            case 2:
                // Pick third link
                await browser.waitUntil(() => links[2].isClickable());
                await links[2].click();
                break;

            case 3:
                // Pick third link
                await browser.waitUntil(() => links[3].isClickable());
                await links[3].click();
                break;

            case 4:
                // Pick third link
                await browser.waitUntil(() => links[4].isClickable());
                await links[4].click();
                break;

            case 5:
                // Pick third link
                await browser.waitUntil(() => links[5].isClickable());
                await links[5].click();
                break;

            default:
                // Just console an error
                console.log("You did not pick a viable option");
        }
    }

    async processLineByLine() {
        const fileStream = fs.createReadStream("names.txt");

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            console.log(`${line}`);
        }
    }

    async appendToFile(filename, content) {
        // flags: 'a' == append || 'w' == write || 'a+' == same as append but will create new file if there isn't one already
        let stream = fs.createWriteStream(filename, {
            flags: "a+"
        })
        stream.write(content + "\n");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open() {
    //     return super.open('');
    // }
}

module.exports = new Header();