import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { ResultPage } from '../pages/resultpage';
import { PlaylistPage } from '../pages/playlistpage';
import * as qaTestData from "../test-data/qa/google.json";
import * as stageTestData from "../test-data/stage/google.json";

// Define the structure of the test data
interface TestData {
    skill1: string;
    skill2?: string;
    skill3?: string;
    skill4?: string;
    skill5?: string;
    skill6?: string;
    skill7?: string;
    skill8?: string;
}

let testData: TestData;

test.beforeAll('Running before all tests', () => {
    // Set the testData based on the environment variable
    if (process.env.ENV === 'qa') {
        testData = qaTestData.Module1TestData; // Access Module1TestData
    } else {
        testData = stageTestData.stageTestData; // Access stageTestData
    }
});

test('UI automation test using Playwright', async ({ page }) => {
    const homepage = new HomePage(page);
    const resultpage = new ResultPage(page);
    const playlistpage = new PlaylistPage(page);

    await test.step('Go to URL', async () => {
        await homepage.goto();
    });

    await test.step('Search with keywords', async () => {
        await homepage.searchKeywords(testData.skill1);  // Use skill1 from testData
    });

    await test.step('Click on playlist', async () => {
        await resultpage.clickOnPlaylist();
    });

    await test.step('Click on video', async () => {
        await playlistpage.clickOnVideo();
    });
});

